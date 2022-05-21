import { Container, UlSeats, Examples, Footer } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Assento from "./Assento";
import axios from "axios";

export default function Seats() {
  const { idSeat } = useParams();

  const [benchs, setBenchs] = useState([]);
  const [addSelected, setAddSelected] = useState([]);

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

  useEffect(() => console.log(addSelected), [addSelected]);

  const getSelecteds = (name, selected) => {
    if (selected) setAddSelected([...addSelected, name]);
    else {
      setAddSelected(addSelected.filter((item) => item !== name));
    }
  };

  return (
    <Container>
      <h3 className="title">Selecione o(s) assento(s)</h3>
      <UlSeats>
        {benchs.seats ? (
          benchs.seats.map((bench, index) => {
            return (
              <Assento
                getSelecteds={getSelecteds}
                key={index}
                isAvailable={bench.isAvailable}
                name={bench.name}
              />
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

      <form action="">
        <label htmlFor="name">Nome do comprador:</label>
        <input type="text" name="name" />
      </form>

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
