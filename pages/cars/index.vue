<script setup lang="ts">
  const carsStore = useCarsStore();
</script>

<template>
  <v-container class="container-main">
    <v-row>
      <v-col v-for="(car, id) in carsStore.cars" :key="id">
        <v-card variant="outlined" :to="`/cars/${car.id}`">
          <v-card-title>{{car.name}}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>