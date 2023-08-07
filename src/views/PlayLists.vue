<template>
    <div class="grid grid-flow-row gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-8 mb-10">
        <div v-for="playList in playLists" :key="playList.id" class="h-40 w-40  delay-150 relative m-8">
            <img :src="playList.coverImgUrl"
                class="pointer h-full w-full rounded-xl mb-4 hover:-translate-y-3 transition ease-out  duration-250 "
                @click="$router.push({ name: 'playlist', query: { id: `${playList.id}` } })">
            <span class="text-white hover:text-brandColor pointer ">{{ playList.name }}</span>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { useSearchPlayList } from '@/api/api';
import { PlayListDetail } from '@/models/playlist'
const props = defineProps<{
    keywords: string
}>()
const playLists = ref<PlayListDetail[]>([])
const getData = async () => {
    let lists = await useSearchPlayList(props.keywords)
    console.log(playLists)
    playLists.value.push(...lists)
}



onMounted(async () => {
    await getData()
    console.log(playLists)
})
</script>
<style lang='less' scoped></style>