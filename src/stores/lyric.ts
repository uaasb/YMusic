import { defineStore, storeToRefs } from "pinia"
import { useSongLyric } from '@/api/api'
import { lyricArt } from "@/models/lyricArt"
import { lyric } from '@/models/lyric'
import { store } from '@/stores/store'
import { showLyric } from "@/models/showLyric"
import { formateTime } from '@/utils/number'
import { ref } from 'vue'
export const useLyric = defineStore('lyric', {

    state: () => ({
        lyric: " ",
        lyArr: [] as lyric[],
        artArr: [] as lyricArt[],
        showLyric: [] as showLyric[]
    }),
    actions: {
        async getLyric(id: number) {
            this.lyric = ref(await useSongLyric(id))
        },
        changeLyric(lyrics: lyric[]) {
            this.lyArr = lyrics
        },
        changeArtist(lyricArts: lyricArt[]) {
            this.artArr = lyricArts
        },
        mergeLyric(lyArr: lyric[], artArr: lyricArt[]) {
            let that = this
            if (that.showLyric != null) {
                that.showLyric = []
            }
            if (lyArr.length !== 0) {
                lyArr.forEach((ly: lyric) => {
                    that.showLyric.push({
                        time: formateTime(ly.time),
                        showContent: ly.lyricContent
                    })
                })
            }
            if (artArr.length !== 0) {
                artArr.forEach((art) => {
                    that.showLyric.push({
                        time: art.t,
                        showContent: art.c.reduce((pre, obj) => { return pre + (obj.tx ? obj.tx : obj.li ? obj.li : obj.or) }, "")
                    })
                })
            }
            that.showLyric.sort((a: showLyric, b: showLyric) => a.time - b.time)
            console.log(that.showLyric)
        }

    }
})
export function useLyricStoreWithOut() {
    return useLyric(store)
}
