import { Container, UlSeats, Examples, Footer } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Assento from "./Assento";
import axios from "axios";

export default function Seats() {
  const { idSeat } = useParams();

  const [benchs, setBenchs] = useState([]);

  useEffect(() => {
    const promiseSeat = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeat}/seats`
    );

    promiseSeat
      .then((res) => {
        setBenchs(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <Container>
      <h3 className="title">Selecione o(s) assento(s)</h3>
      <UlSeats>
        {benchs.seats?.map((bench, index) => {
          return (
            <Assento
              key={index}
              isAvailable={bench.isAvailable}
              name={bench.name}
            />
          );
        })}
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
      <Footer>
        <img
          width={64}
          height={89}
          src={benchs.movie?.posterURL}
          alt={benchs.movie?.title}
        />
        <div className="infosFooter">
          <h2>{benchs.movie?.title} </h2>
          <h2>{`${benchs.day?.weekday} - ${benchs?.name}`}</h2>
        </div>
      </Footer>
    </Container>
  );
}
