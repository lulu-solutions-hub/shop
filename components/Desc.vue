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
        <p class="fz-20"><span class="font-weight-bold">LEGO {{car.name}} - </span>{{car.desc}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>