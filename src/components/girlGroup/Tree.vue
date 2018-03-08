<template>
  <div>
    <ul>
      <TreeItem :model="treeData" />
    </ul>
  </div>
</template>

<script>
import TreeItem from './TreeItem.vue'

const treeData = {
  name: 'hi',
  children: [
    {
      name: 'cool'
    },
    {
      name: 'hello',
      children: [
        {
          name: 'hell'
        },
        {
          name: 'show'
        }
      ]
    },
    {
      name: 'god'
    }
  ]
}

export default {
  name: 'Tree',
  components: {
    TreeItem
  },
  data() {
    return {
      treeData
    }
  }
}
</script>

<style>
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
