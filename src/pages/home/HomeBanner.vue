<template>
  <div class="home-ban">
    <div class="m-banner">
      <swiper :options="swiperOption"  class="banner-box">
        <swiper-slide  v-for="(itme,index) in swiperImgs" :key="index" >
          <li>
            <img class="nav-img" :src="itme" alt>
          </li>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import json from '../../../static/swiperImg.json'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperImgs: json.images,
      swiperOption: {
        disableOnInteraction: false,
        autoplayDisableOnInteraction: false,
        autoplayStopOnLast: true,
        autoplay: {
          delay: 6000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {}
}
</script>
<style scoped  lang="scss">
@import '../../assets/common';
@import '../../assets/css/index.css';
.home-ban {
  width: 750px;
  height: 325px;
  .m-banner {
    width: 750px;
    height: 325px;
    .banner-box {
      width: 750px;
      height: 325px;
      li {
        .nav-img {
          width: 750px;
          height: 325px;
        }
      }
    }
  }
}
</style>
