<script setup lang="ts">
const modelValue = defineModel("modelValue", {
  default: "",
});
</script>

<template>
  <input
    type="text"
    v-model="modelValue"
    placeholder="Search"
    class="base-search"
  />
</template>

<style scoped lang="scss">
.base-search {
  width: 100%;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
}
</style>
