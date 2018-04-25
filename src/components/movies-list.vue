<template>
  <div class="movies__list">
    <template v-for="movieItem in moviesData">
      <movie-item v-bind:movieItemData="movieItem"></movie-item>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieItem from './movies-list-item.vue'

export default {
  name: 'moviesList',
  props: ['moviesData'],
  components: {
    MovieItem
  }
}
</script>

<style scoped>
  .movies__list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around
  }
</style>

