import React, { HTMLProps } from 'react';

import { StyledDay } from './styled';
import type { TypeOfDay } from './types';

export interface Props extends HTMLProps<HTMLDivElement> {
    children: string | number;
    disabled?: boolean;
    active?: boolean;
    type?: TypeOfDay;
    holiday?: boolean;
}

export const CalendarCell = ({
    children,
    disabled = false,
    active = false,
    type = 'default',
    holiday = false,
    ...props
}: Props) => (
    <StyledDay
        $disabled={disabled}
        $active={active}
        $type={type}
        $holiday={holiday}
        {...props}
    >
        {children}
    </StyledDay>
);
