import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6.7rem;
  background-color: #fff;
  margin: 0 auto;

  max-width: 37.5rem;
  width: 100%;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    margin-top: 8rem;

    letter-spacing: 0.04rem;
    font-size: 2.4rem;
    font-weight: 400;
    color: #293845;
  }

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

export const UlSeats = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 2.4rem;
`;

export const Seat = styled.li`
  cursor: ${(props) => (props.available ? "pointer" : "default")};
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.6rem;
  height: 2.6rem;
  border-radius: 12px;

  margin-right: 0.6rem;
  margin-bottom: 1.8rem;

  background: ${(props) =>
    props.available ? (props.selected ? "#8dd7cf" : "#c3cfd9") : "#fbe192"};
  border: 0.1rem solid
    ${(props) =>
      props.available ? (props.selected ? "#45bdb0" : "#808f9d") : "#f7c52b"};

  font-size: 1.1rem;
  letter-spacing: 4%;
`;

export const Examples = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5.6rem;

  .seatSelected {
    margin: 0 auto;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #8dd7cf;
    border-radius: 1.7rem;
    border: 0.1rem solid #1aae9e;
  }

  .seatAvailable {
    margin: 0 auto;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #c3cfd9;
    border-radius: 1.7rem;
    border: 0.1rem solid #7b8b99;
  }

  .seatUnavailable {
    margin: 0 auto;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #fbe192;
    border-radius: 1.7rem;
    border: 0.1rem solid #f7c52b;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.3rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;

  height: 11.7rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  background: #dfe6ed;
  border: 0.1rem solid #9eadba;

  img {
    padding: 0.8rem;
    background: #ffffff;
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;

    margin-left: 1rem;
    margin-right: 1.4rem;
  }

  h2 {
    font-size: 2.6rem;
    color: #293845;
  }
`;
