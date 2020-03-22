import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import states from './states';

Vue.use(Vuex);

export const store = new Vuex.Store({
    states,
    mutations,
    actions
});
