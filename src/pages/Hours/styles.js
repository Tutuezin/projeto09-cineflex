import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6.7rem;
  margin-bottom: 20rem;

  background-color: #fff;

  .scroll {
    max-height: 47rem;
    overflow-y: auto;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 11rem;

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

export const Hour = styled.ul`
  margin-left: 2.3rem;

  p {
    font-size: 2rem;
  }

  .times {
    display: flex;
    margin: 2.2rem 0;
  }

  a {
    text-decoration: none;
  }

  .times li {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.3rem;
    width: 8.3rem;
    margin-right: 0.8rem;
    border-radius: 0.3rem;

    font-size: 1.8rem;
    color: #fff;
    background-color: #e8833a;
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
