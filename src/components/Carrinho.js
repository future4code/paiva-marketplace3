import React, { Component } from 'react'
import styled from 'styled-components'
import carrinho from '../imagens/carrinho.png'
import Button from "@material-ui/core/Button";
import Contratante from './Contratante';


const BodyCarrinho = styled.body`
display:flex;
align-content:center;
justify-content:space-around;
height:60vh;
`

const CardProposta = styled.div`
display:grid;
justify-content:space-around;
box-shadow:2px 5px 5px;
width:40vw;
height:50vh;
`
const CardPagamento = styled.div`
display:grid;
width:20vw;
height:50vh;
`
const Resumo = styled.div`
display:grid;
justify-items:space-around;
padding:0%;
margin:0%;`

const Botao = styled.div`
display:grid;
margin:10%;
justify-content:right;
`
const Voltar = styled.div`
text-align:center;
border:2px solid;
width: 8vw;
margin:auto;
`
const Desistir = styled.div`
text-align:center;
width: 8vw;
margin:auto;
`

export default class Carrinho extends Component {
    state = {
        contratante: false
    }
    mostrarContratante = () => {
        this.setState({ contratante: !this.state.contratante })

    }
    contratou = () => {
        alert("Serviço contratado com Sucesso")
    }
    Desistir = () => {
        alert("Tem certeza que você deseja desistir da proposta?")
    }
    render() {
        return (
            <div>
                    <BodyCarrinho>
                        <header></header>
                        <CardProposta>

                            <h3>Revise a Proposta:</h3>
                            <Resumo>
                                <h6>Serviço:</h6>
                                <h6>Descrição:</h6>
                                <h6>Valor:</h6>
                                <h6>Prazo:</h6>
                            </Resumo>
                        </CardProposta>


                        <CardPagamento>
                            <h3>Método de Pagamento</h3>
                            <select>
                                <option>escolha</option>
                                <option>Cartão Débito</option>
                                <option>Boleto</option>
                                <option>Pix</option>
                                <option>Cartão Crédito</option>
                            </select>
                            <br></br>
                            <h3>Valor Total</h3>
                            <p>R$ 00,00</p>
                            <Desistir>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.contratou}> Contratar</Button>
                            </Desistir>
                        </CardPagamento>
                    </BodyCarrinho>

                    <Desistir>
                        <Button

                            variant="contained"
                            color="secundary"
                            onClick={this.Desistir}> Desistir</Button>
                    </Desistir>

                    <Botao>
                        <Button
                            className="Prestador"
                            variant="contained"
                            color="primary"
                            onClick={this.props.voltar}
                        >
                            Voltar
                        </Button>
                    </Botao>

            </div>
        )
    }
}
