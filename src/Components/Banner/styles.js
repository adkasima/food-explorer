import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  background-color: ${({ theme }) => theme.COLORS.gradient_200};
  margin: 164px 124px 62px;
  border-radius: 8px;
  width: 1120px;
  height: 260px;

  > img {
    position: absolute;
    left: 70px;
    top: 123px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-right: 100px;
    text-align: center;
  }

  > div h1 {
    color: ${({ theme }) => theme.COLORS.light_300};
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 40px;
  }

  > div p {
    color: ${({ theme }) => theme.COLORS.light_300};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
`
