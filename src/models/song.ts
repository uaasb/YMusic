
export interface Song {
    name: string;
    id: number;
    pst?: number;
    t?: number;
    ar?: SongAr[];
    alia?: string[];
    pop?: number;
    st?: number;
    rt?: any;
    fee?: number;
    v?: number;
    crbt?: any;
    cf?: string;
    al?: SongAl;
    dt?: number;
    h?: SongH;
    m?: SongM;
    l?: SongL;
    a?: any;
    cd?: string;
    no?: number;
    rtUrl?: any;
    ftype?: number;
    rtUrls?: any[];
    djId?: number;
    copyright?: number;
    s_id?: number;
    mark?: number;
    originCoverType?: number;
    originSongSimpleData?: any;
    tagPicList?: any;
    resourceState?: boolean;
    version?: number;
    songJumpInfo?: any;
    entertainmentTags?: any;
    single?: number;
    noCopyrightRcmd?: any;
    rtype: number;
    rurl?: any;
    mst?: number;
    cp?: number;
    mv?: number;
    publishTime?: number;
    album?: album
    artists?: artist[];
    duration?: number;
}
interface artist {
    id: number;
    name: string;
    picUrl?: any;
    alias: [];
    albumSize: number;
    picId: number;
    fansGroup?: any;
    img1v1Url: string;
    img1v1: number;
    trans?: any;
}
interface album {
    id: number;
    name: string;
    artist: Artist;
}

interface Artist {
    id: number;
    name: string;
    picUrl?: any;
    alias: [];
    albumSize: number;
    picId: number;
    fansGroup?: any;
    img1v1Url: string;
    img1v1: number;
    trans?: any;
}
export interface SongAr {
    id: number;
    name: string;
    tns: any[];
    alias: any[];
}

export interface SongAl {
    id: number;
    name: string;
    picUrl: string;
    tns: any[];
    pic_str: string;
    pic: number;
}

export interface SongH {
    br: number;
    fid: number;
    size: number;
    vd: number;
}

export interface SongM {
    br: number;
    fid: number;
    size: number;
    vd: number;
}

export interface SongL {
    br: number;
    fid: number;
    size: number;
    vd: number;
}
