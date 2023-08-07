import { showLyric } from "@/models/showLyric";

export function useNumberFormat(number: number): string | number {


    if (number > 100000000) {
        return Number((number / 100000000).toFixed(1)) + ' 亿';
    }

    if (number > 10000000) {
        return Number((number / 10000000).toFixed(1)) + ' 千万';
    }

    if (number > 10000) {
        return Number((number / 10000).toFixed(1)) + ' 万';
    }

    return number;
}

export function useFormatDuring(during: number) {
    if (typeof during != 'number') {
        return '00:00'
    }
    const s = Math.floor(during) % 60;
    const i = Math.floor(during / 60);



    return (i < 10 ? `0${i}` : i) + ':' + (s < 10 ? `0${s}` : s);

}
export function sortLyric(lyric: showLyric) {
    lyric.time
}
export function formateTime(time: string) {
    let newArr = []
    time.split(':').forEach((t, i) => { if (i == 0) { newArr[0] = t.substring(1, 3) } else { newArr[1] = t.split('.')[0].substring(0, 2); newArr[2] = t.split('.')[1].substring(0, 2) } })

    return (parseInt(newArr[0]) * 60 + parseInt(newArr[1])) * 1000 + parseInt(newArr[2]);
}
