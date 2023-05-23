<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Store</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>

nav {
  width: 100%;
  font-size: 3rem;
  text-align: center;
  margin-top: 1rem;
  font-family: 'Jaldi', sans-serif;
  font-weight: bold;
  margin-bottom: 1rem;
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
