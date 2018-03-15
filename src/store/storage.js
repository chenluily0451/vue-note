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
const ls_theme = new localData('ls_theme'),
      ls_todo = new localData('ls_todo'),
      ls_completed = new localData('ls_completed'),
      ls_deleted = new localData('ls_deleted')

const ls_avatar = new localData('ls_avatar')

const getLocalTime = function(){
  let time = new Date(),
      year = time.getFullYear(),
      month = parseInt(time.getMonth())+1,
      day = time.getDate(),
      hour = time.getHours(),
      minute = time.getMinutes(),
      second = time.getSeconds()

  return year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second
}

export default {
  ls_theme,
  ls_todo,
  ls_completed,
  ls_deleted,
  ls_avatar,
  getLocalTime
}
