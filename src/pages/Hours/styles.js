import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6.7rem;
  background-color: #fff;

  .scroll {
    max-height: 600px;
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

  .times > li {
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
