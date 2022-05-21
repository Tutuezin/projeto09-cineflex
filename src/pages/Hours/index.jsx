import { Container, Hour, Footer } from "./styles";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Hours() {
  const { idMovie } = useParams();

  const [week, setWeek] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`
    );
    promise
      .then((res) => {
        setWeek(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <Container>
        <h3 className="title">Selecionar Horário</h3>

        <div className="scroll">
          {week.days ? (
            week.days.map((day, index) => {
              return (
                <Hour key={index}>
                  <p>{day.weekday}</p>
                  <div className="times">
                    {day.showtimes.map((hour, index) => {
                      return (
                        <Link to={`/section/${hour.id}`}>
                          <li key={index}>{hour.name}</li>
                        </Link>
                      );
                    })}
                  </div>
                </Hour>
              );
            })
          ) : (
            <div className="loader"></div>
          )}
        </div>
        <Footer>
          <img width={64} height={89} src={week.posterURL} alt="" />
          <h2>{week.title}</h2>
        </Footer>
      </Container>
    </>
  );
}
