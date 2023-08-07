<template>
    <div class="RL">
        <div class="personListMv" v-for="mv in personalizedMv" :key="mv.id">
            <div class="personListMv pointer" @click='godetailMv(`${mv.id}`)'>
                <!-- <img class="songMVListCover" :src="mv.picUrl" :alt="mv.name"> -->
                <CoverPlay :name="mv.name" :pic-url="mv.picUrl" :play-count="mv.playCount" show-play-count />
                <el-text class="mx-1 w-100px h-8" size="small" truncated>{{ mv.artistName }}&nbsp;&nbsp;{{ mv.name
                }}</el-text>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { useVideoStore } from '@/stores/video';
import { storeToRefs } from 'pinia';
import { onMounted, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import CoverPlay from '@/components/CoverPlay.vue'
const mv = useVideoStore()
const router = useRouter()
const { personalizedMv } = storeToRefs(useVideoStore())
const { getPersonalizedMv } = mv
onMounted(async () => {
    await getPersonalizedMv()
    personalizedMv.value.length > 10 ? personalizedMv.value.splice(0, 10) : ''
})
const godetailMv = (id) => {
    router.push({
        name: 'mvDetail',
        query: {
            id: id
        }
    })
}
</script>
<style lang='less' scoped>
body {
    font-size: 12px;
}

html {
    font-size: 12px !important;
}

.personListMv {
    height: 150px;
    width: 200px;
    margin: 1px 15px 5px 15px;
    font-size: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
}

.RL {
    display: flex;
    flex-wrap: wrap;

}

.songMVListCover {
    height: 70px;
    width: 200px;
    border-radius: 10px;
    object-fit: cover;
}
</style>