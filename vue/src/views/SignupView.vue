<template>
  <nav>
    <RouterLink to="/">Store</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
  <h1>Signup</h1>
  <div class="signup">
    <form class="reqs">
      <label for="email">Email:</label> <input type="text" id="email" v-model="email" />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </form>
    <button class="signupbtn" @click="SignUp()">Signup</button>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const email = ref('')
const password = ref('')
export default {
  components: { supabase },
  data() {
    return {
      email,
      password
    }
  },
  methods: {
    async SignUp() {
      try {
        console.log(email.value, password.value)
        const { error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value
        })
        if (error) throw error
      } catch (error) {
        console.error(error)
        console.log('you suck')
      }
    }
  }
}
</script>

<style scoped>
.signup {
  margin: auto;
  padding: 2rem;
  font-size: 6rem;
  font-family: 'Jaldi', sans-serif;
  background: var(--secondary);
  width: 60rem;
  border-radius: 20px;
  color: var(--five);
  border: 0.5rem solid var(--fourth);
  box-shadow: 0 20px 20px 10px rgba(0, 0, 0, 0.5);
}

.reqs {
  display: flex;
  flex-direction: column;
}
.signupbtn {
  margin-top: 2rem;
  font-size: 2.5rem;
  border: none;
  border-radius: 15px;
  width: 12rem;
  color: var(--tertiary);
}
#username,
#email,
#password {
  border: none;
  height: 40px;
}
</style>
