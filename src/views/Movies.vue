<template>
  <div class="movies">
    <search-movies msg="Movie Voting App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchMovies from '../components/searchMovies.vue'

export default {
  name: 'movies',
  components: {
    SearchMovies
  }
}
</script>
