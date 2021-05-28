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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Ad veniam laboriosam maiores est excepturi laudantium voluptates?</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Ad veniam laboriosam maiores est excepturi laudantium voluptates?</p>
            <br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium fugiat,
            </p>
            <br/>
            <p>
              placeat explicabo ab eum sequi vel ipsum,
              aspernatur voluptatibus magnam unde,
            </p>
            <p>itaque repellendus iste. Magni?</p>

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
