import React from 'react';
import { render } from '@testing-library/react';
import StateBadge from './StateBadge';
import { HUB_STATE } from '../../types/Hub';

describe('StateBadge component', () => {
    it('renders correctly for DEMO state', () => {
        const { getByText, getByTestId } = render(<StateBadge label="DEMO" state={HUB_STATE.DEMO} />);

        const badge = getByTestId('state-badge');
        expect(badge).toHaveClass('bg-orange-100 text-orange-800');

        const dot = getByTestId('dot');
        expect(dot).toHaveClass('bg-orange-500');

        expect(getByText('DEMO')).toBeInTheDocument();
    });

    it('renders correctly for ACTIVE state', () => {
        const { getByText, getByTestId } = render(<StateBadge label="ACTIVE" state={HUB_STATE.ACTIVE} />);

        const badge = getByTestId('state-badge');
        expect(badge).toHaveClass('bg-green-100 text-green-800');

        const dot = getByTestId('dot');
        expect(dot).toHaveClass('bg-green-500');

        expect(getByText('ACTIVE')).toBeInTheDocument();
    });

    it('renders correctly for INACTIVE state', () => {
        const { getByText, getByTestId } = render(<StateBadge label="INACTIVE" state={HUB_STATE.INACTIVE} />);

        const badge = getByTestId('state-badge');
        expect(badge).toHaveClass('bg-red-100 text-red-800');

        const dot = getByTestId('dot');
        expect(dot).toHaveClass('bg-red-500');

        expect(getByText('INACTIVE')).toBeInTheDocument();
    });

    it('renders correctly for default state', () => {
        const { getByText, getByTestId } = render(<StateBadge label="Default" state={999} />);

        const badge = getByTestId('state-badge');
        expect(badge).toHaveClass('bg-orange-100 text-orange-800');

        const dot = getByTestId('dot');
        expect(dot).toHaveClass('bg-orange-500');

        expect(getByText('Default')).toBeInTheDocument();
    });
});
