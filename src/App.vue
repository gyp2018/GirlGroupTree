<template>
  <div id="app">
    <TopNav />
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-md-2 mt-4">
          <GirlGroups />
        </div>
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import HelloWorld from './components/HelloWorld.vue'
import GirlGroups from './components/GirlGroups.vue'

export default {
  name: 'app',
  components: {
    TopNav,
    HelloWorld,
    GirlGroups,
  }
}
</script>

<style>

</style>
