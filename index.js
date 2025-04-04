//HTML selections

const h1 = document.querySelector("h1");
const hero = document.querySelector(".hero")
const header = document.querySelector(".header");
const sub = document.querySelector(".sub");
const heroButton = document.querySelector(".hero-btn");
const title = document.querySelector(".text1");
const text = document.querySelector(".para-text-1");
const readMore = document.querySelector(".read-more");
const overlay = document.querySelector(".overlay");

window.addEventListener("DOMContentLoaded", () => {
    hero.classList.add("scale");
    header.classList.add("header-animate");
    h1.classList.add("h1-motion");
    sub.classList.add("sub-visible");
    heroButton.classList.add("hero-btn-visible");
    title.classList.add("text1-visible");
    text.classList.add("para-text-1-visible");
    readMore.classList.add("read-more-visible");
    overlay.classList.add("overlay-shrink");
})