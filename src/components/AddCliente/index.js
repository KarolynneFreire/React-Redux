import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddCliente = ({ cliente, addCliente }) => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkClienteCpfExists = cliente.filter((cliente) =>
    cliente.cpf === cpf ? cliente : null
    );
    

   

    const data = {
      id: cliente.length > 0 ? cliente[cliente.length - 1].id + 1 : 0,
      cpf,
      name,
    };

    addCliente(data);
    toast.success("Cliente cadastrao com sucesso!!");
    history.push("/Cliente");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center  text-white"> Cadastre como nosso cliente</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="cpf"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div className="form-group teste">
              <input
                className="btn btn-cad "
                type="submit"
                value="Salvar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cliente: state,
});
const mapDispatchToProps = (dispatch) => ({
  addCliente: (data) => {
    dispatch({ type: "ADD_CLIENTE", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCliente);