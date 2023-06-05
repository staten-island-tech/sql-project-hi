<template>
  <div class="shop">
    <nav>
      <RouterLink to="/organshop">Store</RouterLink>
      <RouterLink to="/cart">Cart</RouterLink>
      <RouterLink to="/logout">Logout</RouterLink>
    </nav>
    <h1>Organ Shop!!!</h1>
    <div class="display">
      <OrganCard/>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import OrganCard from '../components/OrganCard.vue';
export default { components: { OrganCard } }
</script>

<style scoped></style>
