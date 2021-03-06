import styled from 'styled-components';
import Box from '../Box';

// extend box so we can use styled system spacing, sizes etc
export const Wrapper = styled(Box)`
  align-items: center;
  background-color: ${({ theme }) => theme.button.bgColor};
  border: 1px solid ${({ theme }) => theme.button.borderColor};
  border-radius: 3em;
  color: ${({ theme }) => theme.button.color};
  cursor: pointer;
  display: inline-flex;
  fill: ${({ theme }) => theme.button.color};
  font-family: ${({ theme }) => theme.button.fontFamily};
  font-size: ${({ theme }) => theme.button.fontSize};
  font-weight: ${({ theme }) => theme.button.fontWeight};
  justify-content: center;
  padding: 6px 14px;

  &:hover {
    background-color: ${({ theme }) => theme.button._hover.bgColor};
    border-color: ${({ theme }) => theme.button._hover.borderColor};
    color: ${({ theme }) => theme.button._hover.color};
    fill: ${({ theme }) => theme.button._hover.color};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.button._disabled.bgColor};
    border-color: ${({ theme }) => theme.button._disabled.borderColor};
    color: ${({ theme }) => theme.button._disabled.color};
    fill: ${({ theme }) => theme.button._disabled.color};
    pointer-events: none;
  }

  &.is_primary {
    background-color: ${({ theme }) => theme.button._primary.bgColor};
    border-color: ${({ theme }) => theme.button._primary.borderColor};
    color: ${({ theme }) => theme.button._primary.color};
    fill: ${({ theme }) => theme.button._primary.color};

    &:hover {
      background-color: ${({ theme }) => theme.button._primary._hover.bgColor};
      border-color: ${({ theme }) => theme.button._primary._hover.borderColor};
      color: ${({ theme }) => theme.button._primary._hover.color};
      fill: ${({ theme }) => theme.button._primary._hover.color};
    }

    &:disabled {
      background-color: ${({ theme }) =>
        theme.button._primary._disabled.bgColor};
      border-color: ${({ theme }) =>
        theme.button._primary._disabled.borderColor};
      color: ${({ theme }) => theme.button._primary._disabled.color};
      fill: ${({ theme }) => theme.button._primary._disabled.color};
      pointer-events: none;
    }
  }
`;
