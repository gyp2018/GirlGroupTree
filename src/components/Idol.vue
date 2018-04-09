<template>
  <div>
    <h1>Idol Pages</h1>
    <div class="row">
      <div class="col-6">
        <IdolCard :idol="idolDetail.detail" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import IdolCard from './idol/IdolCard.vue'

export default {
  name: 'Idol',
  components: {
    IdolCard,
  },
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
    '$route' () {
      this.fetchIdol()
    }
  }
}
</script>

<style></style>
