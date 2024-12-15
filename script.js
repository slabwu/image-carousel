class ImageCarousel {
    constructor(name) {
        const container = document.querySelector(`#${name}`);
        const image = document.querySelector(`#${name} > img`);
        const images = ["assets/bachalpsee.jpg", "assets/hang-son-doon.jpg", "assets/matterhorn.jpeg"];
    
        image.src = `${images[0]}`;
    }
}

const example = new ImageCarousel("imageCarousel");