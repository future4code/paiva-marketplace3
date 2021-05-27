import React from "react";
import logoFacebook from "../imagens/facebookIcon.svg";
import logoInstagram from "../imagens/instagramIcon.svg";
import logoTwitter from "../imagens/twitterIcon.svg";
import logoLinkedin from "../imagens/linkedinIcon.svg";
import styled from "styled-components";

const AreaFooter = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  height: 70px;
  background-color: #8166cb;

  h5 {
    position: relative;
    left: 40px;
    top: 15px;
    text-align: left;
    color: white;
    font-size: 12px;
  }

  h3 {
    position: relative;
    text-align: center;
    color: white;
    bottom: 15px;
  }

  img {
    position: relative;
    left: 1200px;
    bottom: 45px;
    margin: 10px;
    width: 30px;
  }
`;

export default function Footer() {
  return (
    <footer>
      <AreaFooter>
        <h5>2021 - LabeNinjas - CNPJ 00.000.000/000-00</h5>
        <h5> Avenida Paulista - São Paulo/SP - Brasil</h5>
        <h3>Fale conosco: 0800 000 000</h3>
        <img src={logoFacebook} alt="Facebook Do LabeNinjas" />
        <img src={logoInstagram} alt="Instagram Do LabeNinjas" />
        <img src={logoTwitter} alt="Twitter Do LabeNinjas" />
        <img src={logoLinkedin} alt="Linkedin Do LabeNinjas" />
      </AreaFooter>
    </footer>
  );
}
