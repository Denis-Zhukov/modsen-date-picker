import React, { HTMLProps } from 'react';

import NextIcon from '@/assets/icons/next.svg';
import PrevIcon from '@/assets/icons/prev.svg';
import { Errors } from '@/constants/Errors';
import { Month } from '@/constants/Month';
import { useDatePicker } from '@/hooks/useDatePicker';
import { useGetSelectorHandlers } from '@/hooks/useGetSelectorHandlers';

import { StyledArrow, StyledMonthSelector } from './styled';

interface Props extends HTMLProps<HTMLDivElement> {
}

export const MonthSelector = ({ ...props }: Props) => {
    const {
        state: {
            currentMonth,
            currentYear,
            type,
        },
    } = useDatePicker();
    const monthName = Month[currentMonth - 1] || Errors.WrongMonth;

    const [handlePrev, handleNext] = useGetSelectorHandlers();

    return (
        <StyledMonthSelector {...props}>
            <StyledArrow src={PrevIcon} alt="prev month" onClick={handlePrev} />
            {type === 'days' && monthName}{' '}
            {(type === 'months' || type === 'days') && currentYear}
            {type === 'years'
                && `${Math.floor(currentYear / 10) * 10 - 1} - ${Math.floor(currentYear / 10) * 10 + 10}`}
            <StyledArrow src={NextIcon} alt="next month" onClick={handleNext} />
        </StyledMonthSelector>
    );
};
