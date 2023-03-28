import styled from "styled-components"

export const Container = styled.div`
  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.light_300};
  }
`
