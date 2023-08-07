<template>
    <div class="search-detail ">
        <span class="text-6xl">“<span class=" text-brandColor">{{ $route.query.keyWords }}</span>”的搜索结果</span>
        <el-tabs class="" v-model="searchType">
            <el-tab-pane label='歌曲' name="music">
                <Songs :keywords="($route.query.keyWords as string)"></Songs>
            </el-tab-pane>
            <el-tab-pane lazy label='歌单' name="songList">
                <PlayLists :keywords="($route.query.keyWords as string)"></PlayLists>
            </el-tab-pane>
            <el-tab-pane lazy label='歌手' name="artist">
                <Artist :keywords="($route.query.keyWords as string)"></Artist>
            </el-tab-pane>

        </el-tabs>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import Songs from '@/views/Songs.vue'
import Artist from '@/views/Artist.vue'
import PlayLists from '@/views/PlayLists.vue'
let searchType = ref('music')

</script>
<style lang='less' scoped>
.search-detail {
    .el-tabs {
        margin-left: 10px;

        .el-tabs-header {
            .el-tabs-nav-wrap {
                .el-tabs__nav-scroll::after {
                    height: 0;

                    .el-tabs__item {
                        color: white;
                        display: none;
                    }
                }
            }
        }
    }

    margin-left: 10px;



}
</style>