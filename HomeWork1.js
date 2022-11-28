"use strict";
let body = document.querySelector("body");
// dataBase of foods
let users = [
  {
    name: "gamburger",
    price: "19.000 so'm",
    id: 46548,
    image: "./1.png",
  },
  {
    name: "Shaurma",
    price: "23.000 so'm",
    id: 46548,
    image: "./shaurma.png",
  },
  {
    name: "Lavash",
    price: "21.000 so'm",
    id: 46548,
    image: "./lavash.png",
  },
  {
    name: "Hot-Dog",
    price: "11.000 so'm",
    id: 46548,
    image: "hotdog.png",
  },
  {
    name: "fri",
    price: "10.000 so'm",
    id: 46548,
    image: "./fri.png",
  },
  {
    name: "salat",
    price: "6.000 so'm",
    id: 46548,
    image: "./salat.png",
  },
  {
    name: "choy",
    price: "2.000 so'm",
    id: 46548,
    image: "./tea.png",
  },
  {
    name: "pepsi 0.5l",
    price: "8.000 so'm",
    id: 46548,
    image: "./pepsi.png",
  },
];

// Booking button
let button = document.createElement("button");
button.classList.add("button");
button.textContent = "Buyurtma berish";
let modal = document.querySelector(".booking_window");
button.addEventListener("click", function () {
  modal.style.display = "block";
});
body.appendChild(button);

//Container
let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

// forEach
users.forEach((user, index) => {
  //Card
  let card = document.createElement("div");
  card.classList.add("card");
  container.appendChild(card);

  // Card items
  // Food's name
  let h3 = document.createElement("h3");
  h3.textContent = `${index + 1}. ${user.name}`;
  h3.classList.add("food_name");
  //Food's price
  let p = document.createElement("p");
  p.textContent = user.price;
  p.classList.add("food_price");
  //Food's logo
  let img = document.createElement("img");
  img.classList.add("food_logo");
  img.src = user.image;

  //Counter
  let a = 0;
  //Plus button
  let plus = document.createElement("b");
  plus.textContent = "+";
  plus.classList.add("plus_button");
  plus.addEventListener("click", () => {
    a++;
    number.textContent = `miqdori: ${a}`;
  });
  //Quantity
  let number = document.createElement("b");
  number.textContent = `miqdori: ${a}`;
  number.classList.add("counter");
  //Minus button
  let minus = document.createElement("b");
  minus.textContent = "-";
  minus.classList.add("minus_button");
  minus.addEventListener("click", () => {
    a--;
    if (a < 0) {
      a = 0;
      number.textContent = `miqdori: ${a}`;
      alert("Buyurtma 0 tadan kam bo'lmasligi kerak");
    } else {
      number.textContent = `miqdori: ${a}`;
    }
  });

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(plus);
  card.appendChild(number);
  card.appendChild(minus);
});
