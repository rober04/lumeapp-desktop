<script lang="ts" setup></script>
<template>
  <UiButtonIcon
    :url="$t('menu.url')"
    :alt="$t('menu.alt')"
    :ariaLabel="$t('menu.ariaLabel')"
    width="0.25rem"
  />
</template>
<style lang="scss" scoped>
.nav__menu {
  @include flex($align: center, $justify: center);
}
</style>
