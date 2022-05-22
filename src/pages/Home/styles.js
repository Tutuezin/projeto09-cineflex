import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6.7rem;
  background-color: #fff;

  .loader {
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    margin: 12rem auto;
    width: 12.4rem;
    height: 12.4rem;
    border-radius: 50%;

    border-top: 0.8rem solid rgba(232, 131, 58, 0.8);
    border-left: 0.8rem solid rgba(232, 131, 58, 0.8);
    border-right: 0.8rem solid rgba(255, 255, 255, 0);

    animation: spin 0.575s infinite linear;
  }
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
  align-items: center;
  justify-content: space-between;
  padding: 0 2.8rem;
  max-height: 60rem;
  overflow-y: auto;
`;

export const Movie = styled.div`
  text-decoration: none;
  cursor: pointer;

  li {
    padding: 0.8rem;
    margin-bottom: 1.1rem;
    border-radius: 0.3rem;
    background-color: #fff;
    box-shadow: 0 0.2rem 0.4rem 0.2rem rgba(0, 0, 0, 0.1);
  }
`;
