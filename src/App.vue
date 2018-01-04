<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
html
body
  margin 0
  height 100%
#app
  width 10rem
  margin 0 auto
  height 100%
  overflow-x hidden
.fade-enter-active, .fade-leave-active
  transition all 0.3s ease
.fade-enter
  opacity 1
.fade-leave-active
  opacity 0
</style>
