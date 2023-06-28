import uniqid from "uniqid";
//important functions and variables
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(require.context("../img", false, /\.png$/));

const itemDB = {
  polo: [
    [
      {
        src: images["polo1.png"],
        name: "Polo de mangas largas",
        prize: 89.95,
        id: uniqid(),
      },
      {
        src: images["polo2.png"],
        name: "Polo a rayas",
        prize: 90.95,
        id: uniqid(),
      },
      {
        src: images["polo3.png"],
        name: "Polo clásica",
        prize: 95.95,
        id: uniqid(),
      },
    ],
    [
      {
        src: images["polo4.png"],
        name: "Polo vaca",
        prize: 70.95,
        id: uniqid(),
      },
      {
        src: images["polo5.png"],
        name: "Polo firma lacoste",
        prize: 80.95,
        id: uniqid(),
      },
      {
        src: images["polo6.png"],
        name: "Polo manga a rayas",
        prize: 89.95,
        id: uniqid(),
      },
    ],
  ],
  shirt: [
    [
      {
        src: images["shirt1.png"],
        name: "Camisa oxford",
        prize: 90.95,
        id: uniqid(),
      },
      {
        src: images["shirt2.png"],
        name: "Camisa resistente al agua",
        prize: 85.95,
        id: uniqid(),
      },
      {
        src: images["shirt3.png"],
        name: "Camisa a rayas",
        prize: 90.95,
        id: uniqid(),
      },
    ],
    [
      {
        src: images["shirt4.png"],
        name: "Camisa a cuadros",
        prize: 89.95,
        id: uniqid(),
      },
      {
        src: images["shirt5.png"],
        name: "Camisa degradada",
        prize: 79.95,
        id: uniqid(),
      },
      {
        src: images["shirt6.png"],
        name: "Camisa hawaiana",
        prize: 89.95,
        id: uniqid(),
      },
    ],
  ],
  shoe: [
    [
      {
        src: images["shoe1.png"],
        name: "Sneaker",
        prize: 70.95,
        id: uniqid(),
      },
      {
        src: images["shoe2.png"],
        name: "Sneaker clásico",
        prize: 60.95,
        id: uniqid(),
      },
      {
        src: images["shoe3.png"],
        name: "Zapato de tenis",
        prize: 65.95,
        id: uniqid(),
      },
    ],
    [
      {
        src: images["shoe4.png"],
        name: "Sneaker edición RG",
        prize: 60.95,
        id: uniqid(),
      },
      {
        src: images["shoe5.png"],
        name: "Sneaker a rayas",
        prize: 55.95,
        id: uniqid(),
      },
      {
        src: images["shoe6.png"],
        name: "Sneaker premium",
        prize: 70.95,
        id: uniqid(),
      },
    ],
  ],
  sportcloth: [
    [
      {
        src: images["sportcloth1.png"],
        name: "Pantalón corto",
        prize: 50.95,
        id: uniqid(),
      },
      {
        src: images["sportcloth2.png"],
        name: "Sudadera transpirable",
        prize: 70.95,
        id: uniqid(),
      },
      {
        src: images["sportcloth3.png"],
        name: "Pantalón deportivo",
        prize: 60.95,
        id: uniqid(),
      },
    ],
    [
      {
        src: images["sportcloth4.png"],
        name: "Suéter deportivo",
        prize: 75.95,
        id: uniqid(),
      },
      {
        src: images["sportcloth5.png"],
        name: "Mallas",
        prize: 56.95,
        id: uniqid(),
      },
      {
        src: images["sportcloth6.png"],
        name: "Conjunto deportivo",
        prize: 90.95,
        id: uniqid(),
      },
    ],
  ],
  sweater: [
    [
      {
        src: images["sweater1.png"],
        name: "Suéter con cierre",
        prize: 99.95,
        id: uniqid(),
      },
      {
        src: images["sweater2.png"],
        name: "Suéter cocodrilo",
        prize: 90.95,
        id: uniqid(),
      },
      {
        src: images["sweater3.png"],
        name: "Suéter logo en el pecho",
        prize: 90.95,
        id: uniqid(),
      },
    ],
    [
      {
        src: images["sweater4.png"],
        name: "Suéter con capucha",
        prize: 85.95,
        id: uniqid(),
      },
      {
        src: images["sweater5.png"],
        name: "Suéter estampado Lacoste",
        prize: 89.95,
        id: uniqid(),
      },
      {
        src: images["sweater6.png"],
        name: "Suéter con estampado",
        prize: 89.95,
        id: uniqid(),
      },
    ],
  ],
  tshirt: [
    [
      {
        src: images["tshirt1.png"],
        name: "Camiseta multicolor",
        prize: 70.95,
        id: uniqid(),
      },
      {
        src: images["tshirt2.png"],
        name: "Camiseta especial",
        prize: 70.95,
        id: uniqid(),
      },
      {
        src: images["tshirt3.png"],
        name: "Camiseta bicolor",
        prize: 65.95,
        id: uniqid(),
      },
    ],
    [
      {
        src: images["tshirt4.png"],
        name: "Camiseta básica",
        prize: 60.95,
        id: uniqid(),
      },
      {
        src: images["tshirt5.png"],
        name: "Camiseta con rayas",
        prize: 60.95,
        id: uniqid(),
      },
      {
        src: images["tshirt6.png"],
        name: "Camiseta con logo",
        prize: 65.95,
        id: uniqid(),
      },
    ],
  ],
};
const carouselItemsDB = [
  {
    id: "polo",
    title: "Camisas polo",
    text: "Combina comodidad con estilo en una silueta tan deportiva como elegante. En tejido Petit Piqué, un clásico que no pasa de moda",
    img: images[`polo.png`],
  },
  {
    id: "shirt",
    title: "Camisas",
    text: "La camisa Lacoste es sinónimo de estilo perdurable, avalado por el Cocodrilo. Algodón pinpoint, tejano, sarga o pana, todos los tejidos son ganadores",
    img: images[`shirt.png`],
  },
  {
    id: "sportcloth",
    title: "Ropa deportiva",
    text: "Sea para salir al parque o al gimnasio, el cocodrilo te ofrece lo mejor en indumentarias deportivas cómodas y prácticas",
    img: images[`sportcloth.png`],
  },
  {
    id: "sweater",
    title: "Suéteres/sudaderas",
    text: "Nuestras sudaderas para hombre garantizan una silueta informal para llevar el cocodrilo con elegancia y comodidad. Colorida, holgada o retro",
    img: images[`sweater.png`],
  },
  {
    id: "tshirt",
    title: "Camisetas",
    text: "Sobrias, atemporales, de inspiración vintage o con estampados de color, encuentra tu próxima camiseta esencial",
    img: images[`tshirt.png`],
  },
  {
    id: "shoe",
    title: "Calzado",
    text: "El cocodrilo te ofrece lo mejor en calzado para cada cada ocasión, ¿qué esperas para conseguir el modelo que mejor te siente?",
    img: images[`shoe.png`],
  },
];

export { carouselItemsDB, itemDB };
