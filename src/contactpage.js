import { main } from "./domUtil.js";

export function createContactPage() {
 
    const contactPage = document.createElement('div');
    contactPage.textContent = "Welcome to the Contact Page!";
    main.appendChild(contactPage);

}
