import { Container, UlSeats, Seat, Examples } from "./styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Seats() {
  const { idSeat } = useParams();

  const [benchs, setBenchs] = useState([]);
  const [selected, setSelected] = useState(false);
  console.log(selected);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeat}/seats`
    );

    promise.then((res) => {
      setBenchs(res.data);
    });
  }, []);

  return (
    <Container>
      <h3 className="title">Selecione o(s) assento(s)</h3>
      <UlSeats>
        {benchs.seats ? (
          benchs.seats.map((bench, index) => {
            return (
              <Seat
                key={index}
                selected={selected}
                onClick={() => setSelected(true)}
              >
                {bench.name < 10 ? `0${bench.name}` : bench.name}
              </Seat>
            );
          })
        ) : (
          <div className="loader"></div>
        )}
      </UlSeats>

      <Examples>
        <div className="example">
          <div className="seatSelected"></div>
          <p>Selecionado</p>
        </div>
        <div className="example">
          <div className="seatAvailable"></div>
          <p>Disponível</p>
        </div>
        <div className="example">
          <div className="seatUnavailable"></div>
          <p>Indisponível</p>
        </div>
      </Examples>
    </Container>
  );
}
