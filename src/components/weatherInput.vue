<template>
    <input class="position-relative border-0" id="input" type="text">
    <label for="input"><img class="position-absolute" src="@/../public/img/search.png" alt=""></label>
</template>

<script>
export default {
    name: 'weather-input',
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
    top: 65px;
    right: 50px;
}
</style>