import { Container, Hour } from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Hours() {
  const { id } = useParams();
  console.log(id);

  const [objHours, setObjHours] = useState({});

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`
    );
    promise.then((res) => {
      setObjHours(res.data);
      console.log(res.data.days);
    });
  }, []);

  return (
    <Container>
      <h3 className="title">Selecionar Horário</h3>

      <div className="scroll">
        {objHours.days
          ? objHours.days.map((day, index) => {
              return (
                <Hour key={index}>
                  <p>{`${day.weekday} - ${day.date}`}</p>
                  <div className="times">
                    {day.showtimes.map((hour, index) => {
                      return <li key={index}>{hour.name}</li>;
                    })}
                  </div>
                </Hour>
              );
            })
          : ""}
      </div>
    </Container>
  );
}
