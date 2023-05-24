<template>
<div class="card">
    <h2>{{name}}</h2>
    <img :src="image"/>
    <p>{{ ranking }}</p>
</div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            title: String,
            image: String,
            ranking: Number
        },

    }

</script>

<style scoped>



.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid var(--fourth);
  box-sizing: border-box;
  margin: 20px;
  border-radius: 20px;
  background-color: var(--secondary);
  text-align: center;
  box-shadow: 0 20px 20px 10px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
  width: 30%;
  font-family: 'Courier Prime', monospace;
}

</style>