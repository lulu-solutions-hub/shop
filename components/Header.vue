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
    { name: "Опис", link: "#desc", show: true },
    { name: "Збірка", link: "#functions", show: car.value.functions },
    { name: "Контакти", link: "#form", show: true },
  ]);

  const selectedFilter = ref();

  watchPostEffect(() => {
    const link = rewardFilters.findIndex((filter) => filter.link == route.hash);
    if (link != -1) {
      selectedFilter.value = link;
    } else {
      selectedFilter.value = -1;
    }
  });

  useHead({
    script: [
      {
        innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '285706427331877');
            fbq('track', 'PageView');
        `,
        type: 'text/javascript',
      },
    ],
    noscript: [
      {
        innerHTML: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=285706427331877&ev=PageView&noscript=1"/>`,
      }
    ]
  });

  const getOnePicture = (name: string) => {
    const postImages = import.meta.glob(`~/public/img/cars/*/*.{png,jpg}`, { eager: true });
    const imagePath = `/public/img/cars/${ id.value }/${ name }`;
    const basePath = '/public';
    const absolutePath: string =  Object.entries(postImages)
    .filter(([key]) => key.includes(imagePath))
    .map(([, value]) => value?.default)[0];
    console.log('img', absolutePath.substring(absolutePath.indexOf(basePath) + basePath.length))
    return absolutePath.substring(absolutePath.indexOf(basePath) + basePath.length);
  };
</script>

<template>
  <v-container class="container-1440 pt-0 px-0" fluid>
    <v-row>

      <!--LEFT-->
      <v-col class="px-7" cols="12" md="6" order="2" order-md="1">
        <v-card :class="{'column-right container-50': display.mdAndUp}" class="h-100" variant="text">
          <v-btn v-if="display.mdAndUp" icon="" size="x-large" to="/" variant="text">
            <Icon name="mdi:arrow-left-thick" size="60"></Icon>
          </v-btn>
          <v-row class="h-100">
            <v-col class="d-flex align-center">
              <v-sheet :max-width="display.smAndDown ? 'unset' : 413" class="text-black">
                <h3 class="fz-36 font-weight-regular mb-8">Конструктор</h3>
                <h2 class="fz-68 font-weight-regular title lh-1 mb-1">{{ car.name }}</h2>
                <p class="fz-32m title text-mainRed mb-8 lh-1">{{ car.price }} грн</p>
                <p class="fz-20 lh-normal font-weight-regular mb-12">{{ car.subtitle }}</p>
                <v-btn :block="xs" :size="xs ? 'x-large' : 'large'" class="bg-red ls-normal text-none fz-20 font-weight-medium" to="#form" width="200">Придбати</v-btn>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!--RIGHT-->
      <v-col cols="12" md="6" order="1" order-md="2">
        <v-card class="h-100 rounded-0 mx-n3 mx-md-0" variant="text">
          <v-img :src="getOnePicture('car-header')" class="w-100" :alt="car.alt">
            <div class="menu-gradient">
              <v-container :class="{'column-left container-50': display.mdAndUp}" class="h-100 pr-7 d-flex d-md-block align-center justify-space-between">
                <v-btn v-if="display.smAndDown" icon="" size="small" to="/" variant="text">
                  <Icon color="white" name="mdi:arrow-left-thick" size="35"></Icon>
                </v-btn>
                <v-item-group v-model="selectedFilter" mandatory>
                  <v-row class="mx-sm-n5 justify-end" no-gutters>
                    <template v-for="(filter, index) in rewardFilters" :key="index">
                      <v-col v-if="filter.show" class="fz-20 mx-3 mx-sm-5" cols="auto">
                        <v-item v-slot="{ isSelected, toggle }" :value="filter">
                          <nuxt-link :class="isSelected ? 'text-mainRed font-weight-bold' : 'text-white custom-link'" :href="`${filter.link}`" class="link cursor-pointer font-weight-medium fz-18" @click="scrollToAnchor(filter.link)">
                            <span @click="toggle">{{ filter.name }}</span>
                          </nuxt-link>
                        </v-item>
                      </v-col>
                    </template>
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

    @media (max-width: 600px) {
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
    background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 100));
  }

</style>