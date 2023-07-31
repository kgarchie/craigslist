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
    <div class="nav-language">
      <button class="nav-language-button" type="button" @click="showLanguagePopUpMenu = !showLanguagePopUpMenu">
        <img src="/assets/images/language.png" alt="lang">
        <span class="nav-language-label">{{language.toUpperCase().slice(0, 2)}}</span>
        <i class="fa-solid fa-chevron-down"></i>
      </button>
      <ul class="nav-language-list" id="language" v-if="showLanguagePopUpMenu">
        <li class="nav-language-list-item" v-for="lingo in lang" :key="lingo">
          <span class="nav-language-list-item-label" @click="changeLang(lingo)">{{lingo.toUpperCase().slice(0, 2)}}</span>
        </li>
      </ul>
    </div>
    <button class="nav-sign-in-button" type="button">
      <img class="profile-pic" @click="showProfilePopUpMenu = !showProfilePopUpMenu"
           src="https://images.unsplash.com/photo-1624956578877-4948166c5dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
           alt="Profile Image">
      <NavPopUp :show="showProfilePopUpMenu" @close="showProfilePopUpMenu = !showProfilePopUpMenu"/>
    </button>
  </div>
</template>
<script setup lang="ts">
import {lang} from "~/types";

const showProfilePopUpMenu = ref(false);
const language = useLanguage()
const showLanguagePopUpMenu = ref(false);

function changeLang(chosenLanguage: string) {
  useLanguage().value = chosenLanguage as lang
  showLanguagePopUpMenu.value = false
}
</script>
<style scoped lang="scss">
.nav-language {
  margin-right: 1rem;
  position: relative;

  .nav-language-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    color: white;

    .nav-language-label {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      color: white;
    }

    img{
      width: 2rem;
      height: 2rem;
    }
  }

  .nav-language-list{
    position: absolute;
    z-index: 1000;
    border-radius: 0.25rem;
    text-align: center;
    width: 100%;
    padding: 0;
    background: var(--theme-primary);
    transition: max-height 0.3s ease-in-out;
    color: white;
    top: 16px;

    &.show{
      max-height: 10rem;
    }

    .nav-language-list-item{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      text-align: center;
      cursor: pointer;
      list-style: none;

      &:hover{
        background: var(--theme-background);
      }

      .nav-language-list-item-label{
        font-size: 1rem;
        font-weight: 900;
        font-family: "Rubik", sans-serif;
        color: white;

        &:last-child{
          padding-bottom: 0.5rem;
        }
      }
    }
  }
}
</style>