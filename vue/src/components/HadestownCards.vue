<template>
<div class="card">
    <h2>{{name}}</h2>
    <div class="imgtab"> <img src="https://i.scdn.co/image/ab67616d00001e02b62a5129d9efa26386143622" alt="Hadestown Spotify Image"> </div>
    <h3>Ranking: #{{ ranking }}</h3>
</div>
</template>

<script>
    export default {
        name: "HadestownCards",
        props: {
            name: String,
            ranking: Number
        },
    }

</script>

<style scoped>



.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1rem solid var(--quaternary);
  box-sizing: border-box;
  margin: 20px;
  border-radius: 20px;
  background-color: var(--secondary);
  text-align: center;
  box-shadow: 0 20px 20px 10px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
  width: 30%;
  font-family: 'Courier Prime', monospace;
  height: 600px;
}   
h2, h3{
    color: var(--tertiary);
    padding: 1rem;
}
h2{
    height: 160px;

}
</style>
