let root = document.getElementById('root');

//SECTION NAVBAR
let nav = document.createElement('nav');
nav.classList.add('navbar', 'navbar-expand-md', 'navbar-ligth');
root.appendChild(nav);

//IMG NAVBAR
let imgnav = document.createElement('img');
imgnav.src = './img/Favicon.png';
nav.appendChild(imgnav);
















/* let resultado = fetch("https://memin.io/public/api/v2/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.data.forEach(function (element) {
        let root = document.getElementById("root");
        let col = document.createElement("div");
        col.classList.add("col-md-3");
        root.appendChild(col);

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
  }); */
