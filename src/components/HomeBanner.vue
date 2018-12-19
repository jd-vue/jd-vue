<template>
  <div class="home-ban">
    <div class="m-banner">
      <swiper :options="swiperOption" class="banner-box">
        <swiper-slide>
          <li>
            <img class="nav-img" src="../assets/images/l8.jpg" alt>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <img class="nav-img" src="../assets/images/l1.jpg" alt>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <img class="nav-img" src="../assets/images/l2.jpg" alt>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <img class="nav-img" src="../assets/images/l3.jpg" alt>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <img class="nav-img" src="../assets/images/l4.jpg" alt>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <img class="nav-img" src="../assets/images/l5.jpg" alt>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <img class="nav-img" src="../assets/images/l6.jpg" alt>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <img class="nav-img" src="../assets/images/l7.jpg" alt>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <img class="nav-img" src="../assets/images/l8.jpg" alt>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <img class="nav-img" src="../assets/images/l1.jpg" alt>
          </li>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
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
@import '../assets/common';
@import '../assets/css/index.css';
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
