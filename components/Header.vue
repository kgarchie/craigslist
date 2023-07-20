<template>
  <div id="header">
    <div class="header-row">
      <div class="header-search-bar">
        <input class="header-search-bar-input" type="search" placeholder="Search" v-model="search">
        <button class="header-search-bar-button" type="button">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
    <div class="header-row filters">
      <div id="content-listings-header-wrapper">
      <div id="content-listings-header">
        <div class="content-listings-pagination">
          <button class="content-pagination-button double-back" type="button">
            <i class="fa fa-chevron-left"></i>
            <i class="fa fa-chevron-left"></i>
          </button>
          <button class="content-pagination-button back" type="button">
            <i class="fa fa-chevron-left"></i>
          </button>
          <h3 class="content-pagination-label"><span class="accent-text">Page</span>1 / 12</h3>
          <button class="content-pagination-button forward" type="button">
            <i class="fa fa-chevron-right"></i>
          </button>
          <button class="content-pagination-button save-search" type="button">
            Save Search
          </button>
        </div>
        <h3 class="content-listings-pagination-quantity-label"><span class="accent-text">Showing</span> 1 - 100
          <span class="accent-text">of</span> 1147
        </h3>
      </div>
    </div>
      <div class="header-options">
        <div class="header-option">
          <select class="header-option-dropdown">
            <option value="new">New</option>
            <option value="old">Old</option>
            <option value="price-up">$ ➡ $$$</option>
            <option value="price-down">$$$ ➡ $</option>
          </select>
          <h3 class="header-option-label">Sort</h3>
        </div>
        <div class="header-option">
          <button class="header-option-toggle header-button icon" type="button">
            <img src="/assets/svg/options.svg" alt="" srcset="">
            <span>Options</span>
          </button>
        </div>
        <div class="header-option view">
          <div class="header-option-choices">
            <button class="header-option-choice icon" type="button" @click="emmitView(false)" :class="{ active: !view }">
              <img src="/assets/svg/grid.svg" alt="+" v-if="!view">
              <img src="/assets/svg/grid-light.svg" alt="+" v-else>
            </button>
            <button class="header-option-choice" type="button" @click="emmitView(true)" :class="{ active: view }">
              <i class="fa-solid fa-list"></i>
            </button>
          </div>
          <h3 class="header-option-label">View</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const search = ref<string>('')
const view = ref<boolean>(false)
const emits = defineEmits(['view', 'search'])
function emmitView(newView: boolean) {
  view.value = newView
  emits('view', newView)
}

const props = defineProps({
  listView: {
    type: Boolean,
    default: false,
    required: false
  }
})

view.value = props.listView
watch(search, (newSearch) => {
  emits('search', newSearch)
})
</script>