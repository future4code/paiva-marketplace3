import React from "react";
import logoLabeninjas from "../imagens/logoHeader.png";
import styled from "styled-components";
import "../index.css";

const imgBorder = "clamp(7px, 1vh, 15px)";

const AreaHeader = styled.header`
  width: 100%;
  height: clamp(100px, 14vh, 200px);
  display: grid;
  grid-gap: clamp(12px, 2vh, 24px);
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-content: center;

  img {
    height: clamp(calc(100px - 2 * ${imgBorder}), 12vh, calc(200px - 2 * ${imgBorder}));
    border: ${imgBorder} solid #FFFFFF;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);;
  }
`;

const Empety = styled.section`
  background-color: #8166cb;
  height: 100%;
`;

export default function Header() {
  return (
    <AreaHeader>
      <Empety/>
      <img src={logoLabeninjas} alt="Logo Do LabeNinjas"/>
      <Empety/>
    </AreaHeader>
  );
}

