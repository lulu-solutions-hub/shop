<script lang="ts" setup>

  import Aos from "aos";
  import { onMounted } from "vue";
  import Desc from "~/components/Desc.vue";
  import Header from "~/components/Header.vue";
  import PictureDesc from "~/components/PictureDesc.vue";
  import Swiper from "~/components/Slider.vue";

  onMounted(() => {
    Aos.init();
  });
</script>

<template>
  <div class="px-3 px-md-0">
    <Header id="header" style="margin-bottom: 80px"/>
    <Swiper id="swiper" style="margin-bottom: 40px"/>
    <Desc id="desc" style="margin-bottom: 45px"/>
    <PictureDesc id="pictureDesc" style="margin-bottom: 40px"/>
    <Functions id="functions" style="margin-bottom: 80px"/>
    <Form id="form"/>
    <Footer id="footer"/>
  </div>
</template>

<style scoped>

</style>
