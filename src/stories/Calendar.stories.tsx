import { Meta, StoryObj } from '@storybook/react';
import React, { useCallback, useState } from 'react';

import { Calendar } from '@/components/Calendar';

const meta: Meta<typeof Calendar> = {
    component: Calendar,
    argTypes: {
        year: { control: { type: 'number' } },
        month: { control: { type: 'number', min: 1, max: 12 } },
    },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const CalendarWithState = () => {
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
        <Calendar
            year={year}
            month={month}
            onChangeMonth={handleChangeMonthYear}
        />
    );
};

export const Primary: Story = {
    name: 'Preview calendar',
    render: (args) => <Calendar {...args} />,
    args: {
        year: 2023,
        month: 10,
    },
};

export const Interactive: StoryObj<typeof CalendarWithState> = {
    name: 'Interactive calendar',
    render: () => <CalendarWithState />,
};
