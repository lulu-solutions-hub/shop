<script lang="ts" setup>
  import { Navigation, Pagination } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  const prev = ref(null);
  const next = ref(null);
  const slide = ref(0);
  const images = [
    'https://picsum.photos/200/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/400/200'
  ];

  // const glob = import.meta.glob('../img/cars/0/img-slider/*.png', { eager: true });
</script>

<template>
  <!--{{ glob }}-->
  <v-container>
    <v-row>
      <v-col cols="12">
        <swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }">
          <swiper-slide v-for="(img, id) in images" :key="id">
            <v-sheet class="d-flex justify-center w-100">
              <v-img :src="img" height="565" width="auto"></v-img>
            </v-sheet>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .swiper-button-prev {
    width: 60px;
    height: 60px;
    margin-top: -30px;
    left: 0;

    &:after {
      content: none;
    }

    @media (max-width: 600px) {
      width: 30px;
      height: 30px;
      margin-top: -15px;
    }
  }

  .swiper-button-next {
    width: 60px;
    height: 60px;
    margin-top: -30px;
    right: 0;

    &:after {
      content: none;
    }

    @media (max-width: 600px) {
      width: 30px;
      height: 30px;
      margin-top: -15px;
    }
  }
</style>