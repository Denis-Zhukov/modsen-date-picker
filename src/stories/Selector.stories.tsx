import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Selector } from '@/components/Selector';

const meta: Meta<typeof Selector> = {
    component: Selector,
    title: 'Month',
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Default: Story = {
    name: 'default',
    render: (args) => <Selector {...args} />,
};
