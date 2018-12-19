<template>
  <div class="footer">
    <footer class="fixBottomBox">
      <ul class="box-nav">
        <router-link tag="li" to="/home" class="tabItem">
          <li  class="tab-item-link" >
            <i class="iconfont icon-shouye font" :class="{active:$route.path.indexOf('home')!= -1 }" ></i>
            <span :class="{active:$route.path.indexOf('home')!= -1 }" >首页</span>
          </li>
        </router-link>
        <router-link tag="li" to="/catgory" class="tabItem">
          <li  class="tab-item-link"  >
            <i class="iconfont icon-leimupinleifenleileibie font" :class="{active:$route.path.indexOf('catgory')!= -1 }"></i>
            <span :class="{active:$route.path.indexOf('catgory')!= -1 }">分类</span>
          </li>
        </router-link>
        <router-link tag="li" to="/find" class="tabItem">
         <li   class="tab-item-link">
            <i class="iconfont icon-faxian font" :class="{active:$route.path.indexOf('find')!= -1 }"></i>
            <span :class="{active:$route.path.indexOf('find')!= -1 }">发现</span>
          </li>
        </router-link>
        <router-link tag="li" to="/cart" class="tabItem">
          <li   class="tab-item-link">
            <i class="iconfont icon-gouwuche font" :class="{active:$route.path.indexOf('cart')!= -1 }"></i>
            <span :class="{active:$route.path.indexOf('cart')!= -1 }">购物车</span>
          </li>
        </router-link>
        <router-link tag="li" to="/mine" class="tabItem">
        <li   class="tab-item-link">
            <i class="iconfont icon-wode font" :class="{active:$route.path.indexOf('mine')!= -1 }"></i>
            <span :class="{active:$route.path.indexOf('mine')!= -1 }">我的</span>
          </li>
        </router-link>
      </ul>
    </footer>
  </div>
</template>
<style scoped  lang="scss">
@import '../assets/common.scss';
.active{
  color: red;
}
.fixBottomBox{
    position: fixed;
    bottom: 0;
    left: 0;
}
.box-nav{
    display: flex;
    flex-direction: row;
    background-color: #fff;
    .tab-item-link{
        padding-top: 6px;
        padding-bottom: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 150px;
          .font{
        font-size: 62px;
        font-weight: 600;
        }
    }
}
</style>
