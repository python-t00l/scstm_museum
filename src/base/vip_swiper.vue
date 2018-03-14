<template>
  <div class="rolls" v-if="data">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item,index) in data"
                    :key="index">
        <a target="_blank" :href="item.url">
          <img :src="item.img"/>
        </a>
      </swiper-slide>
    </swiper>
    <Icon type="ios-arrow-right" class="swiper-icon swiper-next" slot="button-next"></Icon>
    <Icon type="ios-arrow-left" class="swiper-icon swiper-prev" slot="button-prev"></Icon>
  </div>
</template>
<script type="text/ecmascript-6">
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: {
      data: {
        type: Array,
        default: ''
      }
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 16,
          navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
          }
        },
      }
    }
  }
</script>
<style lang="less">
  .rolls {
    position: relative;
    .swiper-container {
      height: 100%;
      .swiper-wrapper {
        overflow: hidden;
      }
      .swiper-slide {
        width: 170px !important;
        height: 100px !important;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
    .swiper-icon {
      position: absolute;
      top: 50%;
      margin-top: -25px;
      display: block;
      color: #004179;
      z-index: 100;
      cursor: pointer;
      font-size: 50px;
    }
    .swiper-next {
      right: -60px;
    }
    .swiper-prev {
      left: -60px;
    }
  }
</style>
