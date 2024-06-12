<script setup lang="ts">
import { computed, toRefs } from "vue";

import type { BaseMovieCardProps } from "./BaseMovieCard.types";

const POSTER_PLACEHOLDER = "/poster_placeholder.jpg";

const props = defineProps<BaseMovieCardProps>();
const { title, poster, year, imdbId, type } = toRefs(props);

const imageSrc = computed(() => poster.value || POSTER_PLACEHOLDER);

const handleImageError = (e: Event) => {
  if (!e.target) return;

  const target = e.target as HTMLImageElement;
  target.src = POSTER_PLACEHOLDER;
};
</script>

<template>
  <div class="base-movie-card">
    <img
      :src="imageSrc"
      :alt="title"
      class="base-movie-card__poster"
      @error="handleImageError"
    />
    <div class="base-movie-card__info">
      <span class="base-movie-card__info-item">Name: {{ title }}</span>
      <span class="base-movie-card__info-item">Year: {{ year }}</span>
      <span class="base-movie-card__info-item">IMDb ID: {{ imdbId }}</span>
      <span class="base-movie-card__info-item">Type: {{ type }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-movie-card {
  --card-indent: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: var(--card-indent);
  width: 300px;

  &__poster {
    width: 100%;
    height: 400px;
    object-fit: contain;
  }

  &__info {
    padding: 0 var(--card-indent);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
  }
}
</style>
