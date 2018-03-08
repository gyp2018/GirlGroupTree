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
  },
  mounted() {
    const { idolKey } = this.$route.params
    this.fetchIdolDetail(idolKey)
  },
}
</script>

<style>

</style>
