<template>
  <Title>About</Title>
  <div class="team">
    <div class="team-member" v-for="(user, index) in users" :key="index">
      <img :src="user.avatar" alt="team member"/>
      <h3 class="name">{{ user.name }}</h3>
      <p class="email">{{ user.email }}</p>
      <div>
        <h3 class="quote">{{ user.quote }}</h3>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {User} from "~/db/users";

const users = ref<User[]>([])
const response = await $fetch('/api/users') as { statusCode: number, users: User[] }
if (response.statusCode === 200) users.value = response.users
</script>

<style scoped lang="scss">
.team {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;

  .team-member {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    width: 300px;
    height: 400px;
    font-family: "Rubik", sans-serif;
    background-color: rgba(69, 39, 160, 0.5);
    border-radius: 1rem;
    box-shadow: 0 10px 50px rgba(100, 200, 200, 0.2);

    transition: background-color 0.2s ease-in-out, scale 0.2s ease-in-out;

    &:hover {
      background-color: rgba(69, 39, 160, 0.8);
      scale: 1.02;
      cursor: pointer;
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      object-position: top;
      margin-bottom: 1rem;
    }

    .name,
    .email,
    .text{
      margin: 0;
      color: white;
    }

    .name {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      color: rgba(255, 255, 255, 0.8);
    }

    .email{
      font-size: 1rem;
      font-weight: 400;
      color: #afafaf;
      margin-bottom: 1rem;
    }

    >div{
      .quote {
        font-size: 1.2rem;
        font-weight: 400;
        color: rgba(253, 216, 53, 0.7);
        text-align: center;
        margin: auto;

        &::before {
          content: open-quote;
          font-size: 2rem;
        }

        &::after {
          content: close-quote;
          font-size: 2rem;
        }
      }
    }
  }
}
</style>
