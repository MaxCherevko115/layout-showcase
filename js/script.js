"use strict"

document.addEventListener('click', documentClick);

function documentClick(e){
    const targetItem = e.target;

    if(targetItem.closest('.menu__icon')){
        document.documentElement.classList.toggle('menu-open');
        document.body.classList.toggle('lock');
    }

}

function createDots(container, name, length) {

    for(let i = 0; i < length; i++) {
        const dot = document.createElement('div');
        dot.classList.add(name);
        container.appendChild(dot);
    }

    container.children[0].classList.add('active');
}

function sliderComments() {
    const comments = document.querySelectorAll('.comment__item');
    const containerDots = document.querySelector('.comment__dots');
    let index = 1;

    setInterval(autoSlider,6000)

    function autoSlider() {

        if(index == comments.length){
            for (const comment of comments) {
                comment.style.transition = '';
                comment.style.transform = `translateX(0px)`;
            }
            index = 0; 
        }
        if(index > 0) {
            comments[index-1].style.opacity = '0';
        }
        comments[index].style.transform = `translateX(-${((420 + 64) * index)}px)`;
        comments[index].style.opacity = '1';

        containerDots.querySelector('.active').classList.remove('active');
        containerDots.children[index].classList.add('active');

        if(index !== comments.length - 1){
            comments[index + 1].style.transform = `translateX(-${((420 + 64) * index)}px)`;
            comments[index + 1].style.opacity = '0.5';
        }

        index++;
    }

    createDots(containerDots, 'comment__dot', comments.length);
}

let swiper = new Swiper(".blogSwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

sliderComments();
