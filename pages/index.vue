<template>
  <div class="container">
    <section>
      <h1 class="text-center">
        HOT LISTS
      </h1>
      <div class="carousel">
        <button class="carousel__button carousel__button-left" @click="slideCarousel(-1)" />
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
        <button class="carousel__button carousel__button-right" @click="slideCarousel(1)" />
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
      carousel: {
        maxElement: 0,
        element: {
          offset: 335,
          gap: 25
        }
      },
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
  mounted() {
    this.getMaximumElement()
  },
  computed: {
    carouselOffset () {
      return (index, element) => {
        // console.log(this.trendingProduct.offset)
        let { offset } = this.trendingProduct
        if (offset < 0) this.trendingProduct.offset = 0
        const position = index - offset
        let space = 0
        switch (this.carousel.maxElement) {
          case 1:
            this.carousel.element.offset = 340
            this.carousel.element.gap = 40
            if (this.trendingProduct.offset > 5) {
              this.trendingProduct.offset = 5
            }
            return {
              left: (position * this.carousel.element.offset + this.carousel.element.gap) + 'px'
            }
          case 2:
            if (this.trendingProduct.offset > 4) {
              this.trendingProduct.offset = 4
            }
            if (this.trendingProduct.offset === 4) {
              space = this.$el.closest('.container').offsetWidth - (this.carousel.element.gap + 2 * this.carousel.element.offset)
            }
            return {
              left: (position * this.carousel.element.offset + this.carousel.element.gap + space) + 'px'
            }
          default:
            this.carousel.element.gap = 20
            if (this.trendingProduct.offset > 3) {
              this.trendingProduct.offset = 3
            }
            if (this.trendingProduct.offset === 3) {
              space = this.$el.closest('.container').offsetWidth - (this.carousel.element.gap + 2 * this.carousel.element.offset)
            }
            return {
              left: (position * this.carousel.element.offset + this.carousel.element.gap) + 'px'
            }
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
    },
    getMaximumElement () {
      const container = this.$el.querySelector('.carousel__container').clientWidth
      this.carousel.maxElement = Math.round(container / this.carousel.element.offset)
      if (this.carousel.maxElement < 1) this.carousel.maxElement = 1
      console.log(this.carousel.maxElement)
      this.$el.closest('body').onresize = () => {
        this.getMaximumElement()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .carousel {
    margin: 0 auto;
    max-width: 1000px;
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
        right: -20px;
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
