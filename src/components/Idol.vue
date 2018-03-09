<template>
  <div>
    <h1>Idol Pages</h1>
    <div>
      <h1>{{ idolDetail.detail.name }}</h1>
      <h6>
        {{ idolDetail.detail.height && `${idolDetail.detail.height} cm` }}
        {{ idolDetail.detail.weight && `, ${idolDetail.detail.weight} kg` }}
      </h6>
      <img v-if="idolDetail.detail.id" :src="`/images/${idolDetail.detail.id}.jpeg`" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Idol',
  computed: {
    ...mapState([
      'idolDetail'
    ]),
  },
  methods: {
    ...mapActions([
      'fetchIdolDetail',
    ]),
    fetchIdol() {
      const { idolKey } = this.$route.params
      this.fetchIdolDetail(idolKey)
    },
  },
  mounted() {
    this.fetchIdol()
  },
  watch: {
    '$route' (to, from) {
      this.fetchIdol()
    }
  }
}
</script>

<style>

</style>
