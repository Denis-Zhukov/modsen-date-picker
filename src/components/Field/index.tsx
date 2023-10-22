import type { HTMLProps } from 'react';
import React, { useCallback, useId } from 'react';

import CalendarIcon from '@/assets/icons/calendar.svg';
import ClearIcon from '@/assets/icons/clear.svg';
import { resetDate } from '@/store/actions';
import { useDatePicker } from '@/hooks/useDatePicker';

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

export const Field = ({ placeholder, onIconClick, ...props }: Props) => {
    const {
        state: { selectedYear, selectedMonth, selectedDay },
        dispatch,
    } = useDatePicker();
    const calendarId = useId();

    const handleReset = useCallback(() => {
        dispatch(resetDate());
    }, [dispatch]);

    return (
        <StyledCalendarWrapper {...props}>
            <StyledIconLabel htmlFor={calendarId} onClick={onIconClick}>
                <img src={CalendarIcon} alt="Calendar icon" />
            </StyledIconLabel>

            <StyledInput
                type="text"
                placeholder={placeholder}
                id={calendarId}
                value={`${selectedYear ?? '????'} / ${
                    selectedMonth ?? '??'
                } / ${selectedDay ?? '??'}`}
                readOnly
            />

            <StyledClearIcon
                src={ClearIcon}
                alt="Clear"
                onClick={handleReset}
            />
        </StyledCalendarWrapper>
    );
};
