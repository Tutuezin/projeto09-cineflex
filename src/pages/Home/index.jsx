import { Container, Title, Movies, Movie } from "./styles";
import { useState, useEffect } from "react";
import axios from "axios";
import filme from "../../assets/imgs/filme.svg";
import { Link } from "react-router-dom";

export default function Home() {
  const [arrayMovies, setArrayMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((res) => {
      setArrayMovies(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Container>
      <Title>Selecione o filme</Title>

      <Movies>
        {arrayMovies.map((movies, index) => {
          return (
            <Movie key={index}>
              <Link to={`/movies/${movies.id}`}>
                <li>
                  <img
                    width={129}
                    height={193}
                    src={movies.posterURL}
                    alt={movies.title}
                  />
                </li>
              </Link>
            </Movie>
          );
        })}
      </Movies>
    </Container>
  );
}
