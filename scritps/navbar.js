const Navbar = () => {
  const navbarContent = document.createElement("div");
  navbarContent.setAttribute("class", "navbar fixed-top");

  const navLinks = document.createElement("ul");
  navLinks.setAttribute("class", "navLink");

  const navList = () => {
    const list = document.createElement("li");
    list.setAttribute("class", "nav-item list-unstyled mx-2");

    const navLink1 = createNavLink("Home", "home");
    const navLink2 = createNavLink("Menu", "menu");
    const navLink3 = createNavLink("Appetizers", "appetizers");
    const navLink4 = createNavLink("Contact", "contact");
    const navLink5 = createNavLink("Online Order", "online-order");

    list.appendChild(navLink1);
    list.appendChild(navLink2);
    list.appendChild(navLink3);
    list.appendChild(navLink4);
    list.appendChild(navLink5);

    return list;
  };

  navbarContent.appendChild(navLinks);
  navbarContent.appendChild(navList());

  return navbarContent;
};

export default Navbar;

function createNavLink(text, id) {
  const navLink = document.createElement("a");
  navLink.setAttribute("id", id);
  navLink.setAttribute("class", "mx-2");
  navLink.setAttribute("href", "#");
  navLink.innerHTML = text;
  return navLink;
}
