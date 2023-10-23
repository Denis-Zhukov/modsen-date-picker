import type { HTMLProps, ReactNode } from 'react';
import React, { useEffect } from 'react';

import { CalendarDisplays } from '@/components/CalendarDisplays';
import { Selector } from '@/components/Selector';
import { TypeOfCalendar } from '@/constants/TypeOfCalendar';
import { useDatePicker } from '@/hooks/useDatePicker';
import { setCurrentDate } from '@/store';

import { StyledCalendar } from './styled';

export interface Props extends HTMLProps<HTMLDivElement> {
    render: (type: TypeOfCalendar) => ReactNode;
}

export const Calendar = ({ render, ...props }: Props) => {
    const {
        state: {
            type, selectedYear, selectedMonth, selectedDay,
        },
        dispatch,
    } = useDatePicker();

    useEffect(() => {
        if (selectedYear && selectedMonth && selectedDay) {
            dispatch(
                setCurrentDate({
                    year: selectedYear,
                    month: selectedMonth,
                    day: selectedDay,
                }),
            );
        }
    }, [selectedYear, selectedMonth, selectedYear, type]);

    return (
        <StyledCalendar {...props}>
            <CalendarDisplays />
            <Selector />
            {render(type)}
        </StyledCalendar>
    );
};
