"use strict";

const bars = document.querySelectorAll(".hed .bars");
const telul = document.querySelectorAll(".telul");

bars.forEach(bar => {
    bar.addEventListener("click", function () {
        telul.forEach(tel => {
            tel.classList.toggle("telnav");
        });
    });
});

const menuItems = document.querySelectorAll('.tela');

menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();  

        event.preventDefault();  

        const subMenu = this.querySelector('ul');
        const icon = this.querySelector('i');

        if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
            icon.classList.remove('active');
        } else {
            document.querySelectorAll('.tela ul').forEach(sub => {
                sub.style.display = 'none';  
            });

            subMenu.style.display = 'block';
            icon.classList.add('active');
        }
    });
});

const new2Items = document.querySelectorAll('.new2');

new2Items.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();  

        const subMenu = this.querySelector('ul');
        const icon = this.querySelector('i');

        if (subMenu && subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
            icon.classList.remove('active');
        } else {
            document.querySelectorAll('.new2 ul').forEach(sub => {
                sub.style.display = 'none'; 
            });

            if (subMenu) {
                subMenu.style.display = 'block';
                icon.classList.add('active');
            }
        }
    });
});



const new3Items = document.querySelectorAll('.new3');

new3Items.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();  
        event.stopPropagation();  

        const subMenu = this.querySelector('ul');
        const subSubMenu = this.querySelector('.bloga');
        const icon = this.querySelector('i');

        if (subMenu && subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
            icon.classList.remove('active');
        } else {
            document.querySelectorAll('.new3 ul').forEach(sub => {
                sub.style.display = 'none';  
            });

            if (subMenu) {
                subMenu.style.display = 'block';
                icon.classList.add('active');
            }

            if (subSubMenu && subSubMenu.style.display === 'none') {
                subSubMenu.style.display = 'block';
            } else if (subSubMenu) {
                subSubMenu.style.display = 'none';
            }
        }
    });
});


const blogliItems = document.querySelectorAll('.blogli');

blogliItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation(); 
        event.preventDefault();   

        const subMenu = this.querySelector('ul');
        const icon = this.querySelector('i');

        if (subMenu && subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
            icon.classList.remove('active');
        } else {
            document.querySelectorAll('.blogli ul').forEach(sub => {
                sub.style.display = 'none';  
            });

            if (subMenu) {
                subMenu.style.display = 'block';
                icon.classList.add('active');
            }
        }
    });
});



const liaaItems = document.querySelectorAll('.liaa');

liaaItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();  
        event.preventDefault();   

        const subMenu = this.querySelector('ul');

        if (subMenu) {
            if (subMenu.style.display === 'none' || subMenu.style.display === '') {
                subMenu.style.display = 'block';
            } else {
                subMenu.style.display = 'none';
            }
        }
    });
});



const blItems = document.querySelectorAll('.bl');

blItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();  
        event.preventDefault();   

        const subMenu = this.querySelector('ul');

        if (subMenu) {
            subMenu.classList.toggle('bll');
        }
    });
});












