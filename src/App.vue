<script setup lang="ts">
import BaseMovieCard from "./components/BaseMovieCard/BaseMovieCard.vue";
</script>

<template>
  <main>
    <BaseMovieCard
      poster="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      title="Batman Begins"
      :year="2005"
      imdbId="tt0372784"
      type="movie"
    />
  </main>
</template>

<style scoped lang="scss"></style>
