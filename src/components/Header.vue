<template>
    <div class="header flex items-center" :class="!fold.$state.isOpen ? 'header-0' : ''">
        <div @click="fold.$state.isOpen = !fold.$state.isOpen" style="cursor: pointer;position:relative" class="w-5 shrink">

            <Expand class="icon" v-if="fold.$state.isOpen"
                style="width: 1em; height: 1em; margin-right: 8px;color:var(--brandColor)" />
            <Fold class="icon" v-else style="width: 1em; height: 1em; margin-right: 8px;color:var(--brandColor)" />

        </div>
<<<<<<< HEAD
        <div class="logo ml-5"><img src="src\assets\img\logo.png"
=======
        <div class="logo ml-5"><img src="../assets/img/logo.png"
>>>>>>> a68e5b0 (8.10)
                class="h-10 pointer mr-7 object-contain shrink justify-start" alt=""
                @click="$router.push({ name: 'index' })"></div>

        <div class="controller  mb-3  shrink mr-40 ">
            <el-icon size="22" class="mr-10 pointer hover:text-brandColor align-middle" @click="$router.go(-1)">
                <ArrowLeft class="" />
            </el-icon>
            <el-icon size="22" class="pointer hover:text-brandColor" @click="$router.go(1)">
                <ArrowRight />
            </el-icon>
        </div>
        <div class="ipt flex-1">
            <el-input v-model="searchText" textareaStyle="{background-color:yellow}" class=" input" size="small"
                placeholder="" :suffix-icon="Search" @keyup.enter="search" />
        </div>
        <div class="avatar flex align-center flex-1" @click="uplogin">
            <el-avatar :src="profile?.avatarUrl" size="small" class="pointer" />
<<<<<<< HEAD
            <span class="hover:text-brandColor ml-6 pointer">{{ profile.nickname ? profile.nickname : '未登录' }}</span>
=======
            <span class="hover:text-brandColor ml-6 pointer">{{ profile?.nickname ? profile.nickname : '未登录' }}</span>
>>>>>>> a68e5b0 (8.10)
        </div>
        <el-dialog v-model="centerDialogVisible" title="登录" width="40%" align-center>
            <span>使用网易云app扫描二维码登录</span>
            <div class="img" :class="loginExpired ? 'active' : ''" @click="refresh">
                <img class="qrimg" :src="qrImg ? qrImg : ''" alt="二维码">
                <el-icon class="qricon" v-if="loginExpired" size="16">
                    <Refresh />
                </el-icon>
            </div>
        </el-dialog>
    </div>
</template>
<script setup lang='ts'>
import { ref, toRaw, watch, watchEffect } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useFold } from '@/stores/Fold'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
const searchText = ref<string>()

const fold = useFold()
const difFold = toRaw(fold.isOpen)
const open = ref()
const showSearchView = ref()
let { profile, qrUrl, qrImg, data: user, loginExpired, centerDialogVisible, timer } = storeToRefs(useUserStore())
const { qrLogin, qr } = useUserStore()
const router = useRouter()
console.log(fold.$state.isOpen)

// watch(loginExpired, (newValue) => {
//     console.log("loginExpired" + loginExpired.value)
//     if (newValue) {

//     }
// })
watch(centerDialogVisible, async (newValue) => {
    console.log(centerDialogVisible.value)
    if (!newValue) {
        clearInterval(timer.value)
    } else {
        await qr()
        await qrLogin()
    }
})
console.log(qrUrl)
console.log(qrImg)
console.log(profile)
watchEffect((newValue) => {
    if (!profile) {
        profile = JSON.parse(localStorage.getItem('profile'))
    }
    console.log(profile.value)
})
const uplogin = () => {
    if (localStorage.getItem('profile')) {
        return
    }
    centerDialogVisible.value = true

}
if (user) {
    console.log(user)
}
const refresh = () => {
    clearInterval(timer.value)
    qr()
    qrLogin()
    loginExpired.value = false
}
const search = () => {
    if (searchText.value && searchText.value != '')
        router.push({
            name: 'search', query: {
                keyWords: searchText.value
            }
        })
}
const getProfile = () => {

}
</script>
<style lang='less' scoped>
.input {
    justify-self: flex-start;
    width: 180px;
    height: 25px;
    outline: none;
    position: relative;
    cursor: pointer;
    padding: 5px 5px;
    border: 2px solid var(--brandColor);
    border-radius: 20px;
    // &::after {
    //     content: attr(con);
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     width: 190%; //注意这个宽度，不要为200%，不然会出现有的边框边缘显示不全问题
    //     height: 200%;
    //     display: inline-flex;
    //     align-items: center;
    //     justify-content: center;
    //     box-sizing: border-box;
    //     color: #fff;
    //     font-size: .2rem;
    //     text-align: center;
    //     border-bottom: 1px solid #fff;
    //     -webkit-transform-origin: 0 0;
    //     transform-origin: 0 0;
    //     -webkit-transform: scale(.6, .6);
    //     transform: scale(.5, .5);
    //     transition: all .3s ease;
    //     pointer-events: none;
    // }

    &:hover &::after {
        transition: all .3s ease;
        border-bottom: 1px solid yellow;
    }
}

.header {
    display: flex;
    position: fixed;
    top: 0px;
    left: 120px;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    background: var(--contentBackground);
    z-index: 200;
    transition: all .3s ease-in-out;

}

.header-0 {
    left: 20px;
}

.img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.active::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .3)
}

.none {
    display: none;
}

.qrimg {
    position: relative;
}

.qricon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

}

.icon {
    transition: all .4s ease-in-out;
}

// .pack_up-leave-active {
//     transition: all .3s;
// }

// .pack_up-enter-active {
//     transition: all .3s;
//     transform: translateX(100%);
// }

// .pack_up-enter-active {
//     transition-delay: .3s;
// }
</style>