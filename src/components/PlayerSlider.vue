<template>
  <div class="middle">
    <div class="player-slider">
      <div class="song-info">
        <div class="info">
          <span class="name" @click="goSongDetail(song.id)">{{ song.name || ' ' }}</span>
          <span class="artist-name" @click="goArtistDetail(song.ar?.first().id)"> {{ song.ar?.first().name || ' '
          }}</span>
        </div>
        <div class="timer">
          <span class="text-xs">
            {{ useFormatDuring(currentTime) }} / {{
              useFormatDuring(duration) }}
          </span>
        </div>
      </div>
      <el-slider :show-tooltip="false" :min="0" v-model="currentTime" :max="duration" @change="onSliderChange"
        @input="onSliderInput" size="large" />
    </div>
    <IconPark :icon="loopType === 0 ? PlayOnce : loopType === 1 ? LoopOnce : ShuffleOne" size="20" :stroke-width="3"
      class="hover-text pointer" @click="toggleLoop" />
    <el-popover placement="top" width="50px">
      <template #reference>
        <IconPark :icon="VolumeSmall" size="18" :stroke-width="3" class=" brand-color pointer" />
      </template>
      <PlayerVolumeSlider />
    </el-popover>
  </div>
</template>

<script setup lang="ts">


import { usePlayerStore } from "@/stores/player";
import { toRefs } from "vue";
import { useRouter } from 'vue-router'
import { useFormatDuring } from "@/utils/number";
import PlayerVolumeSlider from "@/components/PlayerVolumeSlider.vue";
import { Play, PauseOne, LoopOnce, ShuffleOne, PlayOnce, GoEnd, GoStart, VolumeSmall } from "@icon-park/vue-next";
import IconPark from "@/components/IconPark.vue";
const { song, songUrl } = toRefs(usePlayerStore())
const router = useRouter()//Fangzaidingceng
const { duration, currentTime, onSliderInput, onSliderChange, toggleLoop, loopType } = toRefs(usePlayerStore());
const goSongDetail = (songId: number) => {
  if (songId == 0) return
  router.push({
    path: '/song', query: {
      id: songId
    }
  })
}
const goArtistDetail = (artistId: number) => {
  if (artistId == 0) return
  router.push({
    name: 'artistDetail', query: {
      id: artistId
    }
  })
}
</script>

<style lang="less">
.middle {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .player-slider {
    width: 700px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .el-slider {
      position: relative;
      height: 8px;
      top: 0px;

      .el-slider__runway,
      .el-slider__bar {
        height: 4px;
        border-radius: 5;
        background: #e1e1d3;
      }

      .el-slider__bar {
        background: var(--brandColor);
      }

      .el-slider__button-wrapper {
        opacity: 0;
        transition: opacity .3s ease;
        width: 10px;
        height: 10px;
        top: -8.5px;
      }

      &:hover {
        .el-slider__button-wrapper {
          opacity: 100;
        }
      }

      .el-slider__button {
        width: 8px;
        height: 8px;
        background: var(--brandColor);
        border-radius: none;
      }
    }

    .song-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      top: -8px;

      .info {
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        white-space: nowrap;

        .name {
          cursor: pointer;
          transition: color .3s ease-out;

          &:hover {
            color: var(--brandColor);

          }
        }

        .artist-name {
          cursor: pointer;

          margin-left: 7px;
          font-size: 12px;
          transition: color .3s ease-out;
          vertical-align: bottom;

          &:hover {
            color: var(--brandColor);
          }
        }
      }

      .timer {
        color: var(--brand-color)
      }
    }

  }

  .i-icon {
    margin: 0 8px;
    margin-bottom: -13px;
  }
}
</style>
