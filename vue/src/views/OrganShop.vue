<template>
  <nav>
    <RouterLink to="/organshop">Store</RouterLink>
    <RouterLink to="/cart">Cart</RouterLink>
    <RouterLink to="/logout">Logout</RouterLink>
  </nav>

  <form class="help">
    <label for="namedelete">Item Name You Want to Delete:</label>
    <input type="text" id="namedelete" v-model="namedelete" />
    <button class="delete" @click="Delete(), refreshPage()">Delete!</button>
  </form>

  <div class="organshop">
    <h1>Buy Organs</h1>
    <sub v-for="items in info" :key="items.name">
      <div class="organcards">
        <h2>{{ items.name }}</h2>
        <p>{{ items.birthday }}</p>
        <p>{{ items.description }}</p>
        <p>{{ items.organ }}</p>
        <p>{{ items.cost }}</p>
      </div>
    </sub>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const name = ref('')
const birthday = ref('')
const description = ref('')
const organ = ref('')
const cost = ref('')
const info = ref([])

async function refreshPage() {
  window.location.reload()
}

async function pleasework() {
  let { data } = await supabase.from('gonnalosemymind').select('*')
  info.value = data
  console.log(data)
}

async function Delete() {
  try {
    await supabase
      .from('gonnalosemymind')
      .delete([
        {
          deletename: deletename.value
        }
      ])
      .match({ name: 'help' })
  } catch (error) {
    console.log('catch')
    console.log(error)
  }
}

async function Create() {
  console.log('test')
  try {
    await supabase.from('gonnalosemymind').insert([
      {
        name: name.value,
        birthday: birthday.value,
        description: description.value,
        organ: organ.value,
        cost: cost.value
      }
    ])
    info.value.push(name, birthday, description, organ, cost)
    console.log(info.value)
    name.value = ''
    birthday.value = ''
    description.value = ''
    organ.value = ''
    cost.value = ''
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
.createnew,
.organshop {
  margin: auto;
  padding: 2rem;
  font-size: 1.4rem;
  font-family: 'Jaldi', sans-serif;
  background: rgb(130, 148, 196);
  width: 450px;
  border-radius: 20px;
  margin-bottom: 20px;
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
#organ,
#cost {
  border: none;
  height: 40px;
}
.organcards {
  background-color: white;
  margin: 1rem;
  border-radius: 20px;
}
</style>
