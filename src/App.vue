<template>
  <weather-modal></weather-modal>
  <div class="weather position-relative">
    <div class="weather__container">
      <div class="weather__content d-flex">
        <div class="weather__left-block">
          <div class="weather__top-block d-flex justify-content-between">
            <div class="weather__icon">
              <img :src="icon" alt="">
            </div>
            <div class="weather__checkbox">
              <weather-checkbox @changeTempetature="changeTempetature"></weather-checkbox>
            </div>
          </div>
          <div class="weather__degress">
            <span>{{ temperature }}</span><span>°{{ degress }}</span>
          </div>
          <div class="weather__wrapper">
            <div class="weather__date fs-5 font-weight-light">
              <span>{{ date }}</span>
            </div>
            <div class="weather__day-time d-flex align-items-center pt-2 fs-4">
              <div class="weather__day">
                <span>{{ day }}</span>

                <span class="px-2">|</span>

              </div>
              <div class="weather__time">
                <span> {{ time }}</span>
              </div>
            </div>
            <div class="weather__options d-flex flex-wrap align-items-center pt-3 fs-3 font-weight-light">
              <div class="weather__wind">
                <span>Wind {{ wind }} km/h</span>
              </div>
              <div class="weather__humidity">

                <span class="px-2">|</span>

                <span>Hum {{ humidity }} %</span>
              </div>
              <div class="weather__rain">

                <span class="px-2">|</span>

                <span>Rain {{ rain }} %</span>
              </div>
            </div>
          </div>
          <div id="slider1" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="cards d-md-flex">

                  <div v-for="card in firstCards" class="card mx-md-2" style=" width:10rem; height:10rem;">
                    <div class="card-body m-auto text-center">
                      <h5 class="card-title">{{ card.temperature }} °{{ degress }}</h5>
                      <img :src="card.img">
                      <br>
                      <p>{{ card.time }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="cards d-md-flex">
                  <div v-for="card in secondCards" class="card mx-md-2" style="width:10rem; height:10rem;">
                    <div class="card-body m-auto text-center">
                      <h5 class="card-title">{{ card.temperature }} °C</h5>
                      <img :src="card.img">
                      <p>{{ card.time }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <a class="carousel-control-next" href="#slider1" role="button" data-bs-target="#slider1"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only"></span>
              </a>
            </div>
          </div>
        </div>

        <div class="weather__right-block w-100">
          <div class="weather-nav d-flex justify-content-center pt-5">
            <div class="weather-nav__input px-3">
              <weather-input @getNewData="getWeatherData"></weather-input>
            </div>
          </div>
          <div class="weather__sun d-flex flex-wrap justify-content-center text-center">
            <div class="weather__sunrise pt-5">
              <span class="d-block fs-5">Sunrise</span>
              <div class="sun-card mt-3">
                <img class="pt-5" src="@/../public/img/axes-little.png" alt="">
                <br>
                <span class="time-start d-block fs-5 pt-4">{{ sunrise }}</span>
              </div>
            </div>
            <div class="weather__golden-hour mx-5 pt-3">
              <span class="d-block fs-5">Moonset</span>
              <div class="sun-card mt-3">
                <img class="pt-5" src="@/../public/img/axes-little.png" alt="">
                <br>
                <span class="time-start d-block fs-5 pt-4">{{ moonset }}</span>
              </div>
            </div>
            <div class="weather__sunset pt-5">
              <span class="d-block fs-5">Sunset</span>
              <div class="sun-card mt-3">
                <img class="pt-5" src="@/../public/img/axes-little.png" alt="">
                <br>
                <span class="time-start d-block fs-5 pt-4">{{ sunset }}</span>
              </div>

            </div>
          </div>
          <weather-indicators :aqi="aqi" :uvIndex="uvIndex" v-model="showIndicators"></weather-indicators>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Ref } from 'vue';
export default {
  data() {
    return {

      /**
       * Vuex не используем, т.к. приложение мааленькое
       * и нет необходимости передавать большой поток данных "из компонента - в компонент"
       * UI-компоненты вынесены
       */

      icon: null,
      temperature: null,
      temp_c: null,
      temp_f: null,
      date: null,
      day: null,
      time: null,
      wind: null,
      humidity: null,
      rain: null,
      sunrise: null,
      sunset: null,
      moonset: null,
      aqi: null,
      uvIndex: null,
      firstCards: [],
      secondCards: [],
      degress: 'C',
      showIndicators: false,
    }
  },
  methods: {
    async getWeatherData(city) {


      try {
        const promise = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4b5755b852da48b0a37203922230705&q=${city}&days=2&aqi=yes&alerts=no`);
        const response = await promise.json();

        /** currentWeather data 
        * Проверяем по часам
        * т.к. data current может прислать ответ с задержкой на пару часов
        * то ищем те данные, которые удовлетворяют текущему времени ( в часах)
        */

        const forecastDay = response.forecast.forecastday;
        const hours = new Date().getHours();
        const currentWeather = forecastDay[0].hour[hours];
        const matchTime = /\d{2}:\d{2}/g

        this.firstCards = [];
        this.secondCards = [];

        this.temp_c = Math.round(currentWeather.temp_c);
        this.temp_f = Math.round(currentWeather.temp_f);

        if (this.degress == 'C') {
          this.temperature = this.temp_c;
        } else {
          this.temperature = this.temp_f;
        }

        this.time = String(currentWeather.time.match(/\d{2}:\d{2}/g));
        this.date = currentWeather.time.match(/\d{4}-\d{2}-\d{2}/g)[0].split('-').reverse().join('-');
        this.wind = Math.round(currentWeather.wind_kph);
        this.humidity = currentWeather.humidity;
        this.rain = currentWeather.chance_of_rain;

        this.sunrise = String(forecastDay[0].astro.sunrise.match(matchTime));
        this.sunset = String(forecastDay[0].astro.sunset.match(matchTime));
        this.moonset = String(forecastDay[0].astro.moonset.match(matchTime));
        this.icon = currentWeather.condition.icon;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        this.day = days[today.getDay()];

        this.aqi = Math.round(response.current.air_quality.pm10);
        this.uvIndex = Math.round(currentWeather.uv);
        this.showIndicators = true;
        /** Other data
        * Проверяем, если мы находимся в текущем дне, то берем данные по погоде
        * если такого обьекта нет (например: i = 25:00) значит 
        * берем данные следующего дня и продолжаем циклом получать данные по погоде
        */

        let getHours = forecastDay[0].hour;

        for (let i = hours + 3; i < hours + 21; i += 3) {

          if (i == 24 || i == 25 || i == 26) {
            i = 0;
            getHours = forecastDay[1].hour;
          }

          let getTemperature = null;
          const getTemperature_c = Math.round(getHours[i].temp_c);
          const getTemperature_f = Math.round(getHours[i].temp_f);

          if (this.degress == 'C') {
            getTemperature = getTemperature_c;
          } else {
            getTemperature = getTemperature_f
          }

          const getTime = getHours[i].time;
          const timeMatch = String(getTime.match(matchTime));
          const getImg = getHours[i].condition.icon;

          let card = {
            temperature: getTemperature,
            temp_c: getTemperature_c,
            temp_f: getTemperature_f,
            img: getImg,
            time: timeMatch,
          }

          if (this.firstCards.length < 3) {
            this.firstCards.push(card);
          } else if (this.secondCards.length !== 3) {
            this.secondCards.push(card);
          } else {
            break;
          }

          if (i == 23) {

            /**
             * Если текущее время 20:00, и мы получили данные для времени 23:00
             * значит берем следующий день и продолжаем выполнение цикла
             */

            getHours = forecastDay[1].hour;
            i = 0;
          }


        };
      } catch (err) {
        /** Показываем модальное окно */
        document.querySelector('.open-my-modal').click();
        console.log(err);
      }
    },

    changeTempetature(param) {
      this.degress = param;
    },

  },
  watch: {
    degress(value) {
      if (value == 'C') {
        this.temperature = this.temp_c;
        this.firstCards.forEach(elem => {
          elem.temperature = elem.temp_c;
        });
        this.secondCards.forEach(elem => {
          elem.temperature = elem.temp_c;
        });

      } else {
        this.temperature = this.temp_f;
        this.firstCards.forEach(elem => {
          elem.temperature = elem.temp_f;
        });
        this.secondCards.forEach(elem => {
          elem.temperature = elem.temp_f;
        });
      }
    }
  },
  mounted() {
    this.getWeatherData('Brest');
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400&family=Overpass:wght@300;400&display=swap');
$grey: #EBEBEB;

/** Некоторые стили были взяты из шаблона в figma (пожтому к некоторым элементам не применяются классы -m и -p bootstrap) */

body {
  user-select: none;
  overflow-x: hidden;
}

.weather {

  color: var(--bs-white);

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100% + 4;
    background: linear-gradient(248.66deg, #48355B 0%, #8C6EAB 100%);
    transform: rotate(-180deg);
    z-index: -1;
  }


  &__top-block {
    padding: 50px 70px 0px 70px;
  }

  &__wrapper {
    padding-left: 66px;
  }

  &__icon img {
    width: 100px;
    height: 100px;
  }

  &__degress {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-size: 100px;
    padding-left: 66px;
  }

  &__date {
    font-family: 'Inter';
    font-style: normal;
  }

  &__options {
    font-family: 'Overpass';
  }

  &__golden-hour {
    .sun-card {
      width: 9rem;
      height: 15rem;
      background: rgba(255, 255, 255, 0.26);
      border-radius: 100px;
    }
  }
}

.card:first-child {
  margin-left: 66px !important;
}

.card {
  background: rgba(255, 255, 255, 0.2) !important;
  filter: blur(0.569258px) !important;
  border-radius: 11.3852px !important;
}

.card-body img {
  width: 60px;
  height: 60px;
}

.sun-card {
  width: 7rem;
  height: 14rem;
  background: rgba(255, 255, 255, 0.26);
  border-radius: 100px;
  margin: 0px 5px 0px 5px;
}

.time-start {
  font-family: 'Inter';
}

.carousel-inner {
  width: 700px !important;
}

@media (max-width: 1350px) {

  .weather__content {
    flex-direction: column;
  }

  .weather__day-time,
  .weather__options {
    justify-content: center;
    margin: auto;
    text-align: center;
  }

  .weather__degress,
  .weather__wrapper {
    padding-left: 0px;
    margin: auto;
    text-align: center;
  }

  .weather__top-block {
    padding: 0;
  }

  .card:first-child {
    margin-left: 0px !important;
  }

  .weather__top-block {
    justify-content: center !important;
  }

  .weather__icon img {
    margin-top: 16px !important;
  }

  .weather__right-block {
    padding-bottom: 15px;
  }

  .carousel-inner {
    width: 700px;
    margin: auto;
    margin-top: 15px;
  }

}

@media(max-width: 720px) {

  .carousel-inner {
    width: 100% !important;
  }

  .cards {
    flex-direction: column;
  }

  .card:first-child {
    margin: auto !important;
  }

  .card {
    margin: auto !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
  }

}
</style>
