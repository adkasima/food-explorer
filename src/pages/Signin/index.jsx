import { Container, Form } from "./styles"

import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { Logo } from "../../Components/Logo"

export function Signin() {
  return (
    <Container>
      <Logo />
      <Form>
        <h2>Faça login</h2>

        <label for="email">Email</label>
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          id="email"
        />

        <label for="password">Senha</label>
        <Input
          placeholder="Mínimo 6 caracteres"
          type="password"
          id="password"
        />

        <Button title="Entrar" />
        <a href="#">Criar uma conta</a>
      </Form>
    </Container>
  )
}
