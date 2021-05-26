import React from "react";

export default function Contratante(props) {
  return (
    <main>
      <button onClick={props.irParaInício}>
        Ir Para A Página Inicial
      </button>
      <p>Página Contratante</p>
    </main>
  );
}
