<script setup lang="ts">
import { ref, toRefs } from "vue";

import type { UiContentProps } from "./UiContent.types";

import BaseLoader from "../BaseLoader/BaseLoader.vue";
import BaseResultInfo from "../BaseResultInfo/BaseResultInfo.vue";
import BasePagination from "../BasePagination/BasePagination.vue";
import BaseMovieCard from "../BaseMovieCard/BaseMovieCard.vue";

import { useMovieFetch } from "../../composables/useMovieFetch";

const props = defineProps<UiContentProps>();
const { query } = toRefs(props);

const page = ref(1);

const { changedQuery, searchQuery, loading, movies, total } = useMovieFetch(
  query,
  page
);

console.log(changedQuery);
</script>

<template>
  <section class="ui-content">
    <BaseResultInfo v-if="searchQuery" :query="searchQuery" :results="total" />

    <Transition name="fade" mode="out-in">
      <BaseLoader v-if="loading" class="ui-content__loader" />
      <div v-else class="ui-content__movies">
        <BaseMovieCard
          v-for="movie in movies"
          :key="movie.imdbId"
          v-bind="movie"
        />
      </div>
    </Transition>

    <BasePagination v-if="total" v-model:current-page="page" :total="total" />
  </section>
</template>

<style scoped lang="scss">
.ui-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1rem;
  gap: 1rem;

  &__loader {
    margin: auto;
  }

  &__movies {
    width: 100%;
    display: grid;
    align-items: flex-start;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
}
</style>
