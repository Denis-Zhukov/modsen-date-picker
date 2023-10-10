import React, { ChangeEvent, HTMLProps, useId } from 'react';

import CalendarIcon from '@/assets/icons/calendar.svg';
import ClearIcon from '@/assets/icons/clear.svg';

import {
    StyledCalendarWrapper,
    StyledClearIcon,
    StyledIconLabel,
    StyledInput,
} from './styled';

export interface Props extends HTMLProps<HTMLDivElement> {
    date: string;
    onChangeDate: (date: string) => void;
    onIconClick?: () => void;
    onResetClick?: () => void;
    placeholder?: string;
}

export const Field = ({
    date,
    placeholder,
    onIconClick,
    onResetClick,
    onChangeDate,
    ...props
}: Props) => {
    const calendarId = useId();
    const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeDate(e.target.value);
    };

    return (
        <StyledCalendarWrapper {...props}>
            <StyledIconLabel htmlFor={calendarId} onClick={onIconClick}>
                <img src={CalendarIcon} alt="Calendar icon" />
            </StyledIconLabel>

            <StyledInput
                type="text"
                placeholder={placeholder}
                id={calendarId}
                value={date}
                onChange={handleChangeDate}
                readOnly
            />

            {date && onResetClick && (
                <StyledClearIcon
                    src={ClearIcon}
                    alt="Clear"
                    onClick={onResetClick}
                />
            )}
        </StyledCalendarWrapper>
    );
};
