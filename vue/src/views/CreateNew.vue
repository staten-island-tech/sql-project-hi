<template>
  <div class="createnew">
    <h1>Create New Listing</h1>
    <form class="reqs">
      <label for="name">Name:</label> <input type="text" id="name" v-model="name" />
      <label for="birthday">Birthday:</label>
      <input type="text" id="birthday" v-model="birthday" />
      <label for="description">Description:</label>
      <input type="description" id="description" v-model="description" />
      <label for="organ1">Organ 1:</label>
      <input type="organ1" id="organ1" v-model="organ1" />
      <label for="cost1">Cost:</label>
      <input type="cost1" id="cost1" v-model="cost1" />
    </form>
    <button class="create" @click="Create()">Create!</button>
    <nav>
      <RouterLink to="/organshop" class="organshop">Not interested in selling? Buy!</RouterLink>
    </nav>
  </div>
  <div>
    <h1>Buy Organs</h1>
    <sub v-for="items in info" :key="items.name">
      <div class="organcards">
        <h2>{{ items.name }}</h2>
        <p>{{ items.birthday }}</p>
        <p>{{ items.description }}</p>
        <p>{{ items.organ1 }}</p>
        <p>{{ items.cost1 }}</p>
      </div>
    </sub>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const name = ref('')
const birthday = ref('')
const description = ref('')
const organ1 = ref('')
const cost1 = ref('')
const info = ref([])

async function pleasework() {
  let { data } = await supabase.from('people').select('*')
  info.value = data
  console.log(data)
}

async function Create() {
  console.log('test')
  try {
    await supabase.from('people').insert([
      {
        name: 'Oracle',
        birthday: 'dsrfilo;g',
        description: 'dsrfilo;g',
        organ1: 'dsrfilo;g',
        cost1: 'dsrfilo;g'
      }
    ])
    info.value.push(name, birthday, description, organ1, cost1)
    console.log(info.value)
    name.value = ''
    birthday.value = ''
    description.value = ''
    organ1.value = ''
    cost1.value = ''
    console.log('try')
  } catch (error) {
    console.log('catch')

    console.log(error)
  }
}

onMounted(() => {
  pleasework()
})
</script>

<style scoped>
h1 {
  font-family: 'Shrikhand', cursive;
  font-size: 3rem;
}
.createnew {
  margin: auto;
  padding: 2rem;
  font-size: 1.4rem;
  font-family: 'Jaldi', sans-serif;
  background: rgb(130, 148, 196);
  width: 450px;
  border-radius: 20px;
}
.organshop {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: black;
  display: flex;
  flex-direction: column;
}
.reqs {
  display: flex;
  flex-direction: column;
}
.create {
  margin-top: 20px;
  font-size: 1rem;
  border: none;
  border-radius: 15px;
  font-family: 'Jaldi', sans-serif;
  width: 80px;
}
#name,
#birthday,
#description,
#organ1,
#cost1 {
  border: none;
  height: 40px;
}
</style>
