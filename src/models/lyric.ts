export interface lyric {
    time: string,
    lyricContent: string
}
export class Lyric {
    time: string;
    lyricContent: string;
    constructor(time: string, lyricContent: string) {
        this.time = time;
        this.lyricContent = lyricContent
    }
}