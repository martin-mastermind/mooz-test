<script setup lang="ts">
import { computed, toRefs } from "vue";

import type { BasePaginationProps } from "./BasePagination.types";

const props = defineProps<BasePaginationProps>();
const { total, perPageAmount } = toRefs(props);

const currentPage = defineModel("currentPage", {
  default: 1,
});

const pages = computed(() => Math.ceil(total.value / perPageAmount.value));

const prevArrowClass = computed(() => ({
  "base-pagination__prev--disabled": currentPage.value === 1,
}));
const nextArrowClass = computed(() => ({
  "base-pagination__next--disabled": currentPage.value === pages.value,
}));

const pageClass = computed(() => (page: number) => ({
  "base-pagination__page--current": page === currentPage.value,
}));

const handlePageClick = (page: number) => {
  if (page === currentPage.value) return;
  currentPage.value = page;
};

const handlePrevClick = () => {
  if (currentPage.value === 1) return;
  currentPage.value--;
};

const handleNextClick = () => {
  if (currentPage.value === pages.value) return;
  currentPage.value++;
};
</script>

<template>
  <div class="base-pagination">
    <img
      src="/arrow.svg"
      alt="Previous page"
      :class="['base-pagination__prev', prevArrowClass]"
      @click="handlePrevClick"
    />
    <span
      v-for="page in pages"
      :class="['base-pagination__page', pageClass(page)]"
      :key="page"
      @click="handlePageClick(page)"
    >
      {{ page }}
    </span>
    <img
      src="/arrow.svg"
      alt="Next page"
      :class="['base-pagination__next', nextArrowClass]"
      @click="handleNextClick"
    />
  </div>
</template>

<style scoped lang="scss">
.base-pagination {
  --item-size: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &__prev,
  &__next {
    width: var(--item-size);
    height: var(--item-size);
    cursor: pointer;
    transition: transform 0.25s ease-in-out;
    user-select: none;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1);
    }

    &--disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  &__prev {
    rotate: 90deg;
  }

  &__next {
    rotate: -90deg;
  }

  &__page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: var(--item-size);
    height: var(--item-size);
    border: 1px solid transparent;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.25s ease-in-out;
    transition-property: border-color, background, color;
    user-select: none;

    &:hover {
      border-color: var(--primary-color);
    }

    &:active,
    &--current {
      background: var(--primary-color);
      color: #fff;
    }

    &--current {
      pointer-events: none;
    }
  }
}
</style>
