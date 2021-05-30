import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import { criarServiço } from "../api";

const Cadastro = styled.section`
  border: 1px solid black;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  row-gap: 16px;
  padding: 32px;
`;

export default class FormPrestador extends React.Component {
  state = {
    title:          "",
    description:    "",
    price:          "",
    paymentMethods: [],
    dueDate:        (new Date).toISOString().split("T")[0]
  };

  changeInputValues = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  criarServiço = () => {
    const body = {
      title:          this.state.title,
      description:    this.state.description,
      price:          Number(this.state.price),
      paymentMethods: this.state.paymentMethods,
      dueDate:        this.state.dueDate
    };

    criarServiço(body)
      .then(() => {
        alert("Serviço cadastrado com sucesso!");
        this.setState({
          title:          "",
          description:    "",
          price:          "",
          paymentMethods: [],
          dueDate:        (new Date).toISOString().split("T")[0]
        });
        this.props.listarServiços();
      })
      .catch((erro) => {
        alert(`Erro ao cadastrar serviço\nErro: ${erro.response.data.message}`);
      });
  };

  render() {
    return (
      <Cadastro>
        <h2>CADASTRO DE SERVIÇOS </h2>
        <TextField
          placeholder="Nome Do Serviço"
          label="Serviço"
          name="title"
          value={this.state.title}
          onChange={this.changeInputValues}
          variant="outlined"
        />
        <TextField
          placeholder="Descrição Do Servico"
          label="Descrição"
          name="description"
          value={this.state.description}
          onChange={this.changeInputValues}
          variant="outlined"
        />
        <TextField
          type="number"
          label="Valor"
          placeholder="Valor Cobrado"
          name="price"
          value={this.state.price}
          onChange={this.changeInputValues}
          variant="outlined"
        />
        <FormControl>
          <InputLabel id="pagamento-label">
            Forma De Pagamento
          </InputLabel>
          <Select
            variant="outlined"
            labelId="pagamento-label"
            name="paymentMethods"
            label="Forma De Pagamento"
            multiple
            value={this.state.paymentMethods}
            onChange={this.changeInputValues}
            renderValue={(selected) => (
              <div>
                {selected.map((value) => <Chip key={value} label={value}/>)}
              </div>
            )}
          >
            <MenuItem disabled value=""><em>Forma De Pagemnto</em></MenuItem>
            <MenuItem value="Dinheiro">Dinheiro</MenuItem>
            <MenuItem value="Cartão de Débito">Cartão de Débito</MenuItem>
            <MenuItem value="Cartão de Crédito">Cartão de Crédito</MenuItem>
            <MenuItem value="Paypall">Paypall</MenuItem>
          </Select>
        </FormControl>
        <TextField
          placeholder="Prazo"
          label="Prazo"
          name="dueDate"
          type="date"
          value={this.state.dueDate}
          onChange={this.changeInputValues}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.criarServiço}
        >
          Cadastrar serviços
        </Button>
      </Cadastro>
    );
  }
}
