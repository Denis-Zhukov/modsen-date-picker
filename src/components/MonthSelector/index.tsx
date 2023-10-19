import React, { HTMLProps } from 'react';

import NextIcon from '@/assets/icons/next.svg';
import PrevIcon from '@/assets/icons/prev.svg';
import { setCurrentDate } from '@/components/DatePicker/store/actions';
import { Errors } from '@/constants/Errors';
import { Month } from '@/constants/Month';
import { useDatePicker } from '@/hooks/useDatePicker';

import { StyledArrow, StyledMonthSelector } from './styled';

interface Props extends HTMLProps<HTMLDivElement> {}

export const MonthSelector = ({ ...props }: Props) => {
    const {
        dispatch,
        state: { currentMonth, currentYear },
    } = useDatePicker();
    const monthName = Month[currentMonth - 1] || Errors.WrongMonth;

    const handlePrev = () => {
        if ((currentMonth - 1) < 1) dispatch(setCurrentDate({ year: currentYear - 1, month: 12 }));
        else dispatch(setCurrentDate({ year: currentYear, month: currentMonth - 1 }));
    };

    const handleNext = () => {
        if ((currentMonth + 1) > 12) dispatch(setCurrentDate({ year: currentYear + 1, month: 1 }));
        else dispatch(setCurrentDate({ year: currentYear, month: currentMonth + 1 }));
    };

    return (
        <StyledMonthSelector {...props}>
            <StyledArrow src={PrevIcon} alt="prev month" onClick={handlePrev} />
            {monthName} {currentYear}
            <StyledArrow src={NextIcon} alt="next month" onClick={handleNext} />
        </StyledMonthSelector>
    );
};
