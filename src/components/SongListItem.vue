<template>
  <div class="flex song-item items-center  " :class="{ 'playing': id === song.id }" @dblclick="play(song.id)">
    <div class="flex-shrink-0 flex-1 flex   pr-5 ">
      <div class="items-center flex flex-1 w-5 flex-shrink-0">
        <IconPark :icon="Like" size="21" class="text-gray-500 mr-1 cursor-pointer hover:text-red-400" />
        <div class="truncate" style="max-width: 75%;">
          <span class="hover:text-brandColor pointer">{{ song.name }}</span>
        </div>
        <IconPark v-if="song.mv > 0" class="ml-2 text-orange-400 cursor-pointer" size="16" :icon="PlayTwo"
          @click="router.push({ name: 'mvDetail', query: { id: song.mv } })" />
      </div>
      <div class=" icon-action flex-shrink-0">
        <div class="flex items-center gap-x-1.5   ">
          <IconPark title="播放" :icon="PlayOne" size="20" class="hover-text" @click="play(song.id)" />
          <IconPark title="添加到" :icon="Add" size="16" class="hover-text" />
        </div>
      </div>
    </div>
    <div class="flex-1 " :class="{ 'w-1/4': showAlName, 'w-1/3': !showAlName }" v-if="showArName">
      <div class="w-9/12 truncate">
        <span class="truncate max-w-full  pointer hover:text-brandColor"
<<<<<<< HEAD
          @click="router.push({ name: 'artistDetail', query: { id: song?.ar.first().id ?? song.artists.first().id } })">{{
            song?.ar?.first().name ?? song.artists.first().name
=======
          @click="router.push({ name: 'artistDetail', query: { id: song.ar?.first().id ?? song.artists.first().id } })">{{
            song.ar?.first().name ?? song.artists.first().name
>>>>>>> a68e5b0 (8.10)
          }}</span>
      </div>
    </div>
    <div class="flex-1" :class="{ 'w-1/4': showArName, 'w-1/3': !showArName }" v-if="showAlName">
      <div class="w-9/12 truncate pointer">
        <span class="truncate hover:text-brandColor"
<<<<<<< HEAD
          @click="router.push({ name: 'album', query: { id: song?.al?.id ?? song.album.id } })">{{
            song?.al?.name ?? song.album.name
=======
          @click="router.push({ name: 'album', query: { id: song.al?.id ?? song.album.id } })">{{
            song.al?.name ?? song.album.name
>>>>>>> a68e5b0 (8.10)
          }}</span>
      </div>
    </div>
    <div class="w-20 flex-shrink-0 ">
      <div class="w-20 truncate">
        <small>{{ useFormatDuring((song?.dt / 1000) || song.duration / 1000) }}</small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Add, DownTwo, Like, MoreTwo, PlayOne, PlayTwo } from '@icon-park/vue-next'
import { useFormatDuring } from '@/utils/number'
import { usePlayerStore } from "@/stores/player";
import IconPark from "@/components/IconPark.vue";
import type { Song } from "@/models/song";
import { useRouter } from "vue-router";
// import {Pages} from "@/router/pages";
import { storeToRefs } from "pinia";

const router = useRouter()

defineProps<{
  song: Song,
  showArName?: boolean,
  showAlName?: boolean,
}>()
const { play } = usePlayerStore()
const { id } = storeToRefs(usePlayerStore())
</script>

<style lang="less" scoped>
.song-item {
  font-size: 18px;
  margin-top: 6px;
  padding: 0;
}

.truncate {
  height: 20px;
  line-height: 20px;

}
</style>
