<template>
  <div class="container">
    <section>
      <h1 class="text-center">
        HOT LISTS
      </h1>
      <div class="carousel">
        <button v-if="trendingProduct.offset !== 0" class="carousel__button carousel__button-left" @click="slideCarousel(-1)" />
        <div class="carousel__container">
          <a
            v-for="(product, index) in trendingProduct.data"
            :key="index"
            href="#"
            class="carousel__item my-2"
            :class="carouselShow(index)"
            :style="carouselOffset(index)"
          >
            <div class="carousel__card">
              <img src="https://cdn.vox-cdn.com/thumbor/iEonEb1BJgH1kTH1TtwGZ2T96Lk=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18321560/Airbus_Bird_of_Prey_concept_plane.jpeg">
              <div class="card__detail">
                <p>{{ product.text }}</p>
                <p>{{ product.price }}</p>
              </div>
            </div>
          </a>
        </div>
        <button v-if="trendingProduct.offset !== trendingProduct.showItem" class="carousel__button carousel__button-right" @click="slideCarousel(1)" />
      </div>
    </section>
    <section>
      <h1>NOW TRENDING</h1>
      <div class="products">
        <div class="products__card">
          Product 1
        </div>
        <div class="products__card">
          Product 2
        </div>
        <div class="products__card">
          Product 3
        </div>
        <div class="products__card">
          Product 4
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      trendingProduct: {
        data: [{
          text: 'Product 1',
          price: 'Rp. 1.000.000'
        }, {
          text: 'Product 2',
          price: 'Rp. 2.000.000'
        }, {
          text: 'Product 3',
          price: 'Rp. 3.000.000'
        }, {
          text: 'Product 4',
          price: 'Rp. 4.000.000'
        }, {
          text: 'Product 5',
          price: 'Rp. 5.000.000'
        }, {
          text: 'Product 6',
          price: 'Rp. 6.000.000'
        }],
        offset: 0,
        showItem: 3
      }
    }
  },
  computed: {
    carouselOffset () {
      return (index) => {
        const position = index - this.trendingProduct.offset
        return {
          left: (position) * 330 + 30 + 'px'
          // opacity
        }
      }
    },
    carouselShow (index) {
      return (index) => {
        return {
          show: true
        }
      }
    }
  },
  methods: {
    slideCarousel (move) {
      this.trendingProduct.offset += move
      console.log(this.trendingProduct.offset)
    }
  }
}
</script>

<style lang="scss" scoped>
  .carousel {
    margin: 0 auto;
    max-width: 970px;
    position: relative;
    .carousel__button {
      width: 64px;
      height: 48px;
      background-image: url(/arrow.svg);
      background-size: cover;
      border: none;
      background-color: transparent;
      position: absolute;
      z-index: 1;
      cursor: pointer;
      &.carousel__button-left {
        transform: rotate(180deg);
        left: 0;
        top: 175px;
      }
      &.carousel__button-right {
        right: 0;
        top: 180px;
      }
    }
    .carousel__container {
      height: 400px;
      position: relative;
      overflow: hidden;
      margin: auto;
      .carousel__item {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 350px;
        transition: left .25s;
        .carousel__card {
          width: 300px;
          height: 100%;
          box-shadow: 0 0px 5px 0 rgba(0,0,0,0.2);
          transition: 0.25s;
          border-radius: 3px;
          &:hover {
            box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
          }
          .card__detail {
            padding: 1rem;
            p {
              margin-bottom: .5rem;
            }
          }
          img {
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
            width: 100%;
          }
        }
      }
    }
  }
  // @media screen and (min-width: 970px) {
  //   .carousel {
  //     .carousel__button {
  //       &.carousel__button-left {
  //         transform: rotate(180deg);
  //         left: 400px;
  //       }
  //       &.carousel__button-right {
  //         right: 420px;
  //       }
  //     }
  //   }
  // }
</style>
