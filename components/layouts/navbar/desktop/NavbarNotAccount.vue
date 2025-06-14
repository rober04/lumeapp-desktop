<script setup lang="ts">
import type { NavbarLocales } from '@/types/navbar'

const { data: navbarLocales } = await useLocales<NavbarLocales>('navbar')
</script>

<template>
  <div class="nav__not-account not-account">
    <UiButtonIcon
      :url="navbarLocales.icons[0].url"
      :alt="navbarLocales.icons[0].alt"
      :ariaLabel="navbarLocales.icons[0].ariaLabel"
    />
    <UiTheButton :text="navbarLocales.buttons.login" />
    <UiTheButton
      :text="navbarLocales.buttons.register"
      :backgroundColor="'var(--c-primary)'"
      :color="'var(--c-graphite)'"
    />
    <UiButtonIcon
      :url="navbarLocales.icons[1].url"
      :alt="navbarLocales.icons[1].alt"
      :ariaLabel="navbarLocales.icons[1].ariaLabel"
    />
  </div>
</template>

<style lang="scss" scoped>
.not-account {
  @include flex(row, $gap: 0.5rem);
}
</style>
