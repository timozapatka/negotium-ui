import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UserInterface } from './state';

const getters: GetterTree<UserInterface, StateInterface> = {
    getToken (User: UserInterface):string|undefined {
        if(User.authenticated && !User.provider?.isTokenExpired()){
            return User.provider?.token;
        }
    }
};

export default getters;
