<template>
  <nav>
    <RouterLink to="/organshop">Organ Listings</RouterLink>
    <RouterLink to="/createnew">New Listing</RouterLink>
    <RouterLink to="/edit">Edit Listing</RouterLink>
    <RouterLink to="/login">Logout</RouterLink>
  </nav>
  <div class="createnew">
    <h1>Edit the Cost of Tony's Brain!</h1>
    <h2>(It's already broken so oh well!!)</h2>
    <form class="reqs">
      <label for="newCost">Cost:</label>
      <input type="number" id="newCost" v-model="newCost" />
    </form>
    <button class="create" @click="Update()">Update!</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const newCost = ref('')
const info = ref([])

async function pleasework() {
  let { data } = await supabase.from('gonnalosemymind').select('*')
  info.value = data
  console.log(data)
}

async function Update() {
  try {
    await supabase
      .from('gonnalosemymind')
      .update([
        {
          cost: newCost.value
        }
      ])
      .eq('id', 4)
    info.value.push(cost)

    cost.value = ''
    console.log('try')
  } catch (error) {
    console.log('catch')

    console.log(error)
  }
}

/* async function Update() {
  try {
    await supabase.from('gonnalosemymind').update({ cost: newCost }).eq('id', 1)
    info.value.push(cost)
    cost.value = ''
  } catch (error) {
    console.log(error)
  }
} */

onMounted(() => {
  pleasework()
})
</script>

<style scoped>
.createnew {
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
.reqs {
  margin: auto;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--tertiary);
  margin-bottom: 0rem;
  font-weight: bold;
}
p {
  font-size: 2rem;
}
.create {
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  border: none;
  border-radius: 15px;
  width: 10rem;
  color: var(--tertiary);
}
#name,
#description,
#birthday,
#cost,
#organ {
  border: none;
  height: 40px;
}
</style>
