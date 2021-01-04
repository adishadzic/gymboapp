<template>
    <transition :name="dir">
        <div v-show="visible">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            index  : 0,
        }
    },
    computed : {
        visible() {
            return this.index === this.$parent.index;
        },
        dir() {
            console.log(this.$parent.slideDirection)
            return this.$parent.slideDirection;
        },
    }
}
</script>

<style>
    .app {
        display:flex;
        justify-content: center;
    }
    .carousel {
        position:relative;
        overflow: hidden;
        width:800px;
        height:500px;
        z-index:10;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }
    .slide-left-enter-active {
        animation: slide-left-in 0.5s ease-in;
    }
    .slide-left-leave-active {
        animation: slide-left-out 0.5s ease-in;
    }
    @keyframes slide-left-in{
        from  { transform: translateX(-100%);}
        to { transform: translateX(0);} 
    }
    @keyframes slide-left-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(100%);} 
    }
    
    .slide-right-enter-active {
        animation: slide-right-in 0.5s ease-in;
    }
    .slide-right-leave-active {
        animation: slide-right-out 0.5s ease-in;
    }
    @keyframes slide-right-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(-100%);} 
    }
    @keyframes slide-right-in{
        from  { transform: translateX(100%);}
        to { transform: translateX(0);} 
    }
</style>