import "./styles"
import { Container } from "./styles"
import bannerImg from "../../assets/banner-img.svg"

export function Banner() {
  return (
    <Container>
      <img src={bannerImg} alt="Banner" />

      <div>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  )
}
