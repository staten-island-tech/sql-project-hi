<template>
  <div class="login">
    <h1>Login Page</h1>
    <button @click="authState" v-if="loggedIn">Log Out</button>
    <button @click="authState" v-else>Login</button>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      loggedIn: true,
    },
  },
}
methods: {
      authState: function(){
        if (this.loggedIn === false) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      },
    },
  }
</script>

<style scoped></style>
