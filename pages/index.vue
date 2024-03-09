<script lang="ts" setup>
  const carsStore = useCarsStore();

  useHead({
      meta: [
        {
          name: "facebook-domain-verification", content: "g0n9l8sj7jok48ifwd9ft462rul1z8"
        }
      ],
    }
  );
</script>

<template>
  <v-container class="container-main">
    <v-row>
      <v-col v-for="(car, id) in carsStore.cars" :key="id">
        <v-card :to="`/${car.id}`" variant="outlined">
          <v-card-title>{{ car.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>