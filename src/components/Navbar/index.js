import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-toggleable-sm border-bottom box-shadow mb-3 dp-menu">
  <div class="container-fluid">
  <img class="fotomenu" src="https://images.vexels.com/media/users/3/128176/isolated/preview/4086178bba7e381b9324267248ac78f8-icone-de-viagem-do-ponteiro-de-localizacao.png" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      <i class="bi bi-list"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
                        <Link to="/">
                          <a class="nav-link">Inicio</a>
                          </Link>
          
			              </li>
                    <li class="nav-item">
                        <Link to="/Destino">
                          <a class="nav-link">Destinos</a>
                          </Link>
          
			              </li>
                    <li class="nav-item">
                        <Link to="/Promocao">
                          <a class="nav-link">Promoções</a>
                          </Link>
          
			              </li>
                    <li class="nav-item">
                        <Link to="/Cliente">
                          <a class="nav-link">Clientes</a>
                          </Link>
          
			              </li>
                    <li class="nav-item">
                        <Link to="/Contato">
                          <a class="nav-link">Contatos</a>
                          </Link>
          
			              </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
