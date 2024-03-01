<script lang="ts" setup>
  import { useDisplay } from "vuetify";
  import { useCarsStore } from "~/stores/cars";

  const cars = useCarsStore();
  const display = ref(useDisplay());
  const { xs } = useDisplay();

  const route = useRoute();
  const id = ref(route.params?.id);
  const car = computed(() => cars.getCarById(+id.value));
</script>

<template>
  <v-container class="container-1440 pb-0 pr-0 pb-lg-4" fluid>
    <v-row>

      <!--LEFT-->
      <v-col cols="12" md="6" order="2" order-md="1">
        <v-card :class="{'column-right container-50': display.mdAndUp}" class="h-100" variant="text">
          <v-row class="h-100">
            <v-col class="d-flex align-center">
              <v-sheet class="text-black" max-width="518">
                <h5 class="fz-36 font-weight-regular lh-1 mb-4">Залишились Питання?</h5>
                <p class="fz-20 font-weight-regular lh-140 mb-6">Залиште нам коментар, або зв’яжіть з нами через Instagram або Telegram</p>
                <v-text-field variant="outlined" label="Ім’я"></v-text-field>
                <v-textarea variant="outlined" label="Залиште коментар" class="mb-12"></v-textarea>
                <v-btn class="bg-red ls-normal text-none fz-20 font-weight-medium" size="large" width="200">Надіслати</v-btn>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!--RIGHT-->
      <v-col cols="12" md="6" order="1" order-md="2">
        <v-card class="h-100 rounded-0" variant="text">
          <v-img :src="`/img/cars/${id}/car-footer.png`" class="w-100 menu-gradient"></v-img>
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