<template>
  <nav>
    <RouterLink to="/organshop">Organ Listings</RouterLink>
    <RouterLink to="/createnew">New Listing</RouterLink>
    <RouterLink to="/edit">Edit Listing</RouterLink>
    <RouterLink to="/login">Logout</RouterLink>
  </nav>
  <form class="help">
    <button class="deletebtn" @click="DeleteMr(), DeleteWhalen()">
      Whalen has to teach us! He can't be on this website! Delete Any Whalens
    </button>
  </form>

  <div class="organshop">
    <h1>Buy Organs</h1>
    <sub v-for="items in info" :key="items.name">
      <div class="organcards">
        <h2>{{ items.name }}</h2>
        <p>Birthday: {{ items.birthday }}</p>
        <p>Description: {{ items.description }}</p>
        <p>Organ: {{ items.organ }}</p>
        <p>Cost: ${{ items.cost }}</p>
        <!--         <RouterLink to="/edit/{{items.id}}" class="edit-link">Edit</RouterLink> -->
      </div>
    </sub>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
import { RouterLink } from 'vue-router'
const info = ref([])
const namedelete = ref('')

async function pleasework() {
  let { data } = await supabase.from('gonnalosemymind').select('*')
  info.value = data
  console.log(data)
}

async function DeleteMr() {
  await supabase.from('gonnalosemymind').delete().ilike('name', '%mr whalen%')
}

async function DeleteWhalen() {
  await supabase.from('gonnalosemymind').delete().ilike('name', '%whalen%')
}

onMounted(() => {
  pleasework()
})
</script>

<style scoped>
.organshop {
  margin: auto;
  padding: 2rem;
  font-size: 6rem;
  font-family: 'Jaldi', sans-serif;
  background: var(--secondary);
  width: 60rem;
  border-radius: 3rem;
  color: var(--five);
  border: 0.5rem solid var(--fourth);
  box-shadow: 0 20px 20px 10px rgba(0, 0, 0, 0.5);
}
.organcards {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 40rem;
  padding: 1rem;
  border-radius: 15px;
  border: white;
  background-color: white;
}
h2,
#name {
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--tertiary);
  margin-bottom: 0rem;
  font-weight: bold;
}
p {
  font-size: 2rem;
}
.deletebtn {
  margin-top: 2rem;
  font-size: 2.5rem;
  border: none;
  border-radius: 15px;
  width: 10rem;
  color: var(--five);
  width: 400px;
  margin-bottom: 2rem;
}
#name {
  font-size: 3rem;
}
.edit-link {
  color: aqua;
}
</style>
