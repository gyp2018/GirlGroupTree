<template>
  <li class="item lead">
    <div>
      {{ model.name }}
      <span v-if="isFolder" v-on:click="toggleOpen">
        [{{ open ? '-' : '+' }}]
      </span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <TreeItem
        v-for="(model, index) in model.children"
        :model="model"
        :key="index"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    model: Object
  },
  data() {
    return {
      open: true
    }
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    }
  }
}
</script>

<style>
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
</style>
