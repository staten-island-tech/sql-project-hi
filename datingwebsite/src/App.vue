<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <h1><u>Dating App</u></h1>
  </div>
  <RouterView />
</template>

<style scoped>
h1 {
  margin: auto;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  color: rgb(255, 88, 88);
  font-size: 7vh;
  font-family: 'Shrikhand', cursive;
}
</style>
