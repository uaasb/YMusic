import{ Song} from '@/models/song'
export interface Banner{
    pic?:string
    targetId:number
    targetType:number
    typeTitle:string
    bannerId:number
    song:Song,
    imageUrl:string
}