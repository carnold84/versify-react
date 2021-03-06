import styled from 'styled-components';
import Box from '../Box';

// extend box so we can use styled stystem spacing, sizes etc
export const Wrapper = styled(Box)`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.typography.color};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight};

  &.is_h1 {
    font-size: 5.6rem;
    line-height: 1.3;
  }

  &.is_h2 {
    font-size: 4.8rem;
    line-height: 1.35;
  }

  &.is_h3 {
    font-size: 4rem;
    line-height: 1.4;
  }

  &.is_h4 {
    font-size: 3.2rem;
    line-height: 1.45;
  }

  &.is_h5 {
    font-size: 2.4rem;
    line-height: 1.5;
  }

  &.is_h6 {
    font-size: 1.6rem;
    line-height: 1.55;
  }

  &.is_p {
    font-size: 1.3rem;
    line-height: 1.5;
  }

  &.is_bold {
    font-weight: ${({ theme }) => theme.typography._bold.fontWeight};
  }
`;
