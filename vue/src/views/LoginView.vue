<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Store</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
  <h1>Login</h1>
  <div class="login">
    <form class="reqs">
      <label for="email">Email:</label> <input type="text" id="username" v-model="email" />
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </form>
    <button class="loginbtn" @click="Login()">Login</button>
    <RouterLink to="/signup" class="signup">Don't have an account? Create one!</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const email = ref('')
const password = ref('')
const username = ref('')
export default {
  components: { supabase },
  data() {
    return {
      email,
      password,
      username
    }
  },
  methods: {
    async Login() {
      try {
        console.log(email.value, username.value, password.value)
        const { error } = await await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value,
          username: username.value
        })
        if (error) throw error
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
.login {
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
.loginbtn {
  margin-top: 2rem;
  font-size: 2.5rem;
  border: none;
  border-radius: 15px;
  width: 10rem;
  color: var(--tertiary);
}
#username,
#password {
  border: none;
  height: 40px;
}
</style>
