import { Container } from "./styles"
import { Button } from "../Button"

export function Card(props) {
  return (
    <Container>
      <img src={props.src} alt={props.alt} />
      <h4>{props.name}</h4>
      <h5>{props.desc}</h5>
      <span>{props.value}</span>

      <div>
        <button>-</button>
        <p>01</p>
        <button>+</button>
        <Button title="Incluir" />
      </div>
    </Container>
  )
}
