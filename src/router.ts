import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import Works from './views/Works.vue';
// import Team from './views/Team.vue';
// import Contacts from './views/Contacts.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
      return {x: 0, y: 0};
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/works',
    //   name: 'works',
    //   component: Works,
    // },
    // {
    //   path: '/team',
    //   name: 'team',
    //   component: Team,
    // },
    // {
    //   path: '/contacts',
    //   name: 'contacts',
    //   component: Contacts,
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
