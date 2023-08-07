<template>
  <div class="cover-play-image" :class="{ 'aspect-square': !video, 'aspect-video': video }">
    <el-image :src="picUrl" :alt="name" class="w-full bg-gray-50 object-cover " style="border-radius: 5px;" />
    <div class="mask flex justify-center items-center">
      <el-icon class="play text-white play-icon opacity-0 transition-opacity hover:text-teal-400 " :size="26"
        @click="onPlay">
        <VideoPlay />
      </el-icon>
    </div>
    <div v-if="showPlayCount" class="play-count">
      <!-- <IconPark :icon="video?Play:Headset" class="mr-1" :size="12"/> -->
      <el-icon class="head" clolr="yellow" size="12"
        style="display:inline-block ;margin-right :3px; vertical-align: middle;">
        <Headset />
      </el-icon>
      <text class="small-font-size ">
        {{ useNumberFormat(playCount || 0) }}
      </text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNumberFormat } from "@/utils/number";
import IconPark from "@/components/IconPark.vue";

defineProps<{
  picUrl: string
  playCount?: number
  name?: string
  showPlayCount?: boolean
  onPlay?: () => void,
  video?: boolean,
}>()
</script>

<style lang="scss">
// .cover-play-image {
//   @apply rounded-lg cursor-pointer transition-all relative overflow-hidden;
//   @apply hover: -translate-y-1;

//   .mask {
//     @apply absolute inset-0 bg-black bg-opacity-0 transition-all duration-500;
//   }

//   .play-count {
//     @apply absolute bottom-1 right-1 text-white text-xs bg-black bg-opacity-80 pl-2 pr-2 rounded-full pt-0.5 pb-0.5 flex items-center transition-all scale-90;
//   }

//   &:hover {
//     .mask {
//       @apply bg-opacity-50;

//       .play-icon {
//         @apply opacity-100;
//       }
//     }

//     .play-count {
//       @apply opacity-0;
//     }
//   }
// }
.cover-play-image {

  position: relative;
  width: 100%;
  // height: 100%;
  margin-top: 5px;
  transition: all .1s ease-out;

  &:hover {
    transform: translateY(-5px);

    .mask {
      background: rgb(8, 8, 8);
      opacity: 0.4;
    }

    .play {
      color: var(--brandColorDark);
    }
  }

  .mask {
    opacity: 0.1;
    background: rgb(8, 8, 8);
    // transition: all .3s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  // .play {
  //   position: absolute;
  //   transition: all .3s ease-in;
  //   right: 8px;
  //   bottom: 28px;
  //   color: transparent;

  // }

  .play-count {
    position: absolute;
    right: 2px;
    top: 2px;
    color: var(--brandColorDark);
    padding: 5px 8px;
    border-radius: 8px;
    background: var(--HeaderBackground);
    display: flex;
    align-items: center;

    .small-font-size {
      vertical-align: middle;

    }
  }
}
</style>
