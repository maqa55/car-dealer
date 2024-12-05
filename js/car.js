"use strict";

const activElements = document.querySelectorAll(".telul .activ");

activElements.forEach(function (activ) {
    activ.addEventListener("click", function () {
        const nestedUl = activ.parentElement.querySelector("ul");

        nestedUl.classList.toggle("hom");
    });
});

// const nav = document.querySelector(".hed .nav");
// const tel = document.querySelector(".tel .telul");

// nav.addEventListener("click", function () {
//     tel.classList.toggle("telnav")
// })
const new2 = document.querySelector(".new2 .ir")
const new22 = document.querySelector(".new2 ul li ul")

new2.addEventListener("click", function () {
    new22.classList.toggle("neww2")
})

const new3 = document.querySelector(".new3 .bloga")
const new4 = document.querySelector(".new3 .ir")

new4.addEventListener("click", function () {
    new4.classList.toggle("new3")
})






