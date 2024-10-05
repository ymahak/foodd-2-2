let currentIndex = 0;

function updateSlidePosition() {
    const wrapper = document.getElementById('imageWrapper');
    wrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.swiper-slide').length;
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlidePosition();
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.swiper-slide').length;
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlidePosition();
}


function readMore() {
    const moreInfo = "Our restaurant has been serving delicious meals since 1950. We pride ourselves on quality food and a fresh environment.";
    alert(moreInfo);
}
