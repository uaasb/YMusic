<template>
  <div class="flex items-stretch">
    <img :src="playlist.coverImgUrl" alt="" class="w-44 h-44 object-cover rounded-xl flex-shrink-0">
    <div class="pl-5 flex flex-col justify-between py-1 flex-1 ">
      <div>
        <div class="text-3xl font-bold text-white">{{ playlist.name }}</div>
        <div class="flex items-center text-l text-dc pb-2 pt-3">
          <el-avatar :src="playlist.creator.avatarUrl" size="small" round />
          <span class="ml-2">{{ playlist.creator.nickname }}</span>
          <div class="ml-5 flex text-dc">
            <div class="ml-2 hover-text" v-for="tag in playlist.tags" :key="tag">#{{ tag }}</div>
          </div>
        </div>
        <div class="text-xs text-gray-500 leading-normal">
          <MoreText :text="playlist.description" :end="90" />
        </div>
      </div>
      <div class=" mt-5 gap-x-2 flex items-center">
        <button class="w-32 button flex items-center" @click="playAll">
          <IconPark :icon="PlayOne" size="22" class="align-middle" />
          <span class="text-white ml-1">播放全部</span>
        </button>
        <button class="w-32 button-outline flex items-center ml-5">
          <IconPark :icon="Like" size="18" class="mr-1 align-middle" />
          <span class="text-white ml-1">收藏</span>
        </button>
        <button class="button-outline w-8">
          <IconPark :icon="More" />
        </button>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { PlayOne, Like, More } from '@icon-park/vue-next'

import MoreText from "@/components/MoreText.vue";
import IconPark from "@/components/IconPark.vue";
import type { PlayListDetail } from "@/models/playlist";

defineProps<{
  playlist: PlayListDetail,
  playAll?: () => void,
}>()
</script>