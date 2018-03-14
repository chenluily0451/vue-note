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
    return localStorage.clear()
  }
}
var ls_theme = new localData('ls_theme'),
    ls_todo = new localData('ls_todo'),
    ls_completed = new localData('ls_completed'),
    ls_deleted = new localData('ls_deleted')

export default {
  ls_theme,
  ls_todo,
  ls_completed,
  ls_deleted
}
