import { Container, Form } from "./styles"

import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { Logo } from "../../Components/Logo"

export function Signup() {
  return (
    <Container>
      <Logo />
      <Form>
        <h2>Crie sua conta</h2>

        <label htmlFor="name">Nome</label>
        <Input placeholder="Exemplo: Maria da Silva" type="text" id="name" />

        <label htmlFor="email">Email</label>
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          id="email"
        />

        <label htmlFor="password">Senha</label>
        <Input
          placeholder="Mínimo 6 caracteres"
          type="password"
          id="password"
        />

        <Button title="Criar conta" />
        <a href="#">Já tenho uma conta</a>
      </Form>
    </Container>
  )
}
