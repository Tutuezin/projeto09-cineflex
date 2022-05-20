import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6.7rem;
  background-color: #fff;

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
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.6rem;
  height: 2.6rem;
  border-radius: 12px;

  margin-right: 0.6rem;
  margin-bottom: 1.8rem;

  background: ${(props) => (props.selected ? "#8dd7cf" : "#c3cfd9")};
  border: 0.1rem solid ${(props) => (props.selected ? "#45bdb0" : "#808f9d")};

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
