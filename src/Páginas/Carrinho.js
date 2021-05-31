import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BodyCarrinho = styled.body`
  display: flex;
  align-content: center;
  justify-content: space-around;
  height: 60vh;
`;

const CardProposta = styled.div`
  display: grid;
  margin-top: 50px;
  padding: 10px;
  justify-content: space-around;
  box-shadow: 2px 5px 5px;
  width: 20vw;
  height: 20vh;
`;

const CardPagamento = styled.div`
  display: grid;
  margin-top: 50px;
  width: 20vw;
  height: 50vh;
`;

const Resumo = styled.div`
  display: grid;
  justify-items: space-around;
  padding: 0%;
  margin: 0%;
`;

const Voltar = styled.div`
  display: grid;
  margin: 10%;
  justify-content: right;
`;

const Desistir = styled.div`
  text-align: center;
  width: 8vw;
  margin: auto;
`;

export default class Carrinho extends Component {
  state = {
    carrinho: [],
  };

  componentDidMount() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    this.setState({ carrinho });
  }

  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
  }

  contratou = () => {
    toast.dark("Serviços contratados com sucesso 🐱‍👤");
  };

  desistir = (id) => {
    if (!window.confirm("Tem certeza que deseja remover o item do carrinho?"))
      return;

    const carrinho = this.state.carrinho.filter((serviço) => serviço.id === id);
    this.setState({ carrinho });
    toast.dark("Itens removidos com sucesso")
  };

  render() {
    console.log(this.state.carrinho);
    const mostraCarrinho = this.state.carrinho.map((serviço) => (
      <CardProposta key={serviço.id}>
        <h3>Serviço: {serviço.title}</h3>
        <Resumo>
          <h6>Descrição: {serviço.description}</h6>
          <h6>Valor: R$ {serviço.price}</h6>
          <h6>Prazo: {serviço.dueDate}</h6>
          <h6>Forma de pagamento: {serviço.paymentMethods} </h6>
        </Resumo>
        
      </CardProposta>
      
    ));

    return (
      <div>
        <BodyCarrinho>
          <header />
          {mostraCarrinho}

          <CardPagamento>
            <h3>Método de Pagamento</h3>
            <select>
              <option>Escolha o método:</option>
              <option>Cartão Débito</option>
              <option>Boleto</option>
              <option>Pix</option>
              <option>Cartão Crédito</option>
            </select>
            <br />
            <h3>Valor Total</h3>
            <p>R$ 0,00</p>
            <Desistir>
              <Button
                variant="contained"
                color="primary"
                onClick={this.contratou}
              >
                Contratar
              </Button>
            </Desistir>
          </CardPagamento>
        </BodyCarrinho>

        <Desistir>
          <Button variant="contained" color="secundary" onClick={this.desistir}>
            Desistir das propostas
          </Button>
        </Desistir>

        <Voltar>
          <Button
            className="Prestador"
            variant="contained"
            color="primary"
            onClick={this.props.voltar}
          >
            Voltar
          </Button>
        </Voltar>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}
