<script lang="ts" setup>
  import { useCarsStore } from "~/stores/cars";

  const cars = useCarsStore();

  const route = useRoute();
  const id = ref(route.params?.id);
  const car = computed(() => cars.getCarById(+id.value));
</script>

<template>
  <v-container class="container-main" fluid>
    <v-row>
      <v-col cols="12">
        <fieldset class="card-border rounded-e-xl py-5">
          <legend class="fz-32m title font-weight-regular lh-140 pr-3">{{car.name}}</legend>
          <p class="fz-20" data-aos="fade-right"><span class="font-weight-bold"></span>{{car.desc}}</p>
        </fieldset>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .card-border {
    border-bottom: 12px solid red;
    border-top: 12px solid red;
    border-right: 12px solid red;
    border-left: none;
  }
</style>