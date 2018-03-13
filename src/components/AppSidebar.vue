<template>
  <div class="sidebar">
    <ul class="mainMenu">
      <li>
        <a href="javascript:void(0)" @click="changeTheme()" class="menuTabbar">切换主题</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="changeTheme()" class="menuTabbar">切换主题</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="changeTheme()" class="menuTabbar">切换主题</a>
      </li>

    </ul>
  </div>
</template>
<script>
  export default {
    data(){
        return {}
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
          },150)
        }else {
          this.clearClass()
        }
      },
      clearClass(){
        var j= document.querySelectorAll(".mainMenu li").length || 0
        for(var k=0;k<j;k++){
          document.querySelectorAll(".mainMenu li")[k].removeAttribute('class')
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
