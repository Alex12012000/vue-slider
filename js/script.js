
var app = new Vue ({
    el: '#app',
    data: {
        autoPlay: null,
        currentImage: 0,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
    },

    methods: {
        imageUp () {
            if(this.currentImage < this.slides.length -1) {
                this.currentImage++;

            } else {
                this.currentImage = 0;
            }
        },

        imageDown () {
            if(this.currentImage > 0) {
                this.currentImage--;
            } else {
                this.currentImage = this.slides.length -1;
            }
            
        },

        currentImageOnClick (elementIndex) {
            this.currentImage = elementIndex;
        },

        stopAutoPlay () {
            clearInterval(this.autoPlay);
            this.autoPlay = null;
        },

        startAutoPlay () {
            this.autoPlay = setInterval(this.imageUp, 3000)
        }
        
    },

    mounted() {
       this.autoPlay = setInterval(this.imageUp, 3000)
    }

})
