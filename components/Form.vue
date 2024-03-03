<script lang="ts" setup>
  import { useDisplay } from "vuetify";
  import { useCarsStore } from "~/stores/cars";

  const valid = ref(false);
  const cars = useCarsStore();
  const display = ref(useDisplay());
  const { xs } = useDisplay();

  const route = useRoute();
  const id = ref(route.params?.id);
  const car = computed(() => cars.getCarById(+id.value));
</script>

<template>
  <v-container class="container-1440 pr-md-0" fluid>
    <v-row>

      <!--LEFT-->
      <v-col cols="12" md="6" order="2" order-md="1">
        <v-card :class="{'column-right container-50': display.mdAndUp}" class="h-100" variant="text">
          <v-row class="h-100">
            <v-col class="d-flex align-center">
              <v-sheet class="text-black" :max-width="display.smAndDown ? 'unset' : 518" width="100%">
                <h5 class="fz-36 font-weight-regular lh-1 mb-4">Бажаєте замовити?</h5>
                <p class="fz-20 font-weight-regular lh-140 mb-6">Залиште нам коментар, або зв’яжіть з нами через Instagram або Telegram</p>
                <v-form v-model="valid" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <v-text-field type="text" name="name" class="mb-1" variant="outlined" :rules="[v => !!v || 'Це поле необхідно заповнити']" label="Ім’я"></v-text-field>
                  <v-text-field type="text" name="phone" class="mb-1" variant="outlined" :rules="[v => !!v || 'Це поле необхідно заповнити']" label="Телефон"></v-text-field>
                  <v-textarea variant="outlined" name="message" label="Залиште коментар"></v-textarea>
                  <v-row justify="space-between">
                    <v-col>
                      <v-btn type="submit" :disabled="!valid" class="bg-red ls-normal text-none fz-20 font-weight-medium" size="large" width="200" :block="xs">Надіслати</v-btn>
                    </v-col>
                    <v-col class="d-flex flex-nowrap" cols="auto">
                      <nuxt-link target="_blank" to="https://www.instagram.com/lulu_constructor_shop?igsh=aHhsaXJnZndqcXM1"><Icon name="skill-icons:instagram" size="40px" /></nuxt-link>
                      <nuxt-link target="_blank" to="https://t.me/lulu_constructor" class="ml-2"><Icon name="logos:telegram" size="40px" /></nuxt-link>
                    </v-col>
                  </v-row>
                </v-form>

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