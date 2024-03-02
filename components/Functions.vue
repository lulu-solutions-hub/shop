<script lang="ts" setup>
  import { loadAllFilesFromFolder } from "~/composables/LoadAllFilesFromFolder";
  import { useCarsStore } from "~/stores/cars";

  const cars = useCarsStore();

  const route = useRoute();
  const id = ref(route.params?.id);
  const car = computed(() => cars.getCarById(+id.value));

  const { files } = loadAllFilesFromFolder(""+id.value, "video")
</script>

<template>
  <v-container class="container-main" fluid>
    <v-row>
      <v-col cols="12">
        <v-card variant="text">
          <fieldset class="card-border rounded-e-xl">
            <legend class="fz-48 title font-weight-regular lh-140 pr-3">Збірка</legend>
            <v-card-item class="pt-0 pb-5">
              <v-row>
                <v-col class="d-flex flex-column justify-center">
                  <div data-aos="fade-left">
                    <h3 class="text-uppercase title font-weight-regular mb-5">Функції</h3>
                    <p class="fz-20 mb-2">{{ car.functions.subtitle }}</p>
                    <p class="fz-20 font-weight-medium">{{ car.functions.details }}</p>
                    <p class="fz-20 font-weight-medium">{{ car.functions.size }}</p>
                  </div>
                </v-col>
                <v-col class="d-flex justify-end">
                  <video autoplay="true" loop="true" muted playsinline width="400">
                    <source :src="files[0]" type="video/mp4"/>
                  </video>
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