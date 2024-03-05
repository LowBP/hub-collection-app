import React from 'react';
import { render, screen, act } from '@testing-library/react';
import HubCard from './HubCard';

const mockHub = {
    slug: 'test-slug',
    state: 'active',
    displayName: 'Test Hub',
    type: 'Test Type',
    location: 'Test Location',
    stage: 'pilot',
    unassignedQuantityTotal: 100,
    referenceQuantityUnit: 'kg',
    category: 'Test Category',
    cardDescription: 'Test Description',
    cardImage: {
        directLink: 'https://via.placeholder.com/200'
    },
    formattedTotalRecoveredQuantity: 200,
    recoveredQuantityUnit: 'kg',
    parentHubBadgeClass: 'test-badge'
};

describe('HubCard component', () => {
    it('renders hub card correctly', () => {
        render(<HubCard hub={mockHub} />);

        // Assert elements are present
        expect(screen.getByText(/Test Hub/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Type/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Location/i)).toBeInTheDocument();
        expect(screen.getByText(/Unassigned Plastic/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Category/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
        expect(screen.getByText(/Stage/i)).toBeInTheDocument();
        expect(screen.getByText(/Unassigned Plastic/i)).toBeInTheDocument();
    });

    it('loads image and displays status', async () => {
        act(() => {
            render(<HubCard hub={mockHub} />);
        });

        // Image should initially be not loaded
        expect(screen.getByAltText('bg-img')).not.toBeVisible();

        // Image loading
        const image = screen.getByAltText('bg-img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://via.placeholder.com/200');

        // Trigger onLoad event for the image
        act(() => {
            const loadImageEvent = new Event('load');
            Object.defineProperty(image, 'complete', { writable: true, value: true });
            image.dispatchEvent(loadImageEvent);
        });

        // Image loaded
        expect(screen.getByText(/Collected STATUS/i)).toBeInTheDocument();
    });

    it('navigates to detail link on click', async () => {
        render(<HubCard hub={mockHub} />);

        const detailLink = screen.getByRole('link');
        expect(detailLink).toBeInTheDocument();

        expect(detailLink.getAttribute('href')).toContain('undefined/test-slug');

    });
});
