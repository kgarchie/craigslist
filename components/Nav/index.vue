<template>
    <div id="nav">
        <NuxtLink to="/" class="nav-logo">
            <i class="fa-solid fa-hand-peace"></i>
        </NuxtLink>
        <div class="nav-info">
            <NuxtLink to="/" class="nav-info-selection-button" type="button">
                <span class="nav-location-label">Kenya, KE</span>
                <span class="nav-category-label">Kiambu</span>
            </NuxtLink>
        </div>
        <button class="nav-sign-in-button" type="button">
            <img class="profile-pic" @click="showProfilePopUpMenu = !showProfilePopUpMenu"
                src="https://images.unsplash.com/photo-1624956578877-4948166c5dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="Profile Image">
            <NavPopUp :show="showProfilePopUpMenu" @close="showProfilePopUpMenu = !showProfilePopUpMenu" />
        </button>
    </div>
</template>
<script setup lang="ts">
const showProfilePopUpMenu = ref(false);
</script>