import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import FormPrestador from "../components/FormPrestador";
import { listarServiços, removerServiço } from "../api";

const Voltar = styled.section``;

const Serviço = styled.section`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const Serviços = styled.article`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export default class Prestador extends Component {
  state = { serviços: [] }

  componentDidMount() { this.listarServiços(); }

  listarServiços = () => {
    listarServiços()
      .then((resposta) => {
        this.setState({ serviços: resposta.data.jobs });
      })
      .catch((erro) => {
        alert(`Erro ao listar os serviços\nErro: ${erro.response.data.message}`);
      });
  }

  removerServiço = (id) => {
    if (!confirm("Certeza Que Deseja Remover O Serviço"))
      return;

    removerServiço(id)
      .then(() => {
        alert("Serviço Removido Com Sucesso");
        this.listarServiços();
      })
      .catch((erro) => {
        alert(`Erro ao remover o serviço\nErro: ${erro.response.data.message}`);
      });
  }

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
      <main>
        <Voltar>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.irParaInício}
          >
            Voltar para Página Inicial
          </Button>
        </Voltar>
        <FormPrestador listarServiços={this.listarServiços}/>
        <Serviços>
          <h2>SERVIÇOS CADASTRADOS</h2>
          {mostraServiços}
        </Serviços>
      </main>
    );
  }
}
