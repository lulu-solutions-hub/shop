<script lang="ts" setup>
  import { useDisplay } from "vuetify";

  interface FooterLinks {
    name: string;
    link?: string;
    blank?: boolean;
    active?: boolean;
  }

  interface FooterItem {
    name: string;
    lists: FooterLinks[];
  }

  const { mobile } = useDisplay();

  const socials = [
    { title: "Telegram", name: "@LuLuconstructor", link: " " },
    { title: "Instagram", name: "@lulu_constructor_shop", link: " "  },
    { title: "Телефон", name: "+380638187969", link: " "  },
  ];

  const footerItems = [
    { name: "Головна", link: "#main" },
    { name: "Опис", link: "#desc" },
    { name: "Збірка", link: "#func" },
    { name: "Контакти", link: "#form" },
  ];
</script>

<template>
  <section class="bg-background" style="padding-bottom: 50px; padding-top: 80px">
    <v-container class="container-main " fluid>
      <v-row no-gutters>

        <v-col cols="12">
          <v-row class="align-center mb-9 mr-n10" no-gutters>
            <v-col v-for="(link, key) in socials" :key="key" cols="auto" class="mr-10">
              <div>
                <h6 class="fz-24 font-weight-medium lh-1 mb-4">{{link.title}}</h6>
                <nuxt-link :href="link.link" class="link text-textGrey fz-24 lg-1 custom-link">{{link.name}}</nuxt-link>
              </div>
            </v-col>
            <v-col class="d-flex flex-column align-end mb-n4">
              <nuxt-link :href="link.link" class="d-block text-textGrey fz-24 mb-4 custom-link link" v-for="(link, key) in footerItems" :key="key">{{link.name}}</nuxt-link>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <div class="d-flex flex-column align-center">
            <p class="fz-20 text-textGrey">LULU Constructor Shop</p>
            <p class="fz-20 text-textGrey">© 2024 | All rights reserved.</p>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
  .custom-link {
    border-bottom: 2px solid transparent;
    padding: 0 0 2px 0;
    transition: 0.3s ease;

    &:hover {
      border-color: white;
    }
  }
</style>