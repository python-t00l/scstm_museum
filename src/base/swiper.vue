<template>
  <div class="swiper-con">
    <swiper :options="swiperOption">

      <swiper-slide
        v-for="(item,index) in banners"
        :key="index">
        <a target="_blank" :href="item.url" class="bg-img"
           :style="{background: 'url('+item.img+') no-repeat center'}"></a>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>

      <Icon type="ios-arrow-right" class="swiper-icon swiper-next" slot="button-next"></Icon>
      <Icon type="ios-arrow-left" class="swiper-icon swiper-prev" slot="button-prev"></Icon>

    </swiper>
  </div>
</template>
<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {Icon} from 'iview'

  export default {
    props: {
      banners: {
        default: ''
      }
    },
    components: {
      swiper,
      swiperSlide,
      Icon
    },
    data() {
      return {
        swiperOption: {
          spaceBetween: 5,
          centeredSlides: true,
          speed: 600,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
          },
        }
      }
    }
  }
</script>
<style lang="less">
  .swiper-con {
    width: 100%;
    height: 100%;
    position: relative;
    .swiper-icon {
      position: absolute;
      top:50%;
      margin-top: -25px;
      display: block;
      color: #fff;
      z-index: 100;
      cursor: pointer;
      font-size: 50px;
    }
    .swiper-next {
      right: 15px;
    }
    .swiper-prev {
      left: 15px;
    }
    .swiper-container {
      height: 100%;
    }
    .swiper-pagination {
      bottom: 24px !important;
      z-index: 100 !important;
      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background: #808080;
        opacity: 1;
        &.swiper-pagination-bullet-active{
          background: #ffffff;
        }
      }
    }

    .swiper-slide {
      .bg-img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
</style>
