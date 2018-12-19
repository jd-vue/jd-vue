<template>
  <div>
    <header id='head_top'>
      <!-- 返回按钮 -->
      <section class="head_goback"  @click="$router.go(-1)">
        <i class="icon-arrow_left" >1</i>
      </section>
      <!-- 标题 -->
      <section class="title_head" v-if="headTitle">
        <span class="title_text">{{headTitle}}</span>
      </section>
      <slot name="ware"></slot>
      <slot name="detail"></slot>
      <!-- 分享 -->
      <section class="title_share" v-if="share" @click="goShare()">
        <span>
          <i class="icon-share">fen</i>
        </span>
      </section>
      <span class="ellipsis1" v-if="!ellipsis"></span>
      <!-- 更多按钮 -->
      <section class="ellipsis" @click="showMenu()" v-if="ellipsis">
        <span>
          <i class="icon-more">...</i>
        </span>
        <!-- 菜单 -->
        <layer v-model="menu" :type='1' :shade="false" styles="position:fixed;top:60px;right:15px;padding: 0;background-color:transparent" style="position: fixed; left: 0px; top: 0px; width: 100%; background-color: rgba(0, 0, 0, 0.1); height: 100%;">
          <div class="layer_menu">
            <ul class='menulist'>
              <li>
                <i class="icon-shop"></i>
                <span>消息</span>
              </li>
              <li>
                <i class="icon-message"></i>
                <span>首页</span>
              </li>
              <li>
                <i class="icon-mine"></i>
                <span>搜素</span>
              </li>
              <li>
                <i class="icon-search"></i>
                <span>店铺</span>
              </li>
              <li>
                <i class="icon-search"></i>
                <span>我的关注</span>
              </li>
            </ul>
          </div>
        </layer>
      </section>
      <!-- 分享按钮 -->
      <layer v-model="showLayer" :type='1' anim='up' @close="close()" styles="position:fixed;bottom:0;left:0;width: 750px; height: 5;padding: 0; border:none;">
        <div class="layer_share">
          <span class="share_to">分享至</span>
          <ul class="content_share">
            <li>
              <dd><img src="../assets/images/icon_wechart.png" alt=""></dd>
              <dd>微信好友</dd>
            </li>
            <li>
              <dd><img src="../assets/images/icon_friends.png" alt=""></dd>
              <dd>朋友圈</dd>
            </li>
            <li>
              <dd><img src="../assets/images/icon_qq.png" alt=""></dd>
              <dd>QQ</dd>
            </li>
            <li>
              <dd><img src="../assets/images/icon_qzone.png" alt=""></dd>
              <dd>QQ空间</dd>
            </li>
            <li>
              <dd><img src="../assets/images/icon_blog.png" alt=""></dd>
              <dd>微博</dd>
            </li>
          </ul>
          <ul class="content_share2">
            <li>
              <dd><img src="../assets/images/icon_link.png" alt=""></dd>
              <dd>复制链接</dd>
            </li>
            <li>
              <dd><img src="../assets/images/icon_qrcode.png" alt=""></dd>
              <dd>生成二维码</dd>
            </li>
          </ul>
          <span class="footer_layer" @click="close()">取消</span>
        </div>
      </layer>
    </header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showLayer: false,
      menu: false
    }
  },
  props: ['headTitle', 'goBack', 'ellipsis', 'share'],
  methods: {
    showMenu () {
      this.menu = !this.menu
      if (this.menu) {
        document.getElementsByTagName('body')[0].style.position = 'fixed'
      } else {
        document.getElementsByTagName('body')[0].style.position = ''
      }
    },
    gotoAddress (path) {
      this.$router.push(path)
    },
    goShare () {
      this.showLayer = true
    },
    close () {
      this.showLayer = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/mixin";
#head_top {
  background-color: #fff;
  width: 750px;
  height: 140px;
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
  .head_goback {
    display: inline-block;
    height: 36px;
    width: 36px;
    font-size: 36px;
    color: #666666;
    margin-left: 32px;
    .icon-arrow_left {
      font-size: 36px;
    }
  }
  .title_head {
    display: inline-block;
    color: #fff;
    padding-top: 23px;
    .title_text {
      font-size: 36px;
      color: #4E4E4E;
      line-height: 88px;
    }
  }
  .title_share {
    position: absolute;
    right: 120px;
    top: 65px;
    span {
      height: 36px;
      width: 36px;
      .icon-share {
        font-size: 36px;
      }
    }
  }
  .ellipsis {
    span {
      display: inline-block;
      width: 67px;
      margin-right: 25px;
      .icon-more {
        font-weight: 900;
        font-size: 60px;
        color: #666666;
        position: absolute;
        top: 30px;
        right: 22px;
      }
    }
  }
}
.layer_share {
  width: 100%;
  .share_to {
    display: inline-block;
    height: 127px;
    width: 750px;
    font-size: 24px;
    color: #999999;
    text-align: center;
    line-height: 127px;
  }
  .content_share {
    height: 178px;
    width: 750px;
    padding: 0 22px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom: 2px solid #EEEEEE;
    margin-bottom: 30px;
    li {
      text-align: center;
      margin-right: 40px;
      dd {
        margin: 0;
        font-family: MicrosoftYaHei;
        font-size: 20px;
        color: #888888;
      }
      dd:nth-child(1) {
        height: 100px;
        width: 100px;
        margin-bottom: 22px;
        img {
          height: 100px;
          width: 100px;
        }
      }
      dd:nth-child(2) {
        margin-bottom: 30px;
      }
    }
  }
  .content_share2 {
    height: 178px;
    width: 750px;
    padding: 0 44px;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    li {
      text-align: center;
      margin-right: 40px;
      dd {
        margin: 0;
        font-family: MicrosoftYaHei;
        font-size: 20px;
        color: #888888;
      }
      dd:nth-child(1) {
        height: 100px;
        width: 100px;
        margin-bottom: 22px;
        img {
          height: 100px;
          width: 100px;
        }
      }
      dd:nth-child(2) {
        margin-bottom: 30px;
      }
    }
  }
  .footer_layer {
    display: inline-block;
    height: 100px;
    width: 750px;
    text-align: center;
    line-height: 100px;
    font-size: 36px;
    border-top: 1px solid #D9D9D9;
    color: #888888;
    z-index: 10;
  }
}
.layer_menu {
  .menulist {
    width: 230px;
    height: 400px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    li {
        padding-top: 30px;
        font-size: 32px;
        color: #ffffff;
        width: 220px;
        height: 50px;
        i {
          float: left;
          color: #fff;
          margin-left: 30px;
          height: 43px;
          width: 43px;
        }
        span {
          float: left;
          height: 40px;
          color: #fff;
        }
    }
  }
}
</style>
