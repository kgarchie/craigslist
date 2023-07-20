<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>Oops! Coming soon</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: white;
    }

    a {
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      color: white;
      background-color: var(--theme-primary);
      padding: 0.5rem 1rem;
      border-radius: 5px;

      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: var(--yellow);
      }
    }
  }
</style>