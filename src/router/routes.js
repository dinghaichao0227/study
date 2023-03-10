import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/jsonView',
    name: 'jsonView',
    component: () => import('../views/ceshi/jsonView.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/LoginView.vue'),
  },
  {
    path: '/boot',
    name: 'BootStrap',
    component: () => import('../views/BootStrap.vue'),
    children: [
      {
        path: '/boot/home',
        name: 'HomeView',
        component: () => import('../views/bootstrap/HomeView.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'AdminView',
    component: () => import('../views/AdminView.vue'),
    redirect: 'one',
    children: [
      {
        path: '/one',
        name: 'NavigatorOne',
        component: () => import('../views/component/NavigatorOne.vue'),
      },
      {
        path: '/two',
        name: 'NavigatorTwo',
        component: () => import('../views/component/NavigatorTwo.vue'),
      },
      {
        path: '/tree',
        name: 'NavigatorTree',
        component: () => import('../views/component/NavigatorTree.vue'),
      },
      {
        path: '/four',
        name: 'NavigatorFour',
        component: () => import('../views/component/NavigatorFour.vue'),
      },
      {
        path: '/five',
        name: 'NavigatorFive',
        component: () => import('../views/component/NavigatorFive.vue'),
      },
    ],
  },
];

export default routes;
