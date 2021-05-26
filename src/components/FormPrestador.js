import React from "react";
import styled from "styled-components";
import axios from "axios";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px;
  justify-items: center;
  align-items: center;
`;

const CardCadastro = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  row-gap: 10px;
  padding: 40px;
  height: 350px;
`;

const CardServiços = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export default class FormPrestador extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    paymentMethods: "",
    dueDate: "",
  };

  changeInputValues = (e) => {
    if (e.target.id === "pagamento") {
      this.setState({ [e.target.name]: [e.target.value] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }

  };

  createJob = (e) => {
    const url = `https://labeninjas.herokuapp.com/jobs`;
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.dueDate,
    };
    console.log(body)
    axios
      .post(url, body, {
        headers: {
          "Authorization": "76aaaa55-e50c-4e30-9afa-11699cef111a",
        },
      })
      .then((res) => {
        alert("Serviço cadastrado com sucesso!")
        this.setState({title: "", description: "", price: "", paymentMethods: "", dueDate: ""});
      })
      .catch((err) => {
        console.log(err.message)
        alert(err.response.data.message)
      });
  };

  render() {
    return (
      <Section>
        <CardCadastro>
          <h2>CADASTRO DE SERVIÇOS </h2>

          <input
            placeholder="Serviço"
            name="title"
            value={this.state.title}
            onChange={this.changeInputValues}
          />
          <input
            placeholder="Descrição"
            name="description"
            value={this.state.description}
            onChange={this.changeInputValues}
          />
          <input
            type='number'
            placeholder="Valor"
            name="price"
            value={this.state.price}
            onChange={this.changeInputValues}
          />
          <div>
            <select
              placeholder="Forma de pagamento"
              name="paymentMethods"
              value={this.state.paymentMethods}
              onChange={this.changeInputValues}
              id="pagamento"
            >
              <option>Forma de Pagamento</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Débito">Cartão de Débito</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Paypall">Paypall</option>
            </select>
            <input
              placeholder="Prazo (ano-mês-dia)"
              name="dueDate"
              value={this.state.dueDate}
              onChange={this.changeInputValues}
            />
          </div>
          <button onClick={this.createJob}>Cadastrar serviços</button>
        </CardCadastro>
        <div>
          <CardServiços>
            <h2>SERVIÇOS CADASTRADOS</h2>

            <p>Nome do serviço: </p>
            <button>X</button>
            <p>Nome do serviço: </p>
            <button>X</button>
            <p>Nome do serviço: </p>
            <button>X</button>

            {/* retorna serviços cadastrados com botão de delete */}
          </CardServiços>

          <button>Voltar</button>
        </div>
      </Section>
    );
  }
}
