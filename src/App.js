<<<<<<< HEAD
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicial from "./Páginas/Inicial";
import Prestador from "./Páginas/Prestador";
import Contratante from "./Páginas/Contratante";
=======
import React from 'react'
import { AppContainer } from './components/AppContainer'
import { Body } from './components/Body/Body'
>>>>>>> 26e0316646d76164ec798c7faf27494d33c4b27d

class App extends Component {
  state = { página: "Início" }

<<<<<<< HEAD
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
      <>
        <Header/>
        {página}
        <Footer/>
      </>
    );
  }
}

export default App;
=======
export default class App extends React.Component{
	state = {
		pagina: ""
	}

	proximaPagina = () => {
		if (this.state.pagina ===  ""){
			this.setState({pagina: ""})
		} else if (this.state.pagina === ""){
			this.setState({pagina:""})
		}
	}

/*	renderizandoPagina = () => {
		switch(this.state.pagina){
			case "":
				return <""/>
			case "":
				return <""/>
			default:

		}
	}	*/
	render () {
	  return (
        <div>
          <AppContainer />
          <br/>
        </div>
	  )
  }
}


>>>>>>> 26e0316646d76164ec798c7faf27494d33c4b27d
