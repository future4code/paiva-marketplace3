import React from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2%;
  top: 15px;
  gap: 1%;
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
  height: 50vh;
  width: 50vw;
  justify-content: space-around;
  text-align: center;
`;
const CardServiços = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;
const Servico = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  border-radius: 18px;
  border-bottom: 2px solid;
  padding: 2%;
  margin: 2%;
  width: 30vw;
`;
const Separar = styled.div`
  display: flex;
  justify-content: space-around;
`;

//----------------API-------------//

const url = "https://labeninjas.herokuapp.com/jobs";
const header = {
  headers: { Authorization: "76aaaa55-e50c-4e30-9afa-11699cef111a" },
};

//----------------API-------------//

export default class FormPrestador extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    paymentMethods: "",
    dueDate: "",
    serviços: [],
  };

  changeInputValues = (e) => {
    if (e.target.id === "pagamento")
      this.setState({ [e.target.name]: [e.target.value] });
    else this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = async () => {
    await axios
      .get(url, header)
      .then((certo) => {
        this.setState({ serviços: certo.data.jobs });
      })
      .catch((errado) => {});
  };

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
        toast.dark("Serviço cadastrado com sucesso!");
        this.setState({
          title: "",
          description: "",
          price: "",
          paymentMethods: "",
          dueDate: "",
        });
      })
      .catch((err) => {
        toast.dark(err.response.data.message);
      });
  };

  deleteJob = (id) => {
    if (window.confirm("Tem certeza que quer deletar este serviço?"))
      axios
        .delete(`${url}/${id}`, header)

        .then(() => {
          toast.dark("Serviço deletado com sucesso!");
          this.getAllJobs();
        })
        .catch((err) => {
          toast.dark("Erro ao deletar serviço, tente novamente");
        });
  };

  render() {
    const mostraServiços = this.state.serviços.map((serviço) => (
      <CardServiços key={serviço.id}>
        {serviço.title}
        <button onClick={() => this.deleteJob(serviço.id)}>X</button>
      </CardServiços>
    ));

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

            {/*Retorna serviços cadastrados com botão de delete */}
          </CardServiços>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Section>
    );
  }
}
