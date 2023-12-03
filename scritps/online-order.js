// orderOnline.js

document.addEventListener("DOMContentLoaded", function () {
   
    function createOrderOnlineTab() {
        const orderOnlineTabContainer = document.createElement("div");
        orderOnlineTabContainer.setAttribute("id", "order-online-form");
        orderOnlineTabContainer.setAttribute("class", "hidden"); 

      
        const orderForm = document.createElement("form");
        orderForm.setAttribute("action", "https://formspree.io/your-email");
        orderForm.setAttribute("method", "POST");

        
        const nameLabel = createFormLabel("Name");
        const nameInput = createFormInput("text", "name", true);

        const emailLabel = createFormLabel("Email");
        const emailInput = createFormInput("email", "email", true);

        const orderLabel = createFormLabel("Order");
        const orderTextarea = createFormTextarea("order", true);

        const submitLabel = createFormLabel("Submit");
        const submitButton = createFormButton("submit", "Submit Order");

        
        orderForm.appendChild(nameLabel);
        orderForm.appendChild(nameInput);

        orderForm.appendChild(emailLabel);
        orderForm.appendChild(emailInput);

        orderForm.appendChild(orderLabel);
        orderForm.appendChild(orderTextarea);

        orderForm.appendChild(submitLabel);
        orderForm.appendChild(submitButton);

       
        orderOnlineTabContainer.appendChild(orderForm);

        
        document.querySelector("main").appendChild(orderOnlineTabContainer);
    }

    
    function createFormLabel(text) {
        const label = document.createElement("label");
        label.setAttribute("for", text.toLowerCase());
        label.textContent = text + ":";

        return label;
    }

    function createFormInput(type, name, required) {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("name", name);
        if (required) {
            input.setAttribute("required", "required");
        }

        return input;
    }

    function createFormTextarea(name, required) {
        const textarea = document.createElement("textarea");
        textarea.setAttribute("name", name);
        if (required) {
            textarea.setAttribute("required", "required");
        }

        return textarea;
    }

    function createFormButton(type, text) {
        const button = document.createElement("button");
        button.setAttribute("type", type);
        button.textContent = text;

        return button;
    }

    
    function toggleOrderOnlineTab() {
        const orderOnlineTabContainer = document.getElementById("order-online-form");
        orderOnlineTabContainer.classList.toggle("hidden");
    }

    
    document.getElementById("order-online-tab").addEventListener("click", function () {
        toggleOrderOnlineTab();
        createOrderOnlineTab();
    });
});
