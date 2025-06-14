<script setup lang="ts"></script>

<template>
  <article class="card">
    <NuxtLinkLocale to="/LumeTV" class="stream">
      <NuxtImg
        src="https://res.cloudinary.com/axiol/image/upload/v1569710642/CodePen/twitchThumb_wr84mp.jpg"
        class="stream__thumbnail"
        alt=""
      />
    </NuxtLinkLocale>
    <main class="card__info info">
      <NuxtLinkLocale to="/LumeTV">
        <NuxtImg src="LumeLogoPrimary.svg" class="info__logo" />
      </NuxtLinkLocale>
      <main class="info__text">
        <header class="info__header">
          <NuxtLinkLocale to="/LumeTV" class="info__link">
            <span class="info__title">PRUEBA DE LUMETV</span>
          </NuxtLinkLocale>
          <LayoutsNavbarDesktopNavbarMenu />
        </header>
        <NuxtLinkLocale to="/LumeTV" class="info__link">
          <span class="info__name">LumeTV</span>
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/League-of-Legends">
          <span class="info__game">League of Legends</span>
        </NuxtLinkLocale>
      </main>
    </main>
  </article>
</template>

<style lang="scss" scoped>
.card {
  padding: 1rem;
  @include flex(column, $justify: flex-start, $align: flex-start, $gap: 0.5rem);
  max-height: 10rem;

  &__image {
    width: 22.5rem;
    margin: 0 0 0.3rem 0;
  }
}
.info {
  display: grid;
  grid-template-columns: max-content auto;
  width: 100%;
  &__logo {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    background-color: rgb(255, 0, 0);
    margin: 0 0.6rem 0.6rem 0;
  }
  &__name,
  &__game {
    font-size: small;
    color: var(--c-grey-light);
    width: auto;
    &:hover {
      color: var(--c-primary);
    }
  }

  &__link {
    @include flex(row, $justify: space-between, $align: flex-start);

    &:hover {
      color: var(--c-primary);
    }
  }
  &__verified {
    margin: 0 0 0 0.3rem;
    width: 0.7rem;
    height: 0.7rem;
  }
  &__header {
    @include flex(row, $justify: space-between, $align: flex-start);
  }
}

.stream {
  position: relative;
  display: inline-block;
  background-color: var(--c-primary);
  z-index: 1;
}

.stream:before,
.stream:after {
  content: '';
  display: block;
  background-color: var(--c-primary);
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  transition: transform 0.15s ease;
}

.stream:before {
  top: 0;
  left: 0;
  transform-origin: top left;
  transform: rotate(-45deg) scale(0);
}

.stream:after {
  right: 0;
  bottom: 0;
  transform-origin: bottom right;
  transform: rotate(45deg) scale(0);
}

.stream__thumbnail {
  display: block;
  transform: translate(0, 0);
  transition: transform 0.15s ease;
  position: relative;
  z-index: 1;
  width: 22.5rem;
}

.stream:hover .stream__thumbnail {
  transform: translate(0.375rem, -0.375rem);
}

.stream:hover:before {
  transform: rotate(-45deg) scale(1);
}

.stream:hover:after {
  transform: rotate(45deg) scale(1);
}
</style>
