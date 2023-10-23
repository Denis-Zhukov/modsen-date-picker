import React, { useCallback } from 'react';

import { StyledMonthCell, StyledMonths } from '@/components/Months/styled';
import { Month } from '@/constants/Month';
import { monthStringToNumber } from '@/constants/MonthStringToNumber';
import { useDatePicker } from '@/hooks/useDatePicker';
import { setSelectedDate } from '@/store/actions';
import { CalendarBodyProps } from '@/typing';
import { CalendarUtils } from '@/utils/CalendarUtils';

export const Months = ({ range, onDateClick }: CalendarBodyProps) => {
    const {
        state: {
            currentYear, selectedMonth, selectedDay, selectedYear,
        },
        dispatch,
    } = useDatePicker();
    const months: string[] = Object.keys(Month).filter((month) => Number.isNaN(+month));

    const handleClick = useCallback(
        (year: number, month: number) => () => {
            dispatch(
                setSelectedDate({
                    year,
                    month: month + 1,
                    day: selectedDay!,
                }),
            );
            onDateClick?.(year, month + 1, selectedDay!);
        },
        [selectedDay],
    );

    return (
        <StyledMonths>
            {months.map((month) => (
                <StyledMonthCell
                    key={month}
                    onClick={handleClick(
                        currentYear,
                        monthStringToNumber[month],
                    )}
                    active={
                        selectedMonth === monthStringToNumber[month] + 1
                        && currentYear === selectedYear
                    }
                    type={CalendarUtils.getTypeCalendarMonth(
                        range,
                        new Date(currentYear, monthStringToNumber[month], 1),
                    )}
                >
                    {month}
                </StyledMonthCell>
            ))}
        </StyledMonths>
    );
};
