/**
 * Created by chenlu on 2018/3/13.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import theme from './theme/index.js';


export default new Vuex.Store({
  modules:{
    theme:theme.moduleTheme
  }
})
