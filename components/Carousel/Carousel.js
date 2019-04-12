class Carousel {
    constructor(props) {
        this.carousel = props.carousel;
        this.left = this.carousel.querySelector('.left-button');
        this.right = this.carousel.querySelector('.right-button');

        this.images = Array.from(this.carousel.querySelectorAll('img'));
        this.numberOfImages = this.images.length;
        this.currentIndex = 1;
        this.currentSlide = this.images[this.currentIndex - 1]
        this.nextSlide = this.images[this.getSlideIndex(this.currentIndex + 1) - 1];
        this.previousSlide = this.images[this.getSlideIndex(this.currentIndex - 1) -1];

        this.left.addEventListener('click', () => this.previousSlideTrigger());
        this.right.addEventListener('click', () => this.nextSlideTrigger());

        // Immediately display our initial carousel image
        this.currentSlide.style.display = 'block';

        // Set up our previous and next images for animation
        this.nextSlide.classList.add('img--next');
        this.previousSlide.classList.add('img--previous');
        this.carousel.insertBefore(this.previousSlide, this.currentSlide);
    }

    previousSlideTrigger() {
        this.currentIndex = this.getSlideIndex(this.currentIndex - 1);

        this.nextSlide.classList.remove('img--next');
        this.currentSlide.classList.add('img--next');
        this.nextSlide = this.currentSlide;

        this.previousSlide.classList.remove('img--previous');
        this.currentSlide = this.previousSlide;
        this.currentSlide.style.display = 'block';

        this.previousSlide = this.images[this.getSlideIndex(this.currentIndex - 1) - 1];
        this.previousSlide.classList.add('img--previous');
        this.carousel.insertBefore(this.previousSlide, this.currentSlide);
    }

    nextSlideTrigger() {
        // this.currentIndex = this.getSlideIndex(this.currentIndex + 1);

        // this.previousSlide.classList.remove('img--previous');
        // this.currentSlide.classList.add('img--previous');
        // this.carousel.appendChild(this.previousSlide);
        // this.previousSlide = this.currentSlide;

        // this.nextSlide.classList.remove('img-next');

        // this.nextSlide = this.images[this.getSlideIndex(this.currentIndex + 1) - 1];
        // this.nextSlide.classList.add('img--next');

        // this.nextSlide.classList.remove('img--next');
        // this.currentSlide = this.nextSlide;
        // this.currentSlide.style.display = 'block';
    }

    /**
     * Handles math for changing our slide index, returns a number within our slide range
     * @param {number} index - Expects a slide index number.
     * @return {number}
     */
    getSlideIndex(index) {
        if (index > this.numberOfImages) return 1;
        if (index < 1) return this.numberOfImages;
        return index;
    }
}

let carousel = new Carousel({ carousel: document.querySelector('.carousel') });
