import type { HTMLProps } from 'react';
import React from 'react';

import { CalendarDisplays } from '@/components/CalendarDisplays';
import { MonthSelector } from '@/components/MonthSelector';
import { calendarBodies } from '@/constants/CalendarBodyByType';
import { useDatePicker } from '@/hooks/useDatePicker';

import { StyledCalendar } from './styled';

export interface Props extends HTMLProps<HTMLDivElement> {
    range?: [Date, Date];
}

export const Calendar = ({ range, ...props }: Props) => {
    const {
        state: { type },
    } = useDatePicker();

    const CalendarBody = calendarBodies[type];

    return (
        <StyledCalendar {...props}>
            <MonthSelector />
            <CalendarBody range={range}/>
            <CalendarDisplays />
        </StyledCalendar>
    );
};
