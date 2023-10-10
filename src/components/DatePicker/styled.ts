import styled from 'styled-components';

import { Calendar } from '@/components/Calendar';

export const StyledDatePicker = styled.div`
  position: relative`;

export const StyledRelativeCalendar = styled(Calendar)`
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
`;
