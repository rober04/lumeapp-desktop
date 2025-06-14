<script setup lang="ts">
import type { Media } from '@/types/common'

const props = defineProps<{
  url: string
  alt?: string
  ariaLabel?: string
  width?: string
}>()

const width = props.width ?? '1.2rem'
</script>

<template>
  <button class="button-icon" :alt="alt" :aria-label="ariaLabel">
    <NuxtImg :src="url" :style="`width: ${width}`" class="button-icon__icon" />
  </button>
</template>

<style lang="scss" scoped>
.button-icon {
  @include flex($align: center, $justify: center);
  width: 2rem;
  height: 2rem;
  border-radius: var(--s-border-radius);
  transition: background-color 0.25s ease-in-out;

  &__icon {
    height: auto;
  }

  &:hover {
    background-color: var(--c-graphite-hover);
  }
}
</style>
