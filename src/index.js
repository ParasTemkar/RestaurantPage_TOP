

import './styles.css';

// checking if dom creation is working for each module
import { createContactPage } from "./contactpage.js";
import { createMenuPage } from "./menupage.js";
import { createHomePage } from "./homepage.js";
import { main } from "./domUtil.js";

function loadContent(loadFunction) {
    main.innerHTML = "";
    const content = loadFunction();
    main.appendChild(content);
}

loadContent(createHomePage);

document.querySelector('#homebutton').addEventListener('click', () => {
    loadContent(createHomePage);
});

document.querySelector('#menubutton').addEventListener('click', () => {
    loadContent(createMenuPage);
});

document.querySelector('#contactbutton').addEventListener('click', () => {
    loadContent(createContactPage);
});


