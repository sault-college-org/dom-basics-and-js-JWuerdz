const Navbar = () => {
  const navbarContent = document.createElement("div");
  navbarContent.setAttribute("class", "navbar fixed-top");

  const navLinks = document.createElement("ul");
  navLinks.setAttribute("class", "navLink");

  const navList = () => {
    const list = document.createElement("li");
    list.setAttribute("class", "nav-item list-unstyled mx-2");

    const navLink1 = document.createElement("a");
    navLink1.setAttribute("id", "home");
    navLink1.setAttribute("class", "mx-2");
    navLink1.setAttribute("href", "#");
    navLink1.innerHTML = "Home";
    list.appendChild(navLink1);

    const navLink2 = document.createElement("a");
    navLink2.setAttribute("id", "menu");
    navLink2.setAttribute("class", "mx-2");
    navLink2.setAttribute("href", "#");
    navLink2.innerHTML = "Menu";
    list.appendChild(navLink2);

    const navLink3 = document.createElement("a");
    navLink3.setAttribute("id", "appetizer");
    navLink3.setAttribute("class", "mx-2");
    navLink3.setAttribute("href", "#");
    navLink3.innerHTML = "Appetizer";
    list.appendChild(navLink3);

    const navLink4 = document.createElement("a");
    navLink4.setAttribute("id", "contact");
    navLink4.setAttribute("class", "mx-2");
    navLink4.setAttribute("href", "#");
    navLink4.innerHTML = "Contact";
    list.appendChild(navLink4);

    const navLink5 = document.createElement("a");
    navLink5.setAttribute("id", "online");
    navLink5.setAttribute("class", "mx-2");
    navLink5.setAttribute("href", "#");
    navLink5.innerHTML = "Order Online";
    list.appendChild(navLink5);

    const navLink6 = document.createElement("a");
    navLink6.setAttribute("id", "food");
    navLink6.setAttribute("class", "mx-2");
    navLink6.setAttribute("href", "#");
    navLink6.innerHTML = "Food Gallery";
    list.appendChild(navLink6);

    return list;
  };

  navbarContent.appendChild(navLinks);
  navbarContent.appendChild(navList());

  return navbarContent;
};

export default Navbar;

