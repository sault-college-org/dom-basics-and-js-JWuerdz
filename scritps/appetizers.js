class AppetizerItem {
  constructor(id, title, description, imagePath) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
  }

  createItem() {
    const item = document.createElement("div");
    item.setAttribute("class", `appetizer-item text-center ${this.id}`);

    const itemContent = document.createElement("div");
    itemContent.setAttribute("class", "appetizer-content");

    const itemImage = document.createElement("img");
    itemImage.setAttribute("src", this.imagePath);
    itemImage.setAttribute("alt", this.title);
    itemImage.setAttribute("class", "appetizer-image");
    itemImage.style.maxWidth = "200px";
    itemImage.style.maxHeight = "150px";
    itemContent.appendChild(itemImage);

    const itemTitle = document.createElement("h2");
    itemTitle.innerHTML = this.title;
    itemTitle.setAttribute("class", "appetizer-title");

    const itemDescription = document.createElement("p");
    itemDescription.innerHTML = this.description;
    itemDescription.setAttribute("class", "appetizer-description");

    itemContent.appendChild(itemTitle);
    itemContent.appendChild(itemDescription);

    item.appendChild(itemContent);

    return item;
  }
}

const Appetizer = () => {
  const appetizerContent = document.createElement("div");
  appetizerContent.setAttribute("class", "appetizer-container container");

  const appetizerHeader = document.createElement("h1");
  appetizerHeader.setAttribute(
    "class",
    "appetizer-header text-center my-3 pt-5 mb-5"
  );
  appetizerHeader.innerHTML = "Appetizer Menu";
  appetizerContent.appendChild(appetizerHeader);

  const appetizerFlexBox = document.createElement("div");
  appetizerFlexBox.setAttribute(
    "class",
    "appetizer-flexbox d-flex justify-content-between"
  );

  const nachos = new AppetizerItem(
    "nachos",
    "Nachos",
    "Our most famous appetizer, the Nachos! This infamous nachos served on a platter are perfect for sharing with the whole party. And if the basic nachos are just not spicy enough to satisfy that spice craving, we also have the option to add all sorts of hot peppers. These peppers range from Jalapeño peppers at a meager 2,500 Scoville units all the way up to Thai peppers with a massive heat of 50,000 Scoville units..",
    "imgs/nachosimg.jpg"
  );
  appetizerFlexBox.appendChild(nachos.createItem());

  const spinachDip = new AppetizerItem(
    "spinach-dip",
    "Spinach Dip",
    "Our classic Spinach Dip is a crowd-pleaser! Creamy spinach and artichoke dip served with tortilla chips.",
    "imgs/spinachdipimg.jpg"
  );
  appetizerFlexBox.appendChild(spinachDip.createItem());

  const mozzaSticks = new AppetizerItem(
    "mozza-sticks",
    "Mozzarella Sticks",
    "Golden brown and delicious Mozzarella Sticks. Served with marinara sauce for dipping.",
    "imgs/mozzasticksimg.jpg"
  );
  appetizerFlexBox.appendChild(mozzaSticks.createItem());

  appetizerContent.appendChild(appetizerFlexBox);

  return appetizerContent;
};

export default Appetizer;



