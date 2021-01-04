<template>
    <div class="app">
        <carousel >
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
    </div>    
</template>

<script>
import Carousel from '../components/Carousel.vue'
import CarouselSlide from '../components/CarouselSlide.vue'
export default {
    data(){
        return {
            slides: [
                'https://picsum.photos/id/230/600/300',
                'https://picsum.photos/id/231/600/300',
                'https://picsum.photos/id/232/600/300',
            ]
        }
    },
    components : {
        Carousel : Carousel,
        CarouselSlide : CarouselSlide,
    }
}
</script>

<style>
</style>