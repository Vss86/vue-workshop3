<template>
    <div>
      <h2>Movies</h2>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <router-link :to="{ name: 'movieDetails', params: { id: movie.id } }">
            {{ movie.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        movies: [],
      };
    },
    mounted() {
      this.fetchMovies();
    },
    methods: {
        async fetchMovies() {
  try {
    const response = await fetch('http://localhost:3001/movies');
    console.log(response); 
    this.movies = await response.json();
    console.log(this.movies); 
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
},

    },
  };
  </script>
  
  <style>
  </style>