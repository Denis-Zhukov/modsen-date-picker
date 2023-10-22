import React, { useCallback } from 'react';

import { setCalendarType } from '@/store/actions';
import { TypeOfCalendar } from '@/constants/TypeOfCalendar';
import { useDatePicker } from '@/hooks/useDatePicker';

import { StyledType, StyledTypes } from './styled';

export const CalendarDisplays = () => {
    const {
        state: { type: activeType },
        dispatch,
    } = useDatePicker();

    const handleClick = useCallback((type: TypeOfCalendar) => () => dispatch(setCalendarType(type)), []);

    const types = Object.values(TypeOfCalendar);
    return (
        <StyledTypes>
            {types.map((type) => (
                <StyledType
                    onClick={handleClick(type)}
                    $active={type === activeType}
                >
                    {type}
                </StyledType>
            ))}
        </StyledTypes>
    );
};
