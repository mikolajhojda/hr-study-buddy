import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
`;

export const StyledAverage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  left: 515px;
  top: 175px;
  border-radius: 90px;
  background: ${({ theme, value }) => {
    if (value < 3) return theme.colors.error;
    else if (value >= 3 && value < 4) return theme.colors.warning;
    else if (value >= 4) return theme.colors.success;
    return theme.colors.grey;
  }};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0;s
  }

  p:first-child {
    display: flex;
    flex-direction: row;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 400;
  }
`;
