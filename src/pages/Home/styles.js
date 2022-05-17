import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6.7rem;
  background-color: #fff;
`;

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 11rem;

  letter-spacing: 0.04rem;
  font-size: 2.4rem;
  font-weight: 400;
  color: #293845;
`;

export const Movies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 2.8rem;
  max-height: 480px;
  overflow-y: auto;
`;

export const Movie = styled.a`
  text-decoration: none;
  cursor: pointer;

  li {
    padding: 0.8rem;
    margin-bottom: 1.1rem;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  }
`;
