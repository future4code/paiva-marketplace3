import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import people from "../img/peoples.png";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  img {
    width: 100%;
    align-self: end;
  }
`;

const ButtonContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2vh;
  margin-top: 2vh;
  justify-items: center;

  @media screen and (min-width: 850px) {
    margin-top: 0;
    grid-template-columns: 1fr auto;
  }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 850px) {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export default class Inicial extends Component {
  render() {
    return (
      <Main>
        <Section>
          <article>
            <h2>Quem somos</h2>
            <br/>
            <p>Criada em 2021 por jovens desenvolvedores, LabeNinjas quer fazer a diferença.</p>
            <p>no mercado para contratação de serviços pela web.</p>
            <br/>
            <p>Neste momento nossa plataforma que está em fase de teste e já detém cerca de</p>
            <p>50 categorias de serviços cadastrados.</p>
            <br/>
            <p> Temos o compromisso de entregar aos nossos usuaários um contato eficaz, ágil e seguro.</p>
            <br/>
            <p>Queremos ser a maior e a melhor plataforma para contratação de serviços!</p>
            <p>Queremos faciliar o seu dia a dia!</p>
            <p>Queremos você usando nossa plataforma!</p>

            <p> Faça sua inscrição grátis!</p>

          </article>
          <ButtonContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.irParaPrestador}
            >
              Prestador de serviços
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.irParaContratante}
            >
              Contratante
            </Button>
          </ButtonContainer>
        </Section>
        <img src={people} alt="pessoas"/>
      </Main>
    );
  }
}
