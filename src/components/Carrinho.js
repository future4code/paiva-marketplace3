import React, { Component } from 'react'
import styled from 'styled-components'
import carrinho from '../imagens/carrinho.png'

const Carro = styled.header`
display:flex;
justify-content:space-around;
img{
    width:5vw;
    height:5vw;
    }`

const Section = styled.section`
display:flex;`

export default class Carrinho extends Component {
    render() {
        return (
            <div><Carro>
                <Section>
                <h1>Carrinho</h1>                
                <img src = {carrinho}/>
                </Section>
                <button>Voltar</button>
                
                </Carro>
                <hr />
                <div id="card-proposta">
                    <h3>Revise a Proposta:</h3>
                </div>
                <hr />
                <div id="card-forma-pgto">
                    <h3>Revise seu Pagamento:</h3>
                    <p>Valor total:</p>
                    <p>Forma de Pagamento:</p>
                </div>

                <button>Contratar</button>
                <button>Desistir</button>

            </div>
        )
    }
}
