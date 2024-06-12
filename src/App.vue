<script setup lang="ts">
import { ref } from "vue";

import BasePagination from "./components/BasePagination/BasePagination.vue";

const currentPage = ref(1);
</script>

<template>
  <main>
    <BasePagination
      :total="203"
      :perPageAmount="8"
      v-model:current-page="currentPage"
    />
  </main>
</template>

<style scoped lang="scss"></style>
