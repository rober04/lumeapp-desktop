<script setup lang="ts">
import type { NavbarLocales } from '~/types/navbar'

const { data: navbarLocales } = await useLocales<NavbarLocales>('navbar')

const isLoggedIn = inject('isLoggedIn', false)
</script>

<template>
  <ul class="nav_links links">
    <NuxtLinkLocale
      v-if="isLoggedIn"
      v-for="link in navbarLocales.links"
      :to="link.url"
    >
      <li class="links__link">{{ link.name }}</li>
    </NuxtLinkLocale>
    <NuxtLinkLocale v-else to="/">
      <li class="links__link">{{ navbarLocales.links[1].name }}</li>
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
