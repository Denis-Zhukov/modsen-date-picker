import styled, { css } from 'styled-components';

export const StyledTypes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-top: 10px;
    gap: 10px;
`;

export const StyledType = styled.div<{ $active?: boolean }>`
  font-size: 12px;
  cursor: pointer;
  padding: 4px;
  ${({ $active }) => $active
          && css`
            background: gray;
            border-radius: 4px;
color: white;
          `}
`;
