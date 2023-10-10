import React, { HTMLProps } from 'react';

import { StyledDay } from '@/components/CalendarDay/styled';

import type { TypeOfDay } from './types';

interface Props extends HTMLProps<HTMLDivElement> {
    day: string | number;
    disabled?: boolean;
    active?: boolean;
    type?: TypeOfDay;
}

export const CalendarDay = ({
    day,
    disabled = false,
    active = false,
    type = 'default',
    ...props
}: Props) => (
    <StyledDay $disabled={disabled} $active={active} $type={type} {...props}>
        {day}
    </StyledDay>
);
