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
        <v-card variant="text">
          <fieldset class="card-border rounded-e-xl">
            <legend class="fz-48 title font-weight-regular lh-140">Збірка</legend>
            <v-card-item>
              <v-row>
                <v-col class="d-flex flex-column justify-center">
                  <h4 class="text-uppercase title font-weight-regular mb-5">Функції</h4>
                  <p>{{car.functions.subtitle}}</p>
                </v-col>
                <v-col>
                  <v-sheet max-width="400" height="565"></v-sheet>
                </v-col>
              </v-row>
            </v-card-item>
          </fieldset>
        </v-card>
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