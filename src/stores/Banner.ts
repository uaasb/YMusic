import { defineStore,storeToRefs } from "pinia";
import {ref} from 'vue'
import { Banner } from '@/models/banner'
import {apiBanner} from '@/api/api'
export const useBanner=defineStore('banner',()=>{
    const banners=ref<Banner[]>();
    const getBanners=async ()=>{
        // if(banners.value.length) return
        banners.value=await apiBanner()
    }
    return {
        banners,
        getBanners
    }
})