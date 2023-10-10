import React, { HTMLProps } from 'react';

import NextIcon from '@/assets/icons/next.svg';
import PrevIcon from '@/assets/icons/prev.svg';
import { Errors } from '@/constants/Errors';
import { Month } from '@/constants/Month';

import { StyledArrow, StyledMonthSelector } from './styled';

interface Props extends HTMLProps<HTMLDivElement> {
    year: number;
    month: number;
    onChangeMonth: (year: number, month: number) => void;
}

export const MonthSelector = ({
    year,
    month,
    onChangeMonth,
    ...props
}: Props) => {
    const monthName = Month[month - 1] || Errors.WrongMonth;

    const handlePrev = () => {
        if (month - 1 === 0) onChangeMonth(year - 1, 12);
        else onChangeMonth(year, month - 1);
    };

    const handleNext = () => {
        if (month + 1 === 13) onChangeMonth(year + 1, 1);
        else onChangeMonth(year, month + 1);
    };

    return (
        <StyledMonthSelector {...props}>
            <StyledArrow src={PrevIcon} alt="prev month" onClick={handlePrev} />
            {monthName} {year}
            <StyledArrow src={NextIcon} alt="next month" onClick={handleNext} />
        </StyledMonthSelector>
    );
};
