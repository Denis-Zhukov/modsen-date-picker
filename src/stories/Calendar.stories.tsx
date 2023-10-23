import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useMemo, useReducer } from 'react';

import { Calendar } from '@/components/Calendar';
import { Props as FieldProps } from '@/components/Field';
import { calendarBodies } from '@/constants/CalendarBodyByType';
import { TypeOfCalendar } from '@/constants/TypeOfCalendar';
import { DatePickerContext } from '@/contexts/DatePickerContext';
import { withAddingTasks } from '@/hoc/withAddingTasks';
import {
    datePickerReducer,
    setCurrentDate,
    setSelectedDate,
    State,
} from '@/store';

const meta: Meta<typeof Calendar> = {
    title: 'Calendar',
    component: Calendar,
    argTypes: {},
};

export default meta;

interface CalendarWithExtraProps extends FieldProps {
    currentYear: number;
    currentMonth: number;
    selectedYear: number;
    selectedMonth: number;
    selectedDay: number;
    americanStandard: boolean;
}

export const Default: StoryObj<CalendarWithExtraProps> = {
    name: 'default',
    render: ({
        currentYear,
        currentMonth,
        selectedMonth,
        selectedYear,
        selectedDay,
        americanStandard,
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
                <Calendar
                    {...args}
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
};

export const CalendarWithRange: StoryObj<CalendarWithExtraProps & { range: [Date, Date] }> = {
    name: 'with range',
    render: ({
        currentYear,
        currentMonth,
        selectedMonth,
        selectedYear,
        selectedDay,
        range,
        americanStandard,
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
                <Calendar
                    {...args}
                    render={(type) => {
                        const CalendarBody = calendarBodies[type];
                        return <CalendarBody range={range} />;
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
        range: [new Date(2023, 3, 2), new Date(2023, 5, 13)],
    },
};

export const CalendarWithAddingTask: StoryObj<CalendarWithExtraProps> = {
    name: 'with adding task',
    render: ({
        currentYear,
        currentMonth,
        selectedMonth,
        selectedYear,
        selectedDay,
        americanStandard,
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
                <Calendar
                    {...args}
                    render={(type) => {
                        const CalendarBody = withAddingTasks(
                            calendarBodies[type],
                        );
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
};

export const CalendarWithMinMax: StoryObj<CalendarWithExtraProps & {
    min: any,
    max: any
}> = {
    name: 'with min&max date',
    render({
        currentYear,
        currentMonth,
        selectedMonth,
        selectedYear,
        selectedDay,
        americanStandard,
        min,
        max,
        ...args
    }) {
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
                <Calendar
                    {...args}
                    render={(type) => {
                        const CalendarBody = calendarBodies[type];
                        return <CalendarBody min={min} max={max} />;
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
        min: new Date(2023, 5, 1),
        max: new Date(2023, 5, 20),
    },
    argTypes: {
        min: { control: { type: 'date' } },
        max: { control: { type: 'date' } },
    },
};
