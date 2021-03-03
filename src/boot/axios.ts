import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { LoadingBar } from 'quasar';
import { Notify } from 'quasar';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

const api = axios.create({ baseURL: process.env.ApiBaseUrl });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  axios.interceptors.request.use((config) => {
    LoadingBar.start()
    return config
  }, (error) => {
    LoadingBar.stop()
    Notify.create(error)
    return Promise.reject(error)
  });

  axios.interceptors.response.use((response) => {
        LoadingBar.start()
        return response
    }, (error) => {
        LoadingBar.stop()
        Notify.create(error)
        return Promise.reject(error)
    })

  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;  
});

export { axios, api };
