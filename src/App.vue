<template>
  <div id="app">
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
</style>
