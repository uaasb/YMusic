<template>
    <div class="RL">
        <div class="personLists" v-for="songList in personalized" :key="songList.id">
            <div class="personList pointer" @click="$router.push({ name: 'playlist', query: { id: `${songList.id}` } })">
                <!-- <img class="songListCover" :src="songList.picUrl" :alt="songList.name"> -->
                <CoverPlay :name="songList.name" :pic-url="songList.picUrl" :play-count="songList.playCount"
                    show-play-count />
                <div class=" songListName">{{ songList.name }}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { useMusicStore } from '@/stores/music';
import { storeToRefs } from 'pinia';
import { onMounted, onUpdated, toRaw } from 'vue'
import CoverPlay from '@/components/CoverPlay.vue'
const music = useMusicStore()
const { personalized } = storeToRefs(useMusicStore())
const { getPersonalized } = music
onMounted(async () => {
    await getPersonalized()
    personalized.value.length > 15 ? personalized.value.splice(0, 15) : ''
})
onUpdated(async () => {
    personalized.value.length > 15 ? personalized.value.splice(0, 15) : ''
})
</script>
<style lang='less' scoped>
body {
    font-size: 12px;

}

html {
    font-size: 16px !important;
}

.personList {
    position: relative;
    height: 200px;
    width: 160px;
    margin: 15px 10px 5px 10px;
    font-size: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

}



.songListName {
    position: relative;
    width: 100%;
    font-size: .4em;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    color: white;

    &:hover {
        color: var(--brandColor)
    }
}

.RL {
    display: flex;
    flex-wrap: wrap;
}

.songListCover {
    height: 60px;
    width: 60px;
    border-radius: 10px;
    object-fit: cover;
}
</style>