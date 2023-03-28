import "./styles"
import { Container } from "./styles"

export function Title(props) {
  return (
    <Container>
      <div>
        <h3>{props.name}</h3>
      </div>
    </Container>
  )
}
