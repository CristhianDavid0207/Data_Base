// Obtener elemento ID root
let rootElement = document.getElementById('root');

/*------------------------------- SECTION NAVBAR -------------------------------*/
// Crear el elemento nav
let navElement = document.createElement('nav');
navElement.classList.add('navbar', 'navbar-expand-md', 'navbar-ligth');

// Crear el botón del toggler
let toogglerButton = document.createElement('button');
toogglerButton.classList.add('navbar-toggler');
toogglerButton.type = 'button';
toogglerButton.setAttribute('data-bs-toggle', 'collapse');
toogglerButton.setAttribute('data-bs-target', '#navbar-toggler');
toogglerButton.setAttribute('aria-controls', 'navbarTogglerDemo01');
toogglerButton.setAttribute('aria-expanded', 'false');
toogglerButton.setAttribute('aria-label', 'Toggle navigation');

// Crear el ícono del toggler
let toogglerIcon = document.createElement('span');
toogglerIcon.classList.add('navbar-toggler-icon');

//Contenedor barra de Navegación
let navContainer = document.createElement('div');
navContainer.classList.add('collapse', 'navbar-collapse');
navContainer.id = 'navbar-toggler';

// Enlace del portafolio
let enlacePortfolio = document.createElement('a');
enlacePortfolio.classList.add('navbar-brand');
enlacePortfolio.href = 'https://cristhiandavid0207.github.io/Portfolio/';

//Imagen de logo
let logo = document.createElement('img');
logo.src = './img/Favicon.png';
logo.alt ='logo';
logo.width='100px'

//Agregando hijos
rootElement.appendChild(navElement);
navElement.append(toogglerButton, toogglerIcon, navContainer);
navContainer.appendChild(enlacePortfolio);
enlacePortfolio.appendChild(logo);


/*


// Crear la imagen de la marca
let brandImage = document.createElement('img');
brandImage.src = './img/Favicon.png';
brandImage.alt = 'Logo';
brandImage.width = '100px';

// Agregar la imagen a la marca
brandLink.appendChild(brandImage);

// Crear la lista de navegación
let navList = document.createElement('ul');
navList.classList.add('navbar-nav', 'text-decoration-none', 'd-flex', 'justify-content-center', 'aling-items-between');

// Crear los elementos de la lista
let navItems = ['About me', 'Projects', 'Testimonials', 'Contact'];

navItems.forEach(itemText => {
  let listItem = document.createElement('li');
  listItem.classList.add('nav-item');

  let navLink = document.createElement('a');
  navLink.classList.add('nav-link');
  navLink.href = '#';
  navLink.textContent = itemText;

  listItem.appendChild(navLink);
  navList.appendChild(listItem);
});

// Agregar elementos al contenedor fluido
containerElement.appendChild(togglerButton);
containerElement.appendChild(collapseContainer);
collapseContainer.appendChild(brandLink);
collapseContainer.appendChild(navList);

// Agregar el contenedor fluido al elemento nav


// Agregar el elemento nav al elemento con el id "root"
rootElement.appendChild(navElement); */















/* CONTENEDOR CARDS */
let container = document.createElement('div');
container.classList.add('container')
root.appendChild(container);

/* ROW  */
let row = document.createElement('div');
row.id = 'row-cards'
row.classList.add('row', 'p-2', 'g-4')
container.appendChild(row);

let resultado = fetch("https://memin.io/public/api/v2/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.data.forEach(function (element) {
        let root = document.getElementById("row-cards");       

        /* COLUMNA */
        let col = document.createElement("div");
        col.classList.add("col-md-4");
        row.appendChild(col);

        //CARD
        let card = document.createElement("div");
        card.classList.add("card");
        col.appendChild(card);

        //BODY
        let card_body = document.createElement("div");
        card_body.classList.add("card-body");
        card.appendChild(card_body);

        //PARAFO
        let p = document.createElement("p");
        p.innerText = element.name;
        card_body.appendChild(p);
    });
  });
