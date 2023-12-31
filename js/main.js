import myFooter from "../components/footer.js";
import navbar from "../components/navbar.js";
import { obtenerInformacion } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  navbar();
});

document.addEventListener("DOMContentLoaded", () => {
  myFooter();
});

let contenedor = document.getElementById("contendorPeliculas");

let infoPeliculas = await obtenerInformacion();

infoPeliculas?.peliculas?.map((pelicula) => {
  let div = document.createElement("div");
  div.className = "col-lg-4 col-xl-4 col-md-4 col-3 mt-3 p-1 cards-principal";
  div.id = "cards-1";
  div.innerHTML = `
  <div class="contenedorImgPelicula id="detales">
  <img src="${pelicula.img}" alt="" class="h-100 w-100">
  
</div>
<h5 class="mt-5 text-white">${pelicula.titulo}</h5>
<button class="detalle-btn btn btn-outline-dark btn-sm me-4 mb-2 fs-6 text-white" type="button" id="${pelicula.id}">Detalles</button>
   
  `;
  contenedor.appendChild(div);
});

function cargarBotones() {
  const listaBotones = document.querySelectorAll(".detalle-btn");
  listaBotones.forEach((boton) => {
    boton.onclick = function () {
      let url = "../detalle.html?pelicula=" + encodeURIComponent(boton.id);
      window.open(url, "_blank");
    };
  });
}
window.onload = function () {
  cargarBotones();
};
