<script lang="ts" setup>
  import { useDisplay } from "vuetify";
  import { useCarsStore } from "~/stores/cars";

  const { cars } = useCarsStore();
  const display = ref(useDisplay());
  const { xs } = useDisplay();

  const show: boolean[] = reactive(cars.map(() => false));

  const getOnePicture = (id: string, name: string) => {
    const postImages = import.meta.glob(`~/public/img/cars/*/*.{png,jpg}`, { eager: true });
    const imagePath = `/public/img/cars/${ id }/${ name }`;
    return Object.entries(postImages)
    .filter(([key]) => key.includes(imagePath))
    .map(([, value]) => value?.default)[0];
  };

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
  <v-container class="container-main" fluid>
    <v-row>
      <v-col v-for="(car, id) in cars" :key="id" cols="12" sm="6">
        <v-card :to="`/${car.id}`" class="mx-auto product">
          <div class="overflow-hidden">
            <v-img :src="getOnePicture('' + car.id, 'car-header')" class="product-img" cover></v-img>
          </div>

          <v-card-title>
            <h4 class="fz-24">{{ car.name }}</h4>
          </v-card-title>

          <v-card-text class="d-flex align-center justify-space-between">
            <span class="fz-24">{{ car.price }} грн</span>
            <v-btn :icon="show[car.id] ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click.prevent="show[car.id] = !show[car.id]" :size="xs ? 'small' : 'default'"></v-btn>
          </v-card-text>

          <v-expand-transition>
            <div v-show="show[car.id]">
              <v-divider></v-divider>

              <v-card-text>
               {{car.desc}}
                </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
  .product {
    &-img {
      transition: transform .3s;
    }
    &:hover {
      .product-img {
        transform: scale(1.05);
      }
    }
  }
</style>