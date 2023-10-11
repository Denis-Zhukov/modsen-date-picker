import React, { HTMLProps, useMemo } from 'react';

import { CalendarDay } from '@/components/CalendarDay';
import { MonthSelector } from '@/components/MonthSelector';
import { DayOfWeek } from '@/constants/DayOfWeek';
import { DateUtils } from '@/utils/DateUtils';

import { CalendarUtils } from '@/utils/CalendarUtils';
import { StyledCalendar, StyledDays } from './styled';

export interface Props extends HTMLProps<HTMLDivElement> {
    month?: number;
    year?: number;
    onChangeMonth: (year: number, month: number) => void;
    americanStandard?: boolean;
    range?: [Date, Date];
}

const now = new Date();

export const Calendar = ({
    month = now.getMonth() + 1,
    year = now.getFullYear(),
    onChangeMonth,
    americanStandard = false,
    range,
    ...props
}: Props) => {
    const days = useMemo(
        () => DateUtils.getMonthDays(year, month, americanStandard),
        [year, month, americanStandard],
    );

    const week = useMemo(() => {
        const daysOfWeek = Object.values(DayOfWeek);
        if (americanStandard) daysOfWeek.unshift(daysOfWeek.pop()!);
        return daysOfWeek;
    }, [americanStandard]);

    return (
        <StyledCalendar {...props}>
            <MonthSelector
                month={month}
                year={year}
                onChangeMonth={onChangeMonth}
            />
            <StyledDays>
                {week.map((day) => (
                    <CalendarDay day={day} key={day} />
                ))}
                {days.map(({ day, month: monthDay, year: yearDay }) => (
                    <CalendarDay
                        day={day}
                        key={`${day}-${monthDay}-${yearDay}`}
                        disabled={month !== monthDay}
                        type={CalendarUtils.getTypeCalendarDay(
                            range,
                            new Date(yearDay, monthDay - 1, day),
                        )}
                    />
                ))}
            </StyledDays>
        </StyledCalendar>
    );
};
