<template>
  <ul>
    <TreeItem :model="girlGroups.tree" />
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TreeItem from './girlGroup/TreeItem.vue'

export default {
  name: 'GirlGroups',
  components: {
    TreeItem
  },
  computed: {
    ...mapState([
      'girlGroups'
    ]),
  },
  methods: {
    ...mapActions([
      'fetchGirlGroups'
    ])
  },
  mounted() {
    this.fetchGirlGroups()
  },
}
</script>

<style>
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
