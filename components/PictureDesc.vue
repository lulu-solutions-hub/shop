<script lang="ts" setup>
  import 'aos/dist/aos.css';
  import { useDisplay } from "vuetify";
  import { loadAllFilesFromFolder } from "~/composables/LoadAllFilesFromFolder";
  import { useCarsStore } from "~/stores/cars";

  const { xs } = useDisplay();
  const cars = useCarsStore();
  const display = ref(useDisplay());

  const route = useRoute();
  const id = ref(route.params?.id);
  const car = computed(() => cars.getCarById(+id.value));

  const { files } = loadAllFilesFromFolder("" + id.value, "picture-text");

  const isOdd = (num: number) => num % 2 == 0;
</script>

<template>
  <v-container class="container-main" fluid>
    <v-row class="mb-16">
      <v-col v-for="(item, key) in car.pictureDesc" cols="12">
        <v-row class="mx-0">
          <v-col  :order="display.smAndDown ? '' : (isOdd(key) ? 1 : 2) " class="py-2 px-0 pa-md-0" cols="12" md="6">
            <v-img :src="files[key]"></v-img>
          </v-col>
          <v-col :class="display.mdAndUp ? isOdd(key) ? 'justify-end' : 'justify-start': ''" :order="isOdd(key) ? 2 : 1" class="d-flex align-center py-5 px-0 pa-md-0">
            <v-sheet  :data-aos="isOdd(key) ? 'fade-left' : 'fade-right'" :max-width="display.mdAndUp ? 472 : 'unset'" class="text-black w-100">
              <h4 class="font-weight-regular mb-4" :class="xs ? 'fz-32' : 'fz-28'">{{ item.title }}</h4>
              <p class="fz-20">{{ item.subtitle }}</p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="mt-10" cols="12">
        <v-btn class="bg-red ls-normal text-none fz-20 font-weight-medium" :size="xs ? 'x-large' : 'large'" to="#form" width="200" :block="xs">Придбати</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>