

import './styles.css';

import { createContactPage } from "./contactpage.js";
import { createMenuPage } from "./menupage.js";
import { createHomePage } from "./homepage.js";

const main = document.querySelector('#main');

// Logic to load the content dynamically

const pageLoaders = {
    '#homebutton': createHomePage,
    '#menubutton': createMenuPage,
    '#contactbutton': createContactPage,
};

function loadContent(loadFunction) {
    main.innerHTML = "";
    const content = loadFunction();
    main.appendChild(content);
}

for (const buttonSelector in pageLoaders) {
    const loadFunction = pageLoaders[buttonSelector];
    const button = document.querySelector(buttonSelector);
    if (button) {
        button.addEventListener('click', () => {
            loadContent(loadFunction);
        });
    } else {
        console.error(`Button with selector "${buttonSelector}" not found.`);
    }
}

// Initial home page load
loadContent(createHomePage);