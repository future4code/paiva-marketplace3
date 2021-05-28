import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicial from "./Páginas/Inicial";
import Prestador from "./Páginas/Prestador";
import Contratante from "./Páginas/Contratante";
import styled from "styled-components";

const Body = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  > main, > div {
    flex-grow: 1;
  }

  header, footer {
    flex-shrink: 0
  }
`;

class App extends Component {
  state = { página: "Início" }

  escolherPágina = () => {
    if (this.state.página === "Início")
      return (
        <Inicial
          irParaPrestador={this.irParaPrestador}
          irParaContratante={this.irParaContratante}
        />
      );

    if (this.state.página === "Prestador")
      return <Prestador irParaInício={this.irParaInício}/>;

    if (this.state.página === "Contratante")
      return <Contratante irParaInício={this.irParaInício}/>;

    return (
      <Inicial
        irParaPrestador={this.irParaPrestador}
        irParaContratante={this.irParaContratante}
      />
    );
  }

  irParaInício = () => { this.setState({ página: "Início" }); }

  irParaPrestador = () => { this.setState({ página: "Prestador" }); }

  irParaContratante = () => { this.setState({ página: "Contratante" }); }

  render() {
    const página = this.escolherPágina();

    return (
      <Body>
        <Header/>
        {página}
        <Footer/>
      </Body>
    );
  }
}

export default App;
