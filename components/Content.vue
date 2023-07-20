<template>
  <div id="content">
    <div id="content-listings" :class="{ 'list-view': listView }">
      <Listing v-for="item in items" :item="item"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ComputedRef} from "vue";

const props = defineProps({
  listView: {
    type: Boolean,
    default: false,
    required: false
  },
  search: {
    type: String,
    default: '',
    required: false
  }
})

const items: ComputedRef<{
  id: string | number,
  img: string,
  title: string,
  date: string,
  location?: string,
  category: string,
  price: string | number
}[]> = computed(() => {
  if (props.search == '') return useItems().value;
  return items.value.filter(item => item.title.toLowerCase().includes(props.search.toLowerCase()) || item.location?.toLowerCase().includes(props.search.toLowerCase()));
})
</script>