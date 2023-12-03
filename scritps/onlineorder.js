const OrderOnline = () => {
    const orderContent = document.createElement("div");
    orderContent.setAttribute("class", "order-container");
  
    const orderHeader = document.createElement("h2");
    orderHeader.textContent = "Order Online";
    orderContent.appendChild(orderHeader);
  
    const orderForm = document.createElement("form");
    orderForm.setAttribute("action", "https://formspree.io/f/meqbbloy");
    orderForm.setAttribute("method", "POST");
  
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    orderForm.appendChild(nameLabel);
  
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    orderForm.appendChild(nameInput);
  
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    orderForm.appendChild(emailLabel);
  
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    orderForm.appendChild(emailInput);
  
    const orderLabel = document.createElement("label");
    orderLabel.textContent = "Order:";
    orderForm.appendChild(orderLabel);
  
    const orderTextarea = document.createElement("textarea");
    orderTextarea.setAttribute("name", "order");
    orderForm.appendChild(orderTextarea);
  
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";
    orderForm.appendChild(submitButton);
  
    orderContent.appendChild(orderForm);
  
    return orderContent;
  };
  
  export default OrderOnline;
  