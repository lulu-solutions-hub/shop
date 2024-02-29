<script setup lang="ts">
  import { loadAllFilesFromFolder } from "~/composables/LoadAllFilesFromFolder";
  import { useCarsStore } from "~/stores/cars";

  const cars = useCarsStore();

  const route = useRoute();
  const id = ref(route.params?.id);
  const car = computed(() => cars.getCarById(+id.value));

  const { images } = loadAllFilesFromFolder(""+id.value, "picture-text")
</script>

<template>
  <v-container class="container-main" fluid>
    <v-row>
      <v-col cols="12" v-for="(item, key) in car.pictureDesc">
        <v-row class="mx-0">
          <v-col :order="(key % 2 == 0) ? 1 : 2" class="pa-0">
            <v-img :src="images[key]"></v-img>
          </v-col>
          <v-col :order="(key % 2 == 0) ? 2 : 1" class="d-flex align-center pa-0" :class="(key % 2 == 0) ? 'justify-end' : 'justify-start'">
            <v-sheet :max-width="472" class="text-black w-100">
              <h4 class="fz-28 font-weight-regular mb-4">{{ item.title }}</h4>
              <p class="fz-20">{{item.subtitle}}</p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>