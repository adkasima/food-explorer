import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.tomato_100};
  color: ${({ theme }) => theme.COLORS.light_100};

  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 5px;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.tomato_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.tomato_400};
  }

`
