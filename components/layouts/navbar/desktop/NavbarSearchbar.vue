<script setup lang="ts"></script>

<template>
  <div class="nav_searchbar searchbar">
    <input type="search" placeholder="Buscar" class="searchbar__input" />
    <button class="searchbar__button">
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        xmlns="http://www.w3.org/2000/svg"
        class="searchbar__icon"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3304 17.5272C14.6296 18.799 12.5102 19.3794 10.3988 19.1515C8.28735 18.9237 6.34057 17.9045 4.95026 16.2992C3.55996 14.6938 2.82932 12.6214 2.9054 10.4991C2.98148 8.37674 3.85862 6.36199 5.36031 4.8603C6.86199 3.35862 8.87675 2.48147 10.9991 2.40539C13.1214 2.32931 15.1938 3.05995 16.7992 4.45026C18.4045 5.84056 19.4237 7.78734 19.6515 9.89878C19.8794 12.0102 19.299 14.1296 18.0272 15.8304L21.7484 19.5504L20.0516 21.2484L16.3316 17.5284L16.3304 17.5272ZM17.3 10.8C17.3 12.3913 16.6679 13.9174 15.5426 15.0426C14.4174 16.1679 12.8913 16.8 11.3 16.8C9.7087 16.8 8.18258 16.1679 7.05736 15.0426C5.93214 13.9174 5.3 12.3913 5.3 10.8C5.3 9.20869 5.93214 7.68257 7.05736 6.55735C8.18258 5.43213 9.7087 4.79999 11.3 4.79999C12.8913 4.79999 14.4174 5.43213 15.5426 6.55735C16.6679 7.68257 17.3 9.20869 17.3 10.8Z"
        />
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.searchbar {
  @include flex();
  width: 23rem;

  &__input {
    padding: 0.38rem 0.5rem;
    width: 100%;
    transition: border 0.25s ease-in-out;

    @include responsive(46.875rem) {
      display: none;
    }
  }
  &__button {
    width: 2.16rem;
    height: 2.16rem;
    background-color: var(--c-graphite-hover);
    border-radius: 0 var(--s-border-radius) var(--s-border-radius) 0;
    transition: filter 0.25s ease-in-out;

    @include responsive(46.875rem) {
      background-color: transparent;
    }

    &:hover {
      filter: brightness(1.3);
    }
  }
}
</style>
