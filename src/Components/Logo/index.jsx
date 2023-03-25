import logo from "../../assets/logo.svg"
import logoAdmin from "../../assets/logo-admin.svg"

import { Container } from "./styles"

export function Logo() {
  return (
    <Container>
      <img src={logo} alt="Logo Food Explorer" />
    </Container>
  )
}
