<template>
  <div class="login">
    <form class="reqs">
      <label for="username">Username:</label> <input type="text" id="username" name="username" />
      <label for="password">Password:</label> <input type="text" id="password" name="password" />
    </form>
    <button class="loginbtn">Login</button>
    <h1>Don't have an account? Create one!</h1>
  </div>
</template>

<style scoped>
.login {
  margin-top: 4rem;
  padding: 2rem;
  font-size: 1.4rem;
  font-family: 'Jaldi', sans-serif;
  background: rgb(130, 148, 196);
  width: 450px;
  border-radius: 20px;
}
h1 {
  font-size: 1.2rem;
  margin-top: 1rem;
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
