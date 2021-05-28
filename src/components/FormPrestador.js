import React from "react";
import styled from "styled-components";
import axios from "axios";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 100px;
  top: 15px;
  justify-items: center;
  align-items: center;
`;

const CardCadastro = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  row-gap: 10px;
  padding: 40px;
  height: 350px;
`;

const CardServiços = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;
//----------------API-------------//
const url = `https://labeninjas.herokuapp.com/jobs`;
const header = {
    headers: {
        Authorization: "76aaaa55-e50c-4e30-9afa-11699cef111a"
    }
};
//----------------API-------------//

export default class FormPrestador extends React.Component {
    state ={
        title: "", 
        description: "", 
        price: "", 
        paymentMethods: "", 
        dueDate: "", 
        serviços:[]
    }
        
    changeInputValues = (e) => {
        if (e.target.id === "pagamento") {
            this.setState({ [e.target.name]: [e.target.value] });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    };
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
    createJob = (e) => {

        const body = {
            title: this.state.title,
            description: this.state.description,
            price: Number(this.state.price),
            paymentMethods: this.state.paymentMethods,
            dueDate: this.state.dueDate,
        };

        axios
            .post(url, body, header)
            .then((res) => {
                alert("Serviço cadastrado com sucesso!");
                this.setState({
                    title: "",
                    description: "",
                    price: "",
                    paymentMethods: "",
                    dueDate: "",
                });
            })
            .catch((err) => {
                console.log(err.message);
                alert(err.response.data.message);
            });
    };
    

    render() {
        console.log(this.state)
        const mostraServiços = this.state.serviços.map((serviço)=>{
            return <CardServiços>{serviço.title}
               <button>X</button>
            </CardServiços>
        })
                 
        return (
            <Section>
                <CardCadastro>
                    <h2>CADASTRO DE SERVIÇOS </h2>

                    <input
                        placeholder="Serviço"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeInputValues}
                    />
                    <input
                        placeholder="Descrição"
                        name="description"
                        value={this.state.description}
                        onChange={this.changeInputValues}
                    />
                    <input
                        type="number"
                        placeholder="Valor"
                        name="price"
                        value={this.state.price}
                        onChange={this.changeInputValues}
                    />
                    <div>
                        <select
                            placeholder="Forma de pagamento"
                            name="paymentMethods"
                            value={this.state.paymentMethods}
                            onChange={this.changeInputValues}
                            id="pagamento"
                        >
                            <option>Forma de Pagamento</option>
                            <option value="Dinheiro">Dinheiro</option>
                            <option value="Cartão de Débito">Cartão de Débito</option>
                            <option value="Cartão de Crédito">Cartão de Crédito</option>
                            <option value="Paypall">Paypall</option>
                        </select>
                        <input
                            placeholder="Prazo (ano-mês-dia)"
                            name="dueDate"
                            value={this.state.dueDate}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <button onClick={this.createJob}>Cadastrar serviços</button>
                </CardCadastro>
                <div>
                    <CardServiços>
                        <h2>SERVIÇOS CADASTRADOS</h2>                       

                        <p>{mostraServiços}</p>
                     
                        
                        {/* retorna serviços cadastrados com botão de delete */}
                    </CardServiços>
                </div>
            </Section>
        );
    }
}
