import { useArgs } from '@storybook/client-api';
import { Meta, StoryObj } from '@storybook/react';
import React, { useCallback } from 'react';

import { MonthSelector } from '@/components/MonthSelector';

const meta: Meta<typeof MonthSelector> = {
    component: MonthSelector,
    title: 'Month',
    argTypes: { month: { control: { min: 1, max: 12 } } },
};

export default meta;
type Story = StoryObj<typeof MonthSelector>;

export const Default: Story = {
    name: 'default',
    render: (args) => {
        const [, updateArgs] = useArgs();

        const handleChangeMonthYear = useCallback(
            (year: number, month: number) => {
                updateArgs({ year, month });
            },
            [],
        );

        return (
            <MonthSelector {...args} onChangeMonth={handleChangeMonthYear} />
        );
    },
    args: {
        year: 2023,
        month: 10,
    },
};
