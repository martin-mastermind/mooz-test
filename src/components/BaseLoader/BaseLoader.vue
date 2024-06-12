<script setup lang="ts"></script>

<template>
  <div class="base-loader"></div>
</template>

<style scoped lang="scss">
.base-loader {
  --loader-size: 2rem;
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: 50%;
  border: 0.25rem solid;
  border-color: #000 transparent transparent transparent;
  animation: rotation 1s infinite ease-in-out;
}

@keyframes rotation {
  to {
    transform: rotate(1turn);
  }
}
</style>
