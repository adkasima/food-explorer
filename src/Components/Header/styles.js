import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.dark_600};

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 80px;

  > img {
    width: 197px;
    height: 30px;
  }

  > button {
    width: 216px;
    height: 56;
  }
`
