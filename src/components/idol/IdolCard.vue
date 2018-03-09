<template>
  <div class="card">
    <img
      class="card-img-top"
      alt="Card image cap"
      v-if="idol.id"
      :src="`/images/${idol.id}.jpeg`"
    >
    <div class="card-body">
      <h5 class="card-title">{{ idol.name }}</h5>
      <p class="card-text">
        {{ idol.height && `${idol.height} cm` }}
        {{ idol.weight && `, ${idol.weight} kg` }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IdolCard',
  props: {
    idol: Object
  },
}
</script>

<style>

</style>
