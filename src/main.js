// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Toasted from 'vue-toasted'
import toastOptions from './toastOptions'
import Vuex from 'vuex'
import store from './store/index';
import lodash from 'lodash'

Vue.config.productionTip = false

Vue.use(Toasted,toastOptions.options)

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
