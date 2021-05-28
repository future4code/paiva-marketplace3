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
import axios from "axios"

const Filtro = styled.div`
  margin: 10px;
  display: flex;
  padding: 10px;
  height: 300px;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  border: 1px outset darkgrey;
`;

const Card = styled.div`
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

const BotaoCarrinho = styled.button`
display:flex;
justify-content:right;
`;
//----------------API-------------//
const url = `https://labeninjas.herokuapp.com/jobs`;
const header = {
    headers: {
        Authorization: "76aaaa55-e50c-4e30-9afa-11699cef111a"
    }
};
//----------------API-------------//
export default class Contratante extends Component {
    state={
        serviços:[]
    }
    componentDidMount() { this.getAllJobs() }

    getAllJobs = async () => {
        await axios
            .get(url, header)
            .then((certo) => {
                this.setState({serviços:certo.data.jobs})
                console.log(certo.data.jobs)
            })
            .catch((errado) => {
                console.log(errado)
            })
    }
    render() {
        console.log(this.props);
        const mostraServiços = this.state.serviços.map((serviço)=>{
            return <Card> <h4>{serviço.title}</h4>
            <h4>{serviço.description}</h4>
            <p>{serviço.price}</p>
            <Button variant="contained" color="secondary">
                ADD Carrinho
</Button>
            </Card>
        })

        return (
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

                <div>
                    <Filtro>
                        <h4>Filtro</h4>

                        <p>Buscar por nome </p>
                        <input type="text" id="txtBuscar" />

                        <p>Valor </p>

                        <input type="ranger" min="-10" max="10" step="0.01" />

                        <span>Ordenações:</span>
                        <select>
                            <option>Título A-Z</option>
                            <option>Título Z-A</option>
                            <option>Prazo 3 dias</option>
                            <option>Prazo 3 dias</option>
                            <option>Prazo 10 dias</option>
                        </select>
                    </Filtro>
                </div>
                <BotaoCarrinho>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.props.irParaCarrinho}
                    >
                        Ver Carrinho
          </Button>
                </BotaoCarrinho>
               {mostraServiços}
            </div>
        );
    }
}
