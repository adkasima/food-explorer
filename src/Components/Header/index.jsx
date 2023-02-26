import { Container } from "./styles"
import logo from "../../assets/logo.svg"
import { Button } from "../Button"
import { Input } from "../Input"
import { SignOut, MagnifyingGlass, Receipt } from "phosphor-react"

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" sizes={32} />
      <Input
        placeholder="Busque por pratos ou ingredientes"
        icon={MagnifyingGlass}
      />
      <Button icon={Receipt} title="Pedidos(0)" />
      <SignOut size={48} />
    </Container>
  )
}
