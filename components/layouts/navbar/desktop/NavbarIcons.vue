<script setup lang="ts">
import type { Media } from '@/types/common'

defineProps<{
  icons: Media[]
}>()
</script>

<template>
  <div class="nav__icons icons">
    <UiButtonIcon
      v-for="icon in icons"
      :url="icon.url"
      :alt="icon.alt"
      :ariaLabel="icon.ariaLabel"
    />
  </div>
</template>

<style lang="scss" scoped>
.icons {
  @include flex(row, $justify: flex-start, $gap: 0.5rem);
}
</style>
