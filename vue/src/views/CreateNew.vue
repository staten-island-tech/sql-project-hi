<template>
  <nav>
    <RouterLink to="/organshop">Store</RouterLink>
    <RouterLink to="/cart">Cart</RouterLink>
    <RouterLink to="/logout">Logout</RouterLink>
  </nav>

  <div class="createnew">
    <h1>Create New Listing</h1>
    <form class="reqs">
      <label for="name">Name:</label> <input type="text" id="name" v-model="name" />
      <label for="birthday">Birthday:</label>
      <input type="text" id="birthday" v-model="birthday" />
      <label for="description">Description:</label>
      <input type="description" id="description" v-model="description" />
      <label for="organ">Organ:</label>
      <input type="organ" id="organ" v-model="organ" />
      <label for="cost">Cost:</label>
      <input type="cost" id="cost" v-model="cost" />
    </form>
    <button class="create" @click="Create()">Create!</button>
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
.createnew {
  margin: auto;
  padding: 2rem;
  font-size: 6rem;
  font-family: 'Jaldi', sans-serif;
  background: var(--secondary);
  width: 60rem;
  border-radius: 3rem;
  color: var(--tertiary);
  border: 0.5rem solid var(--fourth);
  box-shadow: 0 20px 20px 10px rgba(0, 0, 0, 0.5);
}
h2 {
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--tertiary);
  margin-bottom: 0rem;
}
.signup {
  font-size: 2rem;
  margin-top: 1rem;
  color: var(--tertiary);
  display: flex;
  flex-direction: column;
}
.reqs {
  display: flex;
  flex-direction: column;
}
.create {
  margin-top: 2rem;
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
