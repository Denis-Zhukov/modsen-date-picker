import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CalendarCell } from '@/components/CalendarCell';

const meta: Meta<typeof CalendarCell> = {
    component: CalendarCell,
    title: 'Calendar cell',
    argTypes: {
        type: {
            control: { type: 'select' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof CalendarCell>;

export const Primary: Story = {
    name: 'default',
    render: (args) => <CalendarCell {...args} />,
    args: {
        children: 1,
        type: 'default',
        active: false,
        disabled: false,
    },
};
