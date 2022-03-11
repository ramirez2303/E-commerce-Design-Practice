const slider2 = document.querySelector('#slider2');
let sliderSection2 = document.querySelectorAll('.information__section');
let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];

const btnLeft2 = document.querySelector('#btn-left2');
const btnRight2 = document.querySelector('#btn-right2');

slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);

function Next2(){
    let sliderSectionFirst2 = document.querySelectorAll('.information__section')[0];
    slider2.style.marginLeft = '-191.5%'
    slider2.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider2.style.transition = 'none';
        slider2.insertAdjacentElement('beforeend', sliderSectionFirst2);
        slider2.style.marginLeft = '-100%';
    }, 500);
}

function Prev2(){
    let sliderSection2 = document.querySelectorAll('.information__section');
    let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];
    slider2.style.marginLeft = '-8.5%';
    slider2.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider2.style.transition = 'none';
        slider2.insertAdjacentElement('afterbegin', sliderSectionLast2)
        slider2.style.marginLeft = '-100%';
    }, 500);
}

btnRight2.addEventListener('click', function(){
    Next2();
});
btnLeft2.addEventListener('click', function(){
    Prev2();
});

setInterval(function(){
    Next2();
}, 5000);