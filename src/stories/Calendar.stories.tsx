import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Calendar } from '@/components/Calendar';

const meta: Meta<typeof Calendar> = {
    title: 'Calendar',
    component: Calendar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
    name: 'default',
    render: (args) => <Calendar {...args} />,
};

export const CalendarWithRange: Story = {
    name: 'with range',
    render: (args) => <Calendar {...args} />,
    args: {
        range: [new Date(2023, 9, 1), new Date(2023, 9, 30)],
    },
};
