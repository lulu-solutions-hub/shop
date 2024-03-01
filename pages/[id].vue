<script setup lang="ts">

import Aos from "aos";
import { onMounted } from "vue";
import Desc from "~/components/Desc.vue";
import Header from "~/components/Header.vue";
import PictureDesc from "~/components/PictureDesc.vue";
import Swiper from "~/components/Slider.vue";

onMounted(() => {
  Aos.init()
})
</script>

<template>
  <Header style="margin-bottom: 80px" id="header"/>
  <Swiper style="margin-bottom: 40px" id="swiper"/>
  <Desc style="margin-bottom: 45px" id="desc"/>
  <PictureDesc style="margin-bottom: 40px" id="pictureDesc"/>
  <Functions style="margin-bottom: 80px" id="functions"/>
  <Form id="form"/>
  <Footer id="footer"/>
</template>

<style scoped>

</style>
