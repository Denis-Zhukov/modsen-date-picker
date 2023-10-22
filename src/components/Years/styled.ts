import { ComponentProps } from 'react';
import styled from 'styled-components';

import { CalendarCell } from '@/components/CalendarCell';

export const StyledYears = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const StyledYear = styled(CalendarCell)<
    ComponentProps<typeof CalendarCell>
>`
    width: 75px;
`;
