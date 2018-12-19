<template>
  <div class="footer">
    <footer class="fixBottomBox">
      <ul class="box-nav">
        <router-link tag="li" to="/home" class="tabItem">
          <li  class="tab-item-link" :class="{active:$route.path.indexOf('home')!= -1 }" >
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
            <i class="iconfont icon-faxian font"></i>
            <span>发现</span>
          </li>
        </router-link>
        <router-link tag="li" to="/cart" class="tabItem">
          <li   class="tab-item-link">
            <i class="iconfont icon-gouwuche font"></i>
            <span>购物车</span>
          </li>
        </router-link>
        <router-link tag="li" to="/mine" class="tabItem">
        <li   class="tab-item-link">
            <i class="iconfont icon-wode font"></i>
            <span>我的</span>
          </li>
        </router-link>
      </ul>
    </footer>
  </div>
</template>
<style scoped  lang="scss">
@import '../../assets/common.scss';
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
        padding: 6px  0; 
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
