<template>
  <div class="login">
    <h1>Login</h1>
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
h1 {
  font-family: 'Shrikhand', cursive;
  font-size: 3rem;
}
.login {
  margin: auto;
  padding: 2rem;
  font-size: 1.4rem;
  font-family: 'Jaldi', sans-serif;
  background: rgb(130, 148, 196);
  width: 450px;
  border-radius: 20px;
}
.signup {
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
.loginbtn {
  margin-top: 20px;
  font-size: 1rem;
  border: none;
  border-radius: 15px;
  font-family: 'Jaldi', sans-serif;
  width: 80px;
}
#username,
#password {
  border: none;
  height: 40px;
}
</style>
