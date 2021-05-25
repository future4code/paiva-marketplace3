import React from "react";
import styled from "styled-components";

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
  state = {};

  render() {
    return (
      <Section>
        <CardCadastro>
          <h2>CADASTRO DE SERVIÇOS </h2>

          <input placeholder="Serviço"></input>
          <input placeholder="Descrição"></input>
          <input placeholder="Valor"></input>
          <div>
            <select
              placeholder="Forma de pagamento"
              name="Forma de Pagamento"
              id="pagamento"
            >
              <option>Forma de Pagamento</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Débito">Cartão de Débito</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Paypall">Paypall</option>
            </select>
            <input placeholder="Prazo"></input>
          </div>
          <button>Cadastrar serviços</button>
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
