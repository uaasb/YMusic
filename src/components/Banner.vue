<template>
    <div class="banner">
        <el-carousel height="100px" indicator-position="none" :interval="2000">
            <el-carousel-item v-for="item in banners" :key="item.targetId" height="70px">
                <img :src="item.imageUrl" justify="center" class="banner-image" @click="onClick(item)" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script setup lang='ts'>
import { useBanner } from '@/stores/Banner';
import { onMounted, toRefs, ref, reactive } from 'vue';
import { Banner } from '@/models/banner'
import { useRouter } from 'vue-router'
import vueSeamlessScroll from 'vue-seamless-scroll'

const { banners } = toRefs(useBanner())
const { getBanners } = useBanner()

const router = useRouter()
onMounted(async () => {

    await getBanners()
    banners.value.length > 5 ? banners.value.splice(0, 5) : ""
})


const onClick = (banner: Banner) => {
    router.push({
        path: '/song',
        query: {
            id: banner.song.id
        }
    })
}
</script>
<style lang='scss' scoped>
img {
    height: 100%;
    width: 100%;
    background-position: center;
    object-fit: fill;
    border-radius: 15px;
}

.el-carousel-item {
    border-radius: 15px;
}

.el-carousel {
    border-radius: 15px;
}

.banner {
    margin-top: 20px;
    width: 350px;
    margin-left: 10px;
    height: 100px;
    border-radius: 15px;
}

// swiper {
//     width: 200px;
//     height: 100px;
//     display: flex;
//     justify-content: center;

//     SwiperSlide {

//         @apply w-full lg: w-1/2 xl:w-1/3 2xl:w-1/4 px-2.5;
//     }
// }

// .banner-image {
//     height: 100px;
//     width: 200px;
//     @apply rounded-lg cursor-pointer transition-all object-cover;
//     @apply hover: shadow hover:opacity-80;
// }
</style>