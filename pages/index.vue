<template>
  <Title>Home</Title>
  <div id="main-wrapper" class="fancy-scrollbar">
    <Header @view="changeView" @search="search"/>
    <Categories/>
    <Content :list-view="view" :search="searchString" @view="changeView"/>
  </div>
</template>
<script setup lang="ts">
const view = ref<boolean>(false)
const searchString = ref<string>('')
function changeView(newView: boolean) {
  view.value = newView
}
function search(newSearch: string) {
  searchString.value = newSearch
}
</script>