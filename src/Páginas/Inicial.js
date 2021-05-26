import React, { Component } from "react";
import Button from "@material-ui/core/Button";
// import styled from "styled-components";
import foto from "../img/peoples.png";

/*const section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px;
  justify-items: center;
  align-items: center;
`;*/

const Body = () => {
  return (
    <div>
      <img src={foto} alt="people"/>
    </div>
  );
};


export default class Inicial extends Component {
  render() {
    return (
      <div>
        <section className="CardQuemSomos">
          <h2>Quem somos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Ad veniam laboriosam maiores est excepturi laudantium voluptates?
            Ipsa minus impedit vero!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Ad veniam laboriosam maiores est excepturi laudantium voluptates?
            Ipsa minus impedit vero!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            fugiat, <br />
            placeat explicabo ab eum sequi vel ipsum, aspernatur voluptatibus
            magnam unde <br />
            dolores recusandae vero eveniet cupiditate, itaque repellendus iste.
            Magni?
          </p>
        </section>

        <section className="botaoBody">
          <Button 
            variant="contained" 
            color="primary"
            onClick={this.props.irParaPrestador}
          >
            Prestador de serviços
          </Button>
          <br />
          <Button 
            variant="contained" 
            color="primary"
            onClick={this.props.irParaContratante}
          >
            Contratante
          </Button>
        </section>

        <section></section>
      </div>
    );
  }
}
