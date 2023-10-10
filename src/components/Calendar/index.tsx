import React, { HTMLProps, useMemo } from 'react';

import { CalendarDay } from '@/components/CalendarDay';
import { MonthSelector } from '@/components/MonthSelector';
import { DayOfWeek } from '@/constants/DayOfWeek';
import { DateUtils } from '@/utils/DateUtils';

import { StyledCalendar, StyledDays } from './styled';

interface Props extends HTMLProps<HTMLDivElement>{
    month?: number;
    year?: number;
    onChangeMonth: (year: number, month: number) => void;
}

const now = new Date();

export const Calendar = ({
    month = now.getMonth() + 1,
    year = now.getFullYear(),
    onChangeMonth,
    ...props
}: Props) => {
    const days = useMemo(
        () => DateUtils.getMonthDays(year, month),
        [year, month],
    );

    return (
        <StyledCalendar {...props}>
            <MonthSelector
                month={month}
                year={year}
                onChangeMonth={onChangeMonth}
            />
            <StyledDays>
                {Object.values(DayOfWeek).map((day) => (
                    <CalendarDay day={day} key={day} />
                ))}
                {days.map(({ day, month: monthDay, year: yearDay }) => (
                    <CalendarDay
                        day={day}
                        key={`${day}-${monthDay}-${yearDay}`}
                        disabled={month !== monthDay}
                    />
                ))}
            </StyledDays>
        </StyledCalendar>
    );
};
