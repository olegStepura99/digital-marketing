const slider = function () {
    const card = document.querySelector(".services__card");
    const cardWrap = document.querySelector(".services__cards-wrap");
    const cardsList = document.querySelector(".services__cards");
    const sliderMargin = (cardsList.clientWidth - (card.clientWidth * 3)) / 4;
    let currSlide = 1;
    
    const nextSlide = function () {
        if (currSlide <= 3){
            currSlide++;
            cardWrap.scrollBy(card.clientWidth + sliderMargin , 0)
        }
        if(currSlide > 3){
            currSlide=1;
            cardWrap.scrollBy(-cardsList.clientWidth, 0)
        }
    }

    const prevSlide = function () {
        if (currSlide >= 1){
            currSlide--;
            cardWrap.scrollBy(-card.clientWidth - sliderMargin , 0)
        }
        if(currSlide < 1){
            currSlide = 3;
            cardWrap.scrollBy(cardsList.clientWidth, 0)
        }
    }

    document.querySelector(".slider__arr--next").addEventListener('click', nextSlide);
    document.querySelector(".slider__arr--prev").addEventListener('click', prevSlide);
}();