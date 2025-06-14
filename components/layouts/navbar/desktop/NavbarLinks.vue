<script setup lang="ts">
import type { NavbarLocales } from '~/types/navbar'

const { data: navbarLocales } = await useLocales<NavbarLocales>('navbar')
</script>

<template>
  <ul class="nav_links links">
    <NuxtLinkLocale v-for="link in navbarLocales.links" :to="link.url">
      <li class="links__link">{{ link.name }}</li>
    </NuxtLinkLocale>
  </ul>
</template>

<style lang="scss" scoped>
.links {
  @include flex($gap: 1rem);

  &__link {
    padding: 0 0.5rem;
    line-height: 1.5rem;
    transition: color 0.25s ease-in-out;
    font-size: 1.15rem;

    &:hover {
      color: var(--c-primary);
    }
  }
}
</style>
