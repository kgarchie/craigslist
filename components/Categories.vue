<script setup lang="ts">
const housing = ref<string>('/listings/housing')
</script>

<template>
  <div class="categories">
    <div class="categories__container">
      <h1>What are you looking for?</h1>
      <ul class="categories__list">
        <li class="category">
          <NuxtLink class="category__link" :to="housing">
            <i class="fa-solid fa-house"></i>
            <span class="category__label">Housing</span>
          </NuxtLink>
        </li>
        <li class="category">
          <NuxtLink to="/listings" class="category__link">
            <i class="fa-solid fa-car"></i>
            <span class="category__label">Cars</span>
          </NuxtLink>
        </li>
        <li class="category">
          <NuxtLink to="/listings" class="category__link">
            <i class="fa-solid fa-briefcase"></i>
            <span class="category__label">Jobs</span>
          </NuxtLink>
        </li>
        <li class="category">
          <NuxtLink to="/listings" class="category__link">
            <i class="fa-solid fa-tshirt"></i>
            <span class="category__label">Clothing</span>
          </NuxtLink>
        </li>
        <li class="category">
          <NuxtLink to="/listings" class="category__link">
            <i class="fa-solid fa-mobile-android"></i>
            <span class="category__label">Electronics</span>
          </NuxtLink>
        </li>
        <li class="category">
          <NuxtLink to="/listings" class="category__link">
            <i class="fa-solid fa-tools"></i>
            <span class="category__label">Services</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.categories {
  background-color: #4527a0;
  padding: 1rem;

  &__container {
    max-width: 1200px;
    margin: auto;;

    h1 {
      color: white;
      font-size: 1.2rem;
      font-weight: 900;
      font-family: "Rubik", sans-serif;
      padding-left: 0.3rem;
    }

    .categories__list {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin: 0 auto;
      width: 100%;
      padding: 0;

      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      .category {
        padding: 0.5rem;
        margin-left: 1rem;
        margin-top: 1rem;
        display: grid;
        place-items: center;
        font-family: "Rubik", sans-serif;
        background-color: rgba(69, 39, 160, 0.5);
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(100, 185, 200, 0.2);
        width: 200px;
        border: 2px solid rgba(253, 216, 53, 0.3);

        transition: background-color 0.2s ease-in-out, scale 0.2s ease-in-out;

        &__link {
          @media screen and (max-width: 768px) {
            width: 100px;
          }
        }

        &:hover {
          background-color: rgba(69, 39, 160, 1);
          scale: 1.02;
          cursor: pointer;
        }

        i,
        .category__label {
          display: block;
          text-align: center;
        }

        i {
          font-size: 2rem;
          color: white;
          margin-bottom: 0.3rem;
        }

        .category__label {
          margin: 0;
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
        }
      }
    }
  }
}
</style>