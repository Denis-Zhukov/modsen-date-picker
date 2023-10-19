import type { HTMLProps } from 'react';
import React, { useCallback, useMemo } from 'react';

import { CalendarDay } from '@/components/CalendarDay';
import { setSelectedDate } from '@/components/DatePicker/store/actions';
import { MonthSelector } from '@/components/MonthSelector';
import { DayOfWeek } from '@/constants/DayOfWeek';
import { useDatePicker } from '@/hooks/useDatePicker';
import { CalendarUtils } from '@/utils/CalendarUtils';
import { DateUtils } from '@/utils/DateUtils';

import { StyledCalendar, StyledDays } from './styled';

export interface Props extends HTMLProps<HTMLDivElement> {
    month?: number;
    year?: number;
    onChangeMonth: (year: number, month: number) => void;
    americanStandard?: boolean;
    range?: [Date, Date];
}

export const Calendar = ({
    americanStandard = false,
    range,
    ...props
}: Props) => {
    const {
        state: {
            currentYear,
            currentMonth,
            selectedDay,
            selectedMonth,
            selectedYear,
        },
        dispatch,
    } = useDatePicker();

    const days = useMemo(
        () => DateUtils.getMonthDays(currentYear, currentMonth, americanStandard),
        [currentYear, currentMonth, americanStandard],
    );

    const week = useMemo(() => {
        const daysOfWeek = Object.values(DayOfWeek);
        if (americanStandard) daysOfWeek.unshift(daysOfWeek.pop()!);
        return daysOfWeek;
    }, [americanStandard]);

    const handleClickDay = useCallback(
        (year: number, month: number, day: number) => () => {
            if (
                selectedYear === year
                && selectedMonth === month
                && selectedDay === day
            ) dispatch(setSelectedDate({}));
            else dispatch(setSelectedDate({ year, month, day }));
        },
        [selectedYear, selectedMonth, selectedDay],
    );

    return (
        <StyledCalendar {...props}>
            <MonthSelector />
            <StyledDays>
                {week.map((day) => (
                    <CalendarDay day={day} key={day} />
                ))}
                {days.map(
                    ({ day: dayCell, month: monthCell, year: yearCell }) => (
                        <CalendarDay
                            onClick={handleClickDay(
                                yearCell,
                                monthCell,
                                dayCell,
                            )}
                            day={dayCell}
                            key={`${dayCell}-${monthCell}-${yearCell}`}
                            active={DateUtils.isSameDays(
                                new Date(yearCell, monthCell - 1, dayCell),
                                new Date(
                                    selectedYear!,
                                    selectedMonth! - 1,
                                    selectedDay!,
                                ),
                            )}
                            disabled={monthCell !== currentMonth}
                            type={CalendarUtils.getTypeCalendarDay(
                                range,
                                new Date(
                                    selectedYear!,
                                    selectedMonth! - 1,
                                    selectedDay!,
                                ),
                            )}
                        />
                    ),
                )}
            </StyledDays>
        </StyledCalendar>
    );
};
