import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
      return {x: 0, y: 0};
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/main',
      children: [
        {
          path: '/:id',
          name: 'main',
          component: Home,
        },
      ],
    },
    {
      path: '*',
      name: 'Page404',
      component: Home,
      meta: {isPublic: true},
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   console.log('to', to)
//   console.log('from', from)
//   next();
// })

export default router;
