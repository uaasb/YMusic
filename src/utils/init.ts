import type { profile } from "@/models/login";
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
const { profile } = storeToRefs(useUserStore())
export function init() {
    //获取profile
    let myprofile: profile = JSON.parse(localStorage.getItem('profile'))
    profile.value = myprofile
    const router = useRouter()
    const route = useRoute()
    if (myprofile) {
        router.addRoute('index', {
            name: 'my',
            path: 'my',
            component: () => import('@/views/My.vue')
        })
    }
}