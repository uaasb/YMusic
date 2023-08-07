<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { userPlayerInit } from "@/stores/player";
import Home from '@/views/Home.vue'
import Song from './views/Song.vue';
userPlayerInit();
</script>

<template>
  <!-- <Home></Home> -->
  <RouterView :key="$route.fullPath"></RouterView>
</template>

<style >
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100% !important;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
  color: #444;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, "STHeiti", Helvetica, sans-serif;
  font-size: 14px;
  color: #444 !important;
  min-height: 100vh;
  background: #1c1c1c;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  -webkit-overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}
</style>
