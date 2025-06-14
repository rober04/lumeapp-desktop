<script setup lang="ts">
const isLoggedIn = inject('isLoggedIn', false)
</script>

<template>
  <header class="nav">
    <nav class="nav__desktop-view">
      <div class="nav__desktop-left">
        <LayoutsNavbarDesktopNavbarLogo class="nav__desktop-logo" />
        <LayoutsNavbarDesktopNavbarLinks
          v-if="isLoggedIn"
          class="nav__desktop-links"
        />
        <LayoutsNavbarDesktopNavbarNotLinks v-else class="nav__desktop-links" />
        <LayoutsNavbarDesktopNavbarMenu class="nav__desktop-menu" />
      </div>
      <LayoutsNavbarDesktopNavbarSearchbar class="nav__desktop-searchbar" />
      <LayoutsNavbarDesktopNavbarAccount class="nav__desktop-account" />
    </nav>
    <nav class="nav__mobile-view">
      <LayoutsNavbarMobileNavbarLinks class="nav__mobile-links" />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  background-color: var(--c-graphite);
  padding: 0.3rem;
  width: 100%;
  position: sticky;
  top: 0;
  @include responsive(33.125rem) {
    background-color: transparent;
    padding: 0;
    filter: blur(0.5);
  }
  &__desktop-view {
    @include flex(row, $justify: space-between);
    @include responsive(33.125rem) {
      display: none;
    }
  }
  &__desktop-left {
    @include flex($justify: space-between, $align: center, $gap: 1rem);
  }

  &__mobile-view {
    display: none;
    background-color: var(--c-graphite);

    @include responsive(33.125rem) {
      @include flex(row, $justify: space-between);
      padding: 0.3rem;
    }
  }
}
</style>
