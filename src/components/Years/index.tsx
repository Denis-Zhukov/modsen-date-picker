import React, { useCallback, useMemo } from 'react';

import { setSelectedDate } from '@/components/DatePicker/store/actions';
import { useDatePicker } from '@/hooks/useDatePicker';
import { DateUtils } from '@/utils/DateUtils';

import { StyledYear, StyledYears } from './styled';

export const Years = () => {
    const {
        state: {
            currentYear,
            selectedYear,
            selectedMonth,
            selectedDay,
        },
        dispatch,
    } = useDatePicker();

    const years = useMemo(() => DateUtils.getYears(currentYear), [currentYear]);

    const handleClick = useCallback((year: number) => () => dispatch(setSelectedDate({
        year,
        month: selectedMonth!,
        day: selectedDay!,
    })), [selectedMonth, selectedDay]);

    return (
        <StyledYears>{
            years.map((year) => (
                <StyledYear
                    key={year}
                    active={year === selectedYear}
                    onClick={handleClick(year)}
                >{year}
                </StyledYear>
            ))
        }
        </StyledYears>
    );
};
