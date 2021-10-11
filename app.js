var products = [
  {
    id: 0,
    name: "Apples",
    price: "2.99",
    image:
      "https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color: "red",
  },
  {
    id: 1,
    name: "Bananas",
    price: "2.50",
    image:
      "https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color: "gold",
  },
  {
    id: 2,
    name: "Oranges",
    price: "3.50",
    image:
      "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color: "orange",
  },
];

const popUp = document.body.querySelector(".popUp");
popUp.addEventListener("click", () => {
  popUp.className = "popUp hidden";
});

const init = () => {
  products.map((ob, idx) => {
    let html,
      product = document.createElement("div");
    product.className = `product ${ob.color}`;

    html = `
        <img src="${ob.image}" alt="${ob.name}" />
        <div>
            Product: ${ob.name}
        </div>
        <div>
            Price: $${ob.price}
        </div>
    `;

    product.innerHTML = html;

    product.addEventListener("click", (event) => {
      popUp.innerHTML = html;
      popUp.className = "popUp";
    });

    document.body.appendChild(product);
  });
};

init();
