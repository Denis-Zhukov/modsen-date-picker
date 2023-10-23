import React, { useCallback, useMemo } from 'react';

import { useDatePicker } from '@/hooks/useDatePicker';
import { setSelectedDate } from '@/store/actions';
import { CalendarBodyProps } from '@/typing';
import { CalendarUtils } from '@/utils/CalendarUtils';
import { DateUtils } from '@/utils/DateUtils';

import { StyledYear, StyledYears } from './styled';

export const Years = ({ min, max, range, onDateClick }: CalendarBodyProps) => {
    const {
        state: { currentYear, selectedYear, selectedMonth, selectedDay },
        dispatch,
    } = useDatePicker();

    const years = useMemo(() => DateUtils.getYears(currentYear), [currentYear]);

    const handleClick = useCallback(
        (year: number) => () => {
            const newDate = new Date(year, 1, 1);
            if (min && newDate < min) return;
            if (max && newDate > max) return;
            dispatch(
                setSelectedDate({
                    year,
                    month: selectedMonth!,
                    day: selectedDay!,
                }),
            );
            onDateClick?.(year, selectedMonth!, selectedDay!);
        },
        [selectedMonth, selectedDay, min, max],
    );

    return (
        <StyledYears>
            {years.map((year) => (
                <StyledYear
                    key={year}
                    active={year === selectedYear}
                    onClick={handleClick(year)}
                    type={CalendarUtils.getTypeCalendarYear(
                        range,
                        new Date(year, 1, 1),
                    )}
                >
                    {year}
                </StyledYear>
            ))}
        </StyledYears>
    );
};
