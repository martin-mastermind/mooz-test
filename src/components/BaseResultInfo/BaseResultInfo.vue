<script setup lang="ts">
import { computed, toRefs } from "vue";

import type { BaseResultInfoProps } from "./BaseResultInfo.types";

const props = defineProps<BaseResultInfoProps>();
const { query, results } = toRefs(props);

const resultsText = computed(() => {
  if (results.value === 0) return "no results found";

  const wordSuffix = results.value > 1 ? "results" : "result";
  return `${results.value} ${wordSuffix} found`;
});
</script>

<template>
  <span class="base-result-info">
    You searched for: {{ query }}, {{ resultsText }}
  </span>
</template>

<style scoped lang="scss">
.base-result-info {
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
