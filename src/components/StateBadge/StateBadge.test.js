import React from 'react';
import { render } from '@testing-library/react';
import StateBadge from './StateBadge';
import { HUB_STATE } from '../../types/Hub';

describe('StateBadge component', () => {
    it('renders with label and color for DEMO state', () => {
        const { getByText, getByTestId } = render(<StateBadge label="Test Label" state={HUB_STATE.DEMO} />);
        const labelElement = getByText('Test Label');
        const dotElement = getByTestId('dot');

        expect(labelElement).toBeInTheDocument();
        expect(dotElement).toHaveClass('bg-orange-500');
    });

    it('renders with label and color for ACTIVE state', () => {
        const { getByText, getByTestId } = render(<StateBadge label="Test Label" state={HUB_STATE.ACTIVE} />);
        const labelElement = getByText('Test Label');
        const dotElement = getByTestId('dot');

        expect(labelElement).toBeInTheDocument();
        expect(dotElement).toHaveClass('bg-green-500');
    });

    it('renders with label and color for INACTIVE state', () => {
        const { getByText, getByTestId } = render(<StateBadge label="Test Label" state={HUB_STATE.INACTIVE} />);
        const labelElement = getByText('Test Label');
        const dotElement = getByTestId('dot');

        expect(labelElement).toBeInTheDocument();
        expect(dotElement).toHaveClass('bg-red-500');
    });

    it('renders with default color for unknown state', () => {
        const { getByText, getByTestId } = render(<StateBadge label="Test Label" state={null} />);
        const labelElement = getByText('Test Label');
        const dotElement = getByTestId('dot');

        expect(labelElement).toBeInTheDocument();
        expect(dotElement).toHaveClass('bg-orange-500'); // Default color
    });
});
