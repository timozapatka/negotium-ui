import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UserInterface } from './state';
import { Notify } from 'quasar';

const actions: ActionTree<UserInterface, StateInterface> = {
    setProvider({commit}, keycloak:Keycloak.KeycloakInstance) {
        commit('setKeycloak', keycloak)
    },

    loadProfile({ state, commit }) {
        if (state.authenticated) {
            state.provider?.loadUserProfile().then(function(profile){
                commit('setProfile', profile);
            }).catch(function (error:Error){
                Notify.create({
                    type: 'error',
                    message: error.message
                });
            })
        }
    },

    login({ commit }){
        commit('login')
    },

    logout({ commit }){
        commit('logout')
    }
};

export default actions;
