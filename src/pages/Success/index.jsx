import React from "react";
import { Container, SessionMovie, Tickets, Buyer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Success({
  session,
  purchasedSeats,
  purchaserName,
  purchaserCpf,
}) {
  const navigate = useNavigate();

  return (
    <Container>
      <h3 className="title">
        Pedido feito <br /> com sucesso!
      </h3>

      <SessionMovie>
        <h4>Filme e sessão</h4>

        <p>{session.movie.title}</p>
        <p>{`${session.day.date} ${session.name}`}</p>
      </SessionMovie>

      <Tickets>
        <h4>Ingressos</h4>

        {purchasedSeats.map((item, index) => {
          return <p key={index}> {`Assento ${item}`}</p>;
        })}
      </Tickets>

      <Buyer>
        <h4>Comprador</h4>
        <p>{`Nome: ${purchaserName}`} </p>
        <p>{`CPF: ${purchaserCpf}`}</p>
      </Buyer>
      <a href="/">
        <button>Voltar pra Home</button>
      </a>
    </Container>
  );
}
