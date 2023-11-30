import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import MoviesView from '@/views/MoviesView.vue';
import MovieDetailsView from '@/views/MovieDetailsView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/movies', name: 'Movies', component: MoviesView },
  { path: '/movies/:id', name: 'MovieDetails', component: MovieDetailsView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;