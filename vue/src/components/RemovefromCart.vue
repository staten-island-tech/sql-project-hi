<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: 'RemovefromCartBTN',
  data() {
    return {}
  },
  props: {
    name: String,
    cost: Number
  },
  methods: {}
}
</script>

<style scoped>
button {
  transition: 0.5s;
}
button:hover {
  transform: scale(1.2);
}
button:active {
  transform: scale(0.9);
}
</style>
