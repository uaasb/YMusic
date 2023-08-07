<template>
    <aside>
        <div class="nav">
            <div class="nav_item"><router-link to="/discover">发现音乐</router-link></div>
            <div class="nav_item"><router-link to="/music">更多音乐</router-link></div>
            <div class="nav_item"><router-link to="/my">我的</router-link></div>
            <div class="nav_item"><router-link to="/mf">电台</router-link></div>

        </div>
    </aside>
</template>
<script setup lang='ts'>

</script>
<style lang='less' scoped>
aside {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--headerBackground);
    width: 100px;
    z-index: 100;

    .nav {
        color: var(--fnot-color);
        position: relative;
        top: 0;
        margin: 40px 20px;

        height: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        .nav_item {
            box-sizing: border-box;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-radius: 5px;
            width: 100px;
            height: 30px;
            padding-left: 10px;
            transition: 0.5s ease;
            margin-bottom: 20px;

            a {
                font-size: 18px;
                font-weight: 700;
                transition: .4s ease-in-out;
                // transform: scale(0.7);
                // transform-origin: 0 0;
                white-space: nowrap;

            }
        }

    }

}

.nav_item:hover a {
    color: var(--brandColor)
}
</style>