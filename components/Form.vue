<script lang="ts" setup>
  import { useDisplay } from "vuetify";
  import { useCarsStore } from "~/stores/cars";

  const valid = ref(false);
  const cars = useCarsStore();
  const display = ref(useDisplay());
  const runtimeConfig = useRuntimeConfig();
  const { xs } = useDisplay();

  const route = useRoute();
  const id = ref(route.params?.id);
  const car = computed(() => cars.getCarById(+id.value));

  const data = ref({
    name: "",
    phone: "",
    message: "",
  });

  const formattedText = ref(``);

  watchEffect(() => {
    formattedText.value = `Ім'я: ${ data.value.name }%0AТелефон: ${ data.value.phone }%0AПовідомлення: ${ data.value.message }`;
  });

  function sendMessage() {
    const url = `https://api.telegram.org/bot${ runtimeConfig.public.telegramSecretApi }/sendMessage?chat_id=${ runtimeConfig.public.chatid }&parse_mode=Markdown&text=${ formattedText.value }`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
  }
</script>

<template>
  <v-container class="container-1440 pr-md-0" fluid>
    <v-row>
      <!--LEFT-->
      <v-col cols="12" md="6" order="2" order-md="1">
        <v-card :class="{'column-right container-50': display.mdAndUp}" class="h-100" variant="text">
          <v-row class="h-100">
            <v-col class="d-flex align-center">
              <v-sheet :max-width="display.smAndDown ? 'unset' : 518" class="text-black" width="100%">
                <h5 class="fz-32m font-weight-regular lh-1 mb-4">Бажаєте замовити?</h5>
                <p class="fz-20 font-weight-regular lh-140 mb-6">Залиште нам коментар, або зв’яжіться з нами через Instagram або Telegram</p>
                <v-form v-model="valid" data-netlify="true" data-netlify-honeypot="bot-field" method="POST" name="contact">
                  <input name="form-name" type="hidden" value="contact"/> <input name="bot-field" type="hidden"/>
                  <v-text-field v-model="data.name" :rules="[v => !!v || 'Це поле необхідно заповнити']" class="mb-1" label="Ім’я" name="name" type="text" variant="outlined"></v-text-field>
                  <v-text-field v-model="data.phone" :rules="[v => !!v || 'Це поле необхідно заповнити']" class="mb-1" label="Телефон" name="phone" type="text" variant="outlined"></v-text-field>
                  <v-textarea v-model="data.message" label="Залиште коментар" name="message" variant="outlined"></v-textarea>
                  <v-row justify="space-between">
                    <v-col>
                      <v-btn :block="xs" :disabled="!valid" class="bg-red ls-normal text-none fz-20 font-weight-medium" size="large" type="submit" width="200" @click="sendMessage">Надіслати</v-btn>
                    </v-col>
                    <v-col class="d-flex flex-nowrap" cols="auto">
                      <nuxt-link target="_blank" to="https://www.instagram.com/lulu_constructor_shop?igsh=aHhsaXJnZndqcXM1">
                        <Icon name="skill-icons:instagram" size="40px"/>
                      </nuxt-link>
                      <nuxt-link class="ml-2" target="_blank" to="https://t.me/lulu_constructor">
                        <Icon name="logos:telegram" size="40px"/>
                      </nuxt-link>
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