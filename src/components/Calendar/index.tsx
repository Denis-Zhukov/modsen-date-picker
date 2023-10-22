import type { HTMLProps } from 'react';
import React, { useEffect } from 'react';

import { CalendarDisplays } from '@/components/CalendarDisplays';
import { Selector } from '@/components/Selector';
import { calendarBodies } from '@/constants/CalendarBodyByType';
import { useDatePicker } from '@/hooks/useDatePicker';
import { setCurrentDate } from '@/store';

import { StyledCalendar } from './styled';

export interface Props extends HTMLProps<HTMLDivElement> {
    range?: [Date, Date];
}

export const Calendar = ({
    range,
    ...props
}: Props) => {
    const {
        state: {
            type,
            selectedYear,
            selectedMonth,
            selectedDay,
        },
        dispatch,
    } = useDatePicker();

    const CalendarBody = calendarBodies[type];

    useEffect(() => {
        if (selectedYear && selectedMonth && selectedDay) {
            dispatch(setCurrentDate({
                year: selectedYear,
                month: selectedMonth,
                day: selectedDay,
            }));
        }
    }, [selectedYear, selectedMonth, selectedYear, type]);

    return (
        <StyledCalendar {...props}>
            <CalendarDisplays />
            <Selector />
            <CalendarBody range={range} />
        </StyledCalendar>
    );
};
