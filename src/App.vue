<script setup lang="ts">
import { ref } from "vue";

import UiHeader from "./components/UiHeader/UiHeader.vue";
import UiContent from "./components/UiContent/UiContent.vue";

const query = ref("");
</script>

<template>
  <main>
    <UiHeader v-model:query="query" />
    <UiContent :query="query" />
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
