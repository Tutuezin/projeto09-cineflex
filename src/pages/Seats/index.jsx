import { Container } from "./styles";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Seats() {
  const { idSeat } = useParams();
  console.log(idSeat);

  const promise = axios.get(
    `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeat}/seats`
  );
  console.log(promise);

  return (
    <Container>
      <div>oi</div>
    </Container>
  );
}
