<script setup lang="ts">
import { ref } from "vue";

import BaseSearch from "./components/BaseSearch/BaseSearch.vue";

const query = ref("");
</script>

<template>
  <main>
    <BaseSearch v-model="query" />
  </main>
</template>

<style scoped></style>
