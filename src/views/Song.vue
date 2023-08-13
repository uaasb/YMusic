<template>
    <div class="container">
        <div class="menu-icon">
            <img src="../assets/img/Quicker_20230730_101819.png" class="top" :class="isPlaying ? 'topActive' : ''" alt="">
            <img src="../assets/img/singlecover.png" ref="icon" class="icon" :class="isPlaying ? 'active' : ''" alt="">
            <img :src="song.al.picUrl" class="alPic" :class="isPlaying ? 'active' : ''" ref="pic">

        </div>
        <div class="lyric">
            <div class="detail-song">
                <h2>{{ song.name }}</h2>
            </div>
            <div class="artist">
                <span class="artist-name pointer mr-8">{{ song.ar[0].name }}</span>
                <span class="al-name pointer">{{ song.al.name }}</span>
            </div>
            <el-scrollbar height="350px" ref="scrollbar">
                <ul class="ul" :class="transform" ref="lyricUl">
                    <li class="ly" v-for="(ly, i) in showLyric" :class="currIndex == i ? 'activeLyric' : ''" :key="ly.time">
                        {{ ly.showContent }}
                    </li>
                </ul>
            </el-scrollbar>
        </div>

    </div>
</template>
<script  setup lang='ts'>
<<<<<<< HEAD
import { usePlayerStore } from '@/stores/player';
import { storeToRefs } from 'pinia'
=======
console.log("setup")
import { usePlayerStore } from '@/stores/player';
import { storeToRefs } from 'pinia'
import { Song } from '@/models/song';
>>>>>>> a68e5b0 (8.10)
import { useLyric } from '@/stores/lyric'
import { ElScrollbar, ScrollbarContext } from 'element-plus';
import { onMounted, onUpdated, onBeforeUpdate, onBeforeMount, watchEffect, ref, watch } from 'vue';
import { parse } from '@/utils/parseLyric'
const { song, currentTime, duration, isPlaying } = storeToRefs(usePlayerStore())
<<<<<<< HEAD
const { getLyric } = useLyric()
await getLyric(song.value.id)
const { artArr, lyArr, showLyric } = storeToRefs(useLyric())
const { lyric } = storeToRefs(useLyric())
parse(lyric.value)
const lyricUl = ref(null)
let transform = ref("")
let currIndex = ref(0)
const scrollbar = ref(null)
const icon = ref(null)
const pic = ref(null)
// onBeforeUpdate(async () => {
//     await getLyric(song.value.id)
//     console.log(lyric.value)
//     console.log(typeof lyric.value)
//     parse(lyric.value)
// })
console.log(showLyric)
=======
const Lyric = useLyric()
const lyricUl = ref(null)
let transform = ref("")
let currIndex = ref(0)
const { getLyric } = useLyric()
await getLyric(song.value.id)
const { artArr, lyArr, showLyric } = storeToRefs(Lyric)
let { lyric } = storeToRefs(Lyric)
parse(lyric.value)
const scrollbar = ref(null)
const icon = ref(null)
const pic = ref(null)

>>>>>>> a68e5b0 (8.10)
onMounted(() => {
    let toTop = 0;
    watch(currentTime, () => {
        showLyric.value.forEach((ly, i, arr) => {
            // if (i == arr.length - 1) {
            //     currIndex.value = i
            //     return
            // }
<<<<<<< HEAD
            if (ly.showContent && arr[i].time <= currentTime.value * 1000 && arr[i + 1].time > currentTime.value * 1000) {
=======
            if (ly.showContent && arr[i].time <= currentTime.value * 1000 && arr[i + 1]?.time > currentTime.value * 1000) {
>>>>>>> a68e5b0 (8.10)
                toTop = lyricUl.value.children[i].offsetTop
                scrollbar.value.setScrollTop(toTop)
                currIndex.value = i
            }

        })
    })
<<<<<<< HEAD
})

=======

})

watch(song, async (newSong) => {
    console.log(newSong)
    await getLyric(newSong.id)
    console.log(lyric.value)
    parse(lyric.value)
})
>>>>>>> a68e5b0 (8.10)

</script>
<style lang='less' scoped>
.container {
    position: relative;
    padding-top: 40px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: translate();
    margin-top: 30px;
    color: var(--contentBackground);
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .menu-icon {
        position: relative;
        top: 60px;
        height: 500px;
        width: 500px;
        margin-right: 200px;
        // background-image: url("..\assets\img\singlecover.png");
        background-position: center;
        background-repeat: no-repeat;
        // overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        .top {
            position: absolute;
            z-index: 999;
            height: 160px;
            width: auto;
            top: -100px;
            left: 140px;
            transition: all .5s ease;
            transform-origin: 57px 28px;
            object-fit: contain;
        }

        .active {
            animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
            0% {
                transform: rotateZ(0deg);
                /*从0度开始*/
            }

            100% {
                transform: rotateZ(360deg);
                /*360度结束*/
            }
        }

        .topActive {
            // transform-origin: 50px 28px;
            transform: rotate(32deg);
        }

        .icon {
            position: absolute;
            left: 40px;
            top: 40px;
            height: 400px;
            width: 400px;
            z-index: 30;
            object-fit: contain;
        }

        .alPic {
            position: absolute;
            left: 110px;
            top: 115px;
            height: 258px;
            width: 258px;
            z-index: 1;
            object-fit: fill
        }

    }

    .lyric {
        width: 500px;

        overflow-x: hidden;

        .detail-song {
            color: white;

            font-size: 35px;

            &:hover {
                color: var(--brandColor)
            }
        }

        .artist {
            color: white;

            &:hover {
                color: var(--brandColor)
            }
        }

        .el-scrollbar {
            margin-top: 30px;
            position: relative;

            .el-scrollbar__wrap {
                margin-top: 30px;
                overflow: hidden;
            }

            .el-scrollbar__view {
                position: relative;
                height: 100%;
                width: 100%;
                color: white;
                margin: 20px;
                overflow: hidden;
                transition: all .2s ease;

                ul {
                    position: relative;
                    left: 0;
                    top: 0;
                    margin-top: 200px;
                }

                .ly {
                    font-size: 16px;
                    margin: 30px 50px 0px 0px;
                    transition: font-size .2s ease-in-out;

                    &:nth-child(1) {
                        margin-top: 40px;
                    }
                }



                .el-scrollbar__thumb {
                    transition: all .3s ease-out;
                }

                .activeLyric {
                    color: var(--brandColor);

                }

            }
        }
    }


}



.ly {
    color: white;

}
</style>