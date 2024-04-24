/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));

});

var typingElement = document.querySelector('.typing');

var typed = new Typed(typingElement, {
    strings: ["Student", "Web Developer", "UI/UX Designer", "Cybersecurity Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});