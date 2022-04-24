/*
    File for changing src attribure for video
*/

const sliderItems2 = document.querySelectorAll('.item');
const video = document.querySelector('video');

// changing src element in video tag when one of slider items is clicked
sliderItems2.forEach((e) => {
    e.addEventListener('click', () => {
        const baseStr = './Смотреть/Kimetsu no Yaiba - Yuukaku-hen - AniLibria.TV [WEBRip 1080p]/0';
        video.src = baseStr + `${e.children[0].id}.mp4`;
    })
})