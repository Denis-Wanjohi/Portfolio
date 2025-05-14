<template>
  <main class="bg-red-100 w-screen ">
  <HomeView></HomeView>
  </main>
</template>

<script setup>
import HomeView from './views/HomeView.vue'
</script>

<style>
.open-sans {
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}
.cinzel-decorative-bold {
  font-family: "Cinzel Decorative", serif;
  font-weight: 700;
  font-style: normal;
}

.cinzel-400 {
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.cinzel-700 {
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}
</style>