class Carousel {
    constructor(props) {
        this.carousel = props.carousel;
        this.left = this.carousel.querySelector('.left-button');
        this.right = this.carousel.querySelector('.right-button');

        this.images = Array.from(this.carousel.querySelectorAll('img')); // DEBUG: making this an array here may cause issues if node methods aren't exposed
        this.numberOfImages = this.images.length;
        this.currentIndex = 1;

        this.left.addEventListener('click', () => this.previousSlide());
        this.right.addEventListener('click', () => this.nextSlide());

        this.carousel.querySelector(`img[data-slide="${this.currentIndex}"]`).style.display = 'block'; // TODO: Probably better to have a class method here
    }

    previousSlide() {

    }

    nextSlide() {
        
    }
}

let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/