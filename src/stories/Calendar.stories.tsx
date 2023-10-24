import { useArgs } from '@storybook/preview-api';
import type {
    Meta,
    ReactRenderer,
    StoryContext,
    StoryObj,
} from '@storybook/react';
import React, {
    ReactNode, useEffect, useMemo, useReducer,
} from 'react';

import { Calendar } from '@/components/Calendar';
import { Props as FieldProps } from '@/components/Field';
import { calendarBodies } from '@/constants/CalendarBodyByType';
import { TypeOfCalendar } from '@/constants/TypeOfCalendar';
import { DatePickerContext } from '@/contexts/DatePickerContext';
import { withAddingTasks } from '@/hoc/withAddingTasks';
import {
    datePickerReducer, setAmericanStandard,
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
    withHolidays: boolean;
    range?: [Date, Date];
    render?: (
        type: TypeOfCalendar,
        withHolidays?: boolean,
        holidays?: Date[],
    ) => ReactNode;
    minDate: Date;
    maxDate: Date;
}

const commonRender: (
    args: CalendarWithExtraProps,
    context: StoryContext<CalendarWithExtraProps>,
) => (ReactRenderer & {
    T: CalendarWithExtraProps;
})['storyResult'] = ({
    withHolidays,
    currentYear,
    currentMonth,
    selectedMonth,
    selectedYear,
    selectedDay,
    americanStandard,
    range,
    render,
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
        americanStandard,
        type: TypeOfCalendar.Days,
    } as State);

    const [, updateArgs] = useArgs();

    useEffect(() => {
        dispatch(
            setSelectedDate({
                year: selectedYear,
                month: selectedMonth,
                day: selectedDay,
            }),
        );
    }, [
        selectedYear,
        selectedMonth,
        selectedDay,
    ]);

    useEffect(() => {
        updateArgs({
            selectedYear: state.selectedYear,
            selectedMonth: state.selectedMonth,
            selectedDay: state.selectedDay,
        });
    }, [state.selectedYear, state.selectedMonth, state.selectedDay]);

    useEffect(() => {
        dispatch(
            setCurrentDate({
                year: currentYear,
                month: currentMonth,
            }),
        );
    }, [currentYear, currentMonth]);

    useEffect(() => {
        updateArgs({
            currentYear: state.currentYear,
            currentMonth: state.currentMonth,
        });
    }, [state.currentYear, state.currentMonth]);

    useEffect(() => {
        dispatch(setAmericanStandard(americanStandard));
    }, [americanStandard]);

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
                withHolidays={withHolidays}
                render={
                    render
                    ?? ((type, withHolidays) => {
                        const CalendarBody = calendarBodies[type];
                        return (
                            <CalendarBody
                                withHolidays={withHolidays}
                                range={range}
                                min={minDate}
                                max={maxDate}
                            />
                        );
                    })
                }
            />
        </DatePickerContext.Provider>
    );
};

export const Default: StoryObj<CalendarWithExtraProps> = {
    name: 'default',
    render: commonRender,
    args: {
        currentYear: 2023,
        currentMonth: 6,
        selectedYear: 2023,
        selectedMonth: 6,
        selectedDay: 21,
        americanStandard: false,
    },
};

export const CalendarWithRange: StoryObj<
    CalendarWithExtraProps & { range: [Date, Date] }
> = {
    name: 'with range',
    render: commonRender,
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
    render: commonRender,
    args: {
        currentYear: 2023,
        currentMonth: 6,
        selectedYear: 2023,
        selectedMonth: 6,
        selectedDay: 21,
        americanStandard: false,
        render: (type, withHolidays) => {
            const CalendarBody = withAddingTasks(calendarBodies[type]);
            return <CalendarBody withHolidays={withHolidays} />;
        },
    },
};

export const CalendarWithMinMax: StoryObj<
    CalendarWithExtraProps & {
        min: Date;
        max: Date;
    }
> = {
    name: 'with min&max date',
    render: commonRender,
    args: {
        currentYear: 2023,
        currentMonth: 6,
        selectedYear: 2023,
        selectedMonth: 6,
        selectedDay: 21,
        americanStandard: false,
        minDate: new Date(2023, 5, 1),
        maxDate: new Date(2023, 5, 20),
    },
    argTypes: {
        minDate: { control: { type: 'date' } },
        maxDate: { control: { type: 'date' } },
    },
};
