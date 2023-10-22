import type { ChangeEvent, HTMLProps } from 'react';
import React, { useCallback, useId } from 'react';

import CalendarIcon from '@/assets/icons/calendar.svg';
import ClearIcon from '@/assets/icons/clear.svg';
import { useDatePicker } from '@/hooks/useDatePicker';
import { resetDate, setSelectedDate } from '@/store';
import { DateUtils } from '@/utils/DateUtils';

import {
    StyledCalendarWrapper,
    StyledClearIcon,
    StyledIconLabel,
    StyledInput,
} from './styled';

export interface Props extends HTMLProps<HTMLDivElement> {
    onIconClick?: () => void;
    placeholder?: string;
}

export const Field = ({
    placeholder,
    onIconClick,
    ...props
}: Props) => {
    const {
        state: {
            selectedYear,
            selectedMonth,
            selectedDay,
        },
        dispatch,
    } = useDatePicker();
    const calendarId = useId();

    const handleReset = useCallback(() => {
        dispatch(resetDate());
    }, [dispatch]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const [year, month, day] = DateUtils.getNumberFromFormatDate(e.target.value);
        dispatch(setSelectedDate({
            year,
            month,
            day,
        }));
    };

    return (
        <StyledCalendarWrapper {...props}>
            <StyledIconLabel htmlFor={calendarId} onClick={onIconClick}>
                <img src={CalendarIcon} alt="Calendar icon" />
            </StyledIconLabel>

            <StyledInput
                type="date"
                placeholder={placeholder}
                id={calendarId}
                value={DateUtils.getFormatDate(selectedYear, selectedMonth, selectedDay)}
                onChange={handleChange}
            />

            <StyledClearIcon
                src={ClearIcon}
                alt="Clear"
                onClick={handleReset}
            />
        </StyledCalendarWrapper>
    );
};
