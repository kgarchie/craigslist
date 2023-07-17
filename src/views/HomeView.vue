<script setup lang="ts">
import Nav from '../components/Nav/index.vue';
import Header from '../components/Header.vue';
import Content from '../components/Content.vue';
</script>
<template>
  <Teleport to="head">
    <title>Home</title>
  </Teleport>
  <div id="main-wrapper" class="fancy-scrollbar">
    <Nav/>
    <Header/>
    <Content/>
  </div>
</template>