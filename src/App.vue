<template>
  <div class="weather position-relative">
    <div class="weather__container">
      <div class="weather__content d-flex">

        <div class="weather__left-block">
          <div class="weather__top-block d-flex justify-content-between">
            <div class="weather__icon">
              <img src="@/../public/img/clouds.svg" alt="">
            </div>
            <div class="weather__checkbox">
              <weather-checkbox></weather-checkbox>
            </div>
          </div>
          <div class="weather__degress">
            <span>{{ degress }}</span><span>°C</span>
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
            <div class="weather__options d-flex align-items-center pt-3 fs-3 font-weight-light">
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
                <div class="cards d-flex">

                  <div class="card mx-2" style="width:10rem; height:10rem;">
                    <div class="card-body m-auto text-center">
                      <h5 class="card-title">24°C</h5>
                      <img class="pt-2" src="@/../public/img/cloud-icon.png" alt="">
                      <p class="card-text pt-3">Fri</p>
                    </div>
                  </div>

                  <div class="card mx-2" style="width:10rem; height:10rem;">
                    <div class="card-body m-auto text-center">
                      <h5 class="card-title">24°C</h5>
                      <img class="pt-2" src="@/../public/img/cloud-icon.png" alt="">
                      <p class="card-text pt-3">Sat</p>
                    </div>
                  </div>

                  <div class="card mx-2" style="width:10rem; height:10rem;">
                    <div class="card-body m-auto text-center">
                      <h5 class="card-title">24°C</h5>
                      <img class="pt-2" src="@/../public/img/cloud-icon.png" alt="">
                      <p class="card-text pt-3">Sun</p>
                    </div>

                  </div>
                  <div class="card mx-2" style="width:10rem; height:10rem;">
                    <div class="card-body m-auto text-center">
                      <h5 class="card-title">24°C</h5>
                      <img class="pt-2" src="@/../public/img/cloud-icon.png" alt="">
                      <p class="card-text pt-3">Mon</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="cards d-flex">
                  <div class="card mx-2" style="width:10rem; height:10rem;">
                    <div class="card-body m-auto text-center">
                      <h5 class="card-title">24°C</h5>
                      <img class="pt-2" src="@/../public/img/cloud-icon.png" alt="">
                      <p class="card-text pt-3">Th.</p>
                    </div>
                  </div>
                  <div class="card mx-2" style="width:10rem; height:10rem;">
                    <div class="card-body m-auto text-center">
                      <h5 class="card-title">24°C</h5>
                      <img class="pt-2" src="@/../public/img/cloud-icon.png" alt="">
                      <p class="card-text pt-3">Thit.</p>
                    </div>
                  </div>

                  <div class="card mx-2" style="width:10rem; height:10rem;">
                    <div class="card-body m-auto text-center">
                      <h5 class="card-title">24°C</h5>
                      <img class="pt-2" src="@/../public/img/cloud-icon.png" alt="">
                      <p class="card-text pt-3">Cvr.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-next" href="#slider1" role="button" data-bs-target="#slider1" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
          </div>
        </div>

        <div class="weather__right-block w-100">
          <div class="weather-nav d-flex justify-content-center pt-5">
            <div class="weather-nav__icon m-auto">
              <img src="@/../public/img/map.png" alt="">
            </div>
            <div class="weather-nav__input px-3">
              <weather-input></weather-input>
            </div>
          </div>
          <div class="weather__sun d-flex justify-content-center text-center">
            <div class="weather__sunrise pt-5">
              <span class="d-block fs-5">Sunrise</span>
              <div class="sun-card mt-3">
                <img class="pt-4" src="@/../public/img/axes-little.png" alt="">
                <br>
                <span class="time-start d-block fs-5">11:24</span>
                <span class="time-end d-block pt-1">11:45</span>
              </div>
            </div>
            <div class="weather__golden-hour mx-5 pt-3">
              <span class="d-block fs-5">Golden Hour</span>
              <div class="sun-card mt-3">
                <img class="pt-4" src="@/../public/img/axes-little.png" alt="">
                <br>
                <span class="time-start d-block fs-5">6:00 AM</span>
                <span class="time-end d-block pt-1">6:49 PM</span>
              </div>
            </div>
            <div class="weather__sunset pt-5">
              <span class="d-block fs-5">Sunset</span>
              <div class="sun-card mt-3">
                <img class="pt-4" src="@/../public/img/axes-little.png" alt="">
                <br>
                <span class="time-start d-block fs-5">7:21</span>
                <span class="time-end d-block pt-1">7:24</span>
              </div>

            </div>
          </div>
          <div class="weather__bottom-block d-flex justify-content-center text-center pt-4">

            <div class="weather__air position-relative px-4">
              <span>Air Quality</span>
              <br>
              <div class="indicator position-relative">
                <img class="pt-3 position-absolite" src="@/../public/img/line.png" alt="">
                <div class="dot"></div>
              </div>
              <div class="indicators position-absolute text-center">
                <span>2/5</span>
                <br>
                <span>Moderate</span>
              </div>
            </div>

            <div class="weather__index position-relative px-4">
              <span>UV Index</span>
              <br>
              <div class="indicator position-relative">
                <img class="pt-3 position-absolite" src="@/../public/img/line.png" alt="">
                <div class="dot"></div>
              </div>
              <div class="indicators position-absolute text-center">
                <span>6/10</span>
                <br>
                <span>High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      degress: 27,
      date: '17th Jun 21',
      day: 'Thrusday',
      time: '2:45 am',
      wind: 10,
      humidity: 54,
      rain: 0.2,
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400&family=Overpass:wght@300;400&display=swap');
$grey: #EBEBEB;


body {
  user-select: none;
}

// font-family: 'Inter', sans-serif;
// font-family: 'Overpass', sans-serif;
.weather {

  color: var(--bs-white);

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100% + 0.9;
    background: linear-gradient(248.66deg, #48355B 0%, #8C6EAB 100%);
    transform: rotate(-180deg);
    z-index: -1;
  }


  &__top-block {
    padding: 63px 70px 0px 70px;
  }

  &__wrapper {
    padding-left: 66px;
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

  &__bottom-block {}

  &__air,
  &__index {
    font-family: 'Inter';
    font-weight: 300;
    font-size: 28px;
    line-height: 120%;
    color: #FFFFFF;
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

.sun-card {
  width: 7rem;
  height: 14rem;
  background: rgba(255, 255, 255, 0.26);
  border-radius: 100px;
}

.time-start {
  font-family: 'Inter';
  padding-top: 70px;
}

.time-end {
  font-family: 'Inter';
  color: $grey;
}

.indicators {
  font-family: 'Inter';
  font-weight: 300;
  font-size: 19px;
  color: #FFFFFF;
  top: 70px;
  left: 75px;
}

.indicators:last-child {

  left: 95px;
}

.carousel-inner {
  width: 770px !important;
}

.dot {
  background: #FDFDFD;
  width: 16px;
  height: 16px;
  border-radius: 100%;
}
</style>
