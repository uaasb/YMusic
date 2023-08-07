<template>
    <div class="RL">
        <div class="newSong pointer" @click="play(newSong.id)" v-for="newSong in personalizedNewSong" :key="newSong.id">
            <div class="newSongCover"><img class="cover" :src="newSong.picUrl" :alt="newSong.name"></div>


            <el-icon class="play" size="40">
                <CaretRight />
            </el-icon>

            <div class="name">
                <span class="newSongName">{{ newSong.name }}</span>
                <span class="newSongartists">{{ newSong.song.artists[0].name }}</span>
            </div>


        </div>
    </div>
</template>
<script setup lang='ts'>
import { useMusicStore } from '@/stores/music';
import { storeToRefs } from 'pinia';
import { onMounted, onUpdated, toRaw } from 'vue'
import { usePlayerStore } from '@/stores/player';
const { play } = usePlayerStore()
const music = useMusicStore()
const { personalizedNewSong } = storeToRefs(useMusicStore())
const { getPersonalizedNewSong } = music
onMounted(async () => {
    await getPersonalizedNewSong()
    personalizedNewSong.value.length > 16 ? personalizedNewSong.value.splice(0, 16) : ''
})
onUpdated(async () => {
    personalizedNewSong.value.length > 16 ? personalizedNewSong.value.splice(0, 16) : ''
})
</script>
<style lang='less' scoped>
body {
    font-size: 12px;
}

html {
    font-size: 16px !important;
}

.newSong {
    position: relative;
    height: 80px;
    width: 350px;
    margin: 15px 10px 5px 10px;
    font-size: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;

    .newSongCover {
        position: relative;
        height: 80px;
        width: 80px;
        border-radius: 5px;

        .cover {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
    }

    .play {
        color: var(--brandColor);
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transition: all .3s ease-out;
        transform: translate(-155px; -50%; );
    }

    &:hover .newSongCover::after {
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: rgb(8, 8, 8);
        opacity: .4;
        transition: all .2 ease-out;
    }

    &:hover .play {
        opacity: 1;
    }

}

.newSong:hover {
    background: var(--bg-brandcolor);

}


.RL {
    display: flex;
    flex-wrap: wrap;
}


.name {
    display: flex;
    margin-left: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 14px 0;

    .newSongName,
    .newSongartists {
        position: relative;
        width: 100%;
        font-size: .8em;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        white-space: nowrap;
        color: var(--brandColor);
    }

    .newSongName {
        font-size: .8em;
        margin-bottom: 15px;
        color: #fff;
    }

}
</style>