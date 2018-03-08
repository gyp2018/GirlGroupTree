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
          <GirlGroupTree class="border" />
        </div>
        <div class="col">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GirlGroupTree from './components/girlGroup/Tree.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    GirlGroupTree,
  }
}
</script>

<style>

</style>
