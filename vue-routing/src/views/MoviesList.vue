<template>
    <div>
      <h2>Movies List</h2>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <router-link :to="{ name: 'MovieDetails', params: { id: movie.id }}">
            {{ movie.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        movies: []
      };
    },
    mounted() {
      axios.get('http://localhost:3001/movies')
        .then(response => {
          this.movies = response.data;
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  </style>