import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UiInterface } from './state';

const actions: ActionTree<UiInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
