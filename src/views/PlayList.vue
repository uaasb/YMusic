<template>
  <div class="playlist">
    <div class="p-6" v-if="playlist">
      <PlayListInfo :playlist="playlist" :play-all="() => playAll()" />
      <el-tabs class="mt-3" v-model="tab">
        <el-tab-pane lazy :label="`歌曲 ${songs.length}`" name="tracks">
          <SongList :songs="songs" />
        </el-tab-pane>
        <el-tab-pane lazy label="评论" name="comments">
          <el-empty></el-empty>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { usePlayListDetail, usePlayListTrackAll } from "@/api/api";
import PlayListInfo from "@/views/PlayListInfo.vue";
import SongList from "@/views/SongList.vue";
import type { PlayListDetail } from "@/models/playlist";
import type { Song } from "@/models/song";
import { usePlayerStore } from "@/stores/player";

const tab = ref('tracks')

const route = useRoute();
const playlist = ref<PlayListDetail>();
const songs = ref<Song[]>([]);

const { pushPlayList, play } = usePlayerStore()

const playAll = () => {
  pushPlayList(true, ...songs.value)

  play(songs.value.first().id)
}

const getData = () => {

  const id: number = Number(route.query.id);

  usePlayListDetail(id).then(res => {
    playlist.value = res
  })
  usePlayListTrackAll(id).then(res => {
    songs.value = res
  })
}
onMounted(getData)

</script>

<style lang="less">
.playlist {
  width: 100%;
  height: auto;

}

.el-tabs__active-bar {
  background: var(--brandColor);

}

.el-tabs__item {
  color: white;

  &:hover {
    color: var(--brandColor)
  }


}

.is-active {
  color: var(--brandColor) !important;
}
</style>
