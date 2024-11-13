import { createStore } from 'vuex';
import state from './modules/state';
import mutations from './modules/mutations';
import actions from './modules/actions';
import getters from './modules/getters';

const usuarios = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

export default createStore({
  modules: {
    usuarios
  }
});