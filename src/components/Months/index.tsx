import React, { useCallback } from 'react';

import { setSelectedDate } from '@/components/DatePicker/store/actions';
import { StyledMonthCell, StyledMonths } from '@/components/Months/styled';
import { Month } from '@/constants/Month';
import { monthStringToNumber } from '@/constants/MonthStringToNumber';
import { useDatePicker } from '@/hooks/useDatePicker';

export const Months = () => {
    const {
        state: {
            currentYear, selectedMonth, selectedDay, selectedYear,
        },
        dispatch,
    } = useDatePicker();
    const months: string[] = Object.keys(Month).filter((month) => Number.isNaN(+month));

    const handleClick = useCallback(
        (year: number, month: number) => () => dispatch(
            setSelectedDate({
                year,
                month: month + 1,
                day: selectedDay!,
            }),
        ),
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
                >
                    {month}
                </StyledMonthCell>
            ))}
        </StyledMonths>
    );
};
