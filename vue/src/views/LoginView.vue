<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>Login</h1>
    <div class="login">
      <form class="reqs">
        <label for="username">Username:</label> <input type="text" id="username" name="username" />
        <label for="password">Password:</label> <input type="text" id="password" name="password" />
      </form>
      <button class="loginbtn">Login</button>
      <h2>
        Don't have an account?
        <nav>
          <RouterLink to="/">Store</RouterLink>
        </nav>
      </h2>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.login {
  margin: auto;
  padding: 2rem;
  font-size: 6rem;
  font-family: 'Jaldi', sans-serif;
  background: #8294c4;
  width: 60rem;
  border-radius: 3rem;
  color: black;
}
h2 {
  font-size: 3rem;
  margin-top: 1rem;
  color: black;
  margin-bottom: 0rem;
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
}
.createbtn {
  background-color: #8294c4;
  font-size: 2.5rem;
  border: none;
  border-radius: 15px;
  width: 0rem;
}
#username,
#password {
  border: none;
  height: 40px;
}
</style>
