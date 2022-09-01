import Vue from 'vue';
import VueRouter from 'vue-router';
import GoogleAuth from '../components/google';
import KakaoAuth from '../components/kakao';
Vue.use(VueRouter);

let routes = [
  {
    path: '/google',
    name: 'google',
    component: GoogleAuth,
    meta: {
      auth: true,
    },
  },
  {
    path: '/kakao',
    name: 'kakao',
    component: KakaoAuth,
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeResolve(auth.navigationGuard)

export default router;
