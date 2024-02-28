<script lang="ts" setup>
  import { useDisplay } from "vuetify";
  import { useCarsStore } from "~/stores/cars";

  const cars = useCarsStore();
  const display = ref(useDisplay());
  const { xs } = useDisplay();

  const route = useRoute();
  const id = ref(route.params?.id);
  const car = computed(() => cars.getCarById(+id.value));

  const menuItems = [
    "Головна",
    "Опис",
    "Збірка",
    "Контакти"
  ];
</script>

<template>
  <v-container class="pr-0 container-1440" fluid>
    <v-row>

      <!--LEFT-->
      <v-col cols="12" md="6" order="2" order-md="1">
        <v-card :class="{'column-right container-50': display.mdAndUp}" variant="text" class="h-100">
          <v-row class="h-100">
            <v-spacer/>
            <v-col cols="11" class="d-flex align-center justify-center">
              <v-sheet max-width="413" class="text-black">
                <h3 class="fz-36 font-weight-regular mb-8">Конструктор</h3>
                <h2 class="fz-68 font-weight-regular title lh-1 mb-1">{{ car.name }}</h2>
                <span class="fz-36 font-weight-regular lh-1 title mb-1">Technic</span>
                <p class="fz-36 title text-mainRed mb-8 lh-1">{{ car.price }} грн</p>
                <p class="fz-20 lh-normal font-weight-regular mb-12">{{ car.subtitle }}</p>
                <v-btn class="bg-red ls-normal text-none fz-20 font-weight-medium" size="large" width="200">Придбати</v-btn>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!--RIGHT-->
      <v-col class="rounded-s-xl" cols="12" md="6" order="1" order-md="2">
        <v-card class="bg-blue h-100" variant="text">
          <v-img :src="`/img/cars/${id}/car-header.png`" class="w-100">
            <v-container :class="{'column-left container-50': display.mdAndUp}" class="h-100">
              <v-row class="justify-end mx-n5" no-gutters>
                <v-col v-for="(item, key) in menuItems" :key="key" class="mx-5" cols="auto">
                  <span class="title fs-18 text-white font-weight-regular">{{ item }}</span>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .container-50 {
    max-width: 530px;
  }

  .column-left {
    margin: auto 0 0 0;
  }

  .column-right {
    margin: 0 0 0 auto;
  }
</style>