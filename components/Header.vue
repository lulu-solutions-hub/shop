<script lang="ts" setup>
  import { useDisplay } from "vuetify";
  import { useCarsStore } from "~/stores/cars";

  const { scrollToAnchor } = useAnchorScroll();

  const cars = useCarsStore();
  const display = ref(useDisplay());
  const { xs } = useDisplay();

  const route = useRoute();
  const id = ref(route.params?.id);
  const car = computed(() => cars.getCarById(+id.value));

  const rewardFilters = reactive([
    { name: "Головна", link: "#header" },
    { name: "Опис", link: "#desc" },
    { name: "Збірка", link: "#functions" },
    { name: "Контакти", link: "#form" },
  ]);

  const selectedFilter = ref();

  watchPostEffect(() => {
    const link = rewardFilters.findIndex((filter) => filter.link == route.hash);
    if (link != -1) {
      selectedFilter.value = link;
    } else {
      selectedFilter.value = 0;
    }
  });
</script>

<template>
  <v-container class="container-1440 pt-0" fluid>
    <v-row>

      <!--LEFT-->
      <v-col cols="12" md="6" order="2" order-md="1">
        <v-card :class="{'column-right container-50': display.mdAndUp}" class="h-100" variant="text">
          <v-row class="h-100">
            <v-col class="d-flex align-center ">
              <v-sheet class="text-black" :max-width="xs ? 'unset' : 413">
                <h3 class="fz-36 font-weight-regular mb-8">Конструктор</h3>
                <h2 class="fz-68 font-weight-regular title lh-1 mb-1">{{ car.name }}</h2>
                <span class="fz-36 font-weight-regular lh-1 title mb-1">Technic</span>
                <p class="fz-32m title text-mainRed mb-8 lh-1">{{ car.price }} грн</p>
                <p class="fz-20 lh-normal font-weight-regular mb-12">{{ car.subtitle }}</p>
                <v-btn class="bg-red ls-normal text-none fz-20 font-weight-medium" to="#form" :size="xs ? 'x-large' : 'large'" width="200" :block="xs">Придбати</v-btn>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!--RIGHT-->
      <v-col cols="12" md="6" order="1" order-md="2">
        <v-card class="h-100 rounded-0 mx-n7 mx-md-0" variant="text">
          <v-img :src="`/img/cars/${id}/car-header.png`" class="w-100 menu-gradient">
            <div class="menu-gradient">
              <v-container :class="{'column-left container-50': display.mdAndUp}" class="h-100 pr-7 pr-md-0">
                <v-item-group v-model="selectedFilter" mandatory>
                  <v-row no-gutters class="mx-sm-n5 justify-end">
                    <v-col v-for="(filter, index) in rewardFilters" :key="index" class="fz-20 mx-3 mx-sm-5" cols="auto">
                      <v-item v-slot="{ isSelected, toggle }" :value="filter">
                        <nuxt-link :class="isSelected ? 'text-mainRed font-weight-bold' : 'text-white custom-link'" :href="`${filter.link}`" class="link cursor-pointer font-weight-medium fz-18" @click="scrollToAnchor(filter.link)">
                          <span @click="toggle">{{ filter.name }}</span>
                        </nuxt-link>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-item-group>
              </v-container>
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .container-50 {
    max-width: 530px;

    @media(max-width: 600px) {
      max-width: unset;
    }
  }

  .column-left {
    margin: auto 0 0 0;
  }

  .column-right {
    margin: 0 0 0 auto;
  }

  .custom-link {
    border-bottom: 2px solid transparent;
    transition: 0.3s ease;

    &:hover {
      padding: 0 0 2px 0;
      border-color: red;
    }
  }

  .menu-gradient {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 100) );
  }

</style>