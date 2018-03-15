<template>
  <div class="sidebar">
    <ul class="mainMenu">
      <li>
        <a href="javascript:void(0)" @click="uploadAvatar()" class="menuTabbar">上传头像</a>
        <input type="file" id="inputFile" accept="image/*"  @change ="fileChange()">
      </li>

      <li>
        <a href="javascript:void(0)" @click="changeTheme()" class="menuTabbar">主题选择</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="clearLocalData()" class="menuTabbar">清空数据</a>
      </li>
    </ul>
  </div>
</template>
<script>
  import ls from '../store/storage.js';
  export default {
    data(){
        return {}
    },
    mounted(){
      this.btnShowStatus = true
      this.menuEffect()
    },
    props:['btnShowStatus','themeShowStatus'],
    watch:{
      btnShowStatus : function(){
        this.menuEffect()
      },
      themeShowStatus:function(){
        this.menuEffect()
      }
    },
    methods:{
      changeTheme() {
        this.$emit('changeTheme')
      },
      menuEffect(){
        var i= 0,
            j= document.querySelectorAll(".mainMenu li").length || 0,
            k,
            timer

        if(this.btnShowStatus){
          this.clearClass()
          timer = setInterval(function(){
            if(i<j){
              document.querySelectorAll(".mainMenu li")[i].setAttribute('class','delayshow')
              i++
            }else{
              i=0
              clearInterval(timer)
            }
          },200)
        }else {
          this.clearClass()
        }
      },
      clearClass(){
        var j= document.querySelectorAll(".mainMenu li").length || 0
        for(var k=0;k<j;k++){
          document.querySelectorAll(".mainMenu li")[k].removeAttribute('class')
        }
      },
      clearLocalData(){
        ls.ls_theme.clear()
        this.$toasted.show('本地数据已清空')
        setTimeout(() => {
          location.reload()
        },1000)
      },
      uploadAvatar(){
          document.getElementById('inputFile').click()
      },
      fileChange(e){
        this.showPreview(e)
      },
      showPreview(source){

        let file = document.getElementById('inputFile').files[0],
            that = this
        if(window.FileReader){
          let fr = new FileReader()
          fr.onloadend = function(e){
            that.$store.dispatch('change_avatarStatus')
            that.$store.dispatch('change_avatar',e.target.result)
            ls.ls_avatar.set(e.target.result)
            that.$toasted.show('上传成功')
            console.log(that.$store)
          }
          fr.onprogress = function(){
            if(file.size/1024/1024 > 1){
              that.$toasted.show('上传文件不能超过1M')
              return false
            }
              that.$toasted.show('上传中...')
          }
          fr.readAsDataURL(file);
        }else{
            this.$toasted.show('你的浏览器版本太低，暂不支持上传')
        }
      }

    }
  }
</script>
<style lang="scss">
  .sidebar{
    width:100%;
    min-height:100vh;
    .mainMenu{
      padding-top: 140px;
      padding-left: 20px;
      padding-right: 20px;
      li{
        transition: all ease .3s;
        opacity: 0;
        overflow: hidden;
        input{display: none;}
        a{
          display: inline-block;
          width:100%;
          height:60px;
          border-radius:5px;
          line-height: 60px;
          text-align: center;
          color: #fff;
          font-size: 24px;
          margin-bottom: 30px;

          &:hover{
            opacity: .8;
          }
        }

        &.delayshow{
          animation:btnshows forwards 1s;
          animation-delay:.2s;
        }
      }
    }
  }
  @keyframes btnshows
  {
    from {
      opacity:0;
      transform: translateX(-30px);
    }
    to {
      opacity:1;
      transform: translateX(0);
    }
  }
</style>
