<script setup lang="ts">
const route = useRoute()
const id = route.params.id

const item = useItems().value.find(item => item.id.toString() === id.toString())
if(!item) await navigateTo('/')

useHead({
    title: item?.title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).slice(0, 4).join(' '),
})
</script>

<template>
  <div id="main-wrapper" class="fancy-scrollbar">
    <ListingDetails :item="item"/>
  </div>
</template>

<style scoped>

</style>