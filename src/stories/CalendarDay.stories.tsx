import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CalendarDay } from '@/components/CalendarDay';

const meta: Meta<typeof CalendarDay> = {
    component: CalendarDay,
    title: 'Calendar day',
    argTypes: {
        type: {
            control: { type: 'select' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof CalendarDay>;

export const Primary: Story = {
    render: (args) => <CalendarDay {...args} />,
    args: {
        day: 1,
        type: 'default',
        active: false,
        disabled: false,
    },
};
