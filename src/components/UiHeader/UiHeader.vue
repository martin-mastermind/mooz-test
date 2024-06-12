<script setup lang="ts">
import BaseProfile from "../BaseProfile/BaseProfile.vue";
import BaseSearch from "../BaseSearch/BaseSearch.vue";

const query = defineModel("query", {
  default: "",
});
</script>

<template>
  <header class="ui-header">
    <div class="ui-header__logo">Movie Catalog</div>
    <BaseSearch class="ui-header__search" v-model="query" />
    <BaseProfile />
  </header>
</template>

<style scoped lang="scss">
.ui-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background: #bbdefb;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &__logo {
    font-size: 1.5rem;
    font-weight: 700;
  }

  &__search {
    flex: 0 0 50%;

    @media (max-width: 768px) {
      flex: 1;
    }
  }
}
</style>
