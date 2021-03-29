import { boot } from 'quasar/wrappers';
import { Notify } from 'quasar';
import Keycloak from 'keycloak-js';

const keycloak = Keycloak({
    url: process.env.KEYCLOAK_IDP_URL,
    realm: process.env.KEYCLOAK_IDP_REALM ||'',
    clientId: process.env.KEYCLOAK_IDP_CLIENT ||'',
});

export default boot(({store}) => {
  keycloak.init({
    checkLoginIframe: false
  }).then(function () {
    store.dispatch('User/setProvider', keycloak).then(function (){
      store.dispatch('User/loadProfile').catch(function (error:Error) {
      Notify.create({
        type: 'error',
        message: error.message
      });
    });
    }).catch(function (error:Error) {
      Notify.create({
        type: 'error',
        message: error.message
      });
    });
  }).catch(function (error: Error) {
      Notify.create({
        type: 'error',
        message: error.message
      });
  });
});