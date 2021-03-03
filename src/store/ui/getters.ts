import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UiInterface } from './state';

const getters: GetterTree<UiInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
