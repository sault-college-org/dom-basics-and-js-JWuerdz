// PART 1
const Appetizers = () => {
  
  const appetizerContent = document.createElement('div');
  appetizerContent.setAttribute('class', 'container-flex');

  const appetizerHeader = document.createElement('h1');
  appetizerHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
  appetizerHeader.innerHTML = 'APPETIZERS';

  const appetizerList = document.createElement('ul');
  appetizerList.setAttribute('class', 'appetizer-list')

  const appetizerItem = () => {
    const list = document.createElement('li');
    list.setAttribute('class', 'nav-item list-unstyled mx-2 appetizer-list-item');

    const nachosColumn = document.createElement('div');
    nachosColumn.setAttribute('class', 'appetizer-item-column');
    const nachosTitle = document.createElement('h1');
    nachosTitle.setAttribute('id', 'nachos');
    nachosTitle.setAttribute('class', 'text-center');
    nachosTitle.innerHTML = 'NACHOS';
    const nachosDescription = document.createElement('p');
    nachosDescription.setAttribute('class', 'my-3 pb-3 appetizer-text');
    nachosDescription.innerHTML = 'Our most famous appetizer, the Nachos! This infamous nachos served on a platter are perfect for sharing with the whole party. And if the basic nachos are just not spicy enough to satisfy that spice craving, we also have the option to add all sorts of hot peppers. These peppers range from Jalapeño peppers at a meager 2,500 Scoville units all the way up to Thai peppers with a massive heat of 50,000 Scoville units.';

    nachosColumn.appendChild(nachosTitle);
    nachosColumn.appendChild(nachosDescription);
    list.appendChild(nachosColumn);

    const spinachDipColumn = document.createElement('div');
    spinachDipColumn.setAttribute('class', 'appetizer-item-column');
    const spinachDipTitle = document.createElement('h1');
    spinachDipTitle.setAttribute('id', 'spinachDip');
    spinachDipTitle.setAttribute('class', 'text-center');
    spinachDipTitle.innerHTML = 'SPINACH DIP';
    const spinachDipDescription = document.createElement('p');
    spinachDipDescription.setAttribute('class', 'my-3 pb-3 appetizer-text');
    spinachDipDescription.innerHTML = 'Our classic Spinach Dip is a crowd-pleaser! Creamy spinach and artichoke dip served with tortilla chips.';

    spinachDipColumn.appendChild(spinachDipTitle);
    spinachDipColumn.appendChild(spinachDipDescription);
    list.appendChild(spinachDipColumn);

    const mozzaSticksColumn = document.createElement('div');
    mozzaSticksColumn.setAttribute('class', 'appetizer-item-column');
    const mozzaSticksTitle = document.createElement('h1');
    mozzaSticksTitle.setAttribute('id', 'mozzaSticks');
    mozzaSticksTitle.setAttribute('class', 'text-center');
    mozzaSticksTitle.innerHTML = 'MOZZARELLA STICKS';
    const mozzaSticksDescription = document.createElement('p');
    mozzaSticksDescription.setAttribute('class', 'my-3 pb-3 appetizer-text');
    mozzaSticksDescription.innerHTML = 'Golden brown and delicious Mozzarella Sticks. Served with marinara sauce for dipping.';

    mozzaSticksColumn.appendChild(mozzaSticksTitle);
    mozzaSticksColumn.appendChild(mozzaSticksDescription);
    list.appendChild(mozzaSticksColumn);

    return list;
  };

  appetizerContent.appendChild(appetizerHeader);
  appetizerList.appendChild(appetizerItem());
  appetizerContent.appendChild(appetizerList);

  return appetizerContent;
}

export default Appetizers;

