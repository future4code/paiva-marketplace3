import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { listarServiços } from "../api";

const Filtro = styled.section`
  border: 1px solid black;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  row-gap: 16px;
  padding: 32px;
`;

const Ordernação = styled.section`
  border: 1px solid black;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  row-gap: 16px;
  padding: 32px;
`;

const Card = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px outset darkgrey;

  button {
    display: flex;
    align-self: center;
    margin-bottom: 16px;
    border-radius: 8px;
  }
`;

const BotaoCarrinho = styled.div`
  display: flex;
  justify-content: right;
`;

export default class Contratante extends Component {
  state = {
    serviços:  [],
    carrinho:  [],
    mínimo:    "",
    máximo:    "",
    título:    "",
    descrição: "",
    ordernar:  "Título A-Z"
  }

  componentDidMount() {
    this.listarServiços();
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    this.setState({ carrinho });
  }

  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
  }

  listarServiços = () => {
    listarServiços()
      .then((certo) => {
        this.setState({ serviços: certo.data.jobs });
      })
      .catch((errado) => {
        alert(`Erro ao pegar os serviços\nErro:${JSON.stringify(errado)}`);
      });
  }

  filtro = (serviço) => {
    const {
      title, price, taken, description
    } = serviço;

    let mínimo = Number(this.state.mínimo);
    let máximo = Number(this.state.máximo);
    const título = new RegExp(this.state.título, "i");
    const descrição = new RegExp(this.state.descrição, "i");

    if (!mínimo || mínimo < 0)
      mínimo = -Infinity;

    if (!máximo || mínimo > máximo || máximo <= 0)
      máximo = Infinity;

    return !taken && price >= mínimo && price <= máximo && title.match(título)
           && description.match(descrição);
  }

  ordernar = (serviçoA, serviçoB) => {
    if (this.state.ordernar === "Título A-Z")
      return serviçoA.title
        .localeCompare(serviçoB.title, { ignorePunctuation: true });

    if (this.state.ordernar === "Título Z-A")
      return serviçoB.title
        .localeCompare(serviçoA.title, { ignorePunctuation: true });

    if (this.state.ordernar === "Valor Crescente")
      return serviçoA.price - serviçoB.price;

    if (this.state.ordernar === "Valor Decrescente")
      return serviçoB.price - serviçoA.price;

    if (this.state.ordernar === "Prazo Crescente")
      return new Date(serviçoA.date) - new Date(serviçoB.date);

    if (this.state.ordernar === "Prazo Decrescente")
      return new Date(serviçoB.date) - new Date(serviçoA.date);
  }

  changeInputValues = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  lidarCarrinho = (serviço) => {
    if (this.state.carrinho.find((carrinho) => carrinho.id === serviço.id))
      return this.removerDoCarrinho(serviço.id);

    return this.adicionarNoCarrinho(serviço);
  }

  removerDoCarrinho = (id) => {
    if (!confirm("Certeza Que Desja Remover o Serviço Do Carrinho?"))
      return;

    const carrinho = this.state.carrinho.filter((serviço) => serviço.id !== id);
    this.setState({ carrinho });
  }

  adicionarNoCarrinho = (serviço) => {
    this.setState({ carrinho: [ ...this.state.carrinho, serviço ] });
    return alert("Serviço Adicionado No Carrinho");
  }

  render() {
    const mostraServiços = this.state.serviços
      .filter(this.filtro)
      .sort(this.ordernar)
      .map((serviço) => (
        <Card key={serviço.id}>
          <h4>{serviço.title}</h4>
          <h4>{serviço.description}</h4>
          <p>{`R$ ${serviço.price}`}</p>
          <Button variant="contained" onClick={() => this.lidarCarrinho(serviço)}>
            {`${this.state.carrinho.find((carrinho) => carrinho.id === serviço.id)
              ? "Remover do"
              : "Adicionar ao"} carrinho`}
          </Button>
        </Card>
      ));

    return (
      <main>
        <Button variant="contained" onClick={this.props.irParaInício}>
          Ir Para A Página Inicial
        </Button>
        <Filtro>
          <h4>Filtro</h4>
          <TextField
            placeholder="Buscar Por Título"
            label="Título"
            name="título"
            value={this.state.título}
            onChange={this.changeInputValues}
            variant="outlined"
          />
          <TextField
            placeholder="Buscar Por Descrição"
            label="Descrição"
            name="descrição"
            value={this.state.descrição}
            onChange={this.changeInputValues}
            variant="outlined"
          />
          <TextField
            placeholder="Valor Mínimo Do Serviço"
            label="Valor Mínimo"
            name="mínimo"
            value={this.state.mínimo}
            onChange={this.changeInputValues}
            variant="outlined"
          />
          <TextField
            placeholder="Valor Máximo Do Serviço"
            label="Valor Máximo"
            name="máximo"
            value={this.state.máximo}
            onChange={this.changeInputValues}
            variant="outlined"
          />
        </Filtro>
        <Ordernação>
          <FormControl>
            <InputLabel id="ordenação-label">
              Ordernação
            </InputLabel>
            <Select
              variant="outlined"
              labelId="ordenação-label"
              name="ordernar"
              label="Ordernação"
              value={this.state.ordernar}
              onChange={this.changeInputValues}
            >
              <MenuItem disabled value=""><em>Ordenar Por</em></MenuItem>
              <MenuItem value="Título A-Z">Título A-Z</MenuItem>
              <MenuItem value="Título Z-A">Título Z-A</MenuItem>
              <MenuItem value="Valor Crescente">Valor Crescente</MenuItem>
              <MenuItem value="Valor Decrescente">Valor Decrescente</MenuItem>
              <MenuItem value="Prazo Crescente">Prazo Crescente</MenuItem>
              <MenuItem value="Prazo Decrescente">Prazo Decrescente</MenuItem>
            </Select>
          </FormControl>
        </Ordernação>
        <BotaoCarrinho>
          <Button variant="contained" onClick={this.props.irParaCarrinho}>
            Ver Carrinho
          </Button>
        </BotaoCarrinho>
        {mostraServiços}
      </main>
    );
  }
}
