import { MutationTree } from 'vuex';
import { UserInterface } from './state';
import { Notify } from 'quasar';

const mutation: MutationTree<UserInterface> = {

    setKeycloak(state:UserInterface, keycloak:Keycloak.KeycloakInstance) {
        state.provider      = keycloak;
        state.authenticated = keycloak.authenticated || false;
    },
    
    setProfile(state:UserInterface, profile:Keycloak.KeycloakProfile) {
        state.firstName = profile.firstName || '';
        state.lastName  = profile.lastName || '';
        state.fullname  = state.firstName +' '+ state.lastName;
        state.username  = profile.username;
        state.email     = profile.email;
    },

    login(state:UserInterface) {
        state.provider?.login().then(function (result){
            console.log(result);
        }).catch(function (error: Error) {
            Notify.create({
                type: 'error',
                message: error.message
            });
        });
    },

    logout(state:UserInterface) {
        state.authenticated = false;
        state.firstName = undefined;
        state.lastName  = undefined;
        state.fullname  = undefined;
        state.username  = undefined;
        state.email     = undefined;
        state.provider?.clearToken();
        state.provider?.logout().catch(function (error: Error) {
            Notify.create({
                type: 'error',
                message: error.message
            });
        });
    }
};

export default mutation;