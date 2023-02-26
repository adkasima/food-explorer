import { Container } from "./styles"

import { Button } from "../../Components/Button"
import { Header } from "../../Components/Header"

export function Home() {
  return (
    <Container>
      <Header />
      <Button title="Entrar" loading />
    </Container>
  )
}
