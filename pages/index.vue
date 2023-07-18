<template>
  <Title>Home</Title>
  <div id="main-wrapper" class="fancy-scrollbar">
    <Header @view="changeView"/>
    <Content :list-view="view"/>
  </div>
</template>
<script setup lang="ts">
const view = ref<boolean>(false)
function changeView(newView: boolean) {
  view.value = newView
}
</script>