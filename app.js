'use strict';
//Change theme and button text when button is pressed
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    if(document.body.className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});