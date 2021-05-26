import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicial from "./Páginas/Inicial";
import Prestador from "./Páginas/Prestador";
import Contratante from "./Páginas/Contratante";

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
      <Fragment>
        <Header/>
        {página}
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
