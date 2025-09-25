// Array de objetos con la información de cada imagen
const imagenesGaleria = [
  {
    src: "images/12-mejores-modelo-norte.jpg",
    alt: "Torneo 12 mejores modelo norte",
    equipo: "Equipo Real Amistad",
    torneo: "Torneo 12 mejores modelo norte"
  },
  {
    src: "images/529-san-andres.jpg",
    alt: "Torneo San Andres",
    equipo: "Equipo Club 529",
    torneo: "Torneo San Andres"
  },
  {
    src: "images/despedida-duvan.jpg",
    alt: "Partido despedida Duvan",
    equipo: "Equipo Real Amistad",
    torneo: "Partido despedida Duvan"
  },
  {
    src: "images/exclusiva.jpg",
    alt: "Torneo Class Roma",
    equipo: "Equipo Exclusiva",
    torneo: "Torneo Class Roma"
  },
  {
    src: "images/llanura.jpg",
    alt: "Torneo La Llanura",
    equipo: "Equipo Real Amistad",
    torneo: "Torneo La Llanura"
  },
  {
    src: "images/martin-fierro.jpg",
    alt: "Torneo Martin Fierro",
    equipo: "Equipo Real Amistad",
    torneo: "Torneo Martin Fierro"
  },
  {
    src: "images/master-combo-puentearanda.jpg",
    alt: "Torneo Puente Aranda",
    equipo: "Equipo Master Combo",
    torneo: "Torneo Puente Aranda"
  },
  {
    src: "images/master-combo-taquito-gol.jpg",
    alt: "Torneo Taquito & Gol",
    equipo: "Equipo Master Combo",
    torneo: "Torneo Taquito & Gol"
  },
  {
    src: "images/olimpiadas-puente-aranda.jpg",
    alt: "Torneo Olimpiadas Puente Aranda",
    equipo: "Equipo Real Amistad",
    torneo: "Torneo Olimpiadas Puente Aranda"
  },
  {
    src: "images/presimec-torre-molinos.jpg",
    alt: "Torneo Torre Molinos",
    equipo: "Equipo Presimec",
    torneo: "Torneo Torre Molinos"
  },
  {
    src: "images/san-andres-ra.jpg",
    alt: "Torneo San Andres",
    equipo: "Equipo Real Amistad",
    torneo: "Torneo San Andres"
  },
  {
    src: "images/santa-isabel.jpg",
    alt: "Torneo Santa Isabel",
    equipo: "Equipo Real Amistad",
    torneo: "Torneo Santa Isabel"
  },
  {
    src: "images/seleccion servientrega.jpg",
    alt: "Torneo Servientrega",
    equipo: "Equipo Selección Servientrega",
    torneo: "Torneo Servientrega"
  },
  {
    src: "images/super6-chavo.jpg",
    alt: "Torneo Super 6 Chavo",
    equipo: "Equipo Real Amistad",
    torneo: "Torneo Super 6 Chavo"
  },
  {
    src: "images/villagomez-1.jpg",
    alt: "Torneo Villagómez",
    equipo: "Equipo Real Amistad",
    torneo: "Torneo Villagómez"
  },
  {
    src: "images/villagomez-2.jpg",
    alt: "Torneo Villagómez",
    equipo: "Equipo Real Amistad",
    torneo: "Torneo Villagómez"
  },
  {
    src: "images/villagomez-3.jpg",
    alt: "Torneo Villagómez",
    equipo: "Equipo Real Amistad",
    torneo: "Torneo Villagómez"
  },
  {
    src: "images/villanueva.jpg",
    alt: "Torneo Villanueva",
    equipo: "Equipo Real Amistad",
    torneo: "Torneo Villanueva"
  },
  {
    src: "images/villeta.jpg",
    alt: "Torneo Villeta",
    equipo: "Equipo Real Amistad",
    torneo: "Torneo Villeta"
  },
];
// Función para cargar las imágenes en el DOM
function cargarImagenesGaleria() {
  const contenedor = document.getElementById('galeria-imagenes');

  // Limpiar el contenedor por si ya tiene contenido
  contenedor.innerHTML = '';

  // Recorrer el array y crear las tarjetas
  imagenesGaleria.forEach(imagen => {
    const tarjeta = `
      <div class="col d-flex">
        <div class="card h-100 shadow-sm flex-fill">
          <img src="${imagen.src}" class="card-img-top" alt="${imagen.alt}">
          <div class="card-body">
            <p class="card-text text-center my-auto">${imagen.equipo}</p>
            <p class="card-text text-center my-auto">${imagen.torneo}</p>
          </div>
        </div>
      </div>
    `;
    contenedor.innerHTML += tarjeta;
  });
}

// Llamar a la función cuando se cargue la página
window.addEventListener('DOMContentLoaded', cargarImagenesGaleria);
