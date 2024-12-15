class ImageCarousel {
    constructor(name) {
        this.container = document.querySelector(`#${name}`);
        this.image = document.querySelector(`#${name} > img`);
        this.backBtn = document.querySelector(`#${name} > .lastImage`);
        this.forwardBtn = document.querySelector(`#${name} > .nextImage`);

        this.images = ["assets/bachalpsee.jpg", "assets/hang-son-doon.jpg", "assets/matterhorn.jpeg"];
        this.current = 0;
        this.image.src = `${this.images[this.current]}`;
        this.changeImage();

        this.backBtn.addEventListener("click", () => {this.selectPrevious()});
        this.forwardBtn.addEventListener("click", () => {this.selectNext()});
    }

    selectNext() {
        this.current = (this.current === (this.images.length - 1))? 0 : this.current + 1;
        this.changeImage();
    }

    selectPrevious() {
        this.current = (this.current === 0)? this.images.length - 1 : this.current - 1;
        this.changeImage();
    }

    changeImage() {
        this.image.src = `${this.images[this.current]}`;
    }
}

const example = new ImageCarousel("imageCarousel");