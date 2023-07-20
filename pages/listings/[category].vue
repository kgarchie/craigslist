<script setup lang="ts">
const route = useRoute()
const category = <string>route.params.category

const items = computed(() => useItems().value.filter((item) => item.category.trim().toLowerCase() === category?.trim().toLowerCase()))

const view = ref<boolean>(true)

function changeView(newView: boolean) {
  view.value = newView
}

</script>

<template>
  <Title>{{ category.charAt(0).toUpperCase() + category.slice(1) }}</Title>
  <div class="browser">
    <Header @view="changeView" :list-view="view"/>
    <div id="content">
      <div id="content-listings" :class="{ 'list-view': view }">
        <Listing v-for="item in items" :item="item"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>