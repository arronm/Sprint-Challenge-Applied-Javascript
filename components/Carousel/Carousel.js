class Carousel {
    constructor(props) {
        this.carousel = props.carousel;
        this.left = this.carousel.querySelector('.left-button');
        this.right = this.carousel.querySelector('.right-button');

        this.images = Array.from(this.carousel.querySelectorAll('img')); // DEBUG: making this an array here may cause issues if node methods aren't exposed
        this.numberOfImages = this.images.length;
        this.currentIndex = 1;

        // TODO: Add nextImg and previousImg here? Refactor?

        this.left.addEventListener('click', () => this.previousSlide());
        this.right.addEventListener('click', () => this.nextSlide());

        this.carousel.querySelector(`img[data-slide="${this.currentIndex}"]`).style.display = 'block'; // TODO: Probably better to have a class method here
    }

    previousSlide() {
        // TODO: (FOR ANIMATION) Hide current +1, Show current -1, add classes img--next and img--previous

        this.carousel.querySelector(`img[data-slide="${this.currentIndex}"]`).style.display = 'none';
        this.currentIndex = (this.currentIndex + 1) > this.numberOfImages ? 1 : this.currentIndex + 1;
        this.carousel.querySelector(`img[data-slide="${this.currentIndex}"]`).style.display = 'block';

    }

    nextSlide() {
        this.carousel.querySelector(`img[data-slide="${this.currentIndex}"]`).style.display = 'none';
        this.currentIndex = (this.currentIndex - 1) < 1 ? this.numberOfImages : this.currentIndex - 1;
        this.carousel.querySelector(`img[data-slide="${this.currentIndex}"]`).style.display = 'block';
    }
}

let carousel = new Carousel({ carousel: document.querySelector('.carousel') });
