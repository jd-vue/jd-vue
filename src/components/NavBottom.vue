<template>
  <div class="footer">
    <footer class="fixBottomBox">
      <ul class="box-nav">
        <router-link tag="li" to="/home" class="tabItem">
          <a href="javascript:;" class="tab-item-link">
            <img src="../assets/images/a-home.png" alt class="tab-item-icon">
          </a>
        </router-link>
        <router-link tag="li" to="/catgory" class="tabItem">
          <a href="javascript:;" class="tab-item-link">
            <img src="../assets/images/n-catergry.png" alt class="tab-item-icon">
          </a>
        </router-link>
        <router-link tag="li" to="/find" class="tabItem">
          <a href="javascript:;" class="tab-item-link">
            <img src="../assets/images/n-find.png" alt class="tab-item-icon">
          </a>
        </router-link>
        <router-link tag="li" to="/cart" class="tabItem">
          <a href="javascript:;" class="tab-item-link">
            <img src="../assets/images/n-cart.png" alt class="tab-item-icon">
          </a>
        </router-link>
        <router-link tag="li" to="/mine" class="tabItem">
          <a href="javascript:;" class="tab-item-link">
            <img src="../assets/images/n-me.png" alt class="tab-item-icon">
          </a>
        </router-link>
      </ul>
    </footer>
  </div>
</template>
<style scoped  lang="scss">
@import '../assets/common.scss';

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
        display: inline-block;
        width: 150px;
        img{
            display: inline-block;
            width: 150px;
            height: 120px;
        }
    }
}
</style>
