class ImageCarousel {
    constructor(name) {
        this.container = document.querySelector(`#${name}`);
        this.image = document.querySelector(`#${name} > img`);
        this.backBtn = document.querySelector(`#${name} > .lastImage`);
        this.forwardBtn = document.querySelector(`#${name} > .nextImage`);
        this.paginator = document.querySelector(`#${name} > .paginator`);

        this.images = ["assets/bachalpsee.jpg", "assets/hang-son-doon.jpg", "assets/matterhorn.jpeg"];
        this.current = 0;
        this.image.src = `${this.images[this.current]}`;
        this.changeImage();

        for (let i = 0; i < this.images.length; i++) {
            let element = document.createElement("div");
            element.dataset.value = i;
            if (i === 0) element.classList.add("active");
            this.paginator.appendChild(element);

            element.addEventListener("click", () => {
                this.current = Number(element.dataset.value);
                this.changeImage();
            });
        }
        this.paginators = Array.from(this.paginator.children);

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
        clearTimeout(this.timer);
        this.updatePaginator();
        this.timer = setTimeout(() => {this.selectNext()}, 5000);
    }

    updatePaginator() {
        if (this.paginators) {
            this.paginators.forEach(paginator => {
                if (Number(paginator.dataset.value) === this.current) {
                    paginator.classList.add("active");
                } else {
                    paginator.classList.remove("active");
                }
            })
        }
    }
}

const example = new ImageCarousel("imageCarousel");