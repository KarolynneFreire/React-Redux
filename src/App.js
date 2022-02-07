import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";
import Contato from "./components/Contato";
import Cliente from "./components/Cliente";
import Footer from "./components/Footer";
import Destino from "./components/Destino";
import Promocao from "./components/Promocao";
import AddCliente from "./components/AddCliente";
import EditCliente from "./components/EditCliente";


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />

      <Route exact path="/" component={() => <Home/>} />
      <Route  path="/Contato" component={() => <Contato />} />
      <Route  path="/add" component={() => <AddPost />} />
      <Route  path="/edit/:id" component={() => <EditContact />} />
      <Route  path="/Cliente" component={() => <Cliente/>} />
      <Route  path="/addclient" component={() => <AddCliente />} />
      <Route  path="/editar/:id" component={() => <EditCliente/>} />
      <Route  path="/Destino" component={() => <Destino />} />
      <Route  path="/Promocao" component={() => <Promocao />} />





      <Footer/>


    </div>
  );
};
export default App;
