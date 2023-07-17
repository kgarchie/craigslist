<template>
  <Title>About</Title>
  <div class="team">
    <div class="team-member" v-for="(user, index) in users" :key="index">
      <img :src="user.avatar" alt="team member"/>
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <div>
        <h3>{{ user.quote }}</h3>
        <p>{{ user.text }}</p>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    width: 300px;
    height: 400px;
    color: white;
    font-family: "Rubik", sans-serif;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    h3 {
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 1rem;
    }
  }
}
</style>
