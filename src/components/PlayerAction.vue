<template>
  <div class="action ">

    <!-- <IconPark :icon="TextMessage" size="18" :stroke-width="3" class="hover-text" title="歌词" /> -->
    <div class="flex items-center hover-text brand-color pointer" @click="togglePlayList()">
      <IconPark :icon="MusicList" size="18" :stroke-width="3" class="hover-text pointer" title="播放列表" />
      <span class="text-xs">{{ playListCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MusicList, TextMessage } from '@icon-park/vue-next'
import { useFormatDuring } from "@/utils/number";
import { usePlayerStore } from "@/stores/player";
import IconPark from "@/components/IconPark.vue";
import { storeToRefs } from "pinia";
const { playListCount, showPlayList } = storeToRefs(usePlayerStore())
const togglePlayList = () => {
  console.log(showPlayList.value)
  showPlayList.value = true
}
</script>

<style lang="less">
.action {
  margin-left: 20px;
  position: relative;
  bottom: -6px;
}

.text-xs {
  font-size: .3rem;
}
</style>
