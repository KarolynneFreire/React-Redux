import React from "react";

const Footer = () => {
  return (

    <footer class=" text-center text-white">
    <div class="container p-4">
     
      <section class="mb-4 icone">
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-facebook"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-twitter"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-google"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-instagram"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-linkedin"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-youtube"></i></a>
          </section>

          <section class="">
        <form action="">
          <div class="row d-flex justify-content-center">
            <div class="col-auto">
              <p class="pt-2">
                <strong>Seja nosso cliente VIP</strong>
              </p>
            </div>
  
            <div class="col-md-5 col-12">
              <div class="form-outline form-white mb-4">
                <input type="email" id="form5Example21" class="form-control" />
                <label class="form-label" for="form5Example21">Coloque seu Email</label>
              </div>
            </div>
  
            <div class="col-auto btn-solic">
              <button type="submit" class="btn btn-outline-light mb-4 ">
                Solicitar
              </button>
            </div>
          </div>
        </form>
      </section>

      <section class="mb-4">
        <p>
    Cliente VIP é aquele que compra em nossa agência há algum tempo e apresenta um ticket médio elevado. Para identificá-lo, 
            é preciso analisar com minúcia da nossa base de cadastros, verificar a quantidade e frequência de compra,
             os tipos de serciços adquiridos e, principalmente, as cifras gastas por esse consumidor.
        </p>
      </section>

      <div class="text-center p-3">
      © 2021 SUSAN VIAGENS
    </div>

        </div>
        </footer>
  );
};

export default Footer;