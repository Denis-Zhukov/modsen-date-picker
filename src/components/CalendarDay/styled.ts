import styled, { css, RuleSet } from 'styled-components';

import { TypeOfDay } from '@/components/CalendarDay/types';

const StylesByType: Record<TypeOfDay, RuleSet> = {
    default: css`
      border-radius: 8px;
      background-color: transparent;
    `,
    start: css`
      color: #FFFFFF;
        border-radius: 8px 0 0 8px;
        background-color: rgba(47, 128, 237, 0.6);
    `,
    between: css`
      color: #2F80ED;
      border-radius: 0;
      background-color: rgba(47, 128, 237, 0.1);
    `,
    end: css`
      color: #FFFFFF;
        border-radius: 0 8px 8px 0;
        background-color: #2f80ed;
    `,
};

export const StyledDay = styled.div<{
    $disabled: boolean;
    $active: boolean;
    $type: TypeOfDay;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  user-select: none;
  ${({ $type }) => StylesByType[$type]}
  
  &:hover {
    background: ${({ $active }) => !$active && '#f1f1f1'};
    cursor: pointer;
  }

  ${({ $disabled }) => $disabled
      && css`
          color: #aaaaaa;
      `}

  ${({ $active }) => $active
      && css`
          color: #ffffff;
          background: #2f80ed;
      `}
}
`;
