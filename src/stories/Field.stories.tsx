import { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useMemo, useReducer } from 'react';

import { Field, Props as FieldProps } from '@/components/Field';
import { calendarBodies } from '@/constants/CalendarBodyByType';
import { TypeOfCalendar } from '@/constants/TypeOfCalendar';
import { DatePickerContext } from '@/contexts/DatePickerContext';
import { withOpenCalendar } from '@/hoc/withOpenCalendar';
import {
    datePickerReducer,
    setCurrentDate,
    setSelectedDate,
    State,
} from '@/store';

const meta: Meta<typeof Field> = {
    title: 'Field',
    component: Field,
};

export default meta;

interface FieldWithExtraPropsForDefault extends FieldProps {
    year?: number;
    month?: number;
    day?: number;
}

export const Default: StoryObj<FieldWithExtraPropsForDefault> = {
    name: 'default',
    render: ({
        year, month, day, ...args
    }) => {
        const [state, dispatch] = useReducer(datePickerReducer, {
            selectedYear: null,
            selectedMonth: null,
            selectedDay: null,
            currentYear: year,
            currentMonth: month,
        } as State);

        useEffect(() => {
            dispatch(
                setSelectedDate({
                    year,
                    month,
                    day,
                }),
            );
        }, [year, month, day]);

        const store = useMemo(
            () => ({
                state,
                dispatch,
            }),
            [state, dispatch],
        );

        return (
            <DatePickerContext.Provider value={store}>
                <Field {...args} />
            </DatePickerContext.Provider>
        );
    },
    args: {
        year: 2023,
        month: 10,
        day: 9,
    },
};

interface FieldWithExtraPropsForWithCalendar extends FieldProps {
    currentYear: number;
    currentMonth: number;
    selectedYear: number;
    selectedMonth: number;
    selectedDay: number;
    americanStandard: boolean;
    minDate?: Date;
    maxDate?: Date;
}

const FieldWithCalendar = withOpenCalendar(Field);
export const WithCalendar: StoryObj<FieldWithExtraPropsForWithCalendar> = {
    name: 'with Calendar',
    render: ({
        currentYear,
        currentMonth,
        selectedMonth,
        selectedYear,
        selectedDay,
        americanStandard,
        minDate,
        maxDate,
        ...args
    }) => {
        const [state, dispatch] = useReducer(datePickerReducer, {
            selectedYear,
            selectedMonth,
            selectedDay,
            currentYear,
            currentMonth,
            currentDay: 1,
            type: TypeOfCalendar.Days,

            americanStandard,
        } as State);

        useEffect(() => {
            dispatch(
                setSelectedDate({
                    year: selectedYear,
                    month: selectedMonth,
                    day: selectedDay,
                }),
            );
        }, [selectedYear, selectedMonth, selectedDay]);

        useEffect(() => {
            dispatch(
                setCurrentDate({
                    year: currentYear,
                    month: currentMonth,
                }),
            );
        }, [currentYear, currentMonth]);

        const store = useMemo(
            () => ({
                state,
                dispatch,
            }),
            [state, dispatch],
        );

        return (
            <DatePickerContext.Provider value={store}>
                <FieldWithCalendar
                    {...args}
                    min={minDate as number & Date}
                    max={maxDate as number & Date}
                    render={(type) => {
                        const CalendarBody = calendarBodies[type];
                        return <CalendarBody />;
                    }}
                />
            </DatePickerContext.Provider>
        );
    },
    args: {
        currentYear: 2023,
        currentMonth: 6,
        selectedYear: 2023,
        selectedMonth: 6,
        selectedDay: 21,
        americanStandard: false,
    },
    argTypes: {
        minDate: { control: { type: 'date' } },
        maxDate: { control: { type: 'date' } },
    },
};
