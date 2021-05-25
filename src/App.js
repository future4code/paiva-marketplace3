import React from 'react'
import { AppContainer } from './components/AppContainer'
import { Body } from './components/Body/Body'


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
		<Body />
		</div>
	)
}

}


