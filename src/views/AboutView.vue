<template>
  <Teleport to="head">
    <title>About</title>
  </Teleport>
  <div class="main-wrapper">
    <Nav />
  </div>
</template>
<script setup lang="ts">
import Nav from "../components/Nav/index.vue";
</script>