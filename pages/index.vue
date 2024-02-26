<script lang="ts" setup>
  import { Navigation } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  const slide = ref(0);
  const images = [
    'https://picsum.photos/200/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/400/200'
  ];
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img :src="images[slide]"></v-img>
        <swiper :modules="[Navigation]" :navigation="true" :space-between="0" slides-per-view="auto">
          <swiper-slide v-for="(image, id) in images" :key="id">
            <v-img :src="image" height="200" width="auto" @click="slide = id"></v-img>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .swiper-slide {
    width: fit-content !important;
  }

  .swiper-container {
    width: 100%;
    max-width: 100%;
    max-height: 100vh;
    min-height: 0;
    min-width: 0;
  }
</style>