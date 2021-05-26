import React from "react";
import logoFacebook from "../imagens/facebookIcon.svg";
import logoInstagram from "../imagens/instagramIcon.svg";
import logoTwitter from "../imagens/twitterIcon.svg";
import logoLinkedin from "../imagens/linkedinIcon.svg";

export default function Footer() {
  return (
    <footer>
      <section>
        <p>2021 - LabeNinjas - CNPJ 00.000.000/000-00</p>
        <p> Avenida Paulista - São Paulo/SP - Brasil</p>
      </section>
      <section>
        <img src={logoFacebook} alt="Facebook Do LabeNinjas"/>
        <img src={logoInstagram} alt="Instagram Do LabeNinjas"/>
        <img src={logoTwitter} alt="Twitter Do LabeNinjas"/>
        <img src={logoLinkedin} alt="Linkedin Do LabeNinjas"/>
      </section>
    </footer>
  );
}
