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
                <a href="informacion.html/#donde-comer">Donde Comer</a>
                <a href="informacion.html/#donde-dormir">Donde Dormir</a>
                <a href="informacion.html/#excursiones">Excursiones</a>
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

/*galeria donde comer con bucle for*/
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
  };
};
/*GALERIA INFORMACION */
const { createApp } = Vue


createApp({
  data() {
    return {
      url: "https://demo0522475.mockable.io/hoteles",
      datos: [],
      error: false,
    }
  },
  methods: {
    fetchData(url) {
      fetch(url) //trae los datos del Json de esa url que recibe como parametro
        .then(response => response.json())
        .then(
          data => {
            console.log(data.hotels)
            this.datos = data.hotels // almacená los datos del Json en el atributo datos de este objeto
          }
        )
        .catch(error => {
          console.log("Error:" + error)
          this.error = true
        });
    }
  },
created() {  // created() se ejecuta cada vez que se crea el objeto VUE
  this.fetchData(this.url) //ejecuta el metodo fetch data de este ojeto VUE
}
}).mount('#app')
/*let data= {

  "hotels": [
  
  
  
   {
  
     "hotel_id": 1,
  
     "chain_id": 421,
  
     "chain_name": "Samed Resorts Group",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Sai Kaew Beach Resort",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Sai Kaew Beach Resort",
  
     "addressline1": "8/1 Moo 4 Tumbon Phe Muang",
  
     "addressline2": "",
  
     "zipcode": "21160",
  
     "city": "Koh Samet",
  
     "state": "Rayong",
  
     "country": "Thailand",
  
     "countryisocode": "TH",
  
     "star_rating": 4,
  
     "longitude": 101.466979,
  
     "latitude": 12.568135,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=1",
  
     "checkin": "2:00 PM",
  
     "checkout": "11:30 AM",
  
     "numberrooms": 160,
  
     "numberfloors": null,
  
     "yearopened": 2000,
  
     "yearrenovated": 2018,
  
     "photo1": "http://pix2.agoda.net/hotelimages/1/-1/0ff4876f93688b8adcbed487b5a2175d.jpg?s=312x",
  
     "photo2": "http://pix1.agoda.net/hotelimages/1/-1/d821f80943f96ebda33f5a019fa94df4.jpg?s=312x",
  
     "photo3": "http://pix4.agoda.net/hotelimages/1/-1/59241704e99027895aa6293d734c9fb1.jpg?s=312x",
  
     "photo4": "http://pix5.agoda.net/hotelimages/1/-1/fce5d70fac02fcb7aa25f31dd25850a8.jpg?s=312x",
  
     "photo5": "http://pix1.agoda.net/hotelimages/1/-1/7952a908de348304417552246f9039de.jpg?s=312x",
  
     "overview": "The 4-star Sai Kaew Beach Resort offers comfort and convenience whether you're on business or holiday in Koh Samet. The property features a wide range of facilities to make your stay a pleasant experience. Free Wi-Fi in all rooms, daily housekeeping, gift/souvenir shop, 24-hour front desk, Wi-Fi in public areas are just some of the facilities on offer. Some of the well-appointed guestrooms feature slippers, separate living room, television LCD/plasma screen, mirror, internet access – wireless. Take a break from a long day and make use of fitness center, sauna, outdoor pool, spa, massage. No matter what your reasons are for visiting Koh Samet, Sai Kaew Beach Resort will make you feel instantly at home.",
  
     "rates_from": 166,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 17222,
  
     "country_id": 106,
  
     "number_of_reviews": 3439,
  
     "rating_average": 8.2,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 6,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Marine Hotel",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Marine Hotel",
  
     "addressline1": "Sutton Cross",
  
     "addressline2": "",
  
     "zipcode": "D13",
  
     "city": "Dublin",
  
     "state": "",
  
     "country": "Ireland",
  
     "countryisocode": "IE",
  
     "star_rating": 3,
  
     "longitude": -6.11034,
  
     "latitude": 53.38884,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=6",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": null,
  
     "numberfloors": null,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix4.agoda.net/hotelimages/6/6/6_1112201742005261861.jpg?s=312x",
  
     "photo2": "http://pix2.agoda.net/hotelimages/6/6/6_1201211018006071850.jpg?s=312x",
  
     "photo3": "http://pix5.agoda.net/hotelimages/6/6/6_0905131455001101926.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/6/6/6_0905131455001101927.jpg?s=312x",
  
     "photo5": "http://pix4.agoda.net/hotelimages/6/6/6_0905131455001101930.jpg?s=312x",
  
     "overview": "Marine Hotel is perfectly located for both business and leisure guests in Dublin. The hotel offers guests a range of services and amenities designed to provide comfort and convenience. Free Wi-Fi in all rooms, 24-hour front desk, luggage storage, car park, room service are just some of the facilities on offer. Comfortable guestrooms ensure a good night's sleep with some rooms featuring facilities such as heating, telephone, television, satellite/cable TV, shower. Entertain the hotel's recreational facilities, including sauna, golf course (within 3 km), indoor pool, garden. No matter what your reasons are for visiting Dublin, Marine Hotel will make you feel instantly at home.",
  
     "rates_from": 144,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 1131,
  
     "country_id": 188,
  
     "number_of_reviews": 12,
  
     "rating_average": 7.4,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 10,
  
     "chain_id": 29,
  
     "chain_name": "Melia Hotels International",
  
     "brand_id": 128,
  
     "brand_name": "Tryp",
  
     "hotel_name": "TRYP Malaga Alameda Hotel",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "TRYP Malaga Alameda Hotel",
  
     "addressline1": "Avenida de la Aurora CC.Larios Centro S/N",
  
     "addressline2": "",
  
     "zipcode": "29002",
  
     "city": "Malaga",
  
     "state": "Andalusia",
  
     "country": "Spain",
  
     "countryisocode": "ES",
  
     "star_rating": 4,
  
     "longitude": -4.432833,
  
     "latitude": 36.716057,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=10",
  
     "checkin": "1:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 132,
  
     "numberfloors": null,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix1.agoda.net/hotelimages/4890100/0/bbdf04328f691e68828c8f49075ace5e.jpg?s=312x",
  
     "photo2": "http://pix2.agoda.net/hotelimages/10/10/10_14041821020019130452.jpg?s=312x",
  
     "photo3": "http://pix5.agoda.net/hotelimages/10/10/10_13051721000012487062.jpg?s=312x",
  
     "photo4": "http://pix5.agoda.net/hotelimages/10/10/10_13051721000012487063.jpg?s=312x",
  
     "photo5": "http://pix2.agoda.net/hotelimages/10/10/10_13051721010012487064.jpg?s=312x",
  
     "overview": "TRYP Málaga Alameda Hotel is perfectly located for both business and leisure guests in Malaga. The hotel has everything you need for a comfortable stay. To be found at the hotel are 24-hour room service, free Wi-Fi in all rooms, 24-hour front desk, facilities for disabled guests, Wi-Fi in public areas. Each guestroom is elegantly furnished and equipped with handy amenities. The hotel's peaceful atmosphere extends to its recreational facilities which include fitness center, sauna. TRYP Málaga Alameda Hotel combines warm hospitality with a lovely ambiance to make your stay in Malaga unforgettable.",
  
     "rates_from": 83,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 12521,
  
     "country_id": 167,
  
     "number_of_reviews": 21,
  
     "rating_average": 7.5,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 13,
  
     "chain_id": 227,
  
     "chain_name": "NH Hotels",
  
     "brand_id": 451,
  
     "brand_name": "NH Hotels",
  
     "hotel_name": "NH Iquique Hotel",
  
     "hotel_formerly_name": "Radisson Hotel Iquique",
  
     "hotel_translated_name": "NH Iquique Hotel",
  
     "addressline1": "Av Costanera 3939",
  
     "addressline2": "",
  
     "zipcode": "1111500",
  
     "city": "Iquique",
  
     "state": "Tarapacá",
  
     "country": "Chile",
  
     "countryisocode": "CL",
  
     "star_rating": 4,
  
     "longitude": -70.129991,
  
     "latitude": -20.269986,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=13",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": null,
  
     "numberfloors": null,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix3.agoda.net/hotelimages/13/0/5f8b6d43a6a287d37bfe1626ab22b0b1.jpg?s=312x",
  
     "photo2": "http://pix4.agoda.net/hotelimages/13/13/13_15072020190032641184.jpg?s=312x",
  
     "photo3": "http://pix5.agoda.net/hotelimages/13/13/13_15072020200032641185.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/13/13/13_15072020200032641186.jpg?s=312x",
  
     "photo5": "http://pix2.agoda.net/hotelimages/13/0/ff8100c85955522a0289e5c71329a17a.jpg?s=312x",
  
     "overview": "NH Iquique Hotel is perfectly located for both business and leisure guests in Iquique. The hotel offers guests a range of services and amenities designed to provide comfort and convenience. All the necessary facilities, including 24-hour front desk, facilities for disabled guests, Wi-Fi in public areas, car park, room service, are at hand. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like television LCD/plasma screen, separate living room, air conditioning, heating, wake-up service. To enhance guests' stay, the hotel offers recreational facilities such as fitness center, outdoor pool. A welcoming atmosphere and excellent service are what you can expect during your stay at NH Iquique Hotel.",
  
     "rates_from": 66,
  
     "continent_id": 8,
  
     "continent_name": "South America",
  
     "city_id": 3527,
  
     "country_id": 69,
  
     "number_of_reviews": 5,
  
     "rating_average": 5.9,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 15,
  
     "chain_id": 21,
  
     "chain_name": "Marriott",
  
     "brand_id": 3821,
  
     "brand_name": "Sheraton",
  
     "hotel_name": "Sheraton Grand Hotel & Spa, Edinburgh",
  
     "hotel_formerly_name": "Sheraton Grand Hotel and Spa Edinburgh",
  
     "hotel_translated_name": "Sheraton Grand Hotel & Spa, Edinburgh",
  
     "addressline1": "1 Festival Square",
  
     "addressline2": "",
  
     "zipcode": "EH39SR",
  
     "city": "Edinburgh",
  
     "state": "Scotland",
  
     "country": "United Kingdom",
  
     "countryisocode": "GB",
  
     "star_rating": 5,
  
     "longitude": -3.207612,
  
     "latitude": 55.947063,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=15",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 269,
  
     "numberfloors": null,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix3.agoda.net/hotelimages/15/0/59a863c3a6e93b759faf2beea910d516.jpg?s=312x",
  
     "photo2": "http://pix5.agoda.net/hotelimages/15/15/15_13072409510013984463.jpg?s=312x",
  
     "photo3": "http://pix2.agoda.net/hotelimages/15/15/15_17091312040056285473.jpg?s=312x",
  
     "photo4": "http://pix4.agoda.net/hotelimages/15/15/15_17091312040056285476.jpg?s=312x",
  
     "photo5": "http://pix5.agoda.net/hotelimages/15/15/15_17091312040056285477.jpg?s=312x",
  
     "overview": "Sheraton Grand Hotel & Spa, Edinburgh is perfectly located for both business and leisure guests in Edinburgh. The hotel has everything you need for a comfortable stay. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, fireplace are there for guest's enjoyment. Each guestroom is elegantly furnished and equipped with handy amenities. The hotel offers various recreational opportunities. Sheraton Grand Hotel & Spa, Edinburgh is an excellent choice from which to explore Edinburgh or to simply relax and rejuvenate.",
  
     "rates_from": 185,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 18924,
  
     "country_id": 107,
  
     "number_of_reviews": 35,
  
     "rating_average": 8.8,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 16,
  
     "chain_id": 496,
  
     "chain_name": "HK CTS Hotels",
  
     "brand_id": 4382,
  
     "brand_name": "Kew Green",
  
     "hotel_name": "Kew Green Hotel Wanchai Hong Kong",
  
     "hotel_formerly_name": "Metropark Hotel Wanchai Hong Kong",
  
     "hotel_translated_name": "Kew Green Hotel Wanchai Hong Kong",
  
     "addressline1": "41-49 Hennessy Road",
  
     "addressline2": "",
  
     "zipcode": "",
  
     "city": "Hong Kong",
  
     "state": "Hong Kong",
  
     "country": "Hong Kong",
  
     "countryisocode": "HK",
  
     "star_rating": 4,
  
     "longitude": 114.170576,
  
     "latitude": 22.277779,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=16",
  
     "checkin": "2:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 173,
  
     "numberfloors": 18,
  
     "yearopened": null,
  
     "yearrenovated": 2007,
  
     "photo1": "http://pix3.agoda.net/hotelimages/16/16/16_17072912020054755824.jpg?s=312x",
  
     "photo2": "http://pix5.agoda.net/hotelimages/16/16/16_15121810140038604789.jpg?s=312x",
  
     "photo3": "http://pix4.agoda.net/hotelimages/16/16/16_13022217540010401585.jpg?s=312x",
  
     "photo4": "http://pix5.agoda.net/hotelimages/16/16/16_13102910330017213949.jpg?s=312x",
  
     "photo5": "http://pix5.agoda.net/hotelimages/16/16/16_15121810140038604781.jpg?s=312x",
  
     "overview": "The 4-star Kew Green Hotel Wanchai Hong Kong offers comfort and convenience whether you're on business or holiday in Hong Kong. Both business travelers and tourists can enjoy the hotel's facilities and services. Service-minded staff will welcome and guide you at the Kew Green Hotel Wanchai Hong Kong. Each guestroom is elegantly furnished and equipped with handy amenities. The hotel's peaceful atmosphere extends to its recreational facilities which include fitness center. Friendly staff, great facilities and close proximity to all that Hong Kong has to offer are three great reasons you should stay at Kew Green Hotel Wanchai Hong Kong.",
  
     "rates_from": 428,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 16808,
  
     "country_id": 132,
  
     "number_of_reviews": 4206,
  
     "rating_average": 8.1,
  
     "rates_currency": "USD"
  
   },
  
  
  
   {
  
     "hotel_id": 18,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Grand Coloane Resort",
  
     "hotel_formerly_name": "Grand Coloane Beach Resort",
  
     "hotel_translated_name": "Grand Coloane Resort",
  
     "addressline1": "1918 Estrada de Hac Sa",
  
     "addressline2": "",
  
     "zipcode": "",
  
     "city": "Macau",
  
     "state": "Macao",
  
     "country": "Macau",
  
     "countryisocode": "MO",
  
     "star_rating": 5,
  
     "longitude": 113.576574,
  
     "latitude": 22.125391,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=18",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 208,
  
     "numberfloors": 8,
  
     "yearopened": 1993,
  
     "yearrenovated": 2014,
  
     "photo1": "http://pix4.agoda.net/hotelimages/18/-1/91c5a3c5d5cc7189b0099fab9a2fbb64.jpg?s=312x",
  
     "photo2": "http://pix1.agoda.net/hotelimages/18/18/18_15060216180028256873.jpg?s=312x",
  
     "photo3": "http://pix4.agoda.net/hotelimages/18/18/18_121122143051695.jpg?s=312x",
  
     "photo4": "http://pix2.agoda.net/hotelimages/18/18/18_121122143052132.jpg?s=312x",
  
     "photo5": "http://pix2.agoda.net/hotelimages/18/18/18_121122143052678.jpg?s=312x",
  
     "overview": "Grand Coloane Resort is conveniently located in the popular Coloane area. The hotel offers a wide range of amenities and perks to ensure you have a great time. Take advantage of the hotel's 24-hour room service, daily housekeeping, free Wi-Fi in all rooms, taxi service, 24-hour security. Designed for comfort, selected guestrooms offer television LCD/plasma screen, additional toilet, bathroom phone, carpeting, clothes rack to ensure a restful night. Entertain the hotel's recreational facilities, including hot tub, fitness center, sauna, golf course (on site), outdoor pool. Grand Coloane Resort is an excellent choice from which to explore Macau or to simply relax and rejuvenate.",
  
     "rates_from": 125,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 21397,
  
     "country_id": 169,
  
     "number_of_reviews": 3657,
  
     "rating_average": 8,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 25,
  
     "chain_id": 2688,
  
     "chain_name": "Skycity",
  
     "brand_id": 3990,
  
     "brand_name": "Skycity",
  
     "hotel_name": "SKYCITY Hotel",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "SKYCITY Hotel",
  
     "addressline1": "Corner Victoria & Federal Streets",
  
     "addressline2": "",
  
     "zipcode": "1010",
  
     "city": "Auckland",
  
     "state": "Auckland",
  
     "country": "New Zealand",
  
     "countryisocode": "NZ",
  
     "star_rating": 4.5,
  
     "longitude": 174.761966,
  
     "latitude": -36.848387,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=25",
  
     "checkin": "3:00 PM",
  
     "checkout": "11:00 AM",
  
     "numberrooms": 323,
  
     "numberfloors": 8,
  
     "yearopened": 1996,
  
     "yearrenovated": null,
  
     "photo1": "http://pix3.agoda.net/hotelimages/25/-1/8dad037385fd554a85e013f931a8a1d5.jpg?s=312x",
  
     "photo2": "http://pix2.agoda.net/hotelimages/25/25/25_15062308450030331242.jpg?s=312x",
  
     "photo3": "http://pix5.agoda.net/hotelimages/25/25/25_15062308460030331423.jpg?s=312x",
  
     "photo4": "http://pix2.agoda.net/hotelimages/25/25/25_15062308460030331424.jpg?s=312x",
  
     "photo5": "http://pix2.agoda.net/hotelimages/25/25/25_15062308460030331425.jpg?s=312x",
  
     "overview": "Skycity Hotel is perfectly located for both business and leisure guests in Auckland. Offering a variety of facilities and services, the hotel provides all you need for a good night's sleep. To be found at the hotel are 24-hour room service, free Wi-Fi in all rooms, wheelchair accessible, casino, 24-hour front desk. Guestrooms are fitted with all the amenities you need for a good night's sleep. In some of the rooms, guests can find television LCD/plasma screen, carpeting, complimentary instant coffee, complimentary tea, mirror. The hotel's peaceful atmosphere extends to its recreational facilities which include fitness center, spa, massage. A welcoming atmosphere and excellent service are what you can expect during your stay at Skycity Hotel.",
  
     "rates_from": 117,
  
     "continent_id": 7,
  
     "continent_name": "Pacific Ocean and Australia",
  
     "city_id": 3750,
  
     "country_id": 25,
  
     "number_of_reviews": 1425,
  
     "rating_average": 8.5,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 33,
  
     "chain_id": 3,
  
     "chain_name": "Accor Hotels",
  
     "brand_id": 36,
  
     "brand_name": "Pullman",
  
     "hotel_name": "Pullman Bordeaux Lac",
  
     "hotel_formerly_name": "Sofitel Bordeaux Aquitania Hotel",
  
     "hotel_translated_name": "Pullman Bordeaux Lac",
  
     "addressline1": "Avenue Jean Gabriel Domergue",
  
     "addressline2": "",
  
     "zipcode": "33300",
  
     "city": "Bordeaux",
  
     "state": "Aquitaine",
  
     "country": "France",
  
     "countryisocode": "FR",
  
     "star_rating": 4,
  
     "longitude": -0.565954,
  
     "latitude": 44.889622,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=33",
  
     "checkin": "2:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": null,
  
     "numberfloors": null,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix3.agoda.net/hotelimages/6584938/0/dc16bcf0fcfe7d2d5110462ebed1705b.jpg?s=312x",
  
     "photo2": "http://pix3.agoda.net/hotelimages/33/33/33_15022714410025654631.jpg?s=312x",
  
     "photo3": "http://pix4.agoda.net/hotelimages/33/33/33_17080709240054945185.jpg?s=312x",
  
     "photo4": "http://pix5.agoda.net/hotelimages/33/33/33_17080709240054945186.jpg?s=312x",
  
     "photo5": "http://pix3.agoda.net/hotelimages/33/33/33_17080709240054945187.jpg?s=312x",
  
     "overview": "Located in Le Lac, Pullman Bordeaux Lac is a perfect starting point from which to explore Bordeaux. Offering a variety of facilities and services, the hotel provides all you need for a good night's sleep. Casino, 24-hour front desk, facilities for disabled guests, luggage storage, Wi-Fi in public areas are just some of the facilities on offer. Each guestroom is elegantly furnished and equipped with handy amenities. To enhance guests' stay, the hotel offers recreational facilities such as fitness center, golf course (within 3 km), outdoor pool, massage, solarium. Pullman Bordeaux Lac is an excellent choice from which to explore Bordeaux or to simply relax and rejuvenate.",
  
     "rates_from": 136,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 12838,
  
     "country_id": 153,
  
     "number_of_reviews": 21,
  
     "rating_average": 8.2,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 34,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Hotel Conde Luna",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Hotel Conde Luna",
  
     "addressline1": "Avenida Independencia, 7",
  
     "addressline2": "",
  
     "zipcode": "24003",
  
     "city": "Leon",
  
     "state": "",
  
     "country": "Spain",
  
     "countryisocode": "ES",
  
     "star_rating": 4,
  
     "longitude": -5.57119,
  
     "latitude": 42.596451,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=34",
  
     "checkin": "2:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": null,
  
     "numberfloors": null,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix3.agoda.net/hotelimages/34/34/34_08091300010079.jpg?s=312x",
  
     "photo2": "http://pix5.agoda.net/hotelimages/34/34/34_1001231702002566194.jpg?s=312x",
  
     "photo3": "http://pix5.agoda.net/hotelimages/34/34/34_0912031414001753274.jpg?s=312x",
  
     "photo4": "http://pix5.agoda.net/hotelimages/34/34/34_0912031414001753275.jpg?s=312x",
  
     "photo5": "http://pix5.agoda.net/hotelimages/34/34/34_0912190835001951320.jpg?s=312x",
  
     "overview": "Stop at Hotel Conde Luna to discover the wonders of Leon. Both business travelers and tourists can enjoy the hotel's facilities and services. 24-hour front desk, luggage storage, room service, meeting facilities, babysitting are on the list of things guests can enjoy. Some of the well-appointed guestrooms feature air conditioning, heating, wake-up service, desk, mini bar. Entertain the hotel's recreational facilities, including massage. No matter what your reasons are for visiting Leon, Hotel Conde Luna will make you feel instantly at home.",
  
     "rates_from": 75,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 7609,
  
     "country_id": 167,
  
     "number_of_reviews": 10,
  
     "rating_average": 8.5,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 36,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Park Suisse Hotel",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Park Suisse Hotel",
  
     "addressline1": "Via Favale 31",
  
     "addressline2": "",
  
     "zipcode": "16038",
  
     "city": "Santa Margherita Ligure",
  
     "state": "Liguria",
  
     "country": "Italy",
  
     "countryisocode": "IT",
  
     "star_rating": 4,
  
     "longitude": 9.211559,
  
     "latitude": 44.330683,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=36",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 72,
  
     "numberfloors": 6,
  
     "yearopened": 1956,
  
     "yearrenovated": 2019,
  
     "photo1": "http://pix5.agoda.net/hotelimages/36/36/36_16060914140043329990.jpg?s=312x",
  
     "photo2": "http://pix2.agoda.net/hotelimages/36/36/36_13121423570017903834.jpg?s=312x",
  
     "photo3": "http://pix1.agoda.net/hotelimages/36/36/36_13121613040017908699.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/36/36/36_13121613040017908703.jpg?s=312x",
  
     "photo5": "http://pix2.agoda.net/hotelimages/36/36/36_16060914140043329983.jpg?s=312x",
  
     "overview": "Set in a prime location of Santa Margherita Ligure, Park Suisse Hotel puts everything the city has to offer just outside your doorstep. Featuring a complete list of amenities, guests will find their stay at the property a comfortable one. 24-hour room service, free Wi-Fi in all rooms, Wi-Fi in public areas, valet parking, car park are on the list of things guests can enjoy. Television LCD/plasma screen, linens, mirror, closet, internet access – wireless can be found in selected guestrooms. The hotel offers various recreational opportunities. Discover all Santa Margherita Ligure has to offer by making Park Suisse Hotel your base.",
  
     "rates_from": 73,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 76473,
  
     "country_id": 205,
  
     "number_of_reviews": 55,
  
     "rating_average": 7.5,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 37,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Hotel Agua Escondida",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Hotel Agua Escondida",
  
     "addressline1": "Guillermo Spartling, 4 Centro ",
  
     "addressline2": "",
  
     "zipcode": "40200",
  
     "city": "Taxco",
  
     "state": "",
  
     "country": "Mexico",
  
     "countryisocode": "MX",
  
     "star_rating": 4,
  
     "longitude": -99.60556,
  
     "latitude": 18.55731,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=37",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": null,
  
     "numberfloors": null,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix4.agoda.net/hotelimages/37/37/37_08112415020080.jpg?s=312x",
  
     "photo2": "http://pix2.agoda.net/hotelimages/37/37/37_13060408140012629582.jpg?s=312x",
  
     "photo3": "http://pix5.agoda.net/hotelimages/37/37/37_080913000100175992.jpg?s=312x",
  
     "photo4": "http://pix2.agoda.net/hotelimages/37/37/37_080913000100175994.jpg?s=312x",
  
     "photo5": "http://pix4.agoda.net/hotelimages/37/37/37_080913000100175995.jpg?s=312x",
  
     "overview": "Located in Taxco City Center, Hotel Agua Escondida is a perfect starting point from which to explore Taxco. The hotel offers guests a range of services and amenities designed to provide comfort and convenience. Service-minded staff will welcome and guide you at the Hotel Agua Escondida. Each guestroom is elegantly furnished and equipped with handy amenities. The hotel offers various recreational opportunities. Convenience and comfort makes Hotel Agua Escondida the perfect choice for your stay in Taxco.",
  
     "rates_from": 45,
  
     "continent_id": 6,
  
     "continent_name": "North America",
  
     "city_id": 708,
  
     "country_id": 86,
  
     "number_of_reviews": 6,
  
     "rating_average": 8.9,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 38,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Hotel Caribe Cartagena",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Hotel Caribe Cartagena",
  
     "addressline1": "Carrera 1, 2-87, Bocagrande",
  
     "addressline2": "",
  
     "zipcode": "130001",
  
     "city": "Cartagena",
  
     "state": "Bolivar",
  
     "country": "Colombia",
  
     "countryisocode": "CO",
  
     "star_rating": 5,
  
     "longitude": -75.560768,
  
     "latitude": 10.397937,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=38",
  
     "checkin": "3:00 PM",
  
     "checkout": "1:00 PM",
  
     "numberrooms": 363,
  
     "numberfloors": 7,
  
     "yearopened": 1941,
  
     "yearrenovated": 2010,
  
     "photo1": "http://pix5.agoda.net/hotelimages/38/38/38_120516001857736.jpg?s=312x",
  
     "photo2": "http://pix3.agoda.net/hotelimages/38/38/38_111102221618017.jpg?s=312x",
  
     "photo3": "http://pix2.agoda.net/hotelimages/38/38/38_0912190005001879680.jpg?s=312x",
  
     "photo4": "http://pix2.agoda.net/hotelimages/38/38/38_0912190005001879681.jpg?s=312x",
  
     "photo5": "http://pix4.agoda.net/hotelimages/38/38/38_0912190005001879683.jpg?s=312x",
  
     "overview": "The 5-star Hotel Caribe Cartagena offers comfort and convenience whether you're on business or holiday in Cartagena. The hotel offers a high standard of service and amenities to suit the individual needs of all travelers. To be found at the hotel are 24-hour room service, free Wi-Fi in all rooms, facilities for disabled guests, Wi-Fi in public areas, car park. Designed for comfort, selected guestrooms offer cleaning products, mirror, closet, separate living room, internet access – wireless to ensure a restful night. Take a break from a long day and make use of hot tub, fitness center, sauna, golf course (on site), outdoor pool. Discover all Cartagena has to offer by making Hotel Caribe Cartagena your base.",
  
     "rates_from": 123,
  
     "continent_id": 8,
  
     "continent_name": "South America",
  
     "city_id": 10838,
  
     "country_id": 10,
  
     "number_of_reviews": 57,
  
     "rating_average": 8.4,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 54,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Haihua Hotel Hangzhou",
  
     "hotel_formerly_name": "Ramada Plaza Hai Hua Hotel",
  
     "hotel_translated_name": "Haihua Hotel Hangzhou",
  
     "addressline1": "No. 298, Qing Chun Road",
  
     "addressline2": "",
  
     "zipcode": "310006",
  
     "city": "Hangzhou",
  
     "state": "Zhejiang",
  
     "country": "China",
  
     "countryisocode": "CN",
  
     "star_rating": 4,
  
     "longitude": 120.160697,
  
     "latitude": 30.258862,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=54",
  
     "checkin": "2:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 245,
  
     "numberfloors": 8,
  
     "yearopened": 1997,
  
     "yearrenovated": 2010,
  
     "photo1": "http://pix4.agoda.net/hotelimages/5081613/0/c4e6fab98811d18cf2d8068e517ccb62.jpg?s=312x",
  
     "photo2": "http://pix1.agoda.net/hotelimages/54/-1/23d1750eb7af9f4863ea16c1c9b0cafb.jpg?s=312x",
  
     "photo3": "http://pix3.agoda.net/hotelimages/54/54/54_16053115400042940736.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/54/-1/1d6641875edae6bfdb4a46b113aa95cb.jpg?s=312x",
  
     "photo5": "http://pix5.agoda.net/hotelimages/54/-1/bb7b19c0413bfb89d67ae49a0d818837.jpg?s=312x",
  
     "overview": "The 4-star Haihua Hotel Hangzhou offers comfort and convenience whether you're on business or holiday in Hangzhou. Featuring a complete list of amenities, guests will find their stay at the property a comfortable one. Free Wi-Fi in all rooms, 24-hour security, daily housekeeping, grocery deliveries, 24-hour front desk are there for guest's enjoyment. Comfortable guestrooms ensure a good night's sleep with some rooms featuring facilities such as television LCD/plasma screen, carpeting, clothes rack, linens, locker. Take a break from a long day and make use of fitness center, sauna, indoor pool, massage. Discover all Hangzhou has to offer by making Haihua Hotel Hangzhou your base.",
  
     "rates_from": 74,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 14892,
  
     "country_id": 191,
  
     "number_of_reviews": 1268,
  
     "rating_average": 7.7,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 59,
  
     "chain_id": 311,
  
     "chain_name": "Tokyu Hotels",
  
     "brand_id": 591,
  
     "brand_name": "Tokyu Inn",
  
     "hotel_name": "Kobe Sannomiya Tokyu REI Hotel",
  
     "hotel_formerly_name": "Kobe Tokyu Inn",
  
     "hotel_translated_name": "Kobe Sannomiya Tokyu REI Hotel",
  
     "addressline1": "6-1-5 Kumoidori, Chuo-ku",
  
     "addressline2": "",
  
     "zipcode": "651-0096",
  
     "city": "Kobe",
  
     "state": "Hyogo",
  
     "country": "Japan",
  
     "countryisocode": "JP",
  
     "star_rating": 3,
  
     "longitude": 135.196655,
  
     "latitude": 34.694649,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=59",
  
     "checkin": "3:00 PM",
  
     "checkout": "11:00 AM",
  
     "numberrooms": 235,
  
     "numberfloors": 12,
  
     "yearopened": 1986,
  
     "yearrenovated": 2017,
  
     "photo1": "http://pix2.agoda.net/hotelimages/59/59/59_17050315180052767891.jpg?s=312x",
  
     "photo2": "http://pix5.agoda.net/hotelimages/59/59/59_17030514080051374227.jpg?s=312x",
  
     "photo3": "http://pix5.agoda.net/hotelimages/59/59/59_16101013470047578644.jpg?s=312x",
  
     "photo4": "http://pix4.agoda.net/hotelimages/59/59/59_16101013470047578645.jpg?s=312x",
  
     "photo5": "http://pix2.agoda.net/hotelimages/59/59/59_16101013470047578646.jpg?s=312x",
  
     "overview": "Kobe Sannomiya Tokyu REI Hotel is perfectly located for both business and leisure guests in Kobe. Featuring a complete list of amenities, guests will find their stay at the property a comfortable one. Service-minded staff will welcome and guide you at the Kobe Sannomiya Tokyu REI Hotel. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like television LCD/plasma screen, complimentary instant coffee, complimentary tea, linens, slippers. The hotel offers various recreational opportunities. Discover all Kobe has to offer by making Kobe Sannomiya Tokyu REI Hotel your base.",
  
     "rates_from": 58,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 5235,
  
     "country_id": 3,
  
     "number_of_reviews": 764,
  
     "rating_average": 8.5,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 63,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Suites South Burlington",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Suites South Burlington",
  
     "addressline1": "1712 Shelburne Rd.",
  
     "addressline2": "",
  
     "zipcode": "5403",
  
     "city": "So Burlington (VT)",
  
     "state": "Vermont",
  
     "country": "United States",
  
     "countryisocode": "US",
  
     "star_rating": 2.5,
  
     "longitude": -73.211479,
  
     "latitude": 44.425246,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=63",
  
     "checkin": "3:00 PM",
  
     "checkout": "11:00 AM",
  
     "numberrooms": 84,
  
     "numberfloors": 4,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix4.agoda.net/hotelimages/63/0/50265bce9db910781a1d262b65988e77.jpg?s=312x",
  
     "photo2": "http://pix1.agoda.net/hotelimages/63/63/63_17091411370056344386.jpg?s=312x",
  
     "photo3": "http://pix2.agoda.net/hotelimages/63/63/63_17091411370056344352.jpg?s=312x",
  
     "photo4": "http://pix5.agoda.net/hotelimages/63/63/63_17091411370056344388.jpg?s=312x",
  
     "photo5": "http://pix1.agoda.net/hotelimages/63/63/63_17091411370056344409.jpg?s=312x",
  
     "overview": "Comfort Suites South Burlington is conveniently located in the popular South Burlington area. The hotel offers guests a range of services and amenities designed to provide comfort and convenience. Take advantage of the hotel's free Wi-Fi in all rooms, Wi-Fi in public areas, car park, airport transfer, car hire. Guestrooms are fitted with all the amenities you need for a good night's sleep. In some of the rooms, guests can find air conditioning, wake-up service, desk, alarm clock, telephone. Access to the hotel's fishing, spa, water sports (non-motorized) will further enhance your satisfying stay. Discover all South Burlington (VT) has to offer by making Comfort Suites South Burlington your base.",
  
     "rates_from": 118,
  
     "continent_id": 6,
  
     "continent_name": "North America",
  
     "city_id": 17641,
  
     "country_id": 181,
  
     "number_of_reviews": 12,
  
     "rating_average": 8.4,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 66,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Everbright Convention & Exhibition Centre International Hotel",
  
     "hotel_formerly_name": "Everbright International Hotel",
  
     "hotel_translated_name": "Everbright Convention & Exhibition Centre International Hotel",
  
     "addressline1": "66 Caobao Road, Xuhui district",
  
     "addressline2": "",
  
     "zipcode": "",
  
     "city": "Shanghai",
  
     "state": "Shanghai",
  
     "country": "China",
  
     "countryisocode": "CN",
  
     "star_rating": 4,
  
     "longitude": 121.429146,
  
     "latitude": 31.167866,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=66",
  
     "checkin": "2:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 432,
  
     "numberfloors": 30,
  
     "yearopened": 1999,
  
     "yearrenovated": null,
  
     "photo1": "http://pix5.agoda.net/hotelimages/7456302/0/fe20fe078e5b7195789ac57334dc8cba.jpg?s=312x",
  
     "photo2": "http://pix2.agoda.net/hotelimages/66/66/66_13103010150017244355.jpg?s=312x",
  
     "photo3": "http://pix4.agoda.net/hotelimages/66/66/66_14061212400019807656.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/66/66/66_14061212400019807657.jpg?s=312x",
  
     "photo5": "http://pix3.agoda.net/hotelimages/66/66/66_14061212400019807658.jpg?s=312x",
  
     "overview": "Everbright Convention & Exhibition Centre Internat is perfectly located for both business and leisure guests in Shanghai. Both business travelers and tourists can enjoy the hotel's facilities and services. Service-minded staff will welcome and guide you at the Everbright Convention & Exhibition Centre Internat. Designed for comfort, selected guestrooms offer television LCD/plasma screen, internet access – wireless, non smoking rooms, air conditioning, desk to ensure a restful night. Access to the hotel's hot tub, private beach, fitness center, sauna, golf course (on site) will further enhance your satisfying stay. Friendly staff, great facilities and close proximity to all that Shanghai has to offer are three great reasons you should stay at Everbright Convention & Exhibition Centre Internat.",
  
     "rates_from": 166,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 3987,
  
     "country_id": 191,
  
     "number_of_reviews": 211,
  
     "rating_average": 6.4,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 69,
  
     "chain_id": 14,
  
     "chain_name": "Hilton Worldwide",
  
     "brand_id": 71,
  
     "brand_name": "Hilton Garden Inn",
  
     "hotel_name": "Hilton Garden Inn Pittsburgh University Place",
  
     "hotel_formerly_name": "Wyndham Garden- University Place Hotel",
  
     "hotel_translated_name": "Hilton Garden Inn Pittsburgh University Place",
  
     "addressline1": "3454 Forbes Avenue",
  
     "addressline2": "",
  
     "zipcode": "15213",
  
     "city": "Pittsburgh (PA)",
  
     "state": "Pennsylvania",
  
     "country": "United States",
  
     "countryisocode": "US",
  
     "star_rating": 3,
  
     "longitude": -79.959274,
  
     "latitude": 40.439487,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=69",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": null,
  
     "numberfloors": null,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix3.agoda.net/hotelimages/69/0/45bf6f3bfdbf04196eabaacdfaae2ff4.jpg?s=312x",
  
     "photo2": "http://pix4.agoda.net/hotelimages/69/3271889/2da4a16bb4021f6845cca2067f61e194.jpg?s=312x",
  
     "photo3": "http://pix3.agoda.net/hotelimages/69/69/69_17080817270055081893.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/69/69/69_17080817270055081908.jpg?s=312x",
  
     "photo5": "http://pix5.agoda.net/hotelimages/69/69/69_17080817270055081910.jpg?s=312x",
  
     "overview": "Stop at Hilton Garden Inn Pittsburgh University Place to discover the wonders of Pittsburgh (PA). The hotel offers a wide range of amenities and perks to ensure you have a great time. 24-hour front desk, facilities for disabled guests, express check-in/check-out, luggage storage, Wi-Fi in public areas are just some of the facilities on offer. All rooms are designed and decorated to make guests feel right at home, and some rooms come with television LCD/plasma screen, air conditioning, heating, desk, alarm clock. The hotel offers various recreational opportunities. A welcoming atmosphere and excellent service are what you can expect during your stay at Hilton Garden Inn Pittsburgh University Place.",
  
     "rates_from": 200,
  
     "continent_id": 6,
  
     "continent_name": "North America",
  
     "city_id": 11488,
  
     "country_id": 181,
  
     "number_of_reviews": 16,
  
     "rating_average": 8.4,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 71,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Hotel Apogia Nice",
  
     "hotel_formerly_name": "Apogia Hotel",
  
     "hotel_translated_name": "Hotel Apogia Nice",
  
     "addressline1": "26, Rue Smolett",
  
     "addressline2": "",
  
     "zipcode": "6300",
  
     "city": "Nice",
  
     "state": "Provence-Alpes-Cote d'Azur",
  
     "country": "France",
  
     "countryisocode": "FR",
  
     "star_rating": 4,
  
     "longitude": 7.284279,
  
     "latitude": 43.703529,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=71",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 101,
  
     "numberfloors": 5,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix4.agoda.net/hotelimages/71/71/71_15112522040038031555.jpg?s=312x",
  
     "photo2": "http://pix2.agoda.net/hotelimages/71/71/71_14110516150023200624.jpg?s=312x",
  
     "photo3": "http://pix1.agoda.net/hotelimages/71/71/71_14110514240023196635.jpg?s=312x",
  
     "photo4": "http://pix3.agoda.net/hotelimages/71/71/71_14110514240023196639.jpg?s=312x",
  
     "photo5": "http://pix5.agoda.net/hotelimages/71/71/71_14110514240023196643.jpg?s=312x",
  
     "overview": "Hotel Apogia Nice is conveniently located in the popular Nice City Center area. Offering a variety of facilities and services, the hotel provides all you need for a good night's sleep. Facilities like free Wi-Fi in all rooms, daily housekeeping, wheelchair accessible, 24-hour front desk, facilities for disabled guests are readily available for you to enjoy. Designed for comfort, selected guestrooms offer television LCD/plasma screen, internet access – wireless, internet access – wireless (complimentary), non smoking rooms, air conditioning to ensure a restful night. The hotel offers various recreational opportunities. Hotel Apogia Nice is an excellent choice from which to explore Nice or to simply relax and rejuvenate.",
  
     "rates_from": 61,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 5277,
  
     "country_id": 153,
  
     "number_of_reviews": 121,
  
     "rating_average": 7.6,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 75,
  
     "chain_id": 74,
  
     "chain_name": "Caesars Entertainment Corporation",
  
     "brand_id": 1085,
  
     "brand_name": "Caesars Entertainment Corporation",
  
     "hotel_name": "Paris Las Vegas",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Paris Las Vegas",
  
     "addressline1": "3655 Las Vegas Boulevard South",
  
     "addressline2": "",
  
     "zipcode": "89109",
  
     "city": "Las Vegas (NV)",
  
     "state": "Nevada",
  
     "country": "United States",
  
     "countryisocode": "US",
  
     "star_rating": 4,
  
     "longitude": -115.17086,
  
     "latitude": 36.112019,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=75",
  
     "checkin": "4:00 PM",
  
     "checkout": "11:00 AM",
  
     "numberrooms": 2916,
  
     "numberfloors": 34,
  
     "yearopened": 1999,
  
     "yearrenovated": null,
  
     "photo1": "http://pix2.agoda.net/hotelimages/75/-1/450838815fb602d9fe58bba500a04a84.jpg?s=312x",
  
     "photo2": "http://pix1.agoda.net/hotelimages/75/75/75_16102701360048160956.jpg?s=312x",
  
     "photo3": "http://pix1.agoda.net/hotelimages/75/75/75_14041902380019131757.jpg?s=312x",
  
     "photo4": "http://pix3.agoda.net/hotelimages/75/75/75_16063004510044267771.jpg?s=312x",
  
     "photo5": "http://pix1.agoda.net/hotelimages/75/75/75_16063004510044267772.jpg?s=312x",
  
     "overview": "Paris Las Vegas Hotel is perfectly located for both business and leisure guests in Las Vegas (NV). The hotel offers a wide range of amenities and perks to ensure you have a great time. Service-minded staff will welcome and guide you at the Paris Las Vegas Hotel. Television LCD/plasma screen, carpeting, linens, mirror, towels can be found in selected guestrooms. The hotel's peaceful atmosphere extends to its recreational facilities which include fitness center, sauna, outdoor pool, spa, steamroom. Paris Las Vegas Hotel combines warm hospitality with a lovely ambiance to make your stay in Las Vegas (NV) unforgettable.",
  
     "rates_from": 129,
  
     "continent_id": 6,
  
     "continent_name": "North America",
  
     "city_id": 17072,
  
     "country_id": 181,
  
     "number_of_reviews": 1710,
  
     "rating_average": 8.1,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 78,
  
     "chain_id": 161,
  
     "chain_name": "Hoteles Catalonia",
  
     "brand_id": 340,
  
     "brand_name": "Hoteles Catalonia",
  
     "hotel_name": "Catalonia Brussels Hotel",
  
     "hotel_formerly_name": "Hotel Catalonia Forum",
  
     "hotel_translated_name": "Catalonia Brussels Hotel",
  
     "addressline1": "Avenue du Haut-Pont, 2 Hoge Bruglaan",
  
     "addressline2": "",
  
     "zipcode": "B1060",
  
     "city": "Brussels",
  
     "state": "Brussels-Capital",
  
     "country": "Belgium",
  
     "countryisocode": "BE",
  
     "star_rating": 3,
  
     "longitude": 4.35322,
  
     "latitude": 50.820938,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=78",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 80,
  
     "numberfloors": null,
  
     "yearopened": 1978,
  
     "yearrenovated": 2004,
  
     "photo1": "http://pix2.agoda.net/hotelimages/78/0/c0c8e0157b466534215921d295e02974.jpg?s=312x",
  
     "photo2": "http://pix4.agoda.net/hotelimages/78/78/78_17110906000058958908.jpg?s=312x",
  
     "photo3": "http://pix1.agoda.net/hotelimages/78/78/78_16051514190042342598.jpg?s=312x",
  
     "photo4": "http://pix2.agoda.net/hotelimages/78/78/78_16051514190042342599.jpg?s=312x",
  
     "photo5": "http://pix4.agoda.net/hotelimages/78/78/78_16051514190042342614.jpg?s=312x",
  
     "overview": "Ideally located in the prime touristic area of Elsene / Ixelles, Hotel HC Brussels promises a relaxing and wonderful visit. The hotel offers a high standard of service and amenities to suit the individual needs of all travelers. Free Wi-Fi in all rooms, facilities for disabled guests, Wi-Fi in public areas, car park, room service are there for guest's enjoyment. Comfortable guestrooms ensure a good night's sleep with some rooms featuring facilities such as internet access – wireless, air conditioning, heating, wake-up service, desk. The hotel offers various recreational opportunities. No matter what your reasons are for visiting Brussels, Hotel HC Brussels will make you feel instantly at home.",
  
     "rates_from": 80,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 15904,
  
     "country_id": 118,
  
     "number_of_reviews": 35,
  
     "rating_average": 8.1,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 85,
  
     "chain_id": 252,
  
     "chain_name": "Prince Hotels",
  
     "brand_id": 498,
  
     "brand_name": "Grand Prince Hotel",
  
     "hotel_name": "Grand Prince Hotel Shin Takanawa",
  
     "hotel_formerly_name": "New Takanawa Prince Hotel",
  
     "hotel_translated_name": "Grand Prince Hotel Shin Takanawa",
  
     "addressline1": "3-13-1 Takanawa, Minato-ku",
  
     "addressline2": "",
  
     "zipcode": "108-8612",
  
     "city": "Tokyo",
  
     "state": "Tokyo",
  
     "country": "Japan",
  
     "countryisocode": "JP",
  
     "star_rating": 4,
  
     "longitude": 139.733517,
  
     "latitude": 35.629819,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=85",
  
     "checkin": "3:00 PM",
  
     "checkout": "11:00 AM",
  
     "numberrooms": 938,
  
     "numberfloors": 15,
  
     "yearopened": 1982,
  
     "yearrenovated": 2016,
  
     "photo1": "http://pix3.agoda.net/hotelimages/2293978/0/cfb97a672601c2a46da6b7643c2eeaae.jpg?s=312x",
  
     "photo2": "http://pix4.agoda.net/hotelimages/85/85/85_14070608500020162883.jpg?s=312x",
  
     "photo3": "http://pix2.agoda.net/hotelimages/85/85/85_110630084149715.jpg?s=312x",
  
     "photo4": "http://pix5.agoda.net/hotelimages/85/85/85_110630084150075.jpg?s=312x",
  
     "photo5": "http://pix5.agoda.net/hotelimages/85/85/85_110630084152528.jpg?s=312x",
  
     "overview": "The 4-star Grand Prince Hotel New Takanawa offers comfort and convenience whether you're on business or holiday in Tokyo. The hotel offers guests a range of services and amenities designed to provide comfort and convenience. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, chapel, shrine are just some of the facilities on offer. Guestrooms are fitted with all the amenities you need for a good night's sleep. In some of the rooms, guests can find television LCD/plasma screen, internet access – wireless (complimentary), non smoking rooms, air conditioning, heating. Enjoy the hotel's recreational facilities, including hot tub, fitness center, sauna, spa, before retiring to your room for a well-deserved rest. Convenience and comfort makes Grand Prince Hotel New Takanawa the perfect choice for your stay in Tokyo.",
  
     "rates_from": 168,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 5085,
  
     "country_id": 3,
  
     "number_of_reviews": 1151,
  
     "rating_average": 8.3,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 94,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Watazen Ryokan Hotel",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Watazen Ryokan Hotel",
  
     "addressline1": "604-8113 Nakagyo-ku Yanaginobaba-dori Rokkaku-kudaru 413",
  
     "addressline2": "",
  
     "zipcode": "604-8113",
  
     "city": "Kyoto",
  
     "state": "Kyoto",
  
     "country": "Japan",
  
     "countryisocode": "JP",
  
     "star_rating": 3,
  
     "longitude": 135.763931,
  
     "latitude": 35.006752,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=94",
  
     "checkin": "4:00 PM",
  
     "checkout": "10:00 AM",
  
     "numberrooms": 27,
  
     "numberfloors": 4,
  
     "yearopened": 1830,
  
     "yearrenovated": 1984,
  
     "photo1": "http://pix2.agoda.net/hotelimages/94/94/94_15082414070034908996.jpg?s=312x",
  
     "photo2": "http://pix2.agoda.net/hotelimages/94/94/94_13080107250014159306.jpg?s=312x",
  
     "photo3": "http://pix3.agoda.net/hotelimages/94/94/94_15082414060034908926.jpg?s=312x",
  
     "photo4": "http://pix4.agoda.net/hotelimages/94/94/94_15082414060034908932.jpg?s=312x",
  
     "photo5": "http://pix5.agoda.net/hotelimages/94/94/94_15082414060034908941.jpg?s=312x",
  
     "overview": "Watazen Ryokan Hotel is conveniently located in the popular Central Kyoto area. The hotel offers a wide range of amenities and perks to ensure you have a great time. Take advantage of the hotel's free Wi-Fi in all rooms, daily housekeeping, fax machine, laundromat, photocopying. Designed for comfort, selected guestrooms offer television LCD/plasma screen, internet access – wireless, internet access – wireless (complimentary), non smoking rooms, air conditioning to ensure a restful night. The hotel offers various recreational opportunities. Watazen Ryokan Hotel is an excellent choice from which to explore Kyoto or to simply relax and rejuvenate.",
  
     "rates_from": 118,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 1784,
  
     "country_id": 3,
  
     "number_of_reviews": 394,
  
     "rating_average": 8.8,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 97,
  
     "chain_id": 307,
  
     "chain_name": "Thistle & Guoman",
  
     "brand_id": 583,
  
     "brand_name": "Thistle Hotels",
  
     "hotel_name": "Amba Hotel Charing Cross",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Amba Hotel Charing Cross",
  
     "addressline1": "The Strand",
  
     "addressline2": "",
  
     "zipcode": "WC2N 5HX",
  
     "city": "London",
  
     "state": "London, England",
  
     "country": "United Kingdom",
  
     "countryisocode": "GB",
  
     "star_rating": 4,
  
     "longitude": -0.124777,
  
     "latitude": 51.508358,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=97",
  
     "checkin": "3:00 PM",
  
     "checkout": "11:00 AM",
  
     "numberrooms": 239,
  
     "numberfloors": 6,
  
     "yearopened": 1864,
  
     "yearrenovated": 2012,
  
     "photo1": "http://pix1.agoda.net/hotelimages/5160177/0/7429a5cce6cda6860924a249d308f38b.jpg?s=312x",
  
     "photo2": "http://pix3.agoda.net/hotelimages/97/97/97_14100820090022636837.jpg?s=312x",
  
     "photo3": "http://pix2.agoda.net/hotelimages/97/97/97_15072120540032732635.jpg?s=312x",
  
     "photo4": "http://pix4.agoda.net/hotelimages/97/97/97_15072120540032732636.jpg?s=312x",
  
     "photo5": "http://pix2.agoda.net/hotelimages/97/97/97_15072120540032732637.jpg?s=312x",
  
     "overview": "Amba Hotel Charing Cross is a popular choice amongst travelers in London, whether exploring or just passing through. The hotel offers a wide range of amenities and perks to ensure you have a great time. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, taxi service are just some of the facilities on offer. Designed for comfort, selected guestrooms offer locker, closet, complimentary tea, towels, carpeting to ensure a restful night. Access to the hotel's fitness center will further enhance your satisfying stay. A welcoming atmosphere and excellent service are what you can expect during your stay at Amba Hotel Charing Cross.",
  
     "rates_from": 281,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 233,
  
     "country_id": 107,
  
     "number_of_reviews": 425,
  
     "rating_average": 8.8,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 99,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Imperial Hotel",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Imperial Hotel",
  
     "addressline1": "32-34 Nathan Road",
  
     "addressline2": "",
  
     "zipcode": "",
  
     "city": "Hong Kong",
  
     "state": "Hong Kong",
  
     "country": "Hong Kong",
  
     "countryisocode": "HK",
  
     "star_rating": 3,
  
     "longitude": 114.172505,
  
     "latitude": 22.296135,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=99",
  
     "checkin": "3:00 PM",
  
     "checkout": "11:00 AM",
  
     "numberrooms": 225,
  
     "numberfloors": 18,
  
     "yearopened": 1971,
  
     "yearrenovated": 2015,
  
     "photo1": "http://pix4.agoda.net/hotelimages/99/99/99_16022014110040064258.jpg?s=312x",
  
     "photo2": "http://pix5.agoda.net/hotelimages/99/99/99_14051217190019391121.jpg?s=312x",
  
     "photo3": "http://pix1.agoda.net/hotelimages/99/99/99_15060610520028741750.jpg?s=312x",
  
     "photo4": "http://pix5.agoda.net/hotelimages/99/99/99_15060610520028741758.jpg?s=312x",
  
     "photo5": "http://pix2.agoda.net/hotelimages/99/99/99_15060610520028741759.jpg?s=312x",
  
     "overview": "Set in a prime location of Hong Kong, Imperial Hotel puts everything the city has to offer just outside your doorstep. Featuring a complete list of amenities, guests will find their stay at the property a comfortable one. All the necessary facilities, including free Wi-Fi in all rooms, 24-hour front desk, luggage storage, Wi-Fi in public areas, babysitting, are at hand. Designed for comfort, selected guestrooms offer television LCD/plasma screen, carpeting, slippers, smoke detector, internet access – wireless to ensure a restful night. The hotel offers various recreational opportunities. Imperial Hotel combines warm hospitality with a lovely ambiance to make your stay in Hong Kong unforgettable.",
  
     "rates_from": 237,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 16808,
  
     "country_id": 132,
  
     "number_of_reviews": 10678,
  
     "rating_average": 7,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 102,
  
     "chain_id": 193,
  
     "chain_name": "Leading Hotels of the World",
  
     "brand_id": 398,
  
     "brand_name": "Leading Hotels of the World",
  
     "hotel_name": "Royal Hotel Sanremo",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Royal Hotel Sanremo",
  
     "addressline1": "80 Corso Imperatrice",
  
     "addressline2": "",
  
     "zipcode": "18038",
  
     "city": "Sanremo",
  
     "state": "",
  
     "country": "Italy",
  
     "countryisocode": "IT",
  
     "star_rating": 5,
  
     "longitude": 7.768031,
  
     "latitude": 43.813789,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=102",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 126,
  
     "numberfloors": 5,
  
     "yearopened": 1872,
  
     "yearrenovated": 2013,
  
     "photo1": "http://pix5.agoda.net/hotelimages/102/102/102_16061314090043482668.jpg?s=312x",
  
     "photo2": "http://pix4.agoda.net/hotelimages/102/102/102_14120818350023840184.jpg?s=312x",
  
     "photo3": "http://pix4.agoda.net/hotelimages/102/102/102_14120818320023840125.jpg?s=312x",
  
     "photo4": "http://pix4.agoda.net/hotelimages/102/102/102_16061314080043482544.jpg?s=312x",
  
     "photo5": "http://pix1.agoda.net/hotelimages/102/102/102_16061314080043482545.jpg?s=312x",
  
     "overview": "Located in Sanremo Center, Royal Hotel Sanremo is a perfect starting point from which to explore Sanremo. The hotel has everything you need for a comfortable stay. Free Wi-Fi in all rooms, 24-hour front desk, 24-hour room service, luggage storage, Wi-Fi in public areas are just some of the facilities on offer. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like television LCD/plasma screen, non smoking rooms, air conditioning, heating, desk. To enhance guests' stay, the hotel offers recreational facilities such as hot tub, fitness center, sauna, golf course (within 3 km), outdoor pool. Convenience and comfort makes Royal Hotel Sanremo the perfect choice for your stay in Sanremo.",
  
     "rates_from": 229,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 79371,
  
     "country_id": 205,
  
     "number_of_reviews": 9,
  
     "rating_average": 9.4,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 103,
  
     "chain_id": 241,
  
     "chain_name": "Park Hotels",
  
     "brand_id": 477,
  
     "brand_name": "Park Hotels",
  
     "hotel_name": "The Park Hotel Visakhapatnam",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "The Park Hotel Visakhapatnam",
  
     "addressline1": "Beach road",
  
     "addressline2": "",
  
     "zipcode": "530023",
  
     "city": "Visakhapatnam",
  
     "state": "Andhra Pradesh",
  
     "country": "India",
  
     "countryisocode": "IN",
  
     "star_rating": 5,
  
     "longitude": 83.33672,
  
     "latitude": 17.721279,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=103",
  
     "checkin": "2:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 66,
  
     "numberfloors": 4,
  
     "yearopened": 1967,
  
     "yearrenovated": 2016,
  
     "photo1": "http://pix4.agoda.net/hotelimages/103/103/103_15080418100033635932.jpg?s=312x",
  
     "photo2": "http://pix5.agoda.net/hotelimages/103/103/103_15080418180033636301.jpg?s=312x",
  
     "photo3": "http://pix4.agoda.net/hotelimages/103/103/103_15080418180033636284.jpg?s=312x",
  
     "photo4": "http://pix4.agoda.net/hotelimages/103/103/103_15080418180033636289.jpg?s=312x",
  
     "photo5": "http://pix2.agoda.net/hotelimages/103/103/103_15080418180033636291.jpg?s=312x",
  
     "overview": "The Park Hotel Visakhapatnam is a popular choice amongst travelers in Visakhapatnam, whether exploring or just passing through. Featuring a complete list of amenities, guests will find their stay at the property a comfortable one. Service-minded staff will welcome and guide you at the The Park Hotel Visakhapatnam. Some of the well-appointed guestrooms feature television LCD/plasma screen, cleaning products, free welcome drink, slippers, towels. Enjoy the hotel's recreational facilities, including hiking trails, mini golf course, hot tub, private beach, fitness center, before retiring to your room for a well-deserved rest. Convenience and comfort makes The Park Hotel Visakhapatnam the perfect choice for your stay in Visakhapatnam.",
  
     "rates_from": 102,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 15190,
  
     "country_id": 35,
  
     "number_of_reviews": 163,
  
     "rating_average": 7.9,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 107,
  
     "chain_id": 16,
  
     "chain_name": "InterContinental Hotels Group",
  
     "brand_id": 92,
  
     "brand_name": "Staybridge Suites",
  
     "hotel_name": "Staybridge Suites Austin Round Rock",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Staybridge Suites Austin Round Rock",
  
     "addressline1": "520 S IH 35 Frontage Rd",
  
     "addressline2": "",
  
     "zipcode": "78681",
  
     "city": "Round Rock (TX)",
  
     "state": "Texas",
  
     "country": "United States",
  
     "countryisocode": "US",
  
     "star_rating": 3,
  
     "longitude": -97.686089,
  
     "latitude": 30.507776,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=107",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 81,
  
     "numberfloors": 4,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix3.agoda.net/hotelimages/107/0/c1376dc07dff9f64bb7db9ca3bfba3f9.jpg?s=312x",
  
     "photo2": "http://pix2.agoda.net/hotelimages/107/38152533/1b5a794b0583a18730c76ac3152c8cfe.jpg?s=312x",
  
     "photo3": "http://pix1.agoda.net/hotelimages/107/107/107_14061309340019824611.jpg?s=312x",
  
     "photo4": "http://pix3.agoda.net/hotelimages/107/0/7640fa81190a8028f78d9f04df3c3375.jpg?s=312x",
  
     "photo5": "http://pix3.agoda.net/hotelimages/107/0/a2e4e65dc778fda49fb6d1f5d8af0c3c.jpg?s=312x",
  
     "overview": "Located in Olsen, Staybridge Suites Austin Round Rock is a perfect starting point from which to explore Round Rock (TX). The hotel offers a wide range of amenities and perks to ensure you have a great time. Service-minded staff will welcome and guide you at the Staybridge Suites Austin Round Rock. Guestrooms are fitted with all the amenities you need for a good night's sleep. In some of the rooms, guests can find non smoking rooms. Enjoy the hotel's recreational facilities, including fitness center, outdoor pool, before retiring to your room for a well-deserved rest. Staybridge Suites Austin Round Rock combines warm hospitality with a lovely ambiance to make your stay in Round Rock (TX) unforgettable.",
  
     "rates_from": 112,
  
     "continent_id": 6,
  
     "continent_name": "North America",
  
     "city_id": 8271,
  
     "country_id": 181,
  
     "number_of_reviews": 3,
  
     "rating_average": 10,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 109,
  
     "chain_id": 661,
  
     "chain_name": "Sotetsu Fresa Inn",
  
     "brand_id": 4437,
  
     "brand_name": "FC Sotetsu Fresa Inn",
  
     "hotel_name": "Hotel Sunroute Nara",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Hotel Sunroute Nara",
  
     "addressline1": "1110 Takabatake-cho",
  
     "addressline2": "",
  
     "zipcode": "630-8301",
  
     "city": "Nara",
  
     "state": "Nara",
  
     "country": "Japan",
  
     "countryisocode": "JP",
  
     "star_rating": 3,
  
     "longitude": 135.83226,
  
     "latitude": 34.679607,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=109",
  
     "checkin": "2:00 PM",
  
     "checkout": "11:00 AM",
  
     "numberrooms": 95,
  
     "numberfloors": 5,
  
     "yearopened": 1981,
  
     "yearrenovated": 2005,
  
     "photo1": "http://pix3.agoda.net/hotelimages/109/109/109_16052212090042589176.jpg?s=312x",
  
     "photo2": "http://pix5.agoda.net/hotelimages/109/109/109_16052211280042588226.jpg?s=312x",
  
     "photo3": "http://pix2.agoda.net/hotelimages/109/109/109_110928140746380.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/109/109/109_13041810270011932326.jpg?s=312x",
  
     "photo5": "http://pix3.agoda.net/hotelimages/109/109/109_16052211270042588224.jpg?s=312x",
  
     "overview": "Ideally located in the prime touristic area of Nara City Center, Hotel Sunroute Nara promises a relaxing and wonderful visit. The property features a wide range of facilities to make your stay a pleasant experience. To be found at the hotel are free Wi-Fi in all rooms, daily housekeeping, laundromat, 24-hour front desk, Wi-Fi in public areas. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like television LCD/plasma screen, non smoking rooms, air conditioning, heating, wake-up service. The hotel offers various recreational opportunities. Convenience and comfort makes Hotel Sunroute Nara the perfect choice for your stay in Nara.",
  
     "rates_from": 85,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 13313,
  
     "country_id": 3,
  
     "number_of_reviews": 52,
  
     "rating_average": 8.2,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 122,
  
     "chain_id": 307,
  
     "chain_name": "Thistle & Guoman",
  
     "brand_id": 583,
  
     "brand_name": "Thistle Hotels",
  
     "hotel_name": "The Tower Hotel",
  
     "hotel_formerly_name": "Tower Thistle Hotel",
  
     "hotel_translated_name": "The Tower Hotel",
  
     "addressline1": "St Katharine's Way",
  
     "addressline2": "",
  
     "zipcode": "E1W 1LD",
  
     "city": "London",
  
     "state": "London, England",
  
     "country": "United Kingdom",
  
     "countryisocode": "GB",
  
     "star_rating": 4,
  
     "longitude": -0.07107,
  
     "latitude": 51.506119,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=122",
  
     "checkin": "3:00 PM",
  
     "checkout": "11:00 AM",
  
     "numberrooms": 801,
  
     "numberfloors": 12,
  
     "yearopened": 1973,
  
     "yearrenovated": null,
  
     "photo1": "http://pix1.agoda.net/hotelimages/4879607/0/4bb2ed860ccc6835b3abad1b0950f264.jpg?s=312x",
  
     "photo2": "http://pix1.agoda.net/hotelimages/122/122/122_14033113450018913209.jpg?s=312x",
  
     "photo3": "http://pix2.agoda.net/hotelimages/122/122/122_15072319260032908803.jpg?s=312x",
  
     "photo4": "http://pix5.agoda.net/hotelimages/122/122/122_15072319260032908805.jpg?s=312x",
  
     "photo5": "http://pix5.agoda.net/hotelimages/122/122/122_15072319260032908809.jpg?s=312x",
  
     "overview": "The Tower Hotel is perfectly located for both business and leisure guests in London. The hotel offers a high standard of service and amenities to suit the individual needs of all travelers. Facilities like 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, postal service are readily available for you to enjoy. Each guestroom is elegantly furnished and equipped with handy amenities. The hotel offers various recreational opportunities. Friendly staff, great facilities and close proximity to all that London has to offer are three great reasons you should stay at The Tower Hotel.",
  
     "rates_from": 192,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 233,
  
     "country_id": 107,
  
     "number_of_reviews": 1097,
  
     "rating_average": 8.4,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 123,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "The Grand New Delhi Hotel",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "The Grand New Delhi Hotel",
  
     "addressline1": "Nelson Mandela Road, Vasant Kunj, Phase II",
  
     "addressline2": "",
  
     "zipcode": "110070",
  
     "city": "New Delhi and NCR",
  
     "state": "Delhi National Territory",
  
     "country": "India",
  
     "countryisocode": "IN",
  
     "star_rating": 5,
  
     "longitude": 77.151978,
  
     "latitude": 28.538967,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=123",
  
     "checkin": "2:00 PM",
  
     "checkout": "1:00 PM",
  
     "numberrooms": 390,
  
     "numberfloors": 6,
  
     "yearopened": 2000,
  
     "yearrenovated": 2009,
  
     "photo1": "http://pix4.agoda.net/hotelimages/4888496/0/b39b15228d1633bd3a3d235c415322c8.jpg?s=312x",
  
     "photo2": "http://pix2.agoda.net/hotelimages/123/-1/d7ca8b5383cee0c38d53e867c62b222d.jpg?s=312x",
  
     "photo3": "http://pix3.agoda.net/hotelimages/123/-1/f89e73a42f906347eccf264ba0e2e1b7.jpg?s=312x",
  
     "photo4": "http://pix5.agoda.net/hotelimages/123/-1/ed5a44ac19464bfc6c46d1cf11e55a97.jpg?s=312x",
  
     "photo5": "http://pix2.agoda.net/hotelimages/123/-1/173528cde9bc9340e1670ff529147082.jpg?s=312x",
  
     "overview": "Stop at The Grand New Delhi Hotel to discover the wonders of New Delhi and NCR. The hotel offers a high standard of service and amenities to suit the individual needs of all travelers. 24-hour room service, free Wi-Fi in all rooms, 24-hour security, daily housekeeping, gift/souvenir shop are on the list of things guests can enjoy. All rooms are designed and decorated to make guests feel right at home, and some rooms come with television LCD/plasma screen, air purifier, bathroom phone, carpeting, clothes rack. Entertain the hotel's recreational facilities, including yoga room, hot tub, fitness center, sauna, golf course (within 3 km). The Grand New Delhi Hotel combines warm hospitality with a lovely ambiance to make your stay in New Delhi and NCR unforgettable.",
  
     "rates_from": 131,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 14552,
  
     "country_id": 35,
  
     "number_of_reviews": 309,
  
     "rating_average": 7.9,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 124,
  
     "chain_id": 94,
  
     "chain_name": "Corinthia Hotels International",
  
     "brand_id": 247,
  
     "brand_name": "Corinthia Hotels International",
  
     "hotel_name": "Corinthia Hotel St. George’s Bay",
  
     "hotel_formerly_name": "Corinthia San Gorg Hotel",
  
     "hotel_translated_name": "Corinthia Hotel St. George’s Bay",
  
     "addressline1": "St. George`s Bay",
  
     "addressline2": "",
  
     "zipcode": "STJ 3301",
  
     "city": "St. Julian's",
  
     "state": "Malta",
  
     "country": "Malta",
  
     "countryisocode": "MT",
  
     "star_rating": 5,
  
     "longitude": 14.490159,
  
     "latitude": 35.929157,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=124",
  
     "checkin": "2:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 249,
  
     "numberfloors": 5,
  
     "yearopened": null,
  
     "yearrenovated": 2009,
  
     "photo1": "http://pix1.agoda.net/hotelimages/5076456/0/38babc9d6d69991b542483a4fa8cc1d9.jpg?s=312x",
  
     "photo2": "http://pix4.agoda.net/hotelimages/124/124/124_1207310921007003927.jpg?s=312x",
  
     "photo3": "http://pix4.agoda.net/hotelimages/124/124/124_08091300010066316.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/124/124/124_1001231823002585111.jpg?s=312x",
  
     "photo5": "http://pix3.agoda.net/hotelimages/124/124/124_1008271021003233091.jpg?s=312x",
  
     "overview": "The 5-star Corinthia Hotel St. George's Bay offers comfort and convenience whether you're on business or holiday in St. Julian's. The hotel offers a high standard of service and amenities to suit the individual needs of all travelers. Free Wi-Fi in all rooms, 24-hour front desk, express check-in/check-out, luggage storage, Wi-Fi in public areas are just some of the facilities on offer. Each guestroom is elegantly furnished and equipped with handy amenities. The hotel offers various recreational opportunities. Corinthia Hotel St. George's Bay combines warm hospitality with a lovely ambiance to make your stay in St. Julian's unforgettable.",
  
     "rates_from": 325,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 4329,
  
     "country_id": 57,
  
     "number_of_reviews": 39,
  
     "rating_average": 8.3,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 127,
  
     "chain_id": 911,
  
     "chain_name": "Blue Sea Hotels & Resorts",
  
     "brand_id": 1975,
  
     "brand_name": "Blue Sea Hotels & Resorts",
  
     "hotel_name": "Gran Hotel Cervantes by Blue Sea",
  
     "hotel_formerly_name": "Blue Sea Gran Hotel Cervantes",
  
     "hotel_translated_name": "Gran Hotel Cervantes by Blue Sea",
  
     "addressline1": "Las Mercedes s/n",
  
     "addressline2": "",
  
     "zipcode": "29620",
  
     "city": "Torremolinos",
  
     "state": "Andalusia",
  
     "country": "Spain",
  
     "countryisocode": "ES",
  
     "star_rating": 4,
  
     "longitude": -4.49754,
  
     "latitude": 36.623717,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=127",
  
     "checkin": "12:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 397,
  
     "numberfloors": 9,
  
     "yearopened": 1973,
  
     "yearrenovated": 2009,
  
     "photo1": "http://pix2.agoda.net/hotelimages/127/-1/ba01692a5648a26aa0ff11138bbe3943.jpg?s=312x",
  
     "photo2": "http://pix2.agoda.net/hotelimages/127/127/127_16020516290039682632.jpg?s=312x",
  
     "photo3": "http://pix3.agoda.net/hotelimages/127/127/127_1201141301005808966.jpg?s=312x",
  
     "photo4": "http://pix5.agoda.net/hotelimages/127/127/127_1201141301005808972.jpg?s=312x",
  
     "photo5": "http://pix5.agoda.net/hotelimages/127/127/127_1201141301005808974.jpg?s=312x",
  
     "overview": "Set in a prime location of Torremolinos, Gran Hotel Cervantes by Blue Sea puts everything the city has to offer just outside your doorstep. Offering a variety of facilities and services, the hotel provides all you need for a good night's sleep. 24-hour room service, 24-hour front desk, facilities for disabled guests, luggage storage, Wi-Fi in public areas are on the list of things guests can enjoy. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like in-room tablet, towels, air conditioning, heating, desk. Access to the hotel's fitness center, sauna, golf course (within 3 km), outdoor pool, indoor pool will further enhance your satisfying stay. Convenience and comfort makes Gran Hotel Cervantes by Blue Sea the perfect choice for your stay in Torremolinos.",
  
     "rates_from": 71,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 8558,
  
     "country_id": 167,
  
     "number_of_reviews": 65,
  
     "rating_average": 7.6,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 130,
  
     "chain_id": 16,
  
     "chain_name": "InterContinental Hotels Group",
  
     "brand_id": 91,
  
     "brand_name": "InterContinental",
  
     "hotel_name": "Hotel Intercontinental Cali",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Hotel Intercontinental Cali",
  
     "addressline1": "Av. Colombia No. 2-72",
  
     "addressline2": "",
  
     "zipcode": "760001",
  
     "city": "Cali",
  
     "state": "Valle del Cauca",
  
     "country": "Colombia",
  
     "countryisocode": "CO",
  
     "star_rating": 4.5,
  
     "longitude": -76.539139,
  
     "latitude": 3.450342,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=130",
  
     "checkin": "3:00 PM",
  
     "checkout": "1:00 PM",
  
     "numberrooms": 295,
  
     "numberfloors": 9,
  
     "yearopened": 1971,
  
     "yearrenovated": null,
  
     "photo1": "http://pix2.agoda.net/hotelimages/5502207/0/a9e070b68501d7391fa920a4aa91d84b.jpg?s=312x",
  
     "photo2": "http://pix4.agoda.net/hotelimages/130/130/130_120921151416888.jpg?s=312x",
  
     "photo3": "http://pix4.agoda.net/hotelimages/130/130/130_120209160626030.jpg?s=312x",
  
     "photo4": "http://pix2.agoda.net/hotelimages/130/130/130_120209160625280.jpg?s=312x",
  
     "photo5": "http://pix3.agoda.net/hotelimages/130/130/130_120209160626890.jpg?s=312x",
  
     "overview": "Ideally located in the prime touristic area of Cali City Center, Hotel Intercontinental Cali promises a relaxing and wonderful visit. The hotel has everything you need for a comfortable stay. Service-minded staff will welcome and guide you at the Hotel Intercontinental Cali. Designed for comfort, selected guestrooms offer television LCD/plasma screen, internet access – wireless, non smoking rooms, air conditioning, wake-up service to ensure a restful night. The hotel offers various recreational opportunities. No matter what your reasons are for visiting Cali, Hotel Intercontinental Cali will make you feel instantly at home.",
  
     "rates_from": 88,
  
     "continent_id": 8,
  
     "continent_name": "South America",
  
     "city_id": 15464,
  
     "country_id": 10,
  
     "number_of_reviews": 4,
  
     "rating_average": 8.8,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 131,
  
     "chain_id": 229,
  
     "chain_name": "Oberoi Hotels & Resorts",
  
     "brand_id": 453,
  
     "brand_name": "Oberoi Hotels & Resorts",
  
     "hotel_name": "The Oberoi Rajvilas Jaipur Hotel",
  
     "hotel_formerly_name": "Rajvilas Hotel",
  
     "hotel_translated_name": "The Oberoi Rajvilas Jaipur Hotel",
  
     "addressline1": "Goner Road",
  
     "addressline2": "",
  
     "zipcode": "303012",
  
     "city": "Jaipur",
  
     "state": "Rajasthan",
  
     "country": "India",
  
     "countryisocode": "IN",
  
     "star_rating": 5,
  
     "longitude": 75.883931,
  
     "latitude": 26.875761,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=131",
  
     "checkin": "2:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 71,
  
     "numberfloors": null,
  
     "yearopened": 1997,
  
     "yearrenovated": 2007,
  
     "photo1": "http://pix4.agoda.net/hotelimages/131/131/131_14031311160018678660.jpg?s=312x",
  
     "photo2": "http://pix5.agoda.net/hotelimages/131/131/131_15060518120028725945.jpg?s=312x",
  
     "photo3": "http://pix2.agoda.net/hotelimages/131/131/131_14031311160018678657.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/131/131/131_14120311490023755062.jpg?s=312x",
  
     "photo5": "http://pix4.agoda.net/hotelimages/131/131/131_14120312060023755720.jpg?s=312x",
  
     "overview": "The Oberoi Rajvilas Jaipur Hotel is conveniently located in the popular Jaipur Airport area. The hotel offers a wide range of amenities and perks to ensure you have a great time. 24-hour room service, 24-hour front desk, facilities for disabled guests, express check-in/check-out, luggage storage are on the list of things guests can enjoy. Guestrooms are fitted with all the amenities you need for a good night's sleep. In some of the rooms, guests can find carpeting, slippers, television LCD/plasma screen, mirror, internet access – wireless. The hotel's peaceful atmosphere extends to its recreational facilities which include hot tub, fitness center, outdoor pool, spa, massage. The Oberoi Rajvilas Jaipur Hotel combines warm hospitality with a lovely ambiance to make your stay in Jaipur unforgettable.",
  
     "rates_from": 620,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 8845,
  
     "country_id": 35,
  
     "number_of_reviews": 19,
  
     "rating_average": 9.1,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 132,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Mariel Hotel Boutique",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Mariel Hotel Boutique",
  
     "addressline1": "General Belisario Suarez, 240 - Miraflores",
  
     "addressline2": "",
  
     "zipcode": "Lima18",
  
     "city": "Lima",
  
     "state": "",
  
     "country": "Peru",
  
     "countryisocode": "PE",
  
     "star_rating": 3,
  
     "longitude": -77.027382,
  
     "latitude": -12.11821,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=132",
  
     "checkin": "2:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": null,
  
     "numberfloors": null,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix3.agoda.net/hotelimages/132/132/132_1112020202004688488.jpg?s=312x",
  
     "photo2": "https://q-xx.bstatic.com/xdata/images/hotel/max500/90621299.jpg?k=71b8a03f0c5f4a924c9c90a8b55ad371899576aca6076ad36a38bfbb23666aa6&o=",
  
     "photo3": "http://pix2.agoda.net/hotelimages/132/132/132_0907060958001636683.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/132/132/132_0907060958001636684.jpg?s=312x",
  
     "photo5": "http://pix5.agoda.net/hotelimages/132/132/132_0907060958001636685.jpg?s=312x",
  
     "overview": "Located in Lima City Center, Hotel Mariel & Apartments is a perfect starting point from which to explore Lima. The hotel has everything you need for a comfortable stay. Free Wi-Fi in all rooms, 24-hour front desk, luggage storage, Wi-Fi in public areas, valet parking are there for guest's enjoyment. All rooms are designed and decorated to make guests feel right at home, and some rooms come with wake-up service, air conditioning, heating, mini bar, telephone. The hotel offers various recreational opportunities. For reliable service and professional staff, Hotel Mariel & Apartments caters to your needs.",
  
     "rates_from": 80,
  
     "continent_id": 8,
  
     "continent_name": "South America",
  
     "city_id": 7082,
  
     "country_id": 186,
  
     "number_of_reviews": 36,
  
     "rating_average": 8,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 135,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Hilton Hurghada Long Beach Resort",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Hilton Hurghada Long Beach Resort",
  
     "addressline1": "Sahl Hashish Red Sea",
  
     "addressline2": "",
  
     "zipcode": "                    ",
  
     "city": "Hurghada",
  
     "state": "Al Bahr al Ahmar",
  
     "country": "Egypt",
  
     "countryisocode": "EG",
  
     "star_rating": 3,
  
     "longitude": 33.859669,
  
     "latitude": 27.0811,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=135",
  
     "checkin": "2:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 912,
  
     "numberfloors": 3,
  
     "yearopened": 2001,
  
     "yearrenovated": 2007,
  
     "photo1": "http://pix4.agoda.net/hotelimages/135/135/135_16090612540046133915.jpg?s=312x",
  
     "photo2": "http://pix4.agoda.net/hotelimages/135/-1/0186806be906069ae222b261fe0b50ca.jpg?s=312x",
  
     "photo3": "http://pix5.agoda.net/hotelimages/135/135/135_16090612540046133911.jpg?s=312x",
  
     "photo4": "http://pix4.agoda.net/hotelimages/135/135/135_16090612540046133913.jpg?s=312x",
  
     "photo5": "http://pix4.agoda.net/hotelimages/135/135/135_16090612540046133926.jpg?s=312x",
  
     "overview": "Set in a prime location of Hurghada, Hilton Hurghada Long Beach Resort puts everything the city has to offer just outside your doorstep. The hotel offers a wide range of amenities and perks to ensure you have a great time. 24-hour room service, facilities for disabled guests, Wi-Fi in public areas, car park, family room are just some of the facilities on offer. Each guestroom is elegantly furnished and equipped with handy amenities. Take a break from a long day and make use of hot tub, private beach, fitness center, sauna, outdoor pool. Hilton Hurghada Long Beach Resort combines warm hospitality with a lovely ambiance to make your stay in Hurghada unforgettable.",
  
     "rates_from": 124,
  
     "continent_id": 1,
  
     "continent_name": "Africa",
  
     "city_id": 6700,
  
     "country_id": 16,
  
     "number_of_reviews": 11,
  
     "rating_average": 7.8,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 136,
  
     "chain_id": 750,
  
     "chain_name": "Daiwa Royal Hotel",
  
     "brand_id": 1642,
  
     "brand_name": "Daiwa Royal Hotel",
  
     "hotel_name": "Royal Hotel MUNAKATA",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Royal Hotel MUNAKATA",
  
     "addressline1": "1303 Tano, Munakata-shi",
  
     "addressline2": "",
  
     "zipcode": "811-3514",
  
     "city": "Munakata",
  
     "state": "Fukuoka",
  
     "country": "Japan",
  
     "countryisocode": "JP",
  
     "star_rating": 4,
  
     "longitude": 130.525024,
  
     "latitude": 33.86124,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=136",
  
     "checkin": "3:00 PM",
  
     "checkout": "11:00 AM",
  
     "numberrooms": 291,
  
     "numberfloors": 13,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix4.agoda.net/hotelimages/136/-1/1cc695aed77341cbdc3297fc754a8ac2.jpg?s=312x",
  
     "photo2": "http://pix4.agoda.net/hotelimages/136/136/136_15032407450026382501.jpg?s=312x",
  
     "photo3": "http://pix4.agoda.net/hotelimages/136/136/136_14072515490020490897.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/136/136/136_14072515490020490901.jpg?s=312x",
  
     "photo5": "http://pix3.agoda.net/hotelimages/136/136/136_14072516160020492179.jpg?s=312x",
  
     "overview": "Genkai Royal Hotel is conveniently located in the popular Munakata area. The hotel offers a high standard of service and amenities to suit the individual needs of all travelers. To be found at the hotel are free Wi-Fi in all rooms, facilities for disabled guests, luggage storage, Wi-Fi in public areas, car park. Guestrooms are fitted with all the amenities you need for a good night's sleep. In some of the rooms, guests can find television LCD/plasma screen, linens, towels, internet access – wireless (complimentary), non smoking rooms. Recuperate from a full day of sightseeing in the comfort of your room or take advantage of the hotel's recreational facilities, including sauna, hot spring bath, outdoor pool, spa, massage. Friendly staff, great facilities and close proximity to all that Fukuoka has to offer are three great reasons you should stay at Genkai Royal Hotel.",
  
     "rates_from": 128,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 251963,
  
     "country_id": 3,
  
     "number_of_reviews": 44,
  
     "rating_average": 7.3,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 138,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Gioberti Hotel",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Gioberti Hotel",
  
     "addressline1": "Via Gioberti 20",
  
     "addressline2": "",
  
     "zipcode": "185",
  
     "city": "Rome",
  
     "state": "Lazio",
  
     "country": "Italy",
  
     "countryisocode": "IT",
  
     "star_rating": 4,
  
     "longitude": 12.501347,
  
     "latitude": 41.899482,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=138",
  
     "checkin": "2:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 80,
  
     "numberfloors": 5,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix5.agoda.net/hotelimages/138/-1/5a34a779300e997df06fee851cadda1c.jpg?s=312x",
  
     "photo2": "http://pix3.agoda.net/hotelimages/138/-1/69ecbd6e3d1539022b153668922b61aa.jpg?s=312x",
  
     "photo3": "http://pix4.agoda.net/hotelimages/138/138/138_13010722350010092471.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/138/138/138_13123022340017985380.jpg?s=312x",
  
     "photo5": "http://pix4.agoda.net/hotelimages/138/138/138_13123022340017985391.jpg?s=312x",
  
     "overview": "Gioberti Hotel is a popular choice amongst travelers in Rome, whether exploring or just passing through. The hotel offers a wide range of amenities and perks to ensure you have a great time. Free Wi-Fi in all rooms, 24-hour front desk, facilities for disabled guests, express check-in/check-out, luggage storage are just some of the facilities on offer. Each guestroom is elegantly furnished and equipped with handy amenities. The hotel offers various recreational opportunities. For reliable service and professional staff, Gioberti Hotel caters to your needs.",
  
     "rates_from": 165,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 16594,
  
     "country_id": 205,
  
     "number_of_reviews": 392,
  
     "rating_average": 7.9,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 140,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Hotel Serrano",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Hotel Serrano",
  
     "addressline1": "Marques de Villamejor, 8",
  
     "addressline2": "",
  
     "zipcode": "28006",
  
     "city": "Madrid",
  
     "state": "Madrid",
  
     "country": "Spain",
  
     "countryisocode": "ES",
  
     "star_rating": 4,
  
     "longitude": -3.687281,
  
     "latitude": 40.43121,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=140",
  
     "checkin": "12:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 34,
  
     "numberfloors": 5,
  
     "yearopened": 1969,
  
     "yearrenovated": 2010,
  
     "photo1": "http://pix4.agoda.net/hotelimages/7210716/0/bdae856e4eacb1d982c5705f5efe0a58.jpg?s=312x",
  
     "photo2": "http://pix1.agoda.net/hotelimages/140/140/140_14012901340018201752.jpg?s=312x",
  
     "photo3": "http://pix5.agoda.net/hotelimages/140/140/140_14012723250018171157.jpg?s=312x",
  
     "photo4": "http://pix2.agoda.net/hotelimages/140/140/140_14012723250018171158.jpg?s=312x",
  
     "photo5": "http://pix2.agoda.net/hotelimages/140/140/140_14013000560018212470.jpg?s=312x",
  
     "overview": "Hotel Serrano is a popular choice amongst travelers in Madrid, whether exploring or just passing through. The hotel offers a high standard of service and amenities to suit the individual needs of all travelers. Service-minded staff will welcome and guide you at the Hotel Serrano. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like television LCD/plasma screen, internet access – wireless, internet access – wireless (complimentary), non smoking rooms, air conditioning. The hotel offers various recreational opportunities. Convenience and comfort makes Hotel Serrano the perfect choice for your stay in Madrid.",
  
     "rates_from": 69,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 5531,
  
     "country_id": 167,
  
     "number_of_reviews": 108,
  
     "rating_average": 8.2,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 141,
  
     "chain_id": 0,
  
     "chain_name": "",
  
     "brand_id": 531,
  
     "brand_name": "Sarova Hotels",
  
     "hotel_name": "Sarova Whitesands Beach Resort & Spa",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Sarova Whitesands Beach Resort & Spa",
  
     "addressline1": "Nyali/Malindi Highway",
  
     "addressline2": "",
  
     "zipcode": "801",
  
     "city": "Mombasa",
  
     "state": "Mombasa",
  
     "country": "Kenya",
  
     "countryisocode": "KE",
  
     "star_rating": 5,
  
     "longitude": 39.732356,
  
     "latitude": -3.995454,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=141",
  
     "checkin": "12:00 PM",
  
     "checkout": "10:30 AM",
  
     "numberrooms": 338,
  
     "numberfloors": 3,
  
     "yearopened": 1984,
  
     "yearrenovated": 2012,
  
     "photo1": "http://pix1.agoda.net/hotelimages/141/-1/920bbb1725aebe9f5da472eb58d80845.jpg?s=312x",
  
     "photo2": "http://pix5.agoda.net/hotelimages/141/141/141_13050618460012085630.jpg?s=312x",
  
     "photo3": "http://pix4.agoda.net/hotelimages/141/141/141_130424160757.jpg?s=312x",
  
     "photo4": "http://pix1.agoda.net/hotelimages/141/141/141_130424160758.jpg?s=312x",
  
     "photo5": "http://pix5.agoda.net/hotelimages/141/141/141_130424160804.jpg?s=312x",
  
     "overview": "The 5-star Sarova Whitesands Beach Resort & Spa offers comfort and convenience whether you're on business or holiday in Mombasa. Offering a variety of facilities and services, the hotel provides all you need for a good night's sleep. Free Wi-Fi in all rooms, facilities for disabled guests, Wi-Fi in public areas, car park, airport transfer are just some of the facilities on offer. All rooms are designed and decorated to make guests feel right at home, and some rooms come with separate living room, internet access – wireless, internet access – wireless (complimentary), non smoking rooms, air conditioning. Entertain the hotel's recreational facilities, including fitness center, outdoor pool, spa, massage, kids club. Convenience and comfort makes Sarova Whitesands Beach Resort & Spa the perfect choice for your stay in Mombasa.",
  
     "rates_from": 183,
  
     "continent_id": 1,
  
     "continent_name": "Africa",
  
     "city_id": 7081,
  
     "country_id": 176,
  
     "number_of_reviews": 21,
  
     "rating_average": 8.3,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 146,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Scandic Seinajoki",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Scandic Seinajoki",
  
     "addressline1": "Kauppakatu 10",
  
     "addressline2": "",
  
     "zipcode": "60100",
  
     "city": "Seinajoki",
  
     "state": "",
  
     "country": "Finland",
  
     "countryisocode": "FI",
  
     "star_rating": 4,
  
     "longitude": 22.84244,
  
     "latitude": 62.789459,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=146",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": null,
  
     "numberfloors": null,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix5.agoda.net/hotelimages/146/146/146_080913000100145.jpg?s=312x",
  
     "photo2": "http://pix2.agoda.net/hotelimages/146/146/146_1201061629005632622.jpg?s=312x",
  
     "photo3": "http://pix5.agoda.net/hotelimages/146/146/146_0912181902001833716.jpg?s=312x",
  
     "photo4": "http://pix3.agoda.net/hotelimages/146/146/146_0912181902001833718.jpg?s=312x",
  
     "photo5": "http://pix2.agoda.net/hotelimages/146/146/146_0912181902001833719.jpg?s=312x",
  
     "overview": "Ideally located in the prime touristic area of Seinajoki, Cumulus Seinäjoki promises a relaxing and wonderful visit. The property features a wide range of facilities to make your stay a pleasant experience. 24-hour front desk, facilities for disabled guests, luggage storage, room service, meeting facilities are on the list of things guests can enjoy. Comfortable guestrooms ensure a good night's sleep with some rooms featuring facilities such as air conditioning, heating, desk, mini bar, telephone. The hotel offers various recreational opportunities. A welcoming atmosphere and excellent service are what you can expect during your stay at Cumulus Seinäjoki.",
  
     "rates_from": 112,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 16504,
  
     "country_id": 28,
  
     "number_of_reviews": 13,
  
     "rating_average": 7.4,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 147,
  
     "chain_id": 0,
  
     "chain_name": "No chain",
  
     "brand_id": 0,
  
     "brand_name": "",
  
     "hotel_name": "Van der Valk Hotel Hildesheim",
  
     "hotel_formerly_name": "Le Meridien Hotel",
  
     "hotel_translated_name": "Van der Valk Hotel Hildesheim",
  
     "addressline1": "Markt 4, GPS: Jakobistraße",
  
     "addressline2": "",
  
     "zipcode": "31134",
  
     "city": "Hildesheim",
  
     "state": "",
  
     "country": "Germany",
  
     "countryisocode": "DE",
  
     "star_rating": 4,
  
     "longitude": 9.95159,
  
     "latitude": 52.15295,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=147",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": null,
  
     "numberfloors": null,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix3.agoda.net/hotelimages/147/147/147_1112051559004767099.jpg?s=312x",
  
     "photo2": "http://pix4.agoda.net/hotelimages/147/147/147_1201061640005633620.jpg?s=312x",
  
     "photo3": "http://pix5.agoda.net/hotelimages/147/147/147_0912031314001740894.jpg?s=312x",
  
     "photo4": "http://pix4.agoda.net/hotelimages/147/147/147_0912031314001740898.jpg?s=312x",
  
     "photo5": "http://pix1.agoda.net/hotelimages/147/147/147_0912031314001740899.jpg?s=312x",
  
     "overview": "Ideally located in the prime touristic area of Hildesheim City Center, Van der Valk Hotel Hildesheim promises a relaxing and wonderful visit. The hotel offers guests a range of services and amenities designed to provide comfort and convenience. To be found at the hotel are free Wi-Fi in all rooms, 24-hour front desk, facilities for disabled guests, room service, meeting facilities. Designed for comfort, selected guestrooms offer air conditioning, heating, desk, mini bar, iPod docking station to ensure a restful night. Take a break from a long day and make use of fitness center, sauna, indoor pool, spa, massage. Convenience and comfort makes Van der Valk Hotel Hildesheim the perfect choice for your stay in Hildesheim.",
  
     "rates_from": 68,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 1417,
  
     "country_id": 101,
  
     "number_of_reviews": 21,
  
     "rating_average": 8.7,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 149,
  
     "chain_id": 21,
  
     "chain_name": "Marriott",
  
     "brand_id": 3821,
  
     "brand_name": "Sheraton",
  
     "hotel_name": "Sheraton Grand Taipei Hotel",
  
     "hotel_formerly_name": "Lai Lai Sheraton",
  
     "hotel_translated_name": "Sheraton Grand Taipei Hotel",
  
     "addressline1": "No.12, Sec. 1, Zhongxiao E. Rd",
  
     "addressline2": "",
  
     "zipcode": "10049",
  
     "city": "Taipei",
  
     "state": "Taipei City",
  
     "country": "Taiwan",
  
     "countryisocode": "TW",
  
     "star_rating": 5,
  
     "longitude": 121.522186,
  
     "latitude": 25.045053,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=149",
  
     "checkin": "3:00 PM",
  
     "checkout": "11:00 AM",
  
     "numberrooms": 688,
  
     "numberfloors": 17,
  
     "yearopened": 1981,
  
     "yearrenovated": 2014,
  
     "photo1": "http://pix5.agoda.net/hotelimages/4877178/0/e4e55d3e23ce5d7926b9e506e38bed0c.jpg?s=312x",
  
     "photo2": "http://pix5.agoda.net/hotelimages/149/149/149_16051017080042202855.jpg?s=312x",
  
     "photo3": "http://pix5.agoda.net/hotelimages/149/149/149_17032614520051869503.jpg?s=312x",
  
     "photo4": "http://pix4.agoda.net/hotelimages/149/0/170dba75e7ef630ce2931d459d115d75.jpg?s=312x",
  
     "photo5": "http://pix1.agoda.net/hotelimages/149/0/551955b304a67e83b20ecf4539c2a192.jpg?s=312x",
  
     "overview": "Sheraton Grand Taipei Hotel is perfectly located for both business and leisure guests in Taipei. The property features a wide range of facilities to make your stay a pleasant experience. 24-hour room service, free Wi-Fi in all rooms, daily housekeeping, gift/souvenir shop, grocery deliveries are just some of the facilities on offer. All rooms are designed and decorated to make guests feel right at home, and some rooms come with television LCD/plasma screen, bathroom phone, carpeting, complimentary instant coffee, complimentary tea. The hotel's peaceful atmosphere extends to its recreational facilities which include fitness center, sauna, outdoor pool, spa, massage. Sheraton Grand Taipei Hotel is an excellent choice from which to explore Taipei or to simply relax and rejuvenate.",
  
     "rates_from": 220,
  
     "continent_id": 2,
  
     "continent_name": "Asia",
  
     "city_id": 4951,
  
     "country_id": 140,
  
     "number_of_reviews": 549,
  
     "rating_average": 8.4,
  
     "rates_currency": "USD"
  
   },
  
   {
  
     "hotel_id": 150,
  
     "chain_id": 16,
  
     "chain_name": "InterContinental Hotels Group",
  
     "brand_id": 88,
  
     "brand_name": "Holiday Inn Express",
  
     "hotel_name": "Holiday Inn Express London Greenwich",
  
     "hotel_formerly_name": "",
  
     "hotel_translated_name": "Holiday Inn Express London Greenwich",
  
     "addressline1": "Bugsbys Way",
  
     "addressline2": "",
  
     "zipcode": "SE10 0GD",
  
     "city": "London",
  
     "state": "London, England",
  
     "country": "United Kingdom",
  
     "countryisocode": "GB",
  
     "star_rating": 3.5,
  
     "longitude": 0.009795,
  
     "latitude": 51.492519,
  
     "url": "https://www.agoda.com/partners/partnersearch.aspx?hid=150",
  
     "checkin": "3:00 PM",
  
     "checkout": "12:00 PM",
  
     "numberrooms": 162,
  
     "numberfloors": 8,
  
     "yearopened": null,
  
     "yearrenovated": null,
  
     "photo1": "http://pix4.agoda.net/hotelimages/5149864/0/37204a2012d78e13c33b78b5827f215d.jpg?s=312x",
  
     "photo2": "http://pix3.agoda.net/hotelimages/5149864/93417912/44fbcabecff3a6db50210e15a4ec4ba0.jpg?s=312x",
  
     "photo3": "http://pix2.agoda.net/hotelimages/5149864/0/b2129c80810186618c4c308d33da0f76.jpg?s=312x",
  
     "photo4": "http://pix4.agoda.net/hotelimages/5149864/0/f6b4814b56629b17742d3564265366ce.jpg?s=312x",
  
     "photo5": "http://pix1.agoda.net/hotelimages/5149864/0/b8a7483401513e014d7e2e512d666232.jpg?s=312x",
  
     "overview": "Holiday Inn Express London Greenwich is a popular choice amongst travelers in London, whether exploring or just passing through. The hotel has everything you need for a comfortable stay. Service-minded staff will welcome and guide you at the Holiday Inn Express London Greenwich. Guestrooms are fitted with all the amenities you need for a good night's sleep. In some of the rooms, guests can find television LCD/plasma screen, non smoking rooms, air conditioning, heating, desk. The hotel offers various recreational opportunities. Holiday Inn Express London Greenwich combines warm hospitality with a lovely ambiance to make your stay in London unforgettable.",
  
     "rates_from": 157,
  
     "continent_id": 4,
  
     "continent_name": "Europe",
  
     "city_id": 233,
  
     "country_id": 107,
  
     "number_of_reviews": 87,
  
     "rating_average": 7.6,
  
     "rates_currency": "USD"
  
   }
  
   ]
  
  }
  
// Trabajamos con la api de hoteles
let cad = "";
for (let hotel of data.hotels) {
    cad += `
        <div class="tarjeta-hotel">
            <img src="${hotel.photo1}" alt="${hotel.hotel_name}">
            <img src="${hotel.photo2}" alt="${hotel.hotel_name}">
            <img src="${hotel.photo3}" alt="${hotel.hotel_name}">
            <div class="cuerpo">
                <p>Nombre: ${hotel.hotel_name}</p>
                <p>Pais: ${hotel.country}</p>
                <p>Ciudad: ${hotel.city}</p>
                <p>Descripción: ${hotel.overview}</p
                <p>Puntuación: ${hotel.rating_average}</p>
                
            </div>
        </div>
    `;
}
document.querySelector(".hotels-container").innerHTML=cad
*/
