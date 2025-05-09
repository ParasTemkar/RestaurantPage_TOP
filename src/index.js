

import './styles.css';

// checking if dom creation is working for each module
import {createMenuPage} from "./menupage.js";
import {createContactPage} from "./contactpage.js";
import {createHomePage} from "./homepage.js";


document.querySelector('#contactbutton').addEventListener('click', () => {
    main.innerHTML = "";
    const contactContent = createContactPage();
    main.appendChild(contactContent);
}); 
document.querySelector('#menubutton').addEventListener('click', () => {
    main.innerHTML = "";
    const menuContent = createMenuPage();
    main.appendChild(menuContent);
}); 
document.querySelector('#homebutton').addEventListener('click', () => {
    main.innerHTML = "";
    const homeContent = createHomePage();
    main.appendChild(homeContent);
});