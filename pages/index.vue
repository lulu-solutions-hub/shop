<script lang="ts" setup>
  import { useDisplay } from "vuetify";

  const display = ref(useDisplay());
  const { xs } = useDisplay();

  const texts = reactive([
    {
      main: "Complete creativity and individuality",
      secondary: "We creatively approach each task, because we do not like the same solutions and repetitions;"
    },
    {
      main: "Code-based development, not constructor",
      secondary: "Code-based development provides flexibility, individual approach, high productivity and full control, which guarantees an optimized and customized product for the client."
    },
    {
      main: "Full adaptability",
      secondary: "we fully adapt the pages to mobile and tablet versions."
    },
    {
      main: "Better SEO",
      secondary: "SEO increases brand visibility, attracts targeted traffic, reduces advertising costs, and contributes to the continuous improvement of marketing strategies."
    },
  ]);
</script>

<template>
  <v-container class="pl-4 pr-0 py-0" fluid>
    <v-row>

      <!--LEFT-->
      <v-col cols="12" md="6" order="2" order-md="1">
        <v-card :class="{'column-right container-50': display.mdAndUp}" variant="text">

          <v-row class="mb-6">
            <v-col v-for="(text, id) in texts" :key="id" cols="12">
              <span class="text-white fz-18 font-weight-medium ls-normal">{{ text.main }} - </span>
              <span class="fz-18 text-textGrey lh-180 ls-normal">{{ text.secondary }}</span>
            </v-col>
          </v-row>
          <div>
            <p class="fz-18 text-textGrey">
              <span class="text-white fz-18 font-weight-medium ls-normal">Our team</span> consists of professionals who are responsible and passionate about their work. Trying as much as possible to do my work perfectly and qualitatively.
            </p>
          </div>

        </v-card>
      </v-col>

      <!--RIGHT-->
      <v-col class="rounded-s-xl" cols="12" md="6" order="1" order-md="2">
        <v-card :rounded="display.mdAndUp ? 's-xl' : ''" class="bg-blur h-100" variant="text">
          <v-container :class="{'column-left container-50': display.mdAndUp}" class="pl-4 pl-md-12 pt-16 h-100" style="padding-bottom: 77px">
            <v-card class="h-100 d-flex flex-column" variant="text">
              <!--FIELDS-->
              <div>
                <h4 class="text-white fz-32 font-weight-regular ls-normal">Discuss the project</h4>
                <v-text-field base-color="white" class="text-textGrey mb-6" label="Name*" variant="underlined"></v-text-field>
                <v-text-field base-color="white" class="text-textGrey mb-6" label="Number*" variant="underlined"></v-text-field>
                <v-text-field base-color="white" class="text-textGrey" label="Tell us about your idea" variant="underlined"></v-text-field>
                <v-checkbox class="ml-n1" color="red" density="compact">
                  <template v-slot:label>
                    <span class="text-textGrey ml-3">I consent to the processing of personal data</span>
                  </template>
                </v-checkbox>
              </div>
              <!--SPACER-->
              <div class="d-flex flex-column flex-grow-1"/>
              <!--SEND-->
              <div class="d-flex justify-space-between">
                <v-btn class="ls-normal text-none fz-20" color="#FFF" min-width="144" size="large" variant="outlined">Send</v-btn>
              </div>
            </v-card>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .swiper-slide {
    width: fit-content !important;
  }

  .swiper-container {
    width: 100%;
    max-width: 100%;
    max-height: 100vh;
    min-height: 0;
    min-width: 0;
  }
</style>