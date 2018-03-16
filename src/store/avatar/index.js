/**
 * Created by chenlu on 2018/3/15.
 */
import ls from '../storage.js';

const moduleAvatar = {
  state:{
    clickStatus:false,
    avatar:ls.ls_avatar.get() || './static/image/avatar.png'
  },
  getters:{
    getAvatar(state){
      return state.avatar
    }
  },
  mutations:{
    changeStatus(state){
      state.clickStatus = !state.clickStatus
    },
    changeAvatar(state,url){
      state.avatar = url
    }
  },
  actions:{
    change_avatar({commit},url){
      commit('changeAvatar',url)
    },
    change_avatarStatus({commit}){
      commit('changeStatus')
    }
  }
}

export default{
  moduleAvatar
}
