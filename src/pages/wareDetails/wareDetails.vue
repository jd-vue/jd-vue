<template>
  <div class="box">
    <div class="ware_top">
      <my-header goBack="true" ellipsis="true" share="true">
        <span slot="ware" class="nav_ware" @click="hashChange(0, 'ware')" :class="{nav_selected: status==='ware'}">商品</span>
        <span slot="detail" class="nav_detail" @click="hashChange(1, 'detail')" :class="{nav_selected: status==='detail'}">详情</span>
      </my-header>
    </div>
    <div class="ware_detail d_jump">
      <div class="ware_basic">
        <swiper :options="swiperOption" ref="mySwiper" class="slides">
          <swiper-slide v-for="(item,index) in wareImageCarousel" :key="index">
            <div class="image_carousel"><img :src="item.url" alt=""></div>
          </swiper-slide>
          <div class="swiper-pagination pagination" slot="pagination"></div>
        </swiper>
        <div class="price_detail">
          <span class="ware_price"><i>￥</i>89.00</span>
          <span class="reduce_price">降价通知</span>
          <span class="concern">关注</span>
        </div>
        <div class="ware_name">
          <span>欧诗漫你值得拥有,你值得拥有,你也指的拥有,我们都值得拥有</span>
        </div>
        <div class="info_official">
          <span>
            <i class="icon-correct_circle ic-circle"></i>官方授权</span>
          <span>
            <i class="icon-correct_circle"></i>正品保证</span>
          <span>
            <i class="icon-correct_circle"></i>店铺售后</span>
        </div>
        <div class="selected">
          <span class="parameter_select ellipsis"><i>已选</i>M,1件</span>
          <span class="storeage">仅剩2件</span>
        </div>
        <div class="transport">
          <span class="address ellipsis"><i>送至</i>河北省石家庄市裕华区宋营镇珠峰大街石家庄学院南校区288号</span>
          <span class="now_have">现货</span>
          <span class="fee"><i>运费</i>免运费</span>
        </div>
        <div class="store">
          <div class="store_basic">
            <img class="store_logo" src="" alt="">
            <span class="store_name">
              <i>欧诗漫旗舰店</i>
              <i>综合评分9.7</i>
            </span>
          </div>
          <div class="store_grade">
            <span>
              <i>7万</i>
              <i>关注人数</i>
            </span>
            <span>
              <i>370</i>
              <i>全部商品</i>
            </span>
            <span>
              <i>物流&nbsp;<a>9.6高</a></i>
              <i>商品&nbsp;<a>9.6高</a></i>
              <i>服务&nbsp;<a>9.6高</a></i>
            </span>
          </div>
          <div class="store_contact">
            <span>联系客服</span>
            <span>进店逛逛</span>
          </div>
        </div>
        <div class="nav_bottom d_jump">
          <ul class="list_nav ">
            <li class="item_nav" v-for="(item,index) in navWare" :key="index" @click="changeBottom(index)" :class="{active: index === navIndex}">{{item}}</li>
          </ul>
        </div>
        <div class="ad_imgs" v-if="this.navIndex === 0">
          <ul>
            <li v-for="(item,index) in wareImageCarousel" :key="index">
              <img :src="item.url" alt="">
            </li>
          </ul>
        </div>
        <div v-if="this.navIndex === 1" class="parameter_shop">
          <div>
            <h3>商品参数</h3>
            <div class="parameter">
              <ul>
                <li>
                  <span>是否支持mp3铃声</span>
                  <span>是</span>
                </li>
                <li>
                  <span>是否支持mp3铃声</span>
                  <span>是</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li>
          <i class="icon-cart"></i>
          <span>店铺</span>
        </li>
        <li>
          <i class="icon-cart"></i>
          <span>购物车</span>
          <i class="cart-num">1</i>
        </li>
        <li @click="addCart()">
          <span>加入购物车</span>
        </li>
        <li>
          <span>立即购买</span>
        </li>
      </ul>
    </div>
    <layer v-model="showLayer" anim='up' @close="close()" styles="width:100%;height:100%;background-color:transparent" :type="1">
      <div class="layer_box">
        <div class="background"></div>
        <div class="layer_content">
          <div class="layer_ware">
            <img src="" alt="" class="ware_pic">
            <div class="layer_detail">
              <span class="price_layer"><i>￥</i>489.00</span>
              <span class="stock_layer">仅剩两件</span>
              <span class="itemno">商品编号: 30976859785</span>
            </div>
          </div>
          <div class="layer_parameter">
            <div class="parameter">
              <span class="attribute_value">颜色</span>
              <div class="attribute_item">
                <span>麻灰色</span>
                <span>宝蓝色</span>
                <span class="atttibute_selected">灰色</span>
              </div>
            </div>
            <div class="parameter">
              <span class="attribute_value">功能</span>
              <div class="attribute_item">
                <span class="atttibute_selected">美白</span>
                <span>补水</span>
                <span>祛皱</span>
              </div>
            </div>
          </div>
          <div class="layer_footer">
            <span>确定</span>
          </div>
        </div>
      </div>
    </layer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      status: 'ware',
      wareImageCarousel: [
        {
          url: require('../../assets/images/1.jpg')
        },
        {
          url: require('../../assets/images/2.jpg')
        },
        {
          url: require('../../assets/images/3.jpg')
        }
      ],
      swiperOption: {// 带分页的轮播图
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false
        }
      },
      navWare: ['商品介绍', '规格参数'],
      navIndex: 0,
      showLayer: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, this.hashChange)
  },
  methods: {
    Initialization () {
      document.body.scrollTop = 0
    },
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop <= 710) {
        this.index = 1
      } else if (scrollTop >= 714) {
        this.index = 0
      }
    },
    hashChange (num, status) {
      this.status = status
      // 获取需要滚动的距离
      this.index = num
      let jump = document.querySelectorAll('.d_jump')
      let total = jump[num].offsetTop
      let distance = document.documentElement.scrollTop || document.body.scrollTop
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50
      if (total > distance) {
        smoothDown()
      } else {
        let newTotal = distance - total
        step = newTotal / 50
        smoothUp()
      }
      function smoothDown () {
        if (distance < total) {
          distance += step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothDown, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      }
      function smoothUp () {
        if (distance > total) {
          distance -= step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothUp, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      }
    },
    // 切换底部导航
    changeBottom (index) {
      this.navIndex = index
    },
    // 加入购物车
    addCart () {
      this.showLayer = true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/mixin.scss';
  .ware_top {
    background-color: #fff;
    .nav_ware,
    .nav_detail {
      font-size: 36px;
      color: #888888;
      line-height: 44px;
      position: absolute;
      top: 60px;
      width: 200px;
      text-align: center;
      padding-bottom: 30px;
    }
    .nav_ware {
      left: 150px;
    }
    .nav_detail {
      right: 200px;
    }
    .nav_selected {
      border-bottom: 6px solid red;
    }
  }
  .ware_detail {
    padding-top: 140px;
    padding-bottom: 100px;
    background-color: #fff;
    .ware_basic {
      position: relative;
      z-index: 0;
      .image_carousel {
        width: 100%;
        height: 750px;
      }
      .pagination {
        width: 82px;
        height: 44px;
        background: rgba(206, 206, 206, 0.60);
        border-radius: 100px;
        position: absolute;
        left: 648px;
        top: 686px;
      }
      .price_detail {
        height: 96px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        .ware_price {
          margin-left: 32px;
          font-size: 46px;
          color: red;
          i {
            color: red;
            font-size: 36px;
          }
        }
        .reduce_price {
          position: absolute;
          top: 30px;
          right: 150px;
          color: #4E4E4E;
          font-size: 32px;
        }
        .concern {
          position: absolute;
          top: 30px;
          right: 32px;
          color: #4E4E4E;
          font-size: 32px;
        }
      }
      .ware_name {
        width: 100%;
        margin-top: 10px;
        border-bottom: 1px solid #d4d4d4;
        padding: 0 32px;
        span {
          display: inline-block;
          width: 686px;
          height: 72px;
          font-size: 32px;
          line-height: 36px;
          margin-bottom: 20px;
          color: #4E4E4E;
          @include ln(2);
        }
      }
      .info_official {
        width: 519px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        padding: 15px 0 15px 0;
        span,
        i {
          font-size: 26px;
          color: #4E4E4E;
          line-height: 28px;
        }
      }
      .selected {
        width: 100%;
        border-top: 20px solid #eee;
        font-size: 32px;
        padding: 20px 0;
        .parameter_select {
          display: inline-block;
          margin-left: 32px;
          width: 680px;
          height: 38px;
          color: #4E4E4E;
          i {
            margin-right: 15px;
            color: #B0B0B0;
          }
        }
        .storeage {
          display: block;
          color: red;
          margin-left: 108px;
        }
      }
      .transport {
        width: 100%;
        border-top: 20px solid #eee;
        border-bottom: 20px solid #eee;
        font-size: 32px;
        padding: 20px 0;
        .address, .fee {
          display: inline-block;
          margin-left: 32px;
          width: 680px;
          height: 38px;
          color: #4E4E4E;
          i {
            margin-right: 15px;
            color: #B0B0B0;
          }
        }
        .now_have {
          display: block;
          color: red;
          margin-left: 108px;
          margin-bottom: 20px;
        }
      }
      .store {
        .store_basic {
          padding-top: 20px;
          padding-left: 32px;
          display: flex;
          flex-direction: row;
          .store_logo {
            display: inline-block;
            width: 100px;
            height: 100px;
            background-color: blue;
            border-radius: 10px;
            margin-right: 15px;
          }
          .store_name {
            font-size: 32px;
            display: flex;
            flex-direction: column;
            i:nth-child(1) {
              margin-bottom: 15px;
              color: #4E4E4E;
            }
            i:nth-child(2) {
              color: #B0B0B0;
            }
          }
        }
        .store_grade {
          width: 100%;
          display: flex;
          flex-direction: row;
          margin-top: 20px;
          span:nth-child(1),
          span:nth-child(2) {
            display: inline-block;
            width: 250px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 32px;
            text-align: center;
            border-right: 1px solid #B0B0B0;
            padding-top: 15px;
            i:nth-child(1) {
              color: #4E4E4E;
            }
            i:nth-child(2) {
              color: #B0B0B0;
            }
          }
          span:nth-child(3) {
            font-size: 28px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 250px;
            text-align: center;
            i {
              color: #4E4E4E;
            }
            a {
              color: red;
            }
          }
        }
        .store_contact {
          margin-top: 20px;
          span {
            display: inline-block;
            width: 300px;
            height: 72px;
            font-size: 30px;
            color: #4E4E4E;
            border-radius: 36px;
            border: 1px solid #B0B0B0;
            text-align: center;
            line-height: 72px;
          }
          span:nth-child(1) {
            margin: 0 50px;
          }
        }
      }
      .nav_bottom {
        margin-top: 20px;
        .list_nav {
          display: flex;
          width: 750px;
          height: 80px;
          justify-content: space-around;
          align-items: center;
          .item_nav {
            font-size: 24px;
            color: #666666;
            line-height: 32px;
          }
          .active {
            color: red !important;
          }
        }
      }
      .ad_imgs {
        width: 100%;
        img {
          width: 100%;
          display: block;
        }
      }
      .parameter_shop {
        background-color: #fff;
        border-bottom: 21px solid #f4f5f4;
        h3 {
          display: inline-block;
          width: 686px;
          margin-left: 36px;
          font-size: 24px;
          color: #888888;
          line-height: 76px;
          border-top: 1px dashed #D4D4D4;
        }
        .parameter {
          ul:nth-child(1) {
            margin: 0 32px;
            border-top: 1px dashed #D4D4D4;
            li {
              height: 76px;
              width: 100%;
              display: flex;
              flex-direction: row;
              align-items: center;
              border-bottom: 1px dashed #D4D4D4;
              span:nth-child(1) {
                display: inline-block;
                width: 290px;
                font-size: 24px;
                color: #999999;
              }
              span:nth-child(2) {
                font-size: 24px;
                color: #666666;
              }
            }
          }
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 750px;
    z-index: 100;
    .ic-up-circle {
      margin-left: 661px;
      font-size: 64px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
      color: #888;
    }
    ul {
      display: flex;
      flex-direction: row;
      li {
        height: 100px;
        flex: 1;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        flex-direction: column;
        flex: 1 1 auto;
        background-color: #fff;
        img {
          width: 44px;
          height: 43.2px;
        }
        span {
          font-size: 20px;
          color: #888888;
          line-height: 28px;
        }
      }
      li:nth-child(1),
      li:nth-child(2) {
        position: relative;
        .icon-cart {
          color: #888888;
          font-size: 50px;
          padding-bottom: 5px;
        }
        .cart-num {
          position: absolute;
          top: 0;
          left: 80px;
          width: 40px;
          height: 40px;
          background-color: #FF7152;
          border-radius: 20px;
          text-align: center;
          font-family: Roboto-Regular;
          font-size: 20px;
          line-height: 40px;
          color: #FFFFFF;
        }
      }
      li:nth-child(3),
      li:nth-child(4)
       {
        flex-basis: 220px;
        span {
          font-family: 'MicrosoftYaHei';
          font-size: 32px;
          color: #FFFFFF;
          line-height: 40px;
        }
      }
      li:nth-child(3) {
        background-image: linear-gradient(-90deg, rgb(247, 112, 82) 4%, rgb(255, 89, 24) 96%);
      }
      li:nth-child(4) {
        background-image: linear-gradient(-90deg, rgb(247, 95, 1) 4%, red 96%);
      }
    }
  }
  .layer_box {
    display: flex;
    flex-direction: column;
    height: 100vh;// 视口的高度
    .background {
      width: 100%;
      height: 500px;
    }
    .layer_content {
      background-color: #fff;
      flex: 1;
      padding: 32px 0 0 32px;
      .layer_ware {
        display: flex;
        flex-direction: row;
        .ware_pic {
          display: inline-block;
          width: 228px;
          height: 228px;
          background-color: #ddd;
        }
        .layer_detail {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-left: 30px;
          .price_layer {
            color: red;
            font-size: 46px;
            margin-bottom: 10px;
            line-height: 46px;
            i {
              color: red;
              font-size: 36px;
            }
          }
          .stock_layer {
            color: red;
            font-size: 32px;
            line-height: 32px;
            margin-bottom: 10px;
          }
          .itemno {
            font-size: 32px;
            color: #4E4E4E;
            line-height: 32px;
          }
        }
      }
      .layer_parameter {
        padding-top: 40px;
        padding-bottom: 120px;
        height: 500px;
        overflow-y: scroll;
        .parameter {
          .attribute_value {
            color: #4E4E4E;
            font-size: 32px;
          }
          .attribute_item {
            padding-top: 20px;
            span {
              color: #4E4E4E;
              font-size: 32px;
              display: inline-block;
              padding: 20px 35px;
              border-radius: 45px;
              background-color: #EEE;
              text-align: center;
              margin-right: 30px;
              margin-bottom: 30px;
            }
          }
          .atttibute_selected {
            color: red !important;
            border: 1px solid red;
          }
        }
      }
      .layer_footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        span {
          display: inline-block;
          width: 100%;
          height: 100px;
          background-image: linear-gradient(-90deg, rgb(247, 112, 82) 4%, rgb(255, 89, 24) 96%);
          color: #fff;
          font-size: 32px;
          text-align: center;
          line-height: 100px;
        }
      }
    }
  }
</style>
