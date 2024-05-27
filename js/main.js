/* GALERIA */
document.addEventListener("DOMContentLoaded", function () {
  var galleryImages = new Array(
    "01-galeria-home.webp",
    "02-galeria-home.webp",
    "03-galeria-home.webp",
    "04-galeria-home.webp",
    "05-galeria-home.webp",
    "06-galeria-home.webp"
  );
  var photo = `
    <div class="gallery-card">
      <img
        src="./img/${galleryImages[0]}"
        alt="Catamarca"
        class="gallery-img"
      />
    </div>
    `;
  for (let i = 1; i < galleryImages.length; i++) {
    var photo =
      photo +
      `
        <div class="gallery-card">
          <img
            src="./img/${galleryImages[i]}"
            alt="Catamarca"
            class="gallery-img"
          />
        </div>
        `;
  }
  document.querySelector(".gallery-images").innerHTML = photo;
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

//Header --> el boton donde comer por ahora lleva a informacion.html
document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
        <header>
            <nav>
                <div id="mainMenu">
                    <a href="index.html">
                        <img src="./img/main-logo.png" height="70px" alt="Catamarca" />
                    </a>
                    <div id="desktopMenu">
                        <a href="index.html" class="boton1">Home</a>
                        <a href="./sobre-catamarca.html" class="boton1">Sobre Catamarca</a>
                        <div href="./informacion.html" class="boton1" id="botonDesplegable">Informacion
                          <div id="menuDesplegable" class="submenu">
                            <a href="./informacion.html#restaurantes" class="boton2">Donde Comer</a> 
                            <a href="./informacion.html#app" class="boton2">Donde Dormir</a>
                            <a href="./informacion.html#excursiones" class="boton2">Excursiones</a>
                          </div>
                        </div>
                        <a href="./index.html#contacto" class="boton1">Contacto</a>
                    </div>
                    <button id="toggleMenu">&#9776;</button>
                </div>
  
                <div class="mobile-nav">
                    <a href="index.html">Home</a>
                    <a href="./sobre-catamarca.html">Sobre Catamarca</a>
                    <a href="informacion.html#restaurantes">Donde Comer</a>
                    <a href="informacion.html#app">Donde Dormir</a>
                    <a href="informacion.html#excursiones">Excursiones</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </nav>
        </header>
    `;

  // Insertar el HTML del header en el documento
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});

//Menú desplegable

document.addEventListener("DOMContentLoaded", function () {
  var botonDesplegable = document.getElementById("botonDesplegable");
  var menuDesplegable = document.getElementById("menuDesplegable");

  botonDesplegable.addEventListener("mouseenter", function () {
    menuDesplegable.style.display = "block";
  });

  botonDesplegable.addEventListener("mouseleave", function () {
    menuDesplegable.style.display = "none";
  });
});

// FOOTER
document.addEventListener("DOMContentLoaded", function () {
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
                  <a href="sobre-catamarca.html">Sobre Catamarca</a>
                  <a href="informacion.html#restaurantes">Donde Comer</a>
                  <a href="informacion.html#app">Donde Dormir</a>
                  <a href="informacion.html#excursiones">Excursiones</a>
                  <a href="index.html#contacto">Contacto</a>
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

/*galeria donde comer con bucle for*/
function galeria() {
  const galleryImages = new Array(1, 5, 10, 15, 20);

  // Recorrer cada elemento y obtener la ruta de la imagen
  for (let i = 0; i < galleryImages.length; i++) {
    //  const imagePath = galleryImages[i].getAttribute('src');
    //  imagePaths.push(imagePath);
    //document.write(galleryImages[i] + ", ")
    document.querySelector("footer").innerHTML = `
    <div class="gallery-card">
      <img
        src="./img/01-galeria-home.webp"
        alt="Catamarca"
        class="gallery-img"
      />
    </div>
    
    `;
    /*
    <div class="gallery-card">
      <img
        src="./img/01-galeria-home.webp"
        alt="Catamarca"
        class="gallery-img"
      />
    </div>
    */
  }
}

/*GALERIA INFORMACION */
const { createApp } = Vue;
const { appRestoran } = Vue;

createApp({
  data() {
    return {
      url: "https://demo0522475.mockable.io/hoteles",
      datos: [],
      error: false,
    };
  },
  methods: {
    fetchHotelData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.hotels);
          this.datos = data.hotels;
        })
        .catch((error) => {
          console.log("Error:", error);
          this.error = true;
        });
    },
  },
  created() {
    this.fetchHotelData(this.url);
  },
}).mount("#app");

// JSON de restaurantes
createApp({
  data() {
    return {
      url: "https://raw.githubusercontent.com/Nicolaslucero01/CaCProyecto/Julio/js/restaurante.json", //hay que modificar esta URL porque la toma desde mi branch de github
      datosRestoran: [],
      error: false,
    };
  },
  methods: {
    fetchRestaurantData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.restoranes); // Verifica la estructura de los datos recibidos
          this.datosRestoran = data.restoranes; // Asigna los datos a this.datos
          console.log(this.datosRestoran);
        })
        .catch((error) => {
          console.log("Error:", error);
          this.error = true;
        });
    },
  },
  created() {
    this.fetchRestaurantData(this.url);
  },
}).mount("#restaurantes");

//JSON de excursiones
createApp({
  data() {
    return {
      url: "https://raw.githubusercontent.com/Nicolaslucero01/CaCProyecto/Julio/js/excursiones.json", //hay que modificar esta URL porque la toma desde mi branch de github
      datosExcursiones: [],
      error: false,
    };
  },
  methods: {
    fetchExcursionesData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.excursiones); // Verifica la estructura de los datos recibidos
          this.datosExcursiones = data.excursiones; // Asigna los datos a this.datos
          console.log(this.datosRestoran);
        })
        .catch((error) => {
          console.log("Error:", error);
          this.error = true;
        });
    },
  },
  created() {
    this.fetchExcursionesData(this.url);
  },
}).mount("#excursiones");
