import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import people from "../img/peoples.png";

const AreaBody = styled.section`
  .CardQuemSomos {
    position: absolute;
    left: 750px;
  }

  h2 {
    position: relative;
    top: 130px;
  }

  p {
    position: relative;
    top: 150px;
  }

  img {
    position: fixed;
    top: 500px;
    width: 1650px;
  }
`;

const ButtonContainer = styled.section`
  width: 500px;
  display: flex;
  justify-content: space-around;
  position: relative;
  right: 690px;
  top: 50px;

  .Prestador {
    width: 210px;
  }
`;

export default class Inicial extends Component {
  render() {
    return (
      <div>
        <AreaBody>
          <section className="CardQuemSomos">
            <h2>Quem somos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Ad veniam laboriosam maiores est excepturi laudantium voluptates?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Ad veniam laboriosam maiores est excepturi laudantium voluptates?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium fugiat, <br />
              placeat explicabo ab eum sequi vel ipsum, aspernatur voluptatibus
              magnam unde, <br /> itaque repellendus iste. Magni?
            </p>

            <ButtonContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={this.props.irParaPrestador}
              >
                Prestador de serviços
              </Button>

              <Button
                className="Prestador"
                variant="contained"
                color="primary"
                onClick={this.props.irParaContratante}
              >
                Contratante
              </Button>
            </ButtonContainer>
          </section>
          <img src={people} alt="pessoas" />
        </AreaBody>
      </div>
    );
  }
}
