import React, { useState } from "react";
import { Seat } from "./styles";

export default function Assento({ isAvailable, name }) {
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(!selected);
  };
  return (
    <Seat
      selected={selected}
      available={isAvailable}
      onClick={isAvailable ? toggleSelected : () => {}}
    >
      {name < 10 ? `0${name}` : name}
    </Seat>
  );
}
