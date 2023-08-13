<template>
  <div class="home">
    <!-- <Aside class="aside"></Aside> -->
    <transition name="tabs_up">
      <Menu v-show="fold.$state.isOpen" class="menu"></Menu>
    </transition>
    <Header class="header"></Header>


    <el-scrollbar max-height="700px">
<<<<<<< HEAD
      <RouterView class="router-view" />
=======
      <Suspense>
        <RouterView class="router-view" />
      </Suspense>

>>>>>>> a68e5b0 (8.10)
    </el-scrollbar>
  </div>
  <Teleport to="body">
    <Footer class="footer"></Footer>
  </Teleport>
  <PlayList></PlayList>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import Aside from '../components/Aside.vue'
import Menu from '../components/Menu.vue'
import PlayList from '../components/PlayList.vue'
import Header from '../components/Header.vue'
import { useFold } from '@/stores/Fold'
import { PlayListDetail } from '@/models/playlist'
import Footer from '@/components/Footer.vue'
const fold = useFold()
import { init } from '@/utils/init'
init()

</script>
<style lang='less' scoped>
.home {
  background: var(--contentBackground);
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}


.footer {
  position: fixed;
  bottom: 0;
  height: 70px;
  padding: 10px;
  background: var(--contentBackground);
}

.router-view {
  position: relative;
  margin-top: 70px;
  margin-bottom: 120px;
  width: 100%;
  transition: all .3s ease-in-out;
}

.el-scrollbar {
  width: 100%;
  position: relative;
}
</style>