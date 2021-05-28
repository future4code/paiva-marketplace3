import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import BuildIcon from "@material-ui/icons/Build";
import CakeIcon from "@material-ui/icons/Cake";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import LocalLaundryServiceIcon from "@material-ui/icons/LocalLaundryService";
import LaptopIcon from "@material-ui/icons/Laptop";
import SettingsIcon from "@material-ui/icons/Settings";
import TranslateIcon from "@material-ui/icons/Translate";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Diarista from "../img/Diarista.jpeg";
import Encanador from "../img/Encanador.jpeg";
import Montador from "../img/Montador.jpeg";
import Pintor from "../img/Pintor.jpeg";
import Mecanico from "../img/Mecanico.png";
import baba from "../img/baba.png";
import { Filter } from "@material-ui/icons";

const Filtro = styled.div`
  margin: 10px;
  display: flex;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  height: 300px;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  border: 1px outset darkgrey;
`;

const Section = styled.section`
  display: flex;
  grid-template-columns: 1fr 1fr;
  padding: 100px;
  top: 15px;
  justify-items: center;
  align-items: center;
`;

const Card1 = styled.div`
  display: flex;
  margin: 16px;
  padding: 40px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px outset darkgrey;

  img {
    width: 200px;
    height: 200px;
  }

  button {
    display: flex;
    align-self: center;
    margin-bottom: 16px;
    border-radius: 8px;
  }
`;

const Card2 = styled.div`
  display: flex;
  margin: 16px;
  row-gap: 10px;
  padding: 40px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px outset darkgrey;

  img {
    width: 200px;
    height: 200px;
  }
`;

const Card3 = styled.div`
  display: flex;
  margin: 16px;
  row-gap: 10px;
  padding: 40px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px outset darkgrey;

  img {
    width: 200px;
    height: 200px;
  }
`;

const Card4 = styled.div`
  display: flex;
  margin: 16px;
  row-gap: 10px;
  padding: 40px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px outset darkgrey;

  img {
    width: 200px;
    height: 200px;
  }
`;

const Card5 = styled.div`
  display: flex;
  margin: 16px;
  row-gap: 10px;
  padding: 40px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px outset darkgrey;

  img {
    width: 200px;
    height: 200px;
  }
`;

const Card6 = styled.div`
  display: flex;
  margin: 16px;
  row-gap: 10px;
  padding: 40px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px outset darkgrey;

  img {
    width: 200px;
    height: 200px;
  }
`;
const BotaoCarrinho = styled.button`
  display: flex;
  justify-content: right;
`;

export default class Contratante extends Component {
  adicionarNoCarrinho = () => {
    alert("Adicionado com Sucesso!");
  };

  render() {
    console.log(this.props);

    return (
      <Section>
        <div>
          <button onClick={this.props.irParaInício}>
            Ir Para A Página Inicial
          </button>
          <div>
            <Icon>
              <Icon color="primary" aria-label="add to Build">
                <BuildIcon />
              </Icon>

              <Icon color="primary" aria-label="add to Cake">
                <CakeIcon />
              </Icon>

              <Icon color="primary" aria-label="add to FitnessCenter">
                <FitnessCenterIcon />
              </Icon>

              <Icon color="primary" aria-label="add to LocalLaundryService">
                <LocalLaundryServiceIcon />
              </Icon>

              <Icon color="primary" aria-label="add to Laptop">
                <LaptopIcon />
              </Icon>

              <Icon color="primary" aria-label="add to Settings">
                <SettingsIcon />
              </Icon>

              <Icon color="primary" aria-label="add to Translate">
                <TranslateIcon />
              </Icon>

              <Icon color="primary" aria-label="add to LocalBar">
                <LocalBarIcon />
              </Icon>

              <Icon color="primary" aria-label="add to CameraAlt">
                <CameraAltIcon />
              </Icon>
            </Icon>
          </div>
          
            <Filtro>
              <div>
                <h4>Filtro</h4>

                <p>Buscar por nome: </p>
                <input type="text" value={this.props.nomeFilter} />

                <p>Valor mínimo </p>
                <input
                  type="number"
                  value={this.props.minFilter}
                  onChange={this.props.onChangeMinFilter}
                />

                <p>Valor máximo</p>
                <input
                  type="number"
                  value={this.props.maxFilter}
                  onChange={this.props.onChangeMaxFilter}
                />
                <br />
                <span>Ordenação:</span>
                <br />
                <select>
                  <option>Título A-Z</option>
                  <option>Título Z-A</option>
                  <option>Prazo 3 dias</option>
                  <option>Prazo 5 dias</option>
                  <option>Prazo 10 dias</option>
                </select>
                <br />
                <button>Buscar</button>
              </div>
            </Filtro>
          
          <div>
            <Card1>
              <h4>Pintor de Obras</h4>
              <img src={Pintor} alt="Pintor" />
              <h4>detalhes</h4>
              <p>
                Realiza pintura em paredes internas e externas. Prepara as
                superfícies antes de pintá-las, como limpeza, aplicação de massa
                fina ou corrida e lixamento. Aplica papel de parede e gesso para
                acabamento.
              </p>
              <p>R$ 400,00</p>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.props.adicionarNoCarrinho}
              >
                ADD Carrinho
              </Button>
            </Card1>

            <Card2>
              <h4>Montador</h4>
              <img src={Montador} alt="Montador" />
              <h2>detalhes</h2>
              <p>
                montagem e desmontagem de estruturas, móveis, painéis,e demais
                equipamentos, nas normas e procedimentos técnicos.
              </p>
              <p>R$ 290,00</p>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.props.adicionarNoCarrinho}
              >
                ADD Carrinho
              </Button>
            </Card2>

            <Card3>
              <h4>Encanador</h4>
              <img src={Encanador} alt="Encanador" />
              <h2>detalhes</h2>
              <p>
                {" "}
                manutenção, montagem e reparos de instalações hidráulicas e
                pneumáticas como tubulações de água e gás
              </p>
              <p>R$ 350,00</p>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.props.adicionarNoCarrinho}
              >
                ADD Carrinho
              </Button>
            </Card3>

            <Card4>
              <h4>Mecânico</h4>
              <img src={Mecanico} alt="Mecanico" />
              <h2>detalhes</h2>
              <p>
                manutenção corretiva e preventiva em máquinas e veículos,
                envolvendo a troca de peças e limpeza de componentes, consertos,
                revisão de freios, direção, regulagem de motores e suspensão.
              </p>
              <p>R$ 290,00</p>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.props.adicionarNoCarrinho}
              >
                ADD Carrinho
              </Button>
            </Card4>

            <Card5>
              <h4>Babá</h4>
              <img src={baba} alt="baba" />
              <h2>detalhes</h2>
              <p>
                Cuida de bebês e crianças, zelando pelo bem-estar, saúde,
                alimentação, higiene pessoal,Realiza atividades que estimulam o
                desenvolvimento físico, emocional e motor da criança, viagens e
                consultas médicas.{" "}
              </p>
              <p>R$ 300,00</p>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.props.adicionarNoCarrinho}
              >
                ADD Carrinho
              </Button>
            </Card5>

            <Card6>
              <h1>Diarista</h1>
              <img src={Diarista} alt="Diarista" />
              <h2>detalhes</h2>
              <p>
                Cuida da limpeza e conservação da casa, lava e passa roupas.
              </p>
              <p>R$ 200,00</p>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.props.adicionarNoCarrinho}
              >
                ADD Carrinho
              </Button>
            </Card6>
          </div>
        </div>
      </Section>
    );
  }
}
