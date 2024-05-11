/* GALERIA */
document.addEventListener("DOMContentLoaded", function () {
  const galleryImages= new Array (1, 5, 10, 15, 20)
  for (let i = 0; i < galleryImages.length; i++) {
    document.querySelector(".gallery-images").innerHTML = `
    <div class="gallery-card">
      <img
        src="./img/01-galeria-home.jpg"
        alt="Catamarca"
        class="gallery-img"
      />
    </div>
    
    `
  }
});

/* MODAL Para mostrar la imagen completa al hacer clic */ 
document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery-img");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      modalImg.src = img.src;
      modal.style.display = "flex"; // Muestra el modal
    });
  });

  // Cierra el modal al hacer clic fuera de la imagen
  modal.addEventListener("click", function () {
    modal.style.display = "none"; // Oculta el modal
  });
});

// FOOTER
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("footer").innerHTML = `
      <div class="footer-grid">
          
          <!-- Columna 1: Logo -->
          <div class="logo">
              <img src="./img/logo-footer.png" height="100px" alt="Catamarca" />
          </div>
          
          <!-- Columna 2: Contacto -->
            <div class="contacto">
                <h3>Contacto</h3>
                <a href="https://maps.app.goo.gl/VK8rctNQAdSoULp68" target="_blank">
                    <img src="./img/ubicacion.png" alt="Ubicación" />
                    Ubicación
                </a>
                <br>
                <a href="tel:+541133332222">
                    <img src="./img/telefono.png" alt="Teléfono" />
                    +54 11 3333 2222
                </a>
                <br>
                <a href="mailto:catamarca@turismo.com.ar">
                    <img src="./img/email.png" alt="Correo electrónico" />
                    catamarca@turismo.com.ar
                </a>
            </div>
            
            <!-- Columna 3: Menú -->
            <div class="menu-footer">
                <a href="index.html">Home</a>
                <a href="index.html">Sobre Catamarca</a>
                <a href="index.html">Donde Comer</a>
                <a href="index.html">Donde Dormir</a>
                <a href="index.html">Excursiones</a>
                <a href="contacto.html">Contacto</a>
            </div>
            
            <!-- Columna 4: Redes Sociales -->
            <div class="redes">
                <h3>Seguinos!</h3>
                <div class="redes-img">
                <a href="https://www.instagram.com"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>
                <a href="https://www.facebook.com"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png" alt="Facebook" /></a>
                </div>
            </div>  
        </div>
    `;
});

/*Para modificar el contenido del header Y QUE SE VEA EN TODAS LLAS LANDING VER CLASE 24/04
document.querySelector("header").innerHTML = `
<a href="index.html" class="boton1">Home</a>
<a href="index.html" class="boton1">Sobre Catamarca</a>
<a href="index.html" class="boton1">Donde Comer</a>
<a href="index.html" class="boton1">Donde Dormir</a>
<a href="index.html" class="boton1">Excursiones</a>
<a href="contacto.html" class="boton1">Contacto</a>`
}); */

//galeria donde comer con bucle for
function galeria(){
  const galleryImages= new Array (1, 5, 10, 15, 20)


  // Recorrer cada elemento y obtener la ruta de la imagen
  for (let i = 0; i < galleryImages.length; i++) {
  //  const imagePath = galleryImages[i].getAttribute('src');
  //  imagePaths.push(imagePath);
  //document.write(galleryImages[i] + ", ")
  document.querySelector("footer").innerHTML = `
  <div class="gallery-card">
    <img
      src="./img/01-galeria-home.jpg"
      alt="Catamarca"
      class="gallery-img"
    />
  </div>
  
  `
  /*
  <div class="gallery-card">
    <img
      src="./img/01-galeria-home.jpg"
      alt="Catamarca"
      class="gallery-img"
    />
  </div>
  */
  }
}
