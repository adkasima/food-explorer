import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.dark_900};
  color: ${({ theme }) => theme.COLORS.light_500};

  margin-bottom: 8px;
  border-radius: 5px;

  > input {
    height: 48px;
    width: 100%;
    padding: 12px 14px;
    color: ${({ theme }) => theme.COLORS.light_100};
    background: transparent;
    border: 0;
  }
`
