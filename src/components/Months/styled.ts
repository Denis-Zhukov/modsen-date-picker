import { ComponentProps } from 'react';
import styled from 'styled-components';

import { CalendarCell } from '@/components/CalendarCell';

export const StyledMonths = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`;

export const StyledMonthCell = styled(CalendarCell)<
    ComponentProps<typeof CalendarCell>
>`
    width: 75px;
`;
