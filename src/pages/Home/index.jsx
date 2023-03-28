import { Container } from "./styles"
import { Header } from "../../Components/Header"
import { Banner } from "../../Components/Banner"
import { Title } from "../../Components/Title"
import { Card } from "../../Components/Card"
import { Section } from "../../Components/Section"
import gambe from "../../assets/dishes/gambe.svg"

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Section name="Refeições">
        <Card name="aaaa" />
      </Section>
    </Container>
  )
}
