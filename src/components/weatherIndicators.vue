<template>
    <div class="weather__bottom-block d-flex flex-wrap justify-content-center text-center pt-4">

        <div class="weather__air position-relative px-4">
            <span>Air Quality</span>
            <br>
            <div class="indicator position-relative">
                <img class="pt-3 position-absolite" src="@/../public/img/line.png" alt="">
                <div ref="dot1" class="dot"></div>
            </div>
            <div class="indicators position-absolute text-center">
                <span ref="airQuality">load.../10</span>
                <br>
                <span ref="moderate">Moderate</span>
            </div>
        </div>

        <div class="weather__index position-relative px-4">
            <span>UV Index</span>
            <br>
            <div class="indicator position-relative">
                <img class="pt-3 position-absolite" src="@/../public/img/line.png" alt="">
                <div ref="dot2" class="dot"></div>
            </div>
            <div class="indicators second-indicator position-absolute text-center">
                <span>{{ uvIndex }}</span>
                <br>
                <span>Moderate</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'weather-indicators',

    props: {
        aqi: {
            type: [Number, null],
            required: true
        },
        uvIndex: {
            type: [Number, null],
            required: true,
        },
    },
    methods: {
        async getQuality(aqi) {

            if (aqi >= 0 && aqi < 11) {

                this.$refs.airQuality.textContent = aqi + '/10';
            } else {
                /** В случае если в строке поиска окажется "Индия и прочие страны или города, где используется формат не P10 а P2.5" */
                this.$refs.airQuality.textContent = aqi + '/500';
            }

            let dot1 = this.$refs.dot1;
            if (aqi == 0) {
                dot1.style.bottom = 0 + 'px';
                dot1.style.left = -3 + 'px';

            } else if (aqi == 1) {
                dot1.style.bottom = 15 + 'px';
                dot1.style.left = -2 + 'px';

            } else if (aqi == 2) {
                dot1.style.bottom = 40 + 'px';
                dot1.style.left = 6 + 'px';

            } else if (aqi == 3) {
                dot1.style.bottom = 60 + 'px';
                dot1.style.left = 21 + 'px';

            } else if (aqi == 4) {
                dot1.style.bottom = 75 + 'px';
                dot1.style.left = 45 + 'px';

            } else if (aqi == 5) {
                dot1.style.bottom = 85 + 'px';
                dot1.style.left = 83 + 'px';

            } else if (aqi == 6) {
                dot1.style.bottom = 75 + 'px';
                dot1.style.left = 121 + 'px';

            } else if (aqi == 7) {
                dot1.style.bottom = 60 + 'px';
                dot1.style.left = 148 + 'px';

            } else if (aqi == 8) {
                dot1.style.bottom = 40 + 'px';
                dot1.style.left = 161 + 'px';

            } else if (aqi == 9) {
                dot1.style.bottom = 15 + 'px';
                dot1.style.left = 170 + 'px';

            } else if (aqi == 10) {
                dot1.style.bottom = 0 + 'px';
                dot1.style.left = 173 + 'px';

            } else if (aqi >= 11 && aqi <= 50) {
                dot1.style.bottom = 0 + 'px';
                dot1.style.left = 173 + 'px';
            } else if (aqi > 50 && aqi <= 100) {
                dot1.style.bottom = 40 + 'px';
                dot1.style.left = 161 + 'px';
            } else if (aqi > 100 && aqi <= 200) {
                dot1.style.bottom = 75 + 'px';
                dot1.style.left = 121 + 'px';
            } else if (aqi > 200 && aqi <= 250) {
                dot1.style.bottom = 85 + 'px';
                dot1.style.left = 83 + 'px';
            } else if (aqi > 250 && aqi <= 300) {
                dot1.style.bottom = 75 + 'px';
                dot1.style.left = 45 + 'px';
            } else if (aqi > 300 && aqi <= 400) {
                dot1.style.bottom = 40 + 'px';
                dot1.style.left = 6 + 'px';
            } else if (aqi > 400 && aqi <= 500) {
                dot1.style.bottom = 0 + 'px';
                dot1.style.left = -3 + 'px';
            }
        },
        getIndex(index) {
            let dot2 = this.$refs.dot2;
            switch (index) {
                case 0: {
                    dot2.style.bottom = 0 + 'px';
                    dot2.style.left = -3 + 'px';
                    break;
                };
                case 1: {

                    dot2.style.bottom = 15 + 'px';
                    dot2.style.left = -2 + 'px';
                    break;
                };
                case 2: {

                    dot2.style.bottom = 40 + 'px';
                    dot2.style.left = 6 + 'px';
                    break;
                };
                case 3: {

                    dot2.style.bottom = 60 + 'px';
                    dot2.style.left = 21 + 'px';
                    break;
                };
                case 4: {
                    dot2.style.bottom = 75 + 'px';
                    dot2.style.left = 45 + 'px';
                    break;
                };
                case 5: {
                    dot2.style.bottom = 85 + 'px';
                    dot2.style.left = 83 + 'px';
                    break;
                };
                case 6: {
                    dot2.style.bottom = 75 + 'px';
                    dot2.style.left = 121 + 'px';
                    break;
                };
                case 7: {
                    dot2.style.bottom = 60 + 'px';
                    dot2.style.left = 148 + 'px';
                    break;
                };
                case 8: {
                    dot2.style.bottom = 40 + 'px';
                    dot2.style.left = 161 + 'px';
                    break;
                };
                case 9: {
                    dot2.style.bottom = 15 + 'px';
                    dot2.style.left = 170 + 'px';
                    break;
                };
                case 10: {
                    dot2.style.bottom = 0 + 'px';
                    dot2.style.left = 173 + 'px';
                    break;
                };
            };
        },
    },

    watch: {
        aqi(value) {
            if (value) {
                /** Если получаем данные: */
                this.getQuality(this.aqi);
                this.getIndex(this.uvIndex);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.weather {

    &__air,
    &__index {
        font-family: 'Inter';
        font-weight: 300;
        font-size: 28px;
        line-height: 120%;
        color: #FFFFFF;
    }
}

.indicators {
    font-family: 'Inter';
    font-weight: 300;
    font-size: 19px;
    color: #FFFFFF;
    top: 70px;
    left: 75px;
}

.dot {
    position: absolute;
    bottom: 0px;
    left: -3px;
    background: #FDFDFD;
    width: 16px;
    height: 16px;
    border-radius: 100%;
}

@media(max-width: 480px) {
    .weather__index {
        margin-top: 15px;
    }
}
</style>