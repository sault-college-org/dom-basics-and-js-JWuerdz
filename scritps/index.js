import Home from "./home.js";
import Menu from "./menu.js";
import Navbar from "./navbar.js";
import Contact from "./contact.js";
import Appetizer from "./appetizer.js";
import OrderOnline from "./orderonline.js";
import FoodGallery from "./food.js";

const Index = () => {
  function italicsBody() {
    document.body.style.fontFamily =
      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
  }
  italicsBody();

  const content = document.getElementById("content");
  const navbar = Navbar();
  content.appendChild(navbar);
  const home = Home();
  content.appendChild(home);
  const appetizer = Appetizer();
  const online = OrderOnline();
  const food = FoodGallery();

  // NAVBAR CLICKING

  const menu = Menu();
  const contact = Contact();

  const link1 = document.getElementById("home");
  link1.addEventListener("click", () => {
    content.replaceChild(home, content.childNodes[1]);
  });

  const link2 = document.getElementById("menu");
  link2.addEventListener("click", () => {
    content.replaceChild(menu, content.childNodes[1]);
  });

  const link3 = document.getElementById("contact");
  link3.addEventListener("click", () => {
    content.replaceChild(contact, content.childNodes[1]);
  });

  const link4 = document.getElementById("appetizer");
  link4.addEventListener("click", () => {
    content.replaceChild(appetizer, content.childNodes[1]);
  });

  const link5 = document.getElementById("online");
  link5.addEventListener("click", () => {
    content.replaceChild(online, content.childNodes[1]);
  });

  const link6 = document.getElementById("food");
  link6.addEventListener("click", () => {
    content.replaceChild(food, content.childNodes[1]);
  });
};

export default Index;
