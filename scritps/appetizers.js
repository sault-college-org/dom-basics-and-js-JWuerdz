const AppetizerMenu = () => {
  const appetizerContent = document.createElement('div');
  appetizerContent.setAttribute('class', 'container');

  const appetizerHeader = document.createElement('h1');
  appetizerHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
  appetizerHeader.innerHTML = 'APPETIZERS';

  const appetizerList = document.createElement('ul');
  appetizerList.setAttribute('class', 'menuList');

  const appetizerItems = () => {
    const list = document.createElement('li');
    list.setAttribute('class', 'nav-item list-unstyled mx-2');

    const appetizer1 = document.createElement('h1');
    appetizer1.setAttribute('id', 'appetizer1');
    appetizer1.setAttribute('class', 'text-center');
    appetizer1.innerHTML = 'Nachos';
    list.appendChild(appetizer1);
    const appetizerParagraph1 = document.createElement('p');
    appetizerParagraph1.setAttribute('class', 'my-3 pb-3');
    appetizerParagraph1.innerHTML = 'Our most famous appetizer, the Nachos! This infamous nachos served on a platter are perfect for sharing with the whole party. And if the basic nachos are just not spicy enough to satisfy that spice craving, we also have the option to add all sorts of hot peppers. These peppers range from Jalapeño peppers at a meager 2,500 Scoville units all the way up to Thai peppers with a massive heat of 50,000 Scoville units.';
    list.appendChild(appetizerParagraph1);

    const appetizer2 = document.createElement('h1');
    appetizer2.setAttribute('id', 'appetizer2');
    appetizer2.setAttribute('class', 'text-center');
    appetizer2.innerHTML = 'Spinach Dip';
    list.appendChild(appetizer2);
    const appetizerParagraph2 = document.createElement('p');
    appetizerParagraph2.setAttribute('class', 'my-3 pb-3');
    appetizerParagraph2.innerHTML = 'Our classic Spinach Dip is a crowd-pleaser! Creamy spinach and artichoke dip served with tortilla chips.';
    list.appendChild(appetizerParagraph2);

    const appetizer3 = document.createElement('h1');
    appetizer3.setAttribute('id', 'appetizer3');
    appetizer3.setAttribute('class', 'text-center');
    appetizer3.innerHTML = 'Mozzarella Sticks';
    list.appendChild(appetizer3);
    const appetizerParagraph3 = document.createElement('p');
    appetizerParagraph3.setAttribute('class', 'my-3 pb-3');
    appetizerParagraph3.innerHTML = 'Golden brown and delicious Mozzarella Sticks. Served with marinara sauce for dipping.';
    list.appendChild(appetizerParagraph3);

    return list;
  };

  appetizerContent.appendChild(appetizerHeader);
  appetizerContent.appendChild(appetizerItems());

  return appetizerContent;
};

export default AppetizerMenu;
