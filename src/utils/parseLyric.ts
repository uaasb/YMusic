import { lyricArt } from "@/models/lyricArt";
import type { lyric } from '@/models/lyric';
import { Lyric } from '@/models/lyric'
import { useLyric } from "@/stores/lyric";

import { store } from "@/stores/store";
import { ref } from "vue";
import { storeToRefs } from "pinia";

export function parse(lyrics: string) {
  const lyricStore = useLyric();
  const { lyArr, artArr } = storeToRefs(lyricStore)
  const parseBef = (lyrics: string) => {
    var jsonLines = lyrics.trim().split('\n');

    // 解析每行为一个 JSON 对象
    var jsonObjects: lyricArt[] = []
    jsonLines?.forEach(element => {
      if (element.startsWith('{')) {
        jsonObjects.push(JSON.parse(element))
      }
    });
    lyricStore.changeArtist(jsonObjects)
    console.log(artArr);
  };

  const parseLy = (lyrics: string) => {

    var jsonLines = lyrics.trim().split('\n');
    // 解析每行为一个 JSON 对象
    var jsonObjects: lyric[] = []
    let reg = /\[\d{1,5}:\d{1,5}\.\d{1,5}\]/g
    jsonLines?.forEach(line => {
      if (line.startsWith('[')) {
        let matchs: string[] = line.match(reg)
        matchs?.forEach((match, i, arr) => {
          jsonObjects.push(new Lyric(match, line.slice(arr.length * match.length)))
        })
      }
    });
    lyricStore.changeLyric(jsonObjects)

    console.log(lyArr);

  };
<<<<<<< HEAD

  console.log(lyrics);
=======
>>>>>>> a68e5b0 (8.10)
  parseBef(lyrics);
  parseLy(lyrics);
  lyricStore.mergeLyric(lyArr.value, artArr.value)
}