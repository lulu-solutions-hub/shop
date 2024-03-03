<script lang="ts" setup>
  import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import { useDisplay } from "vuetify";
  import { loadAllFilesFromFolder } from "~/composables/LoadAllFilesFromFolder";

  import { useCarsStore } from "~/stores/cars";

  const cars = useCarsStore();
  const display = ref(useDisplay());

  const route = useRoute();
  const id = ref(route.params?.id);
  const car = computed(() => cars.getCarById(+id.value));
  const modules = display.value.xs ? [] : [Navigation, Pagination, EffectCoverflow, Autoplay];
  const swiperSetting =
    display.value.smAndDown ? {
      modules: [Pagination, Autoplay],
      initialSlide: 0,
      slidesPerView: 1,
      navigation: false
    } : {
      modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
      initialSlide: 1,
      slidesPerView: 3,
      navigation: true
    };

  const { files } = loadAllFilesFromFolder("" + id.value, "img-slider");

</script>

<template>
  <section class="py-5">
    <v-container class="container-main" fluid>
      <v-row no-gutters justify="center">
        <v-col cols="12">
          <swiper :autoplay="{  delay: 4000, disableOnInteraction: false,}" :centeredSlides="true" :coverflowEffect="{rotate: 50, stretch: 0, depth: 100,modifier: 1, slideShadows: true}" :effect="'coverflow'" :grabCursor="true" :initial-slide="swiperSetting.initialSlide" :loop="true" :modules="swiperSetting.modules" :navigation="swiperSetting.navigation" :navigationEnabled="true" :pagination="{ clickable: true }" :slidesPerView="swiperSetting.slidesPerView">
            <swiper-slide v-for="(img, id) in files" :key="id">
              <v-img :src="img" width="auto" class="rounded-lg rounded-md-0"></v-img>
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
  }
</style>