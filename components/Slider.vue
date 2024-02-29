<script lang="ts" setup>
  import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import { loadAllFilesFromFolder } from "~/composables/LoadAllFilesFromFolder";

  import { useCarsStore } from "~/stores/cars";

  const cars = useCarsStore();

  const route = useRoute();
  const id = ref(route.params?.id);
  const car = computed(() => cars.getCarById(+id.value));

  const { images } = loadAllFilesFromFolder(""+id.value, "img-slider")
</script>

<template>
  <section>
    <v-container class="container-main" fluid>
      <v-row no-gutters>
        <v-col cols="12">
          <swiper :centeredSlides="true" :coverflowEffect="{rotate: 50, stretch: 0, depth: 100,modifier: 1, slideShadows: true}" :effect="'coverflow'" :grabCursor="true" :initial-slide="1" :modules="[Navigation, Pagination, EffectCoverflow]" :navigation="true" :navigationEnabled="true" :pagination="{ clickable: true }" :slidesPerView="3">
            <swiper-slide v-for="(img, id) in images" :key="id">
              <v-img :src="img" height="300" width="auto"></v-img>
            </swiper-slide>
          </swiper>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style>
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 28px;
    height: 280px;
  }
</style>