import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useLyricStoreWithOut } from '../stores/lyric'
import { ElMessage } from 'element-plus'
const lyricStore = useLyricStoreWithOut()
const routes: RouteRecordRaw[] = [{
  name: 'index',
  path: '/',
  component: () => import('../views/Home.vue'),
  redirect: { name: 'discover' },
  children: [
    {
      name: 'discover',
      path: 'discover',
      component: () => import('../views/Discover.vue')
    },
    {
      name: 'my',
      path: 'my',
      component: () => import('../views/My.vue')
    },
    {
      name: 'mf',
      path: 'mf',
      component: () => import('../views/Mf.vue')
    }, {
      name: 'song',
      path: 'song',
      component: () => import('../views/Song.vue')
    },
    {
      name: 'music',
      path: 'music',
      redirect: { name: 'picked' },
      component: () => import('../views/Music.vue'),
      children: [
        {
          path: 'picked',
          name: 'picked',
          component: () => import("../views/Picked.vue"),
          meta: {
            menu: 'music',
            keepAlive: true,
          }
        },
        {
          path: 'toplist',
          name: 'toplist',
          component: () => import("../views/TopList.vue"),
          meta: {
            menu: 'music',
            keepAlive: true,
          }
        },
        {
          path: 'artist',
          name: 'artist',
          component: () => import("../views/Artist.vue"),
          meta: {
            menu: 'music',
            title: '歌手',
            keepAlive: true,
          }
        },
        {
          path: 'category',
          name: 'category',
          component: () => import('../views/Category.vue'),
          meta: {
            menu: 'music',
            title: '分类歌单',
            keepAlive: true,
          }
        },
        {
          path: 'radiostation',
          name: 'radiostation',
          component: () => import('../views/Radiostation.vue'),
          meta: {
            menu: 'music',
            title: '电台',
            keepAlive: true,
          }
        }
      ]
    },
    {
      path: 'playlist',
      name: 'playlist',
      component: () => import('../views/PlayList.vue'),
    },
    {
      path: 'artistDetail',
      name: 'artistDetail',
      component: () => import('../views/ArtistDetail.vue'),
    },
    {
      path: 'album',
      name: 'album',
      component: () => import('../views/AlbumDetail.vue'),
    },
    {
      path: 'video',
      name: 'video',
      component: () => import('../views/Video.vue'),
      meta: {
        menu: 'video',
        title: '视频',
        keepAlive: true,
      }
    },
    {
      path: 'dj',
      name: 'dj',
      component: () => import('../views/DJ.vue'),
      meta: {
        menu: 'dj',
        title: '电台',
        keepAlive: true,
      }
    },
    {
      path: 'mvDetail',
      name: 'mvDetail',
      component: () => import('../views/mvDetail.vue'),
    }, {
      path: 'search',
      name: 'search',
      component: () => import('../views/Search.vue')
    }
  ]
},]

const router = createRouter({
  history: createWebHashHistory(),
  routes

})
router.beforeEach((from, to, next) => {
  if (to.path == '/my') {
    if (!localStorage.getItem('profile')) {
      ElMessage.info({
        message: '请登录'
      })
      return
    }
  }
  next()
})


export default router
