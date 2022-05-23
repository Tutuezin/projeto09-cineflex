import { Top } from "./styles";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Top>
      <h1>CINEFLEX</h1>
    </Top>
  );
}
