<template>
  <div class="footer flex flex-col items-stretch h-20">
    <PlayerController />
    <PlayerSong />
    <PlayerSlider />
    <PlayerAction />
  </div>
</template>

<script setup lang="ts">

import PlayerSlider from "@/components/PlayerSlider.vue";
import PlayerSong from "@/components/PlayerSong.vue";
import PlayerAction from "@/components/PlayerAction.vue";
import PlayerController from "@/components/PlayerController.vue";
</script>
<style lang="less">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  left: 0;

}
</style>
