import { Notify } from 'quasar';
import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { StateInterface } from '../store';
import routes from './routes';

export type RouteMeta = Record<string | number | symbol, undefined>
export default route<StateInterface>(function ({ store }) {
  const createHistory =
    process.env.SERVER
      ? createMemoryHistory
      : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  Router.beforeEach((to, from, next) => {
    if (!to.meta.public && !store.state.User.authenticated) {
      store.dispatch('User/login').catch(function (error:Error) {
        Notify.create({
          type: 'error',
          message: error.message
        });
      });
      next();
    }
    next();
  })

  return Router;
});
