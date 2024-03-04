<template>
  <v-container class="h-100 pt-15">
    <img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=285706427331877&ev=Lead&noscript=1" />
    <v-row class="h-100" align="center" justify="center">
      <v-col cols="12" md="8">
        <fieldset class="card-border rounded-xl">
        <v-card height="100%" variant="text">
          <v-card-text class="text-center py-15">
            <h2 class="mb-4">Дякуємо за замовлення!</h2>
            <p class="mb-4">Найближчим часом ми з вами зв'яжемось.</p>
            <nuxt-link class="link border px-4  py-2 d-inline-block text-black"  to="/0">Back to Site</nuxt-link>
          </v-card-text>
        </v-card>
        </fieldset>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>

  .card-border {
    border: 12px solid red;

    @media(max-width: 600px) {
      border: 5px solid red;
    }
  }
</style>