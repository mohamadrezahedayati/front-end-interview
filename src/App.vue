<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
#app{
  height: 100%;
}
#app::before{
  background-image: url('/img/V5y.gif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-filter: opacity(.06) blur(2px);
  filter: opacity(.16) blur(11px);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
