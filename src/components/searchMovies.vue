<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<p><em>Found: {{ moviesFound }}</em></p>
    <input type="text" v-model="searchMovieValue">
    <button v-on:click="GET_MOVIES_ARRAY">Search</button>

    <hr>

    <movies-list v-bind:moviesData="$store.state.movies"></movies-list>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import MoviesList from "./movies-list.vue";
import { getMovies } from "../services/getMovies";

export default {
  name: "searchMovies",
  props: {
    msg: String
  },
  components: {
    MoviesList
  },
  data: function() {
    return {
      movies: this.$store.state.movies
    };
  },
  computed: {
    searchMovieValue: {
      get() {
		return this.$store.getters.getMovieSearchValue
      },
      set(value) {
        this.$store.commit("changeMoviesSearchValue", value);
      }
    },
    moviesFound: {
      get() {
		return this.$store.getters.getMoviesAmount
      },
      set(value) {
        this.$store.commit("changeMoviesAmount", value);
      }
    },
  },
  methods: {
    ...mapActions([
      "GET_MOVIES_ARRAY" // map `this.add()` to `this.$store.dispatch('increment')`
	])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
