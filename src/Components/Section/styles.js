import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  justify-content: center;
  margin: 0 124px;

  > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.light_300};
  }

  > div {
    display: flex;
    gap: 27px;
    justify-content: center;
  }
`
