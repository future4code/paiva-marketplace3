import React from 'react'
import { AppContainer } from './components/AppContainer';
import { Contratante } from './components/Contratante';
import Carrinho from './components/Carrinho';


function App() {
	return (
        <div>
        <AppContainer />
        <br/>
        <Carrinho/>
		<br/>
		<Contratante />

        </div>
	)
}

export default App
