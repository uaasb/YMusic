<template>
    <div class="discover">
        <!-- <Banner></Banner> -->
        <Title>
            <h1 class="command pointer vertical-middle">推荐歌单
                <!-- <el-icon style="vertical-align: middle ;color:var(--brandColor)">
                    <DArrowRight />
                </el-icon> -->
            </h1>
        </Title>
        <RecommendedList></RecommendedList>
        <Title>
            <h2 class="commandList pointer" size="larger">新歌放送
                <!-- <el-icon style="vertical-align: middle;color:var(--brandColor)">
                    <DArrowRight />
                </el-icon> -->
            </h2>
        </Title>
        <RecommendedSong></RecommendedSong>
        <Title>
            <h2 class="commandList pointer" size="larger">推荐MV
                <!-- <el-icon style="vertical-align: middle;color:var(--brandColor)">
                    <DArrowRight />
                </el-icon> -->
            </h2>
        </Title>
        <RecommendedListMV></RecommendedListMV>

    </div>
</template>
<script setup lang='ts'>
import Banner from '@/components/Banner.vue';
import Title from '@/components/Title.vue'
import RecommendedList from '@/components/RecommendedList.vue'
import RecommendedListMV from '@/components/RecommendedMV.vue'
import RecommendedSong from '@/components/RecommendedSong.vue'
</script>
<style lang='less' scoped>
.discover {
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.banner {
    margin-top: 20px;
}

.command {
    margin: 5px 0;
    color: #fff;
    font-size: 20px;

    margin-top: 10px;
    margin-left: 20px;
}

.commandList {
    margin: 5px 0;
    color: #fff;
    font-size: 10px;
    margin-left: 20px;
}
</style>