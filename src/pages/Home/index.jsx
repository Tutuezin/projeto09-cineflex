import { Container, Title, Movies, Movie } from "./styles";

import filme from "../../assets/imgs/filme.svg";

export default function Home() {
  return (
    <Container>
      <Title>Selecione o filme</Title>
      <Movies>
        <Movie>
          <li>
            <img width={129} height={193} src={filme} alt="" />
          </li>
        </Movie>
        <Movie>
          <li>
            <img width={129} height={193} src={filme} alt="" />
          </li>
        </Movie>
        <Movie>
          <li>
            <img width={129} height={193} src={filme} alt="" />
          </li>
        </Movie>
        <Movie>
          <li>
            <img width={129} height={193} src={filme} alt="" />
          </li>
        </Movie>
        <Movie>
          <li>
            <img width={129} height={193} src={filme} alt="" />
          </li>
        </Movie>
        <Movie>
          <li>
            <img width={129} height={193} src={filme} alt="" />
          </li>
        </Movie>
        <Movie>
          <li>
            <img width={129} height={193} src={filme} alt="" />
          </li>
        </Movie>
        <Movie>
          <li>
            <img width={129} height={193} src={filme} alt="" />
          </li>
        </Movie>
        <Movie>
          <li>
            <img width={129} height={193} src={filme} alt="" />
          </li>
        </Movie>
        <Movie>
          <li>
            <img width={129} height={193} src={filme} alt="" />
          </li>
        </Movie>
      </Movies>
    </Container>
  );
}
