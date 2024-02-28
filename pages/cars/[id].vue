<script setup lang="ts">
  const route = useRoute();

  const id = ref(route.params?.id);
</script>

<template>
  <p>fdddddd {{id}}</p>
</template>

<style scoped>

</style>