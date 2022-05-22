import React, { useState } from "react";
import { Seat } from "./styles";

export default function Assento({ isAvailable, name, id, getSelecteds }) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    if (selected) {
      getSelecteds(id, name, false);
    } else {
      getSelecteds(id, name, true);
    }
    setSelected(!selected);
  };

  return (
    <Seat
      selected={selected}
      available={isAvailable}
      onClick={
        isAvailable
          ? toggleSelected
          : () => {
              alert("Esse assento não está disponível");
            }
      }
    >
      {name < 10 ? `0${name}` : name}
    </Seat>
  );
}
