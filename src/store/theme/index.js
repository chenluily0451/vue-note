/**
 * Created by chenlu on 2018/3/13.
 */
import ls from '../storage.js';
const moduleTheme = {
  state:{
    theme:ls.ls_theme.get() || '609dee'
  },
  getters:{
    getCurrentTheme(state){
      return state.theme
    }
  },
  mutations:{
    changeTheme(state,obj) {
      state.theme = obj.theme
    }
  },
  actions:{
    change_theme({commit},param){
      ls.ls_theme.set(param)
      commit('changeTheme',{theme:param})
    }
  }
}

export default{
  moduleTheme
}
