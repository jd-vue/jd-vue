<template>
  <div id="app">
    <HomeNavView></HomeNavView>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
import HomeNavView from './components/NavBottom.vue'
export default {
  name: 'App',
  components: {
    HomeNavView
  }
}
</script>

<style lang="scss">
@import './assets/common.scss';
@import './assets/css/index.css';
@import './assets/iconfont/iconfont.css';
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0.3;
}
</style>
