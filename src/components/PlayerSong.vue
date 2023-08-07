<template>
  <div class="player-song">
    <img alt="" class="pic icon pointer" @click="goSongDetail(song.id)" :src="song.al?.picUrl || OpticalDisk" />
    <div class="song-info">
      <div class="song-name">
        <div v-if="songUrl.freeTrialInfo?.end > 0" class="bg-red-500  text-xs text-white rounded px-0.5 scale-75">vip
        </div>

      </div>
      <!-- <div class="song-item">
        <IconPark :icon="Like" size="18" :stroke-width="3" class="text-slate-400 hover-text" />
        <IconPark :icon="DownTwo" size="18" :stroke-width="3" class="text-slate-400 hover-text" />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Like, DownTwo, MoreTwo, Comment } from '@icon-park/vue-next'
import { usePlayerStore } from "@/stores/player";
import { OpticalDisk } from '@/assets/img';
import IconPark from "@/components/IconPark.vue";
import { toRefs } from "vue";
import { useRouter } from 'vue-router'
const { song, songUrl } = toRefs(usePlayerStore())
const router = useRouter()//useRouter要放在顶层
const goSongDetail = (id: number) => {
  if (id == 0) return
  router.push({
    path: '/song',
    query: {
      id: id
    }
  })
}
</script>

<style lang="scss">
.player-song {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;


  .pic {
    height: 44px;
    width: 44px;
    border-radius: 5px;
    object-fit: cover;
    position: relative;

    &:hover &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: #888;
      opacity: .3;
      transition: all .3s ease-in-out;
    }

  }

  .song-info {
    .song-name {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-left: 20px;

      .name {
        font-size: 12px;

      }

      .artist-name {
        color: var(--brandColor)
      }
    }

    .song-item {
      margin-left: 20px;
      display: flex;
      align-items: flex-end;

      .text-slate-400 {
        margin: 0px 5px 0 0;
      }
    }
  }

  .badge {
    .el-badge__content {}
  }
}
</style>
