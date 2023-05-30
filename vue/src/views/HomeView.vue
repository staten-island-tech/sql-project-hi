<template>
  <div class="home">
    <h1>Hadestown Playlist</h1>
    <div class="display">
      <HadestownCards
      v-for="song in songs"
      :key="song.name"
      :name="song.name"
      :ranking="song.ranking"
    /> 
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
import HadestownCards from '../components/HadestownCards.vue'
export default {
  components: { HadestownCards },
  data() {
    return {
      songs: [
        {
          name: 'Chant',
          ranking: 1
        },
        {
          name: 'Wait For Me',
          ranking: 2
        },
      ]
    }
  }
}
</script>

<style scoped>
.display {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
}
</style>
