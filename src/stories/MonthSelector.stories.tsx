import { Meta, StoryObj } from '@storybook/react';
import React, { useCallback, useState } from 'react';

import { MonthSelector } from '@/components/MonthSelector';

const meta: Meta<typeof MonthSelector> = {
    component: MonthSelector,
    title: 'Month',
    argTypes: { month: { control: { min: 1, max: 12 } } },
};

export default meta;
type Story = StoryObj<typeof MonthSelector>;

const MonthSelectorWithState = () => {
    const [year, setYear] = useState(2023);
    const [month, setMonth] = useState(10);

    const handleChangeMonthYear = useCallback(
        (newYear: number, newMonth: number) => {
            setYear(newYear);
            setMonth(newMonth);
        },
        [],
    );

    return (
        <MonthSelector
            year={year}
            month={month}
            onChangeMonth={handleChangeMonthYear}
        />
    );
};

export const Primary: Story = {
    render: () => <MonthSelectorWithState />,
};
