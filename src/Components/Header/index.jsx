import { Container } from "./styles"
import logo from "../../assets/logo.svg"
import { Button } from "../Button"
import { SignOut } from "phosphor-react"

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" sizes={32} />
      <Button title="Pedidos (0)" />
      <SignOut size={32} />
    </Container>
  )
}
