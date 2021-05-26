import React, { Component } from "react";
import FormPrestador from "../components/FormPrestador";

export default class Prestador extends Component {
  render() {
    return (
      <main>
        <button onClick={this.props.irParaInício}>
          Ir Para A Página Inicial
        </button>
        <FormPrestador/>
      </main>
    );
  }
}
