import { Container, UlSeats, Examples, Form, Footer } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Assento from "./Assento";
import axios from "axios";

export default function Seats({
  setSession,
  purchasedSeats,
  setPurchasedSeats,
  setPurchaserName,
  setPurchaserCpf,
}) {
  const { idSeat } = useParams();
  const navigate = useNavigate();

  const [benchs, setBenchs] = useState([]);
  const [addSelected, setAddSelected] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeat}/seats`
    );

    promise
      .then((res) => {
        setBenchs(res.data);
        setSession(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => console.log(addSelected), [addSelected]);

  const getSelecteds = (id, name, selected) => {
    if (selected) setAddSelected([...addSelected, parseInt(id)]);
    else {
      setAddSelected(addSelected.filter((item) => item !== parseInt(id)));
    }

    if (selected) setPurchasedSeats([...purchasedSeats, name]);
    else {
      setPurchasedSeats(purchasedSeats.filter(() => name !== name));
    }
  };

  const postSeats = (e) => {
    e.preventDefault();

    const body = {
      ids: addSelected,
      name,
      cpf,
    };

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      body
    );
    promise
      .then((res) => {
        navigate("/success");
      })
      .catch((err) => console.log(err.mesage));
  };

  return (
    <Container>
      <h3 className="title">Selecione o(s) assento(s)</h3>
      <div className="scroll">
        <UlSeats>
          {benchs.seats ? (
            benchs.seats.map((bench, index) => {
              return (
                <Assento
                  getSelecteds={getSelecteds}
                  key={index}
                  isAvailable={bench.isAvailable}
                  name={bench.name}
                  id={bench.id}
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

        <Form onSubmit={postSeats}>
          <label htmlFor="formName">Nome do comprador:</label>
          <input
            id="formName"
            value={name}
            type="text"
            placeholder="Digite seu nome..."
            onChange={(e) => {
              setName(e.target.value);
              setPurchaserName(e.target.value);
            }}
            required
          />

          <label htmlFor="formCpf">CPF do comprador:</label>
          <input
            id="formCpf"
            value={cpf}
            type="number"
            placeholder="Digite seu CPF..."
            onChange={(e) => {
              setCpf(e.target.value);
              setPurchaserCpf(e.target.value);
            }}
            required
          />

          <button type="submit">Reservar assento(s)</button>
        </Form>
      </div>

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
