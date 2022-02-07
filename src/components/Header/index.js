import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
     <section class="card-container teste">

<div class="card cad">
  <img src="https://cdn-icons-png.flaticon.com/512/4760/4760483.png"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title center">Contato</h5>
    <p class="card-text center">Selecionamos destidos incriveis para você, algumas com reservas flexíveis e outras a preços incríveis.</p>
    <Link to="/add">
    <a  class="btn btn-cad">Clique aqui</a>
     </Link> 
  </div>
</div>
<div class="card cad">
  <img src="https://cdn-icons-png.flaticon.com/512/4760/4760448.png" alt="..."/>
  <div class="card-body">
    <h5 class="card-title center">Cliente</h5>
    <p class="card-text center">Seja cliente e visite destidos incriveis, com reservas flexíveis e preços incríveis.</p>
    <Link to="/addclient">
    <a  class="btn btn-cad">Clique aqui</a>
    </Link>
  
  </div>
</div>
<div class="card cad">
  <img src="https://cdn-icons-png.flaticon.com/512/4760/4760440.png" alt="..."/>
  <div class="card-body">
    <h5 class="card-title center">Promoções</h5>
    <p class="card-text center">Selecionamos promoções incriveis para você, algumas com reservas flexíveis e outras a preços incríveis.</p>
    <Link to="/Promocao">
    <a class="btn btn-cad">Clique aqui</a>
    </Link>
  </div>
</div>
<div class="card cad">
  <img src="https://cdn-icons-png.flaticon.com/512/4760/4760464.png" alt="..."/>
  <div class="card-body">
    <h5 class="card-title center">Destinos</h5>
    <p class="card-text center">Selecionamos destidos incriveis para você, algumas com reservas flexíveis e outras a preços incríveis.</p>
    <Link to="/Destino">
    <a class="btn btn-cad">Clique aqui</a>
    </Link>
  </div>
</div>
</section>

    <h3>“O que interessa na vida não é prever os perigos das viagens; é tê-las feito.”                 (Agostinho da Silva)</h3>
    </div>
  );
};

export default Header;