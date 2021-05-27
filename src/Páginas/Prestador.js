import React, { Component } from "react";
import FormPrestador from "../components/FormPrestador";
import styled from "styled-components";

const Section = styled.main`
  button {
    position: relative;
    top: 470px;
    left: 850px;
  }
`;

export default class Prestador extends Component {
  render() {
    return (
      <main>
        <Section>
          <button onClick={this.props.irParaInício}>
            Voltar para Página Inicial
          </button>
        </Section>
        <FormPrestador />
      </main>
    );
  }
}
