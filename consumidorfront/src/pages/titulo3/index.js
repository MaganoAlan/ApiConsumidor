import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PrimaryTitle } from "../../components/PrimaryTitle";
import { Container } from "./styles";

export function Titulo3() {
  return (
    <Container>
      <Header />
      <PrimaryTitle texto="Título III" />
      <Link to="/">home</Link>
    </Container>
  );
}
