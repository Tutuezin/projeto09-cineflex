import React from "react";
import { Container, SessionMovie, Tickets, Buyer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  return (
    <Container>
      <h3 className="title">
        Pedido feito <br /> com sucesso!
      </h3>

      <SessionMovie>
        <h4>Filme e sessão</h4>

        <p>Enola Holmes</p>
        <p>24/06/2021 15:00</p>
      </SessionMovie>

      <Tickets>
        <h4>Ingressos</h4>
        <p>Assento 15</p>
        <p>Assento 16</p>
      </Tickets>

      <Buyer>
        <h4>Comprador</h4>
        <p>Nome: João da Silva Sauro </p>
        <p>CPF: 123.456.789-10</p>
      </Buyer>

      <button onClick={() => navigate("/")}>Voltar pra Home</button>
    </Container>
  );
}
