import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { UiInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const Ui: Module<UiInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default Ui;
