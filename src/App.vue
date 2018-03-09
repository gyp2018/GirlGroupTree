<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary">
      <span class="navbar-brand mb-0 h1">
        GirlGroup
      </span>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
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
import HelloWorld from './components/HelloWorld.vue'
import GirlGroups from './components/GirlGroups.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    GirlGroups,
  }
}
</script>

<style>

</style>
