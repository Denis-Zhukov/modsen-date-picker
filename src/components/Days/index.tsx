import React, { useCallback, useMemo } from 'react';

import { CalendarCell } from '@/components/CalendarCell';
import { useDatePicker } from '@/hooks/useDatePicker';
import { setSelectedDate } from '@/store/actions';
import { CalendarBodyProps } from '@/typing';
import { CalendarUtils } from '@/utils/CalendarUtils';
import { DateUtils } from '@/utils/DateUtils';

import { StyledDays } from './styled';
import { logDOM } from '@storybook/testing-library';

export const Days = ({ min, max, range, onDateClick }: CalendarBodyProps) => {
    const {
        state: {
            currentYear,
            currentMonth,
            selectedDay,
            selectedMonth,
            selectedYear,
            americanStandard,
        },
        dispatch,
    } = useDatePicker();

    const week = useMemo(
        () => DateUtils.getDaysOfWeek(americanStandard),
        [americanStandard],
    );

    const days = useMemo(
        () =>
            DateUtils.getMonthDays(currentYear, currentMonth, americanStandard),
        [currentYear, currentMonth, americanStandard],
    );

    const selectedDate = useMemo(
        () => new Date(selectedYear!, selectedMonth! - 1, selectedDay!),
        [selectedYear, selectedMonth, selectedDay],
    );

    const handleClick = useCallback(
        (year: number, month: number, day: number) => () => {
            const newDate = new Date(year, month - 1, day);
            if (min && newDate < min) return;
            if (max && newDate > max) return;
            dispatch(setSelectedDate({ year, month, day }));
            onDateClick?.(year, month, day);
        },
        [days, min, max],
    );

    return (
        <StyledDays>
            {week.map((day) => (
                <CalendarCell key={day}>{day}</CalendarCell>
            ))}
            {days.map(({ day: dayCell, month: monthCell, year: yearCell }) => {
                const date = new Date(yearCell, monthCell - 1, dayCell);
                return (
                    <CalendarCell
                        onClick={handleClick(yearCell, monthCell, dayCell)}
                        key={`${dayCell}-${monthCell}-${yearCell}`}
                        active={DateUtils.isSameDays(date, selectedDate)}
                        disabled={monthCell !== currentMonth}
                        type={CalendarUtils.getTypeCalendarDay(range, date)}
                    >
                        {dayCell}
                    </CalendarCell>
                );
            })}
        </StyledDays>
    );
};
