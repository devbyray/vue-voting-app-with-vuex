<template>
  <div class="movie__item">
      <div><img v-bind:src="movieItemData.Poster" alt=""></div>
      <header class="movie__title">
        <h2>{{movieItemData.Title}}</h2>
      </header>
      <div class="movie__content">
		<p>{{movieItemData.Type}}</p>
		<p>{{movieItemData.Year}}</p>
		<h3>Votes</h3>
		<strong>{{votes}}</strong>
		<button v-on:click="plusOne()">+1</button>
		<button v-on:click="minuesOne()">-1</button>
	  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "movieItem",
  props: ["movieItemData"],
  data: function() {
    return {
      votes: 0
    };
  },
  methods: {
    plusOne: function() {
      this.votes += 1;
    },
    minuesOne: function() {
      this.votes -= 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.movie__item {
  width: 300px;
  height: 450px;
  color: #fff;
  background-color:rgba(0, 0, 0, 0.8);
  transition: 0.5s ease-in-out;
  margin-bottom: 1rem;
  position: relative;
  &:hover {
	  background-color: rgba(0, 0, 0, 0.5);
  }
}
.movie__item img {
  width: 300px;
  height: 450px;
  object-fit: cover;
  position: absolute;
  top: 0; left: 0;
  z-index: -1;
}
.movie__title {
  position: absolute;
  top: 0;
  height: 120px;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.movie__content {
	position: absolute;
	bottom: 0;
	width: 100%;
}
.movie__title h2 {
  margin: 0;
}
</style>
