<template>
  <div class="sidebar">
    <ul class="mainMenu">
      <li :class="{'delayshow':btnShowStatus}">
        <a href="javascript:void(0)" class="">切换主题{{btnShowStatus}}</a>
      </li>
      <li>
        <a href="javascript:void(0)" class="">切换主题</a>
      </li>
      <li>
        <a href="javascript:void(0)" class="">切换主题</a>
      </li>

    </ul>
  </div>
</template>
<script>
  export default {
    data(){
        return {}
    },
    props:['btnShowStatus'],
    watch:{

      btnShowStatus:function(e){
        var i= 0,
            j= document.querySelectorAll(".mainMenu li").length || 0,
            k

        if(this.btnShowStatus){
          var timer = setInterval(function(){
            if(i<j){
              document.querySelectorAll(".mainMenu li")[i].setAttribute('class','delayshow')
              i++
            }else{
              i=0
              clearInterval(timer)
            }
          },300)
        }else{
            for(k=0;k<j;k++){
              document.querySelectorAll(".mainMenu li")[k].setAttribute('class','')
            }

        }
      }

    }
  }
</script>
<style lang="scss">
  .sidebar{
    background: rgba(0,0,0,0.5);
    width:100%;
    min-height:100vh;
    .mainMenu{
      padding-top: 140px;
      padding-left: 20px;
      padding-right: 20px;
      li{
        margin-bottom: 30px;
        transition: all ease .3s;
        opacity: 0;
        a{
          display: inline-block;
          width:100%;
          height:60px;
          background: #00b0fc;
          border-radius:5px;
          line-height: 60px;
          text-align: center;
          color: #fff;
          font-size: 24px;

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
