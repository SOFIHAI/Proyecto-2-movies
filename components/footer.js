const footer = document.querySelector('footer');

const myFooter = () => {
  
  const user = JSON.parse(localStorage.getItem('userLog')) || undefined;
  return (footer.innerHTML = `<section class="container-fluid bg-black">
  <article class="row" id="cuerpoFooter">
    <aside class="col-xl-3 col-sm-3 col-md-3">
      <p class="h5">PelisGrupo2</p>
      <ul>
        <li>Dirección: Mate de Luna 1234</li>
        <li>Teléfono: + 38 126 691 113</li>
        <li>Email: pelisgrupo2@gmail.com</li>
      </ul>
    </aside>
    <aside class="col-xl-3 col-sm-3 col-md-3">
      <p class="h5">Navegación</p>
      <ul>
        <li><a href="">Quienes Somos</a></li>
        <li><a href="./index.html">Inicio</a></li>
        <li><a href="./page/contacto.html">Contactanos</a></li>
        <li><a href="./page/error404.html">Nuestra Historia</a></li>
      </ul>
    </aside>
    <aside class="col-xl-3 col-sm-3 col-md-3">
      <p class="h5">Legal</p>
      <ul>
        <li><a href="./page/error404.html">Términos y condiciones</a></li>
        <li><a href="./page/error404.html">Política de privacidad</a></li>
        
      </ul>
    </aside>
    <aside class="col-xl-3 col-sm-3 col-md-3">
      <p class="h5">Redes Sociales</p>
      <ul>
        <li>
          <a href=""><i class="bi bi-facebook"></i> Facebook</a>
        </li>
        <li>
          <a href=""><i class="bi bi-twitter"></i> Twitter</a>
        </li>
        <li>
          <a href=""><i class="bi bi-instagram"></i> Instagram</a>
        </li>
        <li>
          <a href=""><i class="bi bi-linkedin"></i> LinkedIn</a>
        </li>
      </ul>
    </aside>
  </article>
  <article class="row" id="copyrightFooter">
    <p class="h6 text-center">&copy; 2023 Grupo 2. Todos los derechos reservados.</p>
  </article>
</section>`);
};

export default myFooter;