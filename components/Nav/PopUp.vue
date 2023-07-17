<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

</script>

<template>
  <div id="pop-up-menu" v-if="show">
    <div class="pop-up-menu-content">
      <div class="pop-up-menu-content-header">
        <h3 class="pop-up-menu-content-header-label">Profile</h3>
        <button class="pop-up-menu-content-header-close-button" type="button" @click="$emit('close')">
          <i class="fa fa-times"></i>
        </button>
      </div>
      <div class="pop-up-menu-content-body">
        <div class="pop-up-menu-content-body-profile">
          <img class="pop-up-menu-content-body-profile-pic"
               src="https://images.unsplash.com/photo-1624956578877-4948166c5dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
               alt="Profile Image">
          <h3 class="pop-up-menu-content-body-profile-name">John Doe</h3>
          <h3 class="pop-up-menu-content-body-profile-email">john@gmail.com</h3>
        </div>
        <div class="pop-up-menu-content-body-actions">

        </div>
      </div>
      <div class="pop-up-menu-content-footer">
        <div class="pop-up-menu-content-footer-item">
          <i class="fa fa-sign-out"></i>
          <h3 class="pop-up-menu-content-footer-item-label">Logout</h3>
        </div>
        <div class="pop-up-menu-content-footer-item">
          <i class="fa fa-cog"></i>
          <h3 class="pop-up-menu-content-footer-item-label">Settings</h3>
        </div>
        <NuxtLink to="/about" class="pop-up-menu-content-footer-item">
          <i class="fa fa-question-circle"></i>
          <h3 class="pop-up-menu-content-footer-item-label">About</h3>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
#pop-up-menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 100;
}

.pop-up-menu-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: linear-gradient(to bottom, var(--theme-primary), var(--theme-background) 50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
}

.pop-up-menu-content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
}

.pop-up-menu-content-header-label {
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
}

.pop-up-menu-content-header-close-button {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
}

.pop-up-menu-content-body {
  padding: 1rem;
}

.pop-up-menu-content-body-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pop-up-menu-content-body-profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.pop-up-menu-content-body-profile-name {
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
}

.pop-up-menu-content-body-profile-email {
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  color: white;
}

.pop-up-menu-content-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-top: auto;
}

.pop-up-menu-content-footer-item {
  display: flex;
  width: 50%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.pop-up-menu-content-footer-item:hover {
  background-color: var(--purple);
}

.pop-up-menu-content-footer-item-label {
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: white;
}
</style>