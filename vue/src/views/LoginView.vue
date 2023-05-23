<template>
  <h1>Login</h1>
  <div class="login">
    <form class="reqs">
      <label for="username">Username:</label> <input type="text" id="username" name="username" />
      <label for="password">Password:</label> <input type="text" id="password" name="password" />
    </form>
    <button class="loginbtn">Login</button>
    <h2>Don't have an account? Create one!</h2>
  </div>
</template>

<style scoped>
.login {
  margin: auto;
  padding: 2rem;
  font-size: 6rem;
  font-family: 'Jaldi', sans-serif;
  background: rgb(130, 148, 196);
  width: 60rem;
  border-radius: 3rem;
}
h2 {
  font-size: 3rem;
  margin-top: 1rem;
  color: black;
}
.reqs {
  display: flex;
  flex-direction: column;
}
.loginbtn {
  margin-top: 2rem;
  font-size: 2rem;
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
