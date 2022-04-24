/*
    File for slider
*/

//Getting slider elements
const slider = document.querySelector('.slider-line');
let sliderItems = document.querySelectorAll('.item');
const video = document.querySelector('video');

// Getting buttons
const prevBtn = document.querySelector('.button-slider-prev');
const nextBtn = document.querySelector('.button-slider-next');

let iterator = 0;

let links = [1, 2, 3, 4, 5];

const updateSlider = () => {
    sliderItems = document.querySelectorAll('.item');
    sliderItems.forEach((e) => {
        e.addEventListener('click', () => {
            const baseStr = './Смотреть/Kimetsu no Yaiba - Yuukaku-hen - AniLibria.TV [WEBRip 1080p]/';
            video.src = baseStr + `${e.children[0].id}.mp4`;
        })
    })
}

const render = (links) => {
    slider.innerHTML = '';
    links.forEach(link => {
        slider.innerHTML += `<div class="item"><p id="${link}">${link}</p></div>`;
    });
    updateSlider();
}

render(links);

// Handling button clicks
nextBtn.addEventListener('click', () => {
    if (iterator <= 5) {
        links.splice(0, 1);
        links.push(iterator+6);
        iterator++;
    }
    render(links);
});

prevBtn.addEventListener('click', () => {
    if (iterator >= 1) {
        links.splice(4, 1);
        links.unshift(iterator);
        iterator--;
    }
    render(links);
});
