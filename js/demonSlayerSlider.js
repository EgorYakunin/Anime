/*
    File for slider
*/

//Getting slider elements
const slider = document.querySelector('.slider-line');
const sliderItems = document.querySelectorAll('.item');

// Getting buttons
const prevBtn = document.querySelector('.button-slider-prev');
const nextBtn = document.querySelector('.button-slider-next');

// Handling button clicks
nextBtn.addEventListener('click', () => {
    sliderItems[0].style.display = 'none';

    const iterator = 0;
    slider.innerHTML += `<div class="item"><a href="/Смотреть/Kimetsu no Yaiba - Yuukaku-hen - AniLibria.TV [WEBRip 1080p]/0${iterator}.mp4" id="six">${iterator}</a></div>`;

});

prevBtn.addEventListener('click', () => console.log('click prev'));