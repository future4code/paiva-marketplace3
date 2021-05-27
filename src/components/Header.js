import React from "react";
import logoLabeninjas from "../imagens/logoHeader.png";
import styled from "styled-components";
import '../index.css';


const AreaHeader = styled.header`
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: 2;
height: 100px;
background-color: #8166cb;

img{
  width: 100px;
  position: relative;
  left: 45%;
  right: 45%;
}
`
export default function Header() {
  return (
    <AreaHeader>
      <img src={logoLabeninjas} alt="Logo Do LabeNinjas"/>
    </AreaHeader>
  );
}

