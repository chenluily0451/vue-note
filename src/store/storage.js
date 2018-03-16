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
      ls_deleted = new localData('ls_deleted'),
      ls_noteTitle = new localData('ls_noteTitle')

const ls_avatar = new localData('ls_avatar')

const getLocalTime = function(){
  let time = new Date(),
      year = time.getFullYear(),
      month = parseInt(time.getMonth()+1) < 10 ? '0' + parseInt(time.getMonth()+1) : parseInt(time.getMonth()+1),
      day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate(),
      hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours(),
      minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes(),
      second = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()

  return year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second
}

export default {
  ls_theme,
  ls_todo,
  ls_completed,
  ls_deleted,
  ls_avatar,
  ls_noteTitle,
  getLocalTime
}
