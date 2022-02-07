import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentContact.name);
    setEmail(currentContact.email);
    setPhone(currentContact.phone);
  }, [currentContact]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email && contact.id !== currentContact.id
        ? contact
        : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phone === phone && contact.id !== currentContact.id
        ? contact
        : null
    );

    if (!email || !name || !phone) {
      return toast.warning(" Por favor preencha todos os campos!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error(" Este email já existe!!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error(" Este número de telefone já existe!!");
    }

    const data = {
      id: currentContact.id,
      email,
      name,
      phone,
    };

    updateContact(data);
    toast.success("Contato atualizado com sucesso!!");
    history.push("/Contato");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        
        <div className="col-md-6 mx-auto shadow p-5 form">
          {currentContact ? (
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
                  value={email}
                  placeholder={"Email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={phone}
                  placeholder={"Phone"}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn novo-btn">
                  Salvar
                </button>
                <button
                  type="button"
                  className="btn novo-btn"
                  onClick={() => history.push("/Contato")}
                >
                  Voltar
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">Nenhum cliente encontrado</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
