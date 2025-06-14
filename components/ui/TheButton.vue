<script setup lang="ts">
const props = defineProps<{
  text: string
  backgroundColor?: string
  color?: string
}>()

let styles

if (props.backgroundColor) {
  styles = computed(() => ({
    '--color': 'var(--c-graphite)',
    '--color-hover': props.backgroundColor,
    '--background-color': props.backgroundColor || 'var(--c-grey-medium)',
  }))
} else {
  styles = computed(() => ({
    '--color': props.color || '#fff',
    '--color-hover': props.color,
    '--background-color': props.backgroundColor || 'var(--c-grey-medium)',
  }))
}
</script>

<template>
  <button :style="styles" class="button">
    <span class="button__text">{{ text }}</span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  white-space: nowrap;
  padding: 0.25rem 0.5rem;
  background-color: var(--background-color);
  color: var(--color);
  border-radius: var(--s-border-radius);
  border: 0.15rem solid var(--background-color);
  transition:
    color 0.25s ease-in-out,
    background-color 0.25s ease-in-out;

  &:hover {
    color: var(--color-hover);
    background-color: transparent;
  }
}
</style>
