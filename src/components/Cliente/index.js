import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Cliente = ({ cliente, deleteCliente }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/addclient" className="btn novo-btn ">
          Seja um Cliente, clique aqui
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header text-white not-color ">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">CPF</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {cliente.length > 0 ? (
                cliente.map((cliente, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{cliente.name}</td>
                    <td>{cliente.cpf}</td>
                    <td>
                      <Link
                        to={`/editar/${cliente.id}`}
                        className="btn novo-btn mr-1"
                      >
                        Editar <i class="bi bi-pencil-square"></i>
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteCliente(cliente.id)}
                        className="btn novo-btn"
                      >
                        Deletar <i class="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>Nenhum cliente encontrado</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cliente: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCliente: (id) => {
    dispatch({ type: "DELETE_CLIENTE", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cliente);
