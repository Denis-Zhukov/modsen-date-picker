import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { DatePicker } from '@/components/DatePicker';

const meta: Meta<typeof DatePicker> = {
    component: DatePicker,
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
    render: () => <DatePicker />,
};
