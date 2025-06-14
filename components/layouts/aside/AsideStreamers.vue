<script setup lang="ts"></script>

<template>
  <NuxtLinkLocale :to="'/LumeTV'" class="streamer-link">
    <article class="streamer">
      <NuxtImg src="LumeLogoPrimary.svg" class="streamer__logo" />
      <main class="streamer__info info">
        <span class="info__name">LumeTV</span>
        <span class="info__game">League of Legends</span>
      </main>
      <footer class="streamer__viewers">
        <NuxtImg src="ViewerCountIcon.svg" class="streamer__viewers-icon" />
        <span class="streamer__viewers-count">1234</span>
      </footer>
    </article>
  </NuxtLinkLocale>
</template>

<style lang="scss" scoped>
.streamer {
  @include flex(row, $justify: space-between, $gap: 0.5rem);
  width: 100%;
  padding: 0.4rem 0.9rem 0.4rem 0.6rem;
  &__logo {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 100%;
    background-color: black;
  }
  &__viewers {
    align-self: flex-start;
    @include flex(row, $align: center, $gap: 0.25rem);
  }
  &__viewers-icon {
    width: 0.5rem;
  }
  &__viewers-count {
    font-size: small;
  }
  &-link {
    width: 100%;
    &:hover {
      background-color: var(--c-graphite);
      color: var(--c-primary);
    }
  }
}

.info {
  @include flex(column, $align: flex-start);
  font-size: var(--s-font-small);
  align-self: flex-start;
  flex: 1;
  overflow: hidden;

  &__name,
  &__game {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    width: 100%;
  }
  &__game {
    color: var(--c-grey-light);
  }
}
</style>
