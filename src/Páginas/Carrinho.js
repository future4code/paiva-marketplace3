import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { ToastContainer, toast } from "react-toastify";

const Propostas = styled.section`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Proposta = styled.article`
  display: grid;
  margin: 16px;
  padding: 10px;
  grid-gap: 10px;
  justify-items: center; 
  box-shadow: 2px 5px 5px;
  width: 250px;

  .select {
    width: 100%;
  }

  .center {
    margin: 0 auto;
    align-self: center;
  }
`;

const Total = styled.section`
  margin: 16px;
`;

const Voltar = styled.section``;

const Desistir = styled.section``;

export default class Carrinho extends Component {
  state = {
    carrinho:      [],
    paymentMethod: []
  };

  componentDidMount() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const paymentMethod = carrinho.map(() => "");
    this.setState({
      carrinho,
      paymentMethod
    });
  }

  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
  }

  contratou = () => {
    toast.dark("Serviços contratados com sucesso 🐱‍👤");
  };

  mudarPagamento = (index, event) => {
    const paymentMethod = [ ...this.state.paymentMethod ];
    paymentMethod[index] = event.target.value;
    this.setState({ paymentMethod });
  }

  desistirTudo = () => {
    if (!window
      .confirm("Tem certeza que deseja remover todos os itens do carrinho?"))
      return;

    this.setState({ carrinho: [] });
    toast.dark("Itens removidos com sucesso");
  }

  desistir = (id) => {
    if (!window.confirm("Tem certeza que deseja remover o item do carrinho?"))
      return;

    const carrinho = this.state.carrinho.filter((serviço) => serviço.id !== id);
    this.setState({ carrinho });
    toast.dark("Item removido com sucesso");
  };

  ordernar = (serviçoA, serviçoB) => serviçoA.title
    .localeCompare(serviçoB.title, { ignorePunctuation: true })

  carrinhoDosServiços = () => this.state.carrinho
    .sort(this.ordernar)
    .map((serviço, index) => (
      <Proposta key={serviço.id}>
        <h3>{serviço.title}</h3>
        <p>{serviço.description}</p>
        <p>{`R$ ${serviço.price}`}</p>
        <p>{new Date(serviço.dueDate).toLocaleDateString()}</p>
        <FormControl className="select">
          <InputLabel id="pagamento-label">Forma De Pagamento</InputLabel>
          <Select
            variant="outlined"
            labelId="pagamento-label"
            name="paymentMethods"
            label="Forma De Pagamento"
            value={this.state.paymentMethod[index]}
            onChange={(pagamento) => this.mudarPagamento(index, pagamento)}
          >
            <MenuItem disabled value="">
              <em>Forma De Pagemnto</em>
            </MenuItem>
            {serviço.paymentMethods.map((paymentMethod) => (
              <MenuItem key={paymentMethod} value={paymentMethod}>
                {paymentMethod}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          className="center"
          onClick={() => this.desistir(serviço.id)}
        >
          Desistir
        </Button>
      </Proposta>
    ));

  render() {
    return (
      <main>
        <Propostas>{this.carrinhoDosServiços()}</Propostas>
        <Total>
          <h3>Valor Total</h3>
          <p>
            {`R$ ${this.state.carrinho
              .reduce((total, serviço) => total += serviço.price, 0)}`}
          </p>
        </Total>
        <Desistir>
          <Button variant="contained" onClick={this.desistirTudo}>
            Desistir das propostas
          </Button>
        </Desistir>
        <Voltar>
          <Button variant="contained" onClick={this.props.voltar}>
            Voltar Para As Propostas
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
      </main>
    );
  }
}
