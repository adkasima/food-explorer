import { Container } from "./styles"

export function Button({ icon: Icon, ...rest }) {
  return (
    <Container type="button">
      <Icon size={32} />
      {title}
    </Container>
  )
}
