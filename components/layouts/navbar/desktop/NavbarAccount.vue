<script setup lang="ts">
import type { NavbarLocales } from '@/types/navbar'

const { data: navbarLocales } = await useLocales<NavbarLocales>('navbar')

const isLoggedIn = inject('isLoggedIn', false)
</script>

<template>
  <div class="nav__account account">
    <LayoutsNavbarDesktopNavbarIcons
      v-if="isLoggedIn"
      v-bind:icons="navbarLocales.icons"
    />
    <LayoutsNavbarDesktopNavbarNotAccount v-if="!isLoggedIn" />
  </div>
</template>

<style lang="scss" scoped>
.account {
  @include flex(row, $gap: 1rem);
  margin: 0 0.5rem 0 0.5rem;
}
</style>
