import React, { useCallback, useId, useState } from 'react';

import CalendarIcon from '@/assets/icons/calendar.svg';
import ClearIcon from '@/assets/icons/clear.svg';

import {
    StyledCalendarWrapper,
    StyledClearIcon,
    StyledIconLabel,
    StyledInput,
} from './styled';

interface Props {
    onIconClick: () => void;
}

export const Field = ({ onIconClick }: Props) => {
    const calendarId = useId();

    const [date, setDate] = useState('');
    const resetValue = useCallback(() => setDate(''), []);

    return (
        <StyledCalendarWrapper>
            <StyledInput
                type="text"
                placeholder="Choose Date"
                id={calendarId}
                value={date}
                onClick={onIconClick}
                readOnly
            />
            <StyledIconLabel htmlFor={calendarId}>
                <img src={CalendarIcon} alt="Calendar icon" />
            </StyledIconLabel>
            {date && (
                <StyledClearIcon
                    src={ClearIcon}
                    alt="Clear"
                    onClick={resetValue}
                />
            )}
        </StyledCalendarWrapper>
    );
};
