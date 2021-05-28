import React, { Component } from 'react'
import styled from 'styled-components'
import carrinho from '../imagens/carrinho.png'
import Button from "@material-ui/core/Button";
import Contratante from '../components/Contratante';
import CarrinhoPag from './CarrinhoPag';


export default class ContratantePag extends Component {
    render ( ){
        return (
            <div> 
               <Contratante irParaCarrinho={this.props.irParaCarrinho}/>
            </div>
        )
    }
}