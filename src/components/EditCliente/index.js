import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditCliente = ({ cliente, updateCliente }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentCliente = cliente.find(
    (cliente) => cliente.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentCliente.name);
    setCpf(currentCliente.cpf);
  }, [currentCliente]);

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkClienteCpfExists = cliente.filter((cliente) =>
    cliente.cpf === cpf && cliente.id !== currentCliente.id
        ? cliente
        : null
    );
    const checkClienteNameExists = cliente.filter((cliente) =>
    cliente.name === name && cliente.id !== currentCliente.id
        ? cliente
        : null
    );

    if (!cpf || !name) {
      return toast.warning("Por favor preencha todos os campos!!");
    }
    if (checkClienteCpfExists.length > 0) {
      return toast.error("Este email já existe!!");
    }
    if (checkClienteNameExists.length > 0) {
      return toast.error("Este Nome já existe!!");
    }

    const data = {
      id: currentCliente.id,
      cpf,
      name,
    };

    updateCliente(data);
    toast.success("Cliente atualizado com sucesso!!");
    history.push("/Cliente");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        
        <div className="col-md-6 mx-auto shadow p-5 form">
          {currentCliente ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={cpf}
                  placeholder={"CPF"}
                  onChange={(e) => setCpf(e.target.value)}
                />
             
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn novo-btn">
                  Salvar
                </button>
                <button
                  type="button"
                  className="btn novo-btn"
                  onClick={() => history.push("/Cliente")}
                >
                  Voltar
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">
            Nenhum cliente encontrado</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cliente: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateCliente: (data) => {
    dispatch({ type: "UPDATE_CLIENTE", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCliente);