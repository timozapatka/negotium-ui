import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/Index.vue'), meta: { type: 'application',  title: 'app.title.home', icon: 'home', description: 'app.description.home', public: true }},
    ],
  },
  {
    name: 'legal',
    path: '/legal/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { name: 'impress', path: '/legal/impress/', component: () => import('pages/Index.vue'), meta: { type: 'footer', title: 'footer.impress', public: true } },
      { name: 'privacy', path: '/legal/privacy/', component: () => import('pages/Index.vue'), meta: { type: 'footer', title: 'footer.privacy', public: true } },
      { name: 'terms', path: '/legal/terms/', component: () => import('pages/Index.vue'), meta: { type: 'footer', title: 'footer.usage' } },

    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Error/404.vue') }
    ]
  },
];

export default routes;
