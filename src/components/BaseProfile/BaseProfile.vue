<script setup lang="ts">
import { ref, computed } from "vue";

const isLoggedIn = ref(false);
const isMenuOpen = ref(false);

const arrowClass = computed(() => ({
  "base-profile__content-arrow--open": isMenuOpen.value,
}));

const handleLogin = () => {
  isLoggedIn.value = true;
};

const handleMenuOpen = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleLogout = () => {
  isLoggedIn.value = false;
  isMenuOpen.value = false;
};
</script>

<template>
  <div class="base-profile">
    <Transition name="fade" mode="out-in">
      <div v-if="isLoggedIn" class="base-profile__content">
        <img
          class="base-profile__content-avatar"
          src="/avatar.svg"
          alt="avatar"
        />
        <span class="base-profile__content-name">Alexander Borisenko</span>
        <img
          :class="['base-profile__content-arrow', arrowClass]"
          src="/arrow-down.svg"
          alt="arrow-down"
          @click="handleMenuOpen"
        />
      </div>
      <button v-else class="base-profile__button" @click="handleLogin">
        Login
      </button>
    </Transition>
    <Transition name="fade" mode="out-in">
      <div v-if="isLoggedIn" v-show="isMenuOpen" class="base-profile__menu">
        <button class="base-profile__menu-button" @click="handleLogout">
          Logout
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.base-profile {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    --icon-size: 2rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &-avatar,
    &-arrow {
      width: var(--icon-size);
      height: var(--icon-size);
    }

    &-name {
      flex: 1;
      font-size: 0.9rem;
      font-weight: bold;
    }

    &-arrow {
      cursor: pointer;
      transition: transform 0.25s ease-in-out;

      &--open {
        transform: rotate(180deg);
      }
    }
  }

  &__menu {
    position: absolute;
    bottom: -2rem;
    right: 0;
  }
}
</style>
