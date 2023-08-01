<script setup lang="ts">
import {lang} from "~/types";

defineProps({
  item: {
    type: Object as PropType<{
      id: string | number,
      img: string,
      title: string,
      date: string,
      location?: string,
      category: string,
      price: string | number
    }>,
    required: false
  }
})

const language = useLanguage()
</script>

<template>
  <div class="container">
    <div class="details">
      <div class="details__body">
        <div class="details__images">
          <div class="main-image">
            <img :src="item?.img" alt="image"/>
          </div>
          <div class="sub-images">
            <div class="sub-image">
              <img :src="item?.img" alt="image"/>
            </div>
            <div class="sub-image">
              <img :src="item?.img" alt="image"/>
            </div>
            <div class="sub-image">
              <img :src="item?.img" alt="image"/>
            </div>
          </div>
        </div>
        <div class="details__info">
          <div class="location">
            <i class="fa fa-map-marker"></i>
            <p>{{ item?.location }}</p>
          </div>
          <div class="rooms">
            <i class="fa fa-door-open"></i>
            <p v-if="language === lang.en">2 bedrooms</p>
            <p v-if="language === lang.sw">Vyumba 2</p>
          </div>
          <div class="price">
            <i class="fa fa-dollar-sign"></i>
            <p>{{ item?.price }}</p>
          </div>
          <div class="about">
            <h3 v-if="language === lang.en">About</h3>
            <h3 v-if="language === lang.sw">Kuhusu</h3>
            <p>Ever since my wife died, living in this house has been torture. It's like her ghost is haunting me, I think I see her sometimes.
              I'm distraught, our souls were alike, she was more of myself than I was. When she was alive back then, when I thought of her, I was not building airs for my own enjoyment,
              rather my heart rejoiced that she was with me. I adored her. I loved her. I cherished her. I was happy.
              Now that she's gone and everything in this place keeps reminding me of how happy I was and that opens up wounds. I want to rid myself off it.
              That's why I'm selling it. Oh, don't worry about me, I'll go live by the forest, hopefully I will find solace in my primal beast</p>
          </div>
        </div>
      </div>
      <div class="details__footer">
        <div class="contacts">
          <a class="facebook">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a class="instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a class="twitter">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: auto;

  .details {
    box-shadow: 0 10px 100px var(--purple);
    border-radius: 1rem;
    margin-bottom: 1rem;

    &__body {
      display: flex;
      padding: 20px;
      gap: 20px;
      margin-top: 10px;
      border-radius: 0.5rem;
      color: #cccccc;
      font-family: Rubik, sans-serif;

      .details {
        &__images {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 50%;

          .main-image {
            height: 400px;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .sub-images {
            display: flex;
            gap: 20px;

            .sub-image {
              height: 100px;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }

        &__info {
          width: 50%;

          p {
            margin: 0;
            padding: 0;
            color: #cccccc;
            font-size: 1.1rem;
            font-weight: 700;
          }

          .location {
            display: flex;
            align-items: center;
            color: var(--theme-primary);
            gap: 10px;
            margin-bottom: 10px;

            i {
              font-size: 20px;
            }
          }

          .rooms {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;

            color: var(--theme-primary);

            i {
              font-size: 20px;
            }
          }

          .price {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            color: var(--theme-primary);

            i {
              font-size: 20px;
            }
          }

          .about {
            margin-top: 20px;

            h3 {
              color: #cccccc;
              font-size: 1.2rem;
              font-weight: 800;
              margin-bottom: 5px;
            }
          }
        }
      }
    }

    &__footer {
      display: flex;
      justify-content: flex-end;
      padding: 20px;
      margin-top: 10px;
      border-radius: 0.5rem;

      .contacts {
        display: flex;
        gap: 10px;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;

          &:hover {
            background-color: #000;
            cursor: pointer;
          }

          i {
            font-size: 20px;
            color: #cccccc;
          }

          &.facebook {
            background-color: #3b5998;
          }

          &.instagram {
            background-color: #e4405f;
          }

          &.twitter {
            background-color: #1da1f2;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .container {
    .details {
      &__body {
        flex-direction: column;

        .details {
          &__images {
            width: 100%;

            .main-image {
              height: 300px;
            }

            .sub-images {
              flex-direction: row;
              gap: 10px;

              .sub-image {
                height: 100px;
              }
            }
          }

          &__info {
            width: 100%;
          }
        }
      }

      &__footer {
        justify-content: center;
      }
    }
  }
}
</style>