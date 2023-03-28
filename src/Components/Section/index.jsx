import { Card } from "../Card"
import { Title } from "../Title"
import "./styles"
import { Container } from "./styles"
import ravanello from "../../assets/dishes/ravanello.svg"
import gambe from "../../assets/dishes/gambe.svg"
import molla from "../../assets/dishes/molla.svg"
import parma from "../../assets/dishes/parma.svg"

export function Section(props) {
  return (
    <Container>
      <h2>{props.name}</h2>
      <div>
        <Card
          src={ravanello}
          alt="Imagem do prato Salada Ravanello"
          name="Salada Ravanello >"
          desc="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
          value="R$ 49,97"
        />

        <Card
          src={gambe}
          alt="Imagem do prato Spaguetti Gambe"
          name="Spaguetti Gambe >"
          desc="Massa fresca com camarões e pesto. "
          value="R$ 79,97"
        />

        <Card
          src={parma}
          alt="Imagem do prato Torradas de parma"
          name="Torradas de Parma >"
          desc="Presunto de parma e rúcula em um pão com fermentação natural."
          value="R$ 25,97"
        />
      </div>
    </Container>
  )
}
