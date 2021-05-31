import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import FormPrestador from "../components/FormPrestador";
import { listarServiços, removerServiço } from "../api";

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2%;
  top: 15px;
  gap: 1%;
  justify-items: center;
  align-items: center;
`;

const Voltar = styled.section`
  grid-column: 1 / span 2;
`;

const Serviço = styled.section`
  display: flex;
  text-align: center;
  justify-content: space-between;
  border-radius: 18px;
  border-bottom: 2px solid;
  padding: 2%;
  margin: 2%;
  width: 30vw;
`;

const Serviços = styled.article`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export default class Prestador extends Component {
  state = { serviços: [] };

  componentDidMount() {
    this.listarServiços();
  }

  listarServiços = () => {
    listarServiços()
      .then((resposta) => {
        this.setState({ serviços: resposta.data.jobs });
      })
      .catch((erro) => {
        alert(
          `Erro ao listar os serviços\nErro: ${erro.response.data.message}`
        );
      });
  };

  removerServiço = (id) => {
    if (window.confirm("Tem certeza que deseja remover o serviço?")) {
      removerServiço(id)
        .then(() => {
          alert("Serviço removido com sucesso");
          this.listarServiços();
        })
        .catch((erro) => {
          alert(
            `Erro ao remover o serviço\nErro: ${erro.response.data.message}`
          );
        });
    }
  };

  render() {
    const mostraServiços = this.state.serviços.map((serviço) => (
      <Serviço key={serviço.id}>
        <p>{serviço.title}</p>
        <Button
          onClick={() => this.removerServiço(serviço.id)}
          variant="contained"
          color="secondary"
        >
          Remover
        </Button>
      </Serviço>
    ));

    return (
      <Main>
        <Voltar>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.irParaInício}
          >
            Voltar para Página Inicial
          </Button>
        </Voltar>
        <FormPrestador listarServiços={this.listarServiços} />
        <Serviços>
          <h2>SERVIÇOS CADASTRADOS</h2>
          {mostraServiços}
        </Serviços>
      </Main>
    );
  }
}
