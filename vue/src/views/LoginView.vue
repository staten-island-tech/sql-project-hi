<template>
  <div class="login">
    <h1>Login</h1>
    <form class="reqs">
      <label for="username">Username:</label> <input type="text" id="username" name="username" />
      <label for="password">Password:</label> <input type="text" id="password" name="password" />
    </form>
    <button class="loginbtn">Login</button>
    <RouterLink to="/signup" class="signup">Don't have an account? Create one!</RouterLink>
  </div>
</template>

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
  width: 80px;
}
#username,
#password {
  border: none;
  height: 40px;
}
</style>
