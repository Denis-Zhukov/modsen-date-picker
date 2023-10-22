import styled from 'styled-components';

export const StyledCalendarWrapper = styled.div`
  width: 250px;
  position: relative;
`;

export const StyledIconLabel = styled.label`
  transform: translateY(-50%);
  position: absolute;
  left: 15px;
  top: 50%;
`;

export const StyledClearIcon = styled.img`
  transform: translateY(-50%);
  position: absolute;
  right: 15px;
  top: 50%;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  width: calc(100% - 76px);
  padding: 8px 38px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;
