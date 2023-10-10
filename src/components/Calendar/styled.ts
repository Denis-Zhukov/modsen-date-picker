import styled from 'styled-components';

import { MonthSelector } from '@/components/MonthSelector';

export const StyledCalendar = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #E1E1E1;
  background: #FFF;
`;

export const StyledDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  max-width: 250px;
`;
