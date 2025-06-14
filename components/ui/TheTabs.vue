<script setup lang="ts">
import type { Tab } from '@/interfaces/common'

const props = defineProps<{
  list: Tab[]
}>()
const emit = defineEmits<{
  (e: 'tabChangeAction', id: string): void
}>()

const tabUnderlineStyles: Ref<{ width: string; transform: string }> = ref({
  width: '0px',
  transform: 'translateX(0px)',
})

const activeTab = ref(props.list[0].id)

const selectActiveTab = async (id: string) => {
  activeTab.value = id
  emit('tabChangeAction', id)
  await nextTick()
  const activeTabElement = document.querySelector(
    '.tabs__item--active',
  ) as HTMLElement
  changeUnderlineStyles(activeTabElement)
}

watch(props, () => {
  selectActiveTab(props.list[0].id)
})

const changeUnderlineStyles = (element: HTMLElement | null) => {
  if (!element) return
  const { offsetLeft, offsetWidth } = element
  tabUnderlineStyles.value = {
    width: `${offsetWidth / 16}em`,
    transform: `translateX(${offsetLeft / 16}em)`,
  }
}

onMounted(() => {
  const activeTabElement = document.querySelector(
    '.tabs__item--active',
  ) as HTMLElement
  changeUnderlineStyles(activeTabElement)
})
</script>

<template>
  <section class="tabs">
    <div class="tabs__list">
      <div class="tabs__wrapper">
        <button
          v-for="{ title, id } in list"
          :key="id"
          ref="tabRefs"
          @click="selectActiveTab(id)"
          :class="['tabs__item', { 'tabs__item--active': activeTab === id }]"
        >
          {{ title }}
        </button>
        <div class="tabs__underline">
          <div class="tabs__indicator" :style="tabUnderlineStyles"></div>
        </div>
      </div>
    </div>

    <article v-for="{ id } in $props.list" :key="id">
      <Transition name="fade-tab" mode="default">
        <section v-if="activeTab === id">
          <slot :name="id" />
        </section>
      </Transition>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.tabs {
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  position: relative;
  &__list {
    border-collapse: collapse;
    position: relative;
    @include flex($justify: flex-start);
    z-index: 2;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-x;
    @include responsive() {
      padding: 0 0.1rem 0.835rem 0.1rem;
    }

    &::-webkit-scrollbar {
      height: 0.5rem;
      @include responsive() {
        display: none;
      }
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: row;
    gap: 1em;
    position: relative;
    width: max-content;
  }
  &__indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.125rem;
    background-color: var(--c-primary);
  }
  &__item {
    padding: 0.75rem 0 0.4rem 0;
    font-weight: 500;
    z-index: 3;
    white-space: nowrap;
    scroll-snap-align: center;
    font-family: var(--f-font-extraLight);
  }
  &__item--active {
    font-family: var(--f-font-semiBold);
    color: var(--c-primary);
  }

  .desktop {
    display: block;
    @include responsive() {
      display: none;
    }
  }
  .mobile {
    display: none;
    @include responsive() {
      display: block;
    }
  }
}
</style>
