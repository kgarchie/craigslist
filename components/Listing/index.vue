<template>
  <div class="listing">
    <div class="listing-images">
      <img class="listing-image" :src="item.img"/>
    </div>
    <div class="listing-info-wrapper">
      <div class="listing-info">
        <h3 class="listing-info-title">{{ item.title }}</h3>
        <h3 class="listing-info-details">
          <span class="listing-info-date">{{ item.date }}</span>
          <span>·</span>
          <span class="listing-info-location">{{ item?.location }}</span>
        </h3>
      </div>
    </div>
    <div class="listing-price-wrapper">
      <div class="listing-price">
        <i class="fa-regular fa-dollar-sign"></i>
        <span class="listing-price-value">{{ item.price }}</span>
      </div>
    </div>
    <button class="listing-favorite-button" type="button">
      <i class="fa-regular fa-heart"></i>
    </button>
  </div>
</template>
<script setup lang="ts">
defineProps({
  item: {
    type: Object as PropType<{
      img: string,
      title: string,
      date: string,
      location?: string,
      price: string | number
    }>,
    required: true
  }
})
</script>