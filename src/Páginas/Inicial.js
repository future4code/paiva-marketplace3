import React from "react";

export default function Inicial(props) {
  return (
    <main>
      <button onClick={props.irParaPrestador}>
        Ir Para A Página De Prestador
      </button>
      <button onClick={props.irParaContratante}>
        Ir Para A Página De Contratante
      </button>
      <p>Página Inicial</p>
    </main>
  );
}
