import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { MonthSelector } from '@/components/MonthSelector';

const meta: Meta<typeof MonthSelector> = {
    component: MonthSelector,
    title: 'Month',
};

export default meta;
type Story = StoryObj<typeof MonthSelector>;

export const Default: Story = {
    name: 'default',
    render: (args) => <MonthSelector {...args} />,
};
