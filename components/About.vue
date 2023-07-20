<template>
  <Title>About</Title>
  <div class="team">
    <div class="team-member" v-for="(user, index) in users" :key="index">
      <img :src="user.avatar" alt="team member"/>
      <h3 class="name">{{ user.name }}</h3>
      <p class="email">{{ user.email }}</p>
      <span class="role">{{user.role}}</span>
      <div>
        <h3 class="quote">{{ user.quote }}</h3>
        <div class="links">
          <NuxtLink :to="user.github" target="_blank" :external="true" class="github">
            <span>GitHub</span>
            <i class="fab fa-github"></i>
          </NuxtLink>
          <NuxtLink :to="user.linkedin" target="_blank" :external="true" class="linkedin">
            <span>LinkedIn</span>
            <i class="fab fa-linkedin"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {User} from "~/db/users";

const users = ref<User[]>([])
const response = await $fetch('/api/users') as { statusCode: number, users: User[] }
if (response?.statusCode === 200) users.value = response.users
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
    font-family: "Rubik", sans-serif;
    background-color: rgba(69, 39, 160, 0.5);
    border-radius: 1rem;
    box-shadow: 5px 5px 20px rgba(69, 39, 160, 1);
    position: relative;

    transition: background-color 0.2s ease-in-out, scale 0.2s ease-in-out;

    &:hover {
      background-color: rgba(69, 39, 160, 0.8);
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
    }

    .role{
      color: #ccc;
      background-color: rgb(13, 17, 23);
      padding: 0.25rem 0.5rem;
      font-size: 1rem;
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

      .links{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;

        a{
          display: flex;
          align-items: center;
          gap: 0.25rem;
          text-decoration: none;
          background-color: rgba(253, 216, 53, 0.7);
          padding: 0.5rem 1rem;
          border-radius: 5px;
          margin: 0 0.5rem;

          &.github{
            background-color: rgba(13, 17, 23, 0.7);

            &:hover{
              background-color: rgba(13, 17, 23, 1);
            }
          }

          &.linkedin{
            background-color: rgba(0, 119, 181, 0.7);

            &:hover{
              background-color: rgba(0, 119, 181, 1);
            }
          }
        }

        span{
          font-size: 1.05rem;
          font-weight: 600;
          color: white;
        }

        i{
          font-size: 1.5rem;
          color: white;
        }
      }
    }
  }
}
</style>
