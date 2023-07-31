<template>
  <div id="header">
    <div class="header-row">
      <div class="header-search-bar">
        <input class="header-search-bar-input" type="search" v-model="search" :placeholder="language === lang.en ? 'Search' : 'Tafuta'"/>
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
          <h3 class="content-pagination-label"><span class="accent-text" v-if="language === lang.en">Page</span>
            <span class="accent-text" v-if="language === lang.sw">Kurasa</span>1 / 12</h3>
          <button class="content-pagination-button forward" type="button">
            <i class="fa fa-chevron-right"></i>
          </button>
          <button class="content-pagination-button save-search" type="button" v-if="language === lang.en">
            Save Search
          </button>
          <button class="content-pagination-button save-search" type="button" v-if="language === lang.sw">
            Hifadhi Utafutaji
          </button>
        </div>
        <h3 class="content-listings-pagination-quantity-label"><span class="accent-text" v-if="language === lang.en">Showing</span>
          <span class="accent-text" v-if="language === lang.sw">Yaonyesha</span>1 - 100
          <span class="accent-text" v-if="language === lang.en">of</span>
          <span class="accent-text" v-if="language === lang.sw">kwa</span>1147
        </h3>
      </div>
    </div>
      <div class="header-options">
        <div class="header-option">
          <select class="header-option-dropdown">
            <option value="new" v-if="language === lang.en">New</option>
            <option value="new" v-if="language === lang.sw">Mpya</option>
            <option value="old" v-if="language === lang.en">Old</option>
            <option value="old" v-if="language === lang.sw">Ya zamani</option>
            <option value="price-up">$ ➡ $$$</option>
            <option value="price-down">$$$ ➡ $</option>
          </select>
          <h3 class="header-option-label" v-if="language === lang.en">Sort</h3>
          <h3 class="header-option-label" v-if="language === lang.sw">Aina</h3>
        </div>
        <div class="header-option">
          <button class="header-option-toggle header-button icon" type="button">
            <img src="/assets/svg/options.svg" alt="" srcset="">
            <span v-if="language === lang.en">Options</span>
            <span v-if="language === lang.sw">Chaguo</span>
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
          <h3 class="header-option-label" v-if="language === lang.en">View</h3>
          <h3 class="header-option-label" v-if="language === lang.sw">Onyesha</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {lang} from "~/types";

const search = ref<string>('')
const view = ref<boolean>(false)
const emits = defineEmits(['view', 'search'])
const language = useLanguage()
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