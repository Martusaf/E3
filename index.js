const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


// const theButton = document.getElementById("theButton");

//theButton.addEventListener("click",()=> {
  //console.log("Este es tu pedido");
//})

//const imagen = document.getElementById("img");

// imagen.setAttribute("src", "./img/4quesos.png");
// imagen.setAttribute("alt", "Imagen de 4 quesos");
 
const pizzaContainer = document.querySelector (".card-pizza");

const templateCardPizza = (pizzas) => {
  const {id, nombre, precio, ingredientes, imagen} = pizzas;

  return`

    <div class="card-pizza">
      <h2>${nombre}</h2>
        <img alt=${nombre} src=${img}>
    <p>${precio}</p>
    <p>${ingredientes.join(", ")}</p>
    <button>Comprar</button>

  `
}

const renderPizza = (pizzas) => {
pizzaContainer.innerHTML = pizzas

}


//const init = () => {
//renderPizza(pizzas);


// init ();