<template>
  <div class="home">
    <div class="m-layout">
      <!-- 轮播图-->
      <HomeBannerView></HomeBannerView>
      <img
        class="actimg"
        src="https://m.360buyimg.com/mobilecms/jfs/t1/7996/39/10711/89824/5c171070E9147c27d/8c4b32b2f4deef37.gif"
        alt
      >
      <!--tab选项-->
      <div class="box-btn">
        <div class="box-list">
          <a class="pan-box" v-for="(item,index) in number" :key="index">
            <img
              class="pan-img"
              src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp"
            >
            <span class="pan-word">京东超市</span>
          </a>
        </div>
      </div>
      <!--京东快报-->
      <div class="news-box">
        <div class="jd-news">
          <img
            class="news-img"
            src="https://m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg"
            alt
          >
          <swiper :options="swiperOption" class="news-text">
            <swiper-slide>
              <span>应该做个精致猪猪男孩，Nice的家居睡衣是很有必要的</span>
            </swiper-slide>
            <swiper-slide>
              <span>节省空间又美观的玄关鞋柜，生活的小心机</span>
            </swiper-slide>
            <swiper-slide>
              <span>越来越多人都不铺地砖了，改做全屋水泥，知道为什么吗？</span>
            </swiper-slide>
            <swiper-slide>
              <span>保暖也要遮肉，秋冬如何穿出好身材？</span>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!--东家小院-->
      <div class="jd-yard">
        <div class="tit-box">
          <span class="tit-img">
            <img
              class="img"
              src="https://m.360buyimg.com/mobilecms/s750x80_jfs/t25132/272/777079429/42670/e6ced36f/5b7a6fa1N94e7f9d9.jpg!q70.jpg.dpg"
            >
          </span>
        </div>
        <div class="yard-con">
          <div class="yard-first">
            <div class="yard-word">
              <strong class="word-con">冬季童装</strong>
              <p class="word-tit">秋冬新品&nbsp;&nbsp;限时抢购</p>
            </div>
            <div class="img-box">
              <a class="img1-box">
                <img
                  class="img1"
                  src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t26254/76/2259323105/153984/1dc5f7e9/5bfcead2Nbc05b120.jpg!q70.jpg.dpg"
                >
              </a>
              <a class="img2-box">
                <img
                  class="img2"
                  src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t26254/76/2259323105/153984/1dc5f7e9/5bfcead2Nbc05b120.jpg!q70.jpg.dpg"
                >
              </a>
            </div>
          </div>
          <div class="yard-second">
            <div class="yard-word">
              <strong class="word-con">冬季童装</strong>
              <p class="word-tit">秋冬新品&nbsp;&nbsp;限时抢购</p>
            </div>
            <div class="img-box">
              <a class="img1-box">
                <img
                  class="img1"
                  src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t26254/76/2259323105/153984/1dc5f7e9/5bfcead2Nbc05b120.jpg!q70.jpg.dpg"
                >
              </a>
              <a class="img2-box">
                <img
                  class="img2"
                  src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t26254/76/2259323105/153984/1dc5f7e9/5bfcead2Nbc05b120.jpg!q70.jpg.dpg"
                >
              </a>
            </div>
          </div>
        </div>
        <div class="yard-list">
          <div class="real-show">
            <div class="graphic-text">
              <strong class="graphic-tit" style="color: rgb(0, 0, 0);">动漫卡通</strong>
              <p class="graphic-wz" style="color:#648EFF">快乐成长</p>
            </div>
            <div class="graphic-img">
              <img
                class="opa1"
                src="//m.360buyimg.com/mobilecms/s150x150_jfs/t20575/104/1544913250/481299/8965949b/5b2cc25aN893e46e0.jpg!q70.jpg.dpg"
                style="opacity: 1;"
              >
            </div>
          </div>
          <div class="real-show">
            <div class="graphic-text">
              <strong class="graphic-tit" style="color: rgb(0, 0, 0);">动漫卡通</strong>
              <p class="graphic-wz" style="color:#648EFF">快乐成长</p>
            </div>
            <div class="graphic-img">
              <img
                class="opa1"
                src="//m.360buyimg.com/mobilecms/s150x150_jfs/t20575/104/1544913250/481299/8965949b/5b2cc25aN893e46e0.jpg!q70.jpg.dpg"
                style="opacity: 1;"
              >
            </div>
          </div>

          <div class="real-show">
            <div class="graphic-text">
              <strong class="graphic-tit" style="color: rgb(0, 0, 0);">动漫卡通</strong>
              <p class="graphic-wz" style="color:#648EFF">快乐成长</p>
            </div>
            <div class="graphic-img">
              <img
                class="opa1"
                src="//m.360buyimg.com/mobilecms/s150x150_jfs/t20575/104/1544913250/481299/8965949b/5b2cc25aN893e46e0.jpg!q70.jpg.dpg"
                style="opacity: 1;"
              >
            </div>
          </div>

          <div class="real-show">
            <div class="graphic-text">
              <strong class="graphic-tit" style="color: rgb(0, 0, 0);">动漫卡通</strong>
              <p class="graphic-wz" style="color:#648EFF">快乐成长</p>
            </div>
            <div class="graphic-img">
              <img
                class="opa1"
                src="//m.360buyimg.com/mobilecms/s150x150_jfs/t20575/104/1544913250/481299/8965949b/5b2cc25aN893e46e0.jpg!q70.jpg.dpg"
                style="opacity: 1;"
              >
            </div>
          </div>
        </div>
      </div>
      <!--爱生活-->
      <div class="love-life">
        <div class="life-tit">
          <img
            class="img"
            src="//m.360buyimg.com/mobilecms/s750x80_jfs/t15526/56/2344102455/23273/d8e15d5a/5aa0dbc1Nefd2bd2a.png!q70.jpg.dpg"
          >
        </div>
        <div >
        <div class="box-list">
          <div class="real-show">
            <div class="graphic-text">
              <strong class="graphic-tit" style=" background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);background: linear-gradient(90deg, #FF2A2A,#F139D2);-webkit-background-clip: text;color: transparent;">优惠免息</strong>
              <p class="graphic-wz" style="color:#648EFF">全场免息</p>
            </div>
            <div class="graphic-img">
              <img
                class="opa1"
                src="//m.360buyimg.com/n1/s150x150_jfs/t1/17187/15/1913/56763/5c170621E770a342d/aacbaf9dcee8c82c.png!q70.jpg.dpg"
                style="opacity: 1;"
              >
            </div>
          </div>
          <div class="real-show">
            <div class="graphic-text">
              <strong class="graphic-tit" style=" background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);background: linear-gradient(90deg, #FF2A2A,#F139D2);-webkit-background-clip: text;color: transparent;">优惠免息</strong>
              <p class="graphic-wz" style="color:#648EFF">全场免息</p>
            </div>
            <div class="graphic-img">
              <img
                class="opa1"
                src="//m.360buyimg.com/n1/s150x150_jfs/t1/17187/15/1913/56763/5c170621E770a342d/aacbaf9dcee8c82c.png!q70.jpg.dpg"
                style="opacity: 1;"
              >
            </div>
          </div>
          <div class="real-show">
            <div class="graphic-text">
              <strong class="graphic-tit" style=" background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);background: linear-gradient(90deg, #FF2A2A,#F139D2);-webkit-background-clip: text;color: transparent;">优惠免息</strong>
              <p class="graphic-wz" style="color:#648EFF">全场免息</p>
            </div>
            <div class="graphic-img">
              <img
                class="opa1"
                src="//m.360buyimg.com/n1/s150x150_jfs/t1/17187/15/1913/56763/5c170621E770a342d/aacbaf9dcee8c82c.png!q70.jpg.dpg"
                style="opacity: 1;"
              >
            </div>
          </div>
          <div class="real-show">
            <div class="graphic-text">
              <strong class="graphic-tit" style=" background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);background: linear-gradient(90deg, #FF2A2A,#F139D2);-webkit-background-clip: text;color: transparent;">优惠免息</strong>
              <p class="graphic-wz" style="color:#648EFF">全场免息</p>
            </div>
            <div class="graphic-img">
              <img
                class="opa1"
                src="//m.360buyimg.com/n1/s150x150_jfs/t1/17187/15/1913/56763/5c170621E770a342d/aacbaf9dcee8c82c.png!q70.jpg.dpg"
                style="opacity: 1;"
              >
            </div>
          </div>
          <div class="real-show">
            <div class="graphic-text">
              <strong class="graphic-tit" style=" background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);background: linear-gradient(90deg, #FF2A2A,#F139D2);-webkit-background-clip: text;color: transparent;">优惠免息</strong>
              <p class="graphic-wz" style="color:#648EFF">全场免息</p>
            </div>
            <div class="graphic-img">
              <img
                class="opa1"
                src="//m.360buyimg.com/n1/s150x150_jfs/t1/17187/15/1913/56763/5c170621E770a342d/aacbaf9dcee8c82c.png!q70.jpg.dpg"
                style="opacity: 1;"
              >
            </div>
          </div>
          <div class="real-show">
            <div class="graphic-text">
              <strong class="graphic-tit" style=" background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);background: linear-gradient(90deg, #FF2A2A,#F139D2);-webkit-background-clip: text;color: transparent;">优惠免息</strong>
              <p class="graphic-wz" style="color:#648EFF">全场免息</p>
            </div>
            <div class="graphic-img">
              <img
                class="opa1"
                src="//m.360buyimg.com/n1/s150x150_jfs/t1/17187/15/1913/56763/5c170621E770a342d/aacbaf9dcee8c82c.png!q70.jpg.dpg"
                style="opacity: 1;"
              >
            </div>
          </div>
          <div class="real-show">
            <div class="graphic-text">
              <strong class="graphic-tit" style=" background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);background: linear-gradient(90deg, #FF2A2A,#F139D2);-webkit-background-clip: text;color: transparent;">优惠免息</strong>
              <p class="graphic-wz" style="color:#648EFF">全场免息</p>
            </div>
            <div class="graphic-img">
              <img
                class="opa1"
                src="//m.360buyimg.com/n1/s150x150_jfs/t1/17187/15/1913/56763/5c170621E770a342d/aacbaf9dcee8c82c.png!q70.jpg.dpg"
                style="opacity: 1;"
              >
            </div>
          </div>
          <div class="real-show">
            <div class="graphic-text">
              <strong class="graphic-tit" style=" background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);background: linear-gradient(90deg, #FF2A2A,#F139D2);-webkit-background-clip: text;color: transparent;">优惠免息</strong>
              <p class="graphic-wz" style="color:#648EFF">全场免息</p>
            </div>
            <div class="graphic-img">
              <img
                class="opa1"
                src="//m.360buyimg.com/n1/s150x150_jfs/t1/17187/15/1913/56763/5c170621E770a342d/aacbaf9dcee8c82c.png!q70.jpg.dpg"
                style="opacity: 1;"
              >
            </div>
          </div>
        </div>
        </div>
        <!-- <div class="box-list">
          <div
            class="show-box"
            v-for="(item,index) in life"
            :key="index"
            jump-href="//m.jr.jd.com/btyingxiao/sfstore/index.html"
          >
            <div class="real-show">
              <div class="graphic-text">
                <strong
                  class
                  style=" background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);background: linear-gradient(90deg, #FF2A2A,#F139D2);-webkit-background-clip: text;color: transparent;"
                >优享免息</strong>
                <span class="graphic-wz" style="color:#222222">全场免息</span>
              </div>
              <a class="graphic-img">
                <img
                  class="opa"
                  src="//m.360buyimg.com/n1/s150x150_jfs/t1/17187/15/1913/56763/5c170621E770a342d/aacbaf9dcee8c82c.png!q70.jpg.dpg"
                >
              </a>
            </div>
          </div>
        </div>-->
      </div>
      <HomeMainView></HomeMainView>
    </div>
     <HomeNavView></HomeNavView>
  </div>
</template>
<script>
import HomeBannerView from './HomeBanner.vue'
import HomeNavView from './NavBottom.vue'
import HomeMainView from './HomeMain.vue'
export default {
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        autoplay: {
          delay: 6000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      },
      number: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
      life: [1, 2, 3, 4, 5]
    }
  },
  components: {
    HomeBannerView,
    HomeNavView,
    HomeMainView
  }
}
</script>
<style scoped  lang="scss">
@import "../assets/common.scss";
@import "../assets/css/index.css";
.m-layout{
    padding-bottom: 60px;
}
.actimg {
  width: 750px;
  height: 245px;
}
.box-btn {
  width: 750px;

  .box-list {
    width: 750px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    .pan-box {
      width: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .pan-img {
        width: 120px;
        height: 120px;
        margin-top: 10px;
      }
      .pan-word {
        text-align: center;
        width: 150px;
      }
    }
  }
}
.news-box {
  .jd-news {
    display: flex;
    .news-img {
      height: 48px;
      width: 168px;
    }
    .news-text {
     margin-left: 6px;
     margin-top: 2px;
      height: 40px;
      span {
        line-height: 40px;
      }
    }
  }
}
.jd-yard {
  .tit-box {
    .tit-img {
      display: flex;
      justify-content: center;
      padding: 0 150px;
      background-color: #f6f6f6;
      .img {
        width: 450px;
        height: 70px;
      }
    }
  }
  .yard-con {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .yard-first {
      width: 362px;
      .yard-word {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .word-con {
          display: flex;
          text-align: center;
          padding: 0px 86px;
        }
        .word-tit {
          font-size: 24px;
          padding: 0px 70px;
        }
        .word-con::after {
          display: inline-block;
          width: 24px;
          height: 1px;
          content: "";
          position: relative;
          background: #000;
          top: 14px;
          left: 3px;
        }
        .word-con::before {
          display: inline-block;
          width: 24px;
          height: 1px;
          content: "";
          position: relative;
          background: #000;
          top: 14px;
          left: -3px;
        }
      }
      .img-box {
        display: flex;
        flex-direction: row;
        .img1-box {
          display: inline-block;
          margin: 20px;
          .img1 {
            width: 140px;
            height: 140px;
          }
        }
        .img2-box {
          display: inline-block;
          margin-top: 20px;
          .img2 {
            width: 140px;
            height: 140px;
          }
        }
      }
    }
    .yard-second {
      width: 362px;
      .yard-word {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .word-con {
          display: flex;
          text-align: center;
          padding: 0px 86px;
        }
        .word-tit {
          font-size: 24px;
          padding: 0px 70px;
        }
        .word-con::after {
          display: inline-block;
          width: 24px;
          height: 1px;
          content: "";
          position: relative;
          background: #000;
          top: 14px;
          left: 3px;
        }
        .word-con::before {
          display: inline-block;
          width: 24px;
          height: 1px;
          content: "";
          position: relative;
          background: #000;
          top: 14px;
          left: -3px;
        }
      }
      .img-box {
        display: flex;
        flex-direction: row;
        .img1-box {
          display: inline-block;
          margin: 20px;
          .img1 {
            width: 140px;
            height: 140px;
          }
        }
        .img2-box {
          display: inline-block;
          margin-top: 20px;
          .img2 {
            width: 140px;
            height: 140px;
          }
        }
      }
    }
  }
  .yard-list {
    display: flex;
    flex-direction: row;
    .real-show {
      width: 181px;
      .graphic-text {
      }
      .graphic-img {
        .opa1 {
          width: 181px;
        }
      }
    }
  }
}
.love-life {
  .life-tit {
    display: flex;
    align-items: center;
    .img {
      width: 750px;
    }
  }
    .box-list {
      width: 750px;
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
    .real-show {
      width: 181px;
      .graphic-text {
      }
      .graphic-img {
        .opa1 {
          width: 181px;
        }
      }
    }
  }
}
</style>
