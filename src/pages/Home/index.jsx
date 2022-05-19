import { Container, Title, Movies, Movie } from "./styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((res) => {
      setMovies(res.data);
    });
    promise.catch((error) => {
      console.log(error.message);
    });
  }, []);

  // console.log(movies);

  return (
    <Container>
      <Title>Selecione o filme</Title>

      <Movies>
        {movies.map((movie, index) => {
          return (
            <Movie key={index}>
              <Link to={`/movies/${movie.id}`}>
                <li>
                  <img
                    width={129}
                    height={193}
                    src={movie.posterURL}
                    alt={movie.title}
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
