/**
 * Created by chenlu on 2018/3/13.
 */
const localData = function(item){
  this.set = function(obj){
    return localStorage.setItem(item,obj)
  }
  this.get = function(){
    return localStorage.getItem(item)
  }
  this.clear = function(){
    return localStorage.removeItem(item)
  }
}
var ls_theme = new localData('ls_theme')
export default {
  ls_theme
}
