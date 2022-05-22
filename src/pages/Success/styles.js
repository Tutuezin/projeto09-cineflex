import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6.7rem;
  background-color: #fff;
  max-width: 37.5rem;
  width: 100%;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 8rem;
    margin-top: 8rem;

    letter-spacing: 0.04rem;
    font-size: 2.4rem;
    font-weight: 700;
    color: #247a6b;
  }

  h4 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #293845;
    letter-spacing: 0.04rem;

    margin-bottom: 1rem;
  }

  p {
    font-size: 2.2rem;
    font-weight: 400;
    color: #293845;
    letter-spacing: 0.04rem;

    margin-bottom: 0.5rem;
  }

  button {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    width: 22.5rem;
    height: 4.2rem;

    font-size: 1.8rem;
    letter-spacing: 0.04rem;
    color: #fff;

    border-style: none;
    border-radius: 3px;
    background-color: #e8833a;
  }

  br {
    margin-bottom: 0.5rem;
  }
`;

export const SessionMovie = styled.div`
  margin-top: 5rem;
  margin-left: 2.9rem;
  margin-bottom: 4.5rem;
`;

export const Tickets = styled.div`
  margin-left: 2.9rem;
  margin-bottom: 4.5rem;
`;

export const Buyer = styled.div`
  margin-left: 2.9rem;
  margin-bottom: 10rem;
`;
