const AppetizerItem = class {
    constructor(id, title, description) {
      this.id = id;
      this.title = title;
      this.description = description;
    }
  
    createItem() {
      const item = document.createElement("div");
      item.setAttribute("class", `appetizer-item text-center ${this.id}`);
  
      const itemContent = document.createElement("div");
      itemContent.setAttribute("class", "appetizer-content");
  
      const itemTitle = document.createElement("h1");
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
  };
  
  const Appetizers = () => {
    const appetizersContent = document.createElement("div");
    appetizersContent.setAttribute("class", "appetizers container");
  
    const appetizersHeader = document.createElement("h1");
    appetizersHeader.setAttribute("class", "text-center my-3 pt-5 mb-5");
    appetizersHeader.innerHTML = "APPETIZERS";
    appetizersContent.appendChild(appetizersHeader);
  
    const appetizersFlexBox = document.createElement("div");
    appetizersFlexBox.setAttribute("class", "appetizers-flexbox");
  
    const spinachDip = new AppetizerItem(
      "spinachDip",
      "Spinach Dip",
      "Our classic Spinach Dip is a crowd-pleaser! Creamy spinach and artichoke dip served with tortilla chips."
    );
    appetizersFlexBox.appendChild(spinachDip.createItem());
  
    const mozzaSticks = new AppetizerItem(
      "mozzaSticks",
      "Mozzarella Sticks",
      "Golden brown and delicious Mozzarella Sticks. Served with marinara sauce for dipping."
    );
    appetizersFlexBox.appendChild(mozzaSticks.createItem());
  
    const nachos = new AppetizerItem(
      "nachos",
      "Nachos",
      "Our most famous appetizer, the Nachos! This infamous nachos served on a platter are perfect for sharing with the whole party. And if the basic nachos are just not spicy enough to satisfy that spice craving, we also have the option to add all sorts of hot peppers. These peppers range from Jalapeño peppers at a meager 2,500 Scoville units all the way up to Thai peppers with a massive heat of 50,000 Scoville units."
    );
    appetizersFlexBox.appendChild(nachos.createItem());
  
    appetizersContent.appendChild(appetizersFlexBox);
  
    return appetizersContent;
  };
  