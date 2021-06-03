const box = document.querySelector('.box');
const card = document.querySelector('.card');

const btf = document.querySelector('.card-character-img');
const title = document.querySelector('.card-info-title');
const subtitle = document.querySelector('.card-info-subtitle');
const movies = document.querySelector('.card-info-movies');
const watchBtn = document.querySelector('.card-button');

box.addEventListener('mousemove', (event) => {
    let xAxis = (event.pageX - window.innerWidth / 2) / 25;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 25;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

box.addEventListener('mouseenter', (event) => {
    card.style.transition = 'all 0.2s ease';
    setTimeout(function (e) {
        card.style.transition = 'none';
    }, 400);
    addTranslateZToElements([btf, title, subtitle, movies, watchBtn]);
});

box.addEventListener('mouseleave', (event) => {
    card.style.transition = 'transform 0.8s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    removeTranslateZToElements([btf, title, subtitle, movies, watchBtn]);
});

function addTranslateZToElements(elements) {
    elements.forEach(
        (element) => (element.style.transform = 'translateZ(80px)')
    );
};

function removeTranslateZToElements(elements) {
    elements.forEach(
        (element) => (element.style.transform = 'translateZ(0)')
    );
};