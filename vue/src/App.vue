<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <h1>Website</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
h1 {
  font-family: 'Shrikhand', cursive;
  margin-top: 3rem;
  font-size: 4rem;
  color: rgb(130, 148, 196);
}

nav {
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
  font-family: 'Jaldi', sans-serif;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
