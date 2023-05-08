<template>
    <div class="position-relative">
        <label class="mx-2" for="input"><img src="@/../public/img/map.png" alt=""></label>
        <input ref="checkbox" @keyup.enter="checkInput" class="border-0" id="input" type="text">
        <img @click="checkInput" class="position-absolute" src="@/../public/img/search.png" alt="">
    </div>
</template>

<script>
import { Ref } from 'vue';
export default {
    name: 'weather-input',
    methods: {
        checkInput(e) {
            this.$emit('getNewData', e.target.value);
        }
    }
}
</script>

<style lang="scss" scoped>
input {
    padding-left: 15px;
    width: 505px;
    height: 64px;
    background: linear-gradient(116.79deg, rgba(255, 255, 255, 0.48) -41.94%, rgba(255, 255, 255, 0.12) 57.51%);
    backdrop-filter: blur(50px);
    border-radius: 20px;
}

img {
    cursor: pointer;
    top: 20px;
    right: 20px;
}

@media(max-width: 720px) {
    input {
        width: 400px;
    }
}

@media(max-width: 510px) {
    input {
        width: 220px;
    }
}
</style>