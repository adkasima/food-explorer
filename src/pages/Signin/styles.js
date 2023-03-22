import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  gap: 306px;
  align-items: center;
  justify-content: space-around;
`

export const Form = styled.form`
  width: 476px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.dark_700};
  border-radius: 16px;

  > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.light_100};
  }

  > label {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 32px 300px 8px 0;
    color: ${({ theme }) => theme.COLORS.light_400};
  }

  > a {
    margin-top: 32px;
    color: ${({ theme }) => theme.COLORS.light_100};
  }

  > Button {
    margin-top: 32px;
  }

  &placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.light_500};
  }
`
