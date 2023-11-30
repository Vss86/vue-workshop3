<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/movies">Movies</router-link>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
};
</script>

<style>
</style>
