<template>
  <div class="signup">
    <h1>Signup</h1>
    <form class="reqs">
      <label for="email">Email:</label> <input type="text" id="email" v-model="email" />
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </form>
    <button class="signupbtn" @click="SignUp()">Signup</button>
    <nav>
      <RouterLink to="/login" class="login">Already have an account? Login!</RouterLink>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const email = ref('')
const username = ref('')
const password = ref('')
export default {
  components: { supabase },
  data() {
    return {
      username,
      email,
      password
    }
  },
  methods: {
    async SignUp() {
      try {
        console.log(email.value, username.value, password.value)
        const { error } = await supabase.auth.signUp({
          email: email.value,
          username: username.value,
          password: password.value
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
.signup {
  margin: auto;
  padding: 2rem;
  font-size: 1.4rem;
  font-family: 'Jaldi', sans-serif;
  background: rgb(130, 148, 196);
  width: 450px;
  border-radius: 20px;
}
.login {
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
.signupbtn {
  margin-top: 20px;
  font-size: 1rem;
  border: none;
  border-radius: 15px;
  font-family: 'Jaldi', sans-serif;
  width: 80px;
}
#username,
#email,
#password {
  border: none;
  height: 40px;
}
</style>
