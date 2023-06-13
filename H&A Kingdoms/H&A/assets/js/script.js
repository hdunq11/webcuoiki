"use strict";

const addEventOnElements = function (elements, eventType, callBack) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventOnElements(eventType, callBack);
  }
};

/**
 *MOBILE NAVBAR
 *navbar will show after clicking menu button
 */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElements(navLinks, "click", navClose);

/**
 * HEADER and BACKTOP BTN
 * header and back top will be active after scrool down to 100px of sceen
 */

const header = document.querySelector("[data-header]");

const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeEl = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

window.addEventListener("scroll", activeEl);

/**
 * Button hover ripple effect -Hiệu ứng gợn khi di chuột qua nút
 */
const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
};

addEventOnElements(buttons, "mousemove", buttonHoverRipple);

/**
 * Scroll reveal
 */
const revealElements = document.querySelectorAll("[date-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementInsideWindow =
      revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      revealElements[i].classList.add("revealed");
    }
  }
};

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

/**
 * Custom cursor
 */

const cursor = document.querySelector("[data-cursor]");
const hoverElement = [
  ...document.querySelectorAll("a"),
  ...document.querySelectorAll("button"),
];

const cursorMove = function (event) {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
};

window.addEventListener("mousemove", cursorMove);

addEventOnElements(hoverElement, "mousemove", function () {
  cursor.classList.add("hovered");
});

addEventOnElements(hoverElement, "mouseout", function () {
  cursor.classList.remove("hovered");
});

// Valid value signup
// const nameInput = document.querySelector('input');
// const form = document.querySelector('form');

// nameInput.addEventListener('input', () => {
//   nameInput.setCustomValidity('');
//   nameInput.checkValidity();
// });

// nameInput.addEventListener('invalid', () => {
//   if(nameInput.value === '') {
//     nameInput.setCustomValidity('Enter your username!');
//   } else {
//     nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
//   }
// });
