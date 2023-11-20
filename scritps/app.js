const AppetizersMenu = () => {
    const menuContent = document.createElement('div');
    menuContent.setAttribute('class', 'container');
  
    const menuHeader = document.createElement('h1');
    menuHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    menuHeader.innerHTML = 'APPETIZERS MENU';
  
    const menuList = document.createElement('ul');
    menuList.setAttribute('class', 'menuList');
  
    const menuItems = () => {
      const list = document.createElement('li');
      list.setAttribute('class', 'nav-item list-unstyled mx-2');
  
      const appetizer1 = document.createElement('h1');
      appetizer1.setAttribute('id', 'appetizer1');
      appetizer1.setAttribute('class', 'text-center');
      appetizer1.innerHTML = 'SPINACH DIP';
      list.appendChild(appetizer1);
      const appetizerParagraph1 = document.createElement('p');
      appetizerParagraph1.setAttribute('class', 'my-3 pb-3');
      appetizerParagraph1.innerHTML = 'Creamy spinach and artichoke dip served with tortilla chips.';
      list.appendChild(appetizerParagraph1);
  
      const appetizer2 = document.createElement('h1');
      appetizer2.setAttribute('id', 'appetizer2');
      appetizer2.setAttribute('class', 'text-center');
      appetizer2.innerHTML = 'MOZZARELLA STICKS';
      list.appendChild(appetizer2);
      const appetizerParagraph2 = document.createElement('p');
      appetizerParagraph2.setAttribute('class', 'my-3 pb-3');
      appetizerParagraph2.innerHTML = 'Golden brown mozzarella sticks served with marinara sauce.';
      list.appendChild(appetizerParagraph2);
  
      const appetizer3 = document.createElement('h1');
      appetizer3.setAttribute('id', 'appetizer3');
      appetizer3.setAttribute('class', 'text-center');
      appetizer3.innerHTML = 'SPICY CHICKEN WINGS';
      list.appendChild(appetizer3);
      const appetizerParagraph3 = document.createElement('p');
      appetizerParagraph3.setAttribute('class', 'my-3 pb-3');
      appetizerParagraph3.innerHTML = 'Crispy chicken wings tossed in a spicy buffalo sauce, served with celery and blue cheese dressing.';
      list.appendChild(appetizerParagraph3);
  
      return list;
    };
  
    menuContent.appendChild(menuHeader);
    menuContent.appendChild(menuItems());
  
    return menuContent;
  };
  
  export default AppetizersMenu;
  