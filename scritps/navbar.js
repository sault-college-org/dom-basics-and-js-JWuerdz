const Navbar = () => {
  const navbarContent = document.createElement('div');
  navbarContent.setAttribute('class', 'navbar fixed-top');

  const navLinks = document.createElement('ul');
  navLinks.setAttribute('class', 'navLink');

  const navList = () => {
    const list = document.createElement('li');
    list.setAttribute('class', 'nav-item list-unstyled mx-2');

    const createNavLink = (id, text) => {
      const navLink = document.createElement('a');
      navLink.setAttribute('id', id);
      navLink.setAttribute('class', 'mx-2');
      navLink.setAttribute('href', '#');
      navLink.innerHTML = text;
      return navLink;
    };

    const navLink1 = createNavLink('home', 'Home');
    const navLink2 = createNavLink('menu', 'Menu');
    const navLink3 = createNavLink('contact', 'Contact');
    const navLink4 = createNavLink('appetizers', 'Appetizers'); // New link

    list.appendChild(navLink1);
    list.appendChild(navLink2);
    list.appendChild(navLink3);
    list.appendChild(navLink4);

    return list;
  };

  navbarContent.appendChild(navLinks);
  navbarContent.appendChild(navList());

  return navbarContent;
};

export default Navbar;
