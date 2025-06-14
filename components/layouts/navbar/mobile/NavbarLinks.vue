<script setup lang="ts">
import type { NavbarMobileLocales } from '@/types/navbar'

const { data: navbarLocales } =
  await useLocales<NavbarMobileLocales>('navbar_mobile')
</script>

<template>
  <UiTheTabs :list="navbarLocales.tabs">
    <template v-for="{ id } in navbarLocales.tabs" #[id] :key="id">
      <Transition name="fade-tab" mode="out-in"> </Transition>
    </template>
  </UiTheTabs>
</template>

<style lang="scss" scoped>
.links {
  @include flex(row, $justify: flex-start, $gap: 1rem);

  &__link {
    font-size: var(--s-font-semiSmall);
  }
}
</style>
