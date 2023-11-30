<template>
    <div>
      <h2>Movie Details</h2>
      <div v-if="movie">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.description }}</p>
        <p>Director: {{ movie.director }}</p>
        <p>Release Year: {{ movie.releaseYear }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        movie: null
      };
    },
    mounted() {
      const movieId = this.$route.params.id;
      axios.get(`http://localhost:3001/movies/${movieId}`)
        .then(response => {
          this.movie = response.data;
        })
        .catch(error => {
          console.error('Error fetching movie details:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  </style>
  