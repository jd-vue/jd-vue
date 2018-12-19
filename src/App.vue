<template>
  <div id="app">
<<<<<<< HEAD
    <router-view></router-view>
    <!-- <NavBottomView v-show="shownav"></NavBottomView> -->
  </div>
</template>
<script>
import NavBottomView from './components/NavBottom.vue'
export default {
  name: 'App',
  components: {
    NavBottomView
  }
}
</script>

<style scoped  lang="scss">
@import './assets/common';
@import './assets/css/index.css';
=======
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
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/common.scss';
@import './assets/iconfont/iconfont.css';
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0.3;
}
>>>>>>> 6b8bbe95515fd8d85c6ebcebf91394ab803f1fd7
</style>
