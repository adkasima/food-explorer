import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
  gap: 15px;
  width: 304px;
  height: 462px;

  background-color: ${({ theme }) => theme.COLORS.dark_300};
  border-radius: 8px;

  #heart-icon {
    position: absolute;
    top: 16px;
    right: 18px;
  }

  > h4 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.light_300};
  }

  > h5 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.light_400};
  }

  > span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.cake_200};
  }

  > div {
    display: flex;
    gap: 14px;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 20px;
  }

  > div button:nth-child(-n + 3) {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.light_300};
    font-size: 20px;
  }
`
