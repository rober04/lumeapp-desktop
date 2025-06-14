<script setup lang="ts">
const i18n = useI18n()
const isLoggedIn = inject('isLoggedIn', false)
const emit = defineEmits(['toggleAside'])
const active = ref(true)

const menuToggle = computed(() => {
  return () => {
    active.value = !active.value
    emit('toggleAside', active.value)
  }
})

let mediaQuery: MediaQueryList

const handleResize = () => {
  active.value = window.innerWidth > 530
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 520px)')
  mediaQuery.addEventListener('change', handleResize)
  handleResize()
})

onBeforeUnmount(() => {
  mediaQuery.removeEventListener('change', handleResize)
})
</script>

<template>
  <aside v-if="!isLoggedIn" :class="[active ? 'aside--active' : 'aside']">
    <header class="aside__header header" v-if="active">
      <span class="header__subtitle">{{
        i18n.t('aside.subtitle_no_login')
      }}</span>
      <UiButtonIcon url="/CollapseIcon.svg" @click="menuToggle()" />
    </header>
    <UiButtonIcon
      url="/CollapseIcon.svg"
      @click="menuToggle()"
      v-if="!active"
      class="aside__collapse--inverted"
    />
    <LayoutsAsideStreamers v-if="active" />
    <LayoutsAsideStreamers v-if="active" />
    <LayoutsAsideStreamers v-if="active" />
    <LayoutsAsideStreamers v-if="active" />
    <UiButtonIcon url="/LumeLogoPrimary.svg" v-if="!active"></UiButtonIcon>
    <UiButtonIcon url="/LumeLogoPrimary.svg" v-if="!active"></UiButtonIcon>
    <UiButtonIcon url="/LumeLogoPrimary.svg" v-if="!active"></UiButtonIcon>
    <UiButtonIcon url="/LumeLogoPrimary.svg" v-if="!active"></UiButtonIcon>
  </aside>
</template>

<style lang="scss" scoped>
.aside {
  @include flex(column, $justify: flex-start, $align: flex-end, $gap: 0.5rem);
  width: 3.3rem;
  background-color: #292929;
  position: sticky;
  height: calc(100dvh - 3.1rem);
  padding: 0.6rem;

  transition: width 0.25s ease-in-out;
  @include responsive(33.125rem) {
    position: absolute;
    z-index: 100;
  }

  &--active {
    @include flex(column, $justify: flex-start, $align: flex-start);
    width: 17rem;
    background-color: #292929;
    position: sticky;
    height: calc(100dvh - 3.1rem);
    transition: width 0.25s ease-in-out;

    @include responsive(33.125rem) {
      position: absolute;
      z-index: 100;
    }
  }

  &__header {
    @include flex(row, $justify: space-between, $align: center);
    width: 100%;
    padding: 0.6rem;
  }

  &__collapse--inverted {
    rotate: 180deg;
  }
}

.header {
  &__subtitle {
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
