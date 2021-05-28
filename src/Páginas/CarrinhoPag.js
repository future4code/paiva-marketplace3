import React, { Component } from 'react'
import styled from 'styled-components'
import carrinho from '../imagens/carrinho.png'
import Button from "@material-ui/core/Button";
import Contratante from '../components/Contratante';
import Carrinho from "../components/Carrinho"


export default class CarrinhoPag extends Component {
    render (){
        return (
            <div><Carrinho/></div>
        )  

    }
}