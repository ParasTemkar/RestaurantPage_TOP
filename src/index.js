

import './styles.css';

// checking if dom creation is working for each module
// import {createMenuPage} from "./menupage.js";
import {createContactPage} from "./contactpage.js";
// import {createHomePage} from "./homepage.js";
// import {createUtilPage} from "./domUtil.js";

// document.body.appendChild(createHomePage());
// document.body.appendChild(createMenuPage());
// document.body.appendChild(createContactPage());
// document.body.appendChild(createUtilPage());

document.querySelector('#contactbutton').addEventListener('click', () => {
    main.innerHTML = "";
    createContactPage();
});