import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styled from "styled-components";

const Background = styled.section`
  background-color: #8166cb;
  color: white;
  width: 100%;
  height: fit-content;
`;

const FooterStyle = styled.footer`
  width: 100%;
  max-width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  padding: 2vh;
  grid-row-gap: 2vh;

  @media screen and (max-width: 1050px){
    grid-template-columns: 1fr 1fr
  }

  @media screen and (max-width: 700px){
    grid-template-columns: 1fr;
  }
`;

const Endereco = styled.section`
  text-align: center;

  @media screen and (max-width: 700px) {
    grid-row: 3 / span 1;
  }
`;

const RedeSociais = styled.section`
  display: flex;
  justify-content: space-evenly;
  grid-column: 2 / span 1;
  width: 100%;
  max-width: 600px;
  grid-row: 1;

  svg {
    height: clamp(24px, 4vh, 48px);
    min-width: 24px;
    width: 4vh;
    max-width: 48px;
    transition: opacity 300ms;

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 1050px) {
    grid-column: 1 / span 2;
  }

  @media screen and (max-width: 700px) {
    grid-column: 1 / span 1;
  }
`;

const Contato = styled.section``;

export default function Footer() {
  return (
    <Background>
      <FooterStyle>
        <Endereco>
          <h4>2021 - LabeNinjas - CNPJ 00.000.000/000-00</h4>
          <h4> Avenida Paulista - São Paulo/SP - Brasil</h4>
        </Endereco>
        <RedeSociais>
          <FacebookIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
          <LinkedInIcon/>
        </RedeSociais>
        <Contato>
          <h3>Fale conosco: 0800 000 000</h3>
        </Contato>
      </FooterStyle>
    </Background>
  );
}
