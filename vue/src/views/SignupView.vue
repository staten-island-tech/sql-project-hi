<template>
  <div class="signup">
    <form class="reqs">
      <label for="email">Email:</label> <input type="text" id="email" name="email" />
      <label for="username">Username:</label> <input type="text" id="username" name="username" />
      <label for="password">Password:</label> <input type="text" id="password" name="password" />
    </form>
    <button class="signupbtn">Sign Up</button>
    <RouterLink to="/login" class="login">Already have an account? Login!</RouterLink>
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
  components: { supabase }
}
</script>

<style scoped>
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
  width: 80px;
}
#username,
#email,
#password {
  border: none;
  height: 40px;
}
</style>
