<template>
  <header class="defaultColor">
    <h1>
      文档标题
    </h1>
    <a class="sideBtn"><span></span></a>
  </header>
</template>
<script>
  export default {

  }
</script>
<style lang="scss">
  header{
    height:80px;
    line-height: 80px;
    text-align: center;
    color: #fff;
    position: relative;
    z-index: 100;

    .sideBtn{
      position: absolute;
      left: 10px;
      top: 35px;
      width: 30px;
      height: 26px;
      cursor: pointer;

      span,span:after,span:before{
        position: absolute;
        left: 0;
        width: 30px;
        height: 4px;
        content: '';
        background: #fff;
        transition: all .3s;
      }

      span{
        &:after{
          -webkit-transform: translateY(10px);
          transform: translateY(10px);
        }
        &:before{
          -webkit-transform: translateY(-10px);
          transform: translateY(-10px);
        }
      }
    }
  }
</style>
