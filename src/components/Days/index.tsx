import React, { useCallback, useMemo } from 'react';

import { CalendarCell } from '@/components/CalendarCell';
import { setSelectedDate } from '@/store/actions';
import { useDatePicker } from '@/hooks/useDatePicker';
import { CalendarUtils } from '@/utils/CalendarUtils';
import { DateUtils } from '@/utils/DateUtils';

import { StyledDays } from './styled';

interface Props {
    range?: [Date, Date];
}

export const Days = ({ range }: Props) => {
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

    const week = useMemo(() => DateUtils.getDaysOfWeek(americanStandard), [americanStandard]);

    const days = useMemo(
        () => DateUtils.getMonthDays(currentYear, currentMonth, americanStandard),
        [currentYear, currentMonth, americanStandard],
    );

    const selectedDate = useMemo(
        () => new Date(selectedYear!, selectedMonth! - 1, selectedDay!),
        [selectedYear, selectedMonth, selectedDay],
    );

    const handleClick = useCallback(
        (year: number, month: number, day: number) => () => dispatch(setSelectedDate({ year, month, day })),
        [],
    );

    return (
        <StyledDays>
            {week.map((day) => (
                <CalendarCell key={day}>{day}</CalendarCell>
            ))}
            {days.map(({ day: dayCell, month: monthCell, year: yearCell }) => (
                <CalendarCell
                    onClick={handleClick(yearCell, monthCell, dayCell)}
                    key={`${dayCell}-${monthCell}-${yearCell}`}
                    active={DateUtils.isSameDays(
                        new Date(yearCell, monthCell - 1, dayCell),
                        selectedDate,
                    )}
                    disabled={monthCell !== currentMonth}
                    type={CalendarUtils.getTypeCalendarDay(range, selectedDate)}
                >
                    {dayCell}
                </CalendarCell>
            ))}
        </StyledDays>
    );
};
