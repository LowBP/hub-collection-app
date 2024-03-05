import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Tooltip from './Tooltip';

describe('Tooltip component', () => {
    test('displays tooltip content on hover', () => {
        render(<Tooltip content="Hello, world!">Hover me</Tooltip>);

        // Find the element to hover over
        const hoverElement = screen.getByText('Hover me');

        // Simulate mouse hover event
        fireEvent.mouseEnter(hoverElement);

        // Assert that the tooltip content is displayed
        expect(screen.getByRole('tooltip')).toHaveTextContent('Hello, world!');

        // Simulate mouse leave event
        fireEvent.mouseLeave(hoverElement);

        // Assert that the tooltip is no longer visible
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
});
