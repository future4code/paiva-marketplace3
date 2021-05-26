import React, { Component } from 'react'
import { Contratante } from './components/Contratante';
import FormPrestador from './FormPrestador'


export class AppContainer extends Component {
  render() {
    return (
      <div>
       <Contratante />
        <FormPrestador />
      </div>
    )
  }
}
