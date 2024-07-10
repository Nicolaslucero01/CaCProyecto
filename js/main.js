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
                        <img src="./img/main-logo.webp" height="70px" alt="Catamarca" class="img-logo"/>
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
                        <div id="loginPopup" class="popup-overlay">
                          <div class="popup-content">
                            <span class="close">&times;</span>
                            <form id="login-form">
                              <label for="username">Usuario:</label>
                              <input type="text" id="username" name="username" required>
                              <label for="password">Contraseña:</label>
                              <input type="password" id="password" name="password" required>
                              <button type="submit">Iniciar Sesión</button>
                            </form>
                          </div>
                        </div>
                        <a href="./index.html#contacto" class="boton1">Contacto</a>
                        <button id="adminBtn" style="display: none;">CRUD</button>
                        <button id="loginButton" class="boton-login">Login</button> <!-- Botón de login agregado -->
                        <div id="usernameDisplay"></div>
                        <button id="logoutButton" style="display: none;">Logout</button>
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
                    <div id="loginPopup" class="popup-overlay">
                      <div class="popup-content">
                        <span class="close">&times;</span>
                        <form id="login-form">
                          <label for="username">Usuario:</label>
                          <input type="text" id="username" name="username" required>
                          <label for="password">Contraseña:</label>
                          <input type="password" id="password" name="password" required>
                          <button type="submit">Iniciar Sesión</button>
                        </form>
                      </div>
                    </div>
                    <button id="adminBtn" style="display: none;">CRUD</button>
                    <button id="loginButton" class="boton-login">Login</button> <!-- Botón de login agregado para móvil -->
                    <div id="usernameDisplay"></div>
                    <button id="logoutButton" style="display: none;">Logout</button>
                </div>
            </nav>
        </header>
    `;

  // Insertar el HTML del header en el documento
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("toggleMenu").addEventListener("click", function () {
    var mobileNav = document.querySelector(".mobile-nav");
    if (mobileNav.classList.contains("open")) {
      mobileNav.classList.remove("open");
    } else {
      mobileNav.classList.add("open");
    }
  });
});


//Login
document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.getElementById("loginButton");
  const usernameDisplay = document.getElementById("usernameDisplay");
  const logoutButton = document.getElementById("logoutButton");
  const loginPopup = document.getElementById("loginPopup");
  const closeButton = document.querySelector(".close");
  const loginForm = document.getElementById("login-form");

  let usuarios = [];

  // Obtener los usuarios de la API
  fetch('https://natsanabria.pythonanywhere.com/usuarios')
    .then(response => response.json())
    .then(data => {
      usuarios = data;
    })
    .catch(error => console.error('Error al obtener usuarios:', error));

  let isLoggedIn = false;
  let isAdmin = false;
  let username = "";

  // Función para mostrar el popup de login
  function showLoginPopup() {
    loginPopup.style.display = "block";
  }

  // Función para ocultar el popup de login
  function hideLoginPopup() {
    loginPopup.style.display = "none";
  }

  // Función para establecer la sesión como logueado
  function setLoggedInSession(user) {
    isLoggedIn = true;
    isAdmin = user.nivel === "admin";
    username = user.nombre;
    localStorage.setItem("isLoggedIn", "true"); // Usar localStorage para guardar el estado de login
    localStorage.setItem("username", username); // Usar localStorage para guardar el nombre de usuario
    localStorage.setItem("isAdmin", isAdmin); // Guardar el rol de administrador
    updateLoginUI();
  }

  // Función para cerrar sesión
  function logout() {
    isLoggedIn = false;
    isAdmin = false;
    username = "";
    localStorage.removeItem("isLoggedIn"); // Remover el estado de login de localStorage
    localStorage.removeItem("username"); // Remover el nombre de usuario de localStorage
    localStorage.removeItem("isAdmin"); // Remover el rol de administrador de localStorage
    updateLoginUI();
  }

  // Evento click en el botón de login
  loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    showLoginPopup();
  });

  // Evento submit del formulario de login
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    // Validar credenciales contra la lista de usuarios obtenida de la API
    const user = usuarios.find(user => user.nombre === inputUsername && user.clave === inputPassword);

    if (user) {
      setLoggedInSession(user);
      hideLoginPopup();
      if (user.nivel === "admin") {
        window.location.href = "https://visitacatamarcatpi.netlify.app/excursiones.html"; // Redirigir a la página del CRUD para admin
      } else {
        window.location.href = "./index.html"; // Redirigir a la página de excursiones
      }
    } else {
      alert("Credenciales incorrectas. Inténtelo de nuevo.");
    }
  });

  // Función para actualizar la interfaz después de iniciar sesión
  function updateLoginUI() {
    if (isLoggedIn) {
      loginButton.style.display = "none"; // Ocultar el botón de login
      usernameDisplay.innerText = username; // Mostrar el nombre de usuario
      usernameDisplay.style.display = "inline"; // Mostrar el nombre de usuario
      logoutButton.style.display = "inline"; // Mostrar el botón de logout
    } else {
      loginButton.style.display = "inline"; // Mostrar el botón de login
      usernameDisplay.style.display = "none"; // Ocultar el nombre de usuario
      logoutButton.style.display = "none"; // Ocultar el botón de logout
    }
  }

  // Evento click en el botón de cerrar el popup
  closeButton.addEventListener("click", function() {
    hideLoginPopup();
  });

  // Evento click fuera del popup para cerrarlo
  window.addEventListener("click", function(event) {
    if (event.target === loginPopup) {
      hideLoginPopup();
    }
  });

  // Evento click en el botón de logout
  logoutButton.addEventListener("click", function() {
    logout();
  });

  // Verificar el estado de logueado al cargar la página
  const isLoggedInStorage = localStorage.getItem("isLoggedIn");
  if (isLoggedInStorage === "true") {
    isLoggedIn = true;
    username = localStorage.getItem("username");
    isAdmin = localStorage.getItem("isAdmin") === "true";
    updateLoginUI();

  // Si el usuario está logueado como admin al cargar la página, mostrar el botón Admin
    if (isAdmin) {
      document.getElementById("adminBtn").style.display = "inline";
      document.getElementById("adminBtn").addEventListener("click", function() {
        window.location.href = "https://visitacatamarcatpi.netlify.app/excursiones.html";
      });
    }
  }
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
                <img src="./img/logo-footer.webp" height="100px" alt="Catamarca" />
            </div>
            
            <!-- Columna 2: Contacto -->
              <div class="contacto">
                  <h3>Contacto</h3>
                  <a href="https://maps.app.goo.gl/VK8rctNQAdSoULp68" target="_blank">
                      <img src="./img/ubicacion.webp" alt="Ubicación" />
                      Ubicación
                  </a>
                  <br>
                  <a href="tel:+541133332222">
                      <img src="./img/telefono.webp" alt="Teléfono" />
                      +54 11 3333 2222
                  </a>
                  <br>
                  <a href="mailto:catamarca@turismo.com.ar">
                      <img src="./img/email.webp" alt="Correo electrónico" />
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
const app = Vue.createApp({
  data() {
    return {
      url: "https://natsanabria.pythonanywhere.com/excursiones",
      datosExcursiones: [],
      error: false,
    };
  },
  methods: {
    fetchExcursionesData(url) {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => {
          console.log(data); // Verifica los datos recibidos en la consola
          this.datosExcursiones = data; // Asigna los datos a this.datosExcursiones
        })
        .catch(error => {
          console.error('Error:', error);
          this.error = true; // Marca que hubo un error en la carga de datos
        });
    },
  },
  created() {
    this.fetchExcursionesData(this.url); // Llama al método para cargar los datos al iniciar la aplicación
  },
});

app.mount('#excursiones'); // Monta la aplicación Vue en el elemento con id "app"

