import { Container } from "./styles"
import { Button } from "../Button"
import { useState } from "react"
import { HeartStraight } from "phosphor-react"

export function Card(props) {
  const [quantity, setQuantity] = useState(0)

  function plusQuantity() {
    setQuantity(quantity + 1)
  }

  function subQuantity() {
    if (quantity === 0) {
      quantity = 0
    } else setQuantity(quantity - 1)
  }

  return (
    <Container>
      <a href="#">
        <HeartStraight size={32} color="white" id="heart-icon" />
      </a>

      <img src={props.src} alt={props.alt} />
      <h4>{props.name}</h4>
      <h5>{props.desc}</h5>
      <span>{props.value}</span>

      <div>
        <button onClick={subQuantity}>-</button>
        <p>{quantity > 9 ? quantity : "0" + quantity}</p>
        <button onClick={plusQuantity}>+</button>
        <Button title="Incluir" />
      </div>
    </Container>
  )
}
