<template>
  <header class="AppHeader">
    <h1>
      <input type="text" placeholder="未命名" maxlength="10" ref="input" :readonly="readOnlyStatus" @input="enterTitle()" v-model="inputText" @keyup.enter="saveFunc()">
    </h1>
    <a class="sideBtn" @click="showSideBar()"><span></span></a>
  </header>
</template>
<script>
  import {debounce,clearTime} from '../debounce.js'
  import ls from '../store/storage.js'
  export default {
    data(){
        return{
          readOnlyStatus:true,
          inputText : ls.ls_noteTitle.get('ls_noteTitle') || ''
        }
    },
    props:['editTitleStatus'],
    methods:{
      showSideBar(){
        this.$emit('controls')
      },
      enterTitle(){
        if(this.inputText !=''){
          debounce(()=>{
            this.saveFunc('auto')
          },1500);
        }
      },
      saveFunc(arg){
        this.readOnlyStatus = true
        ls.ls_noteTitle.set(this.inputText)
        arg === 'auto' ? this.$toasted.show('自动保存成功') : this.$toasted.show('保存成功')
        clearTime()
      }
    },
    watch:{
      'editTitleStatus':function(){
        this.readOnlyStatus = false
        this.$refs.input.select()
        this.$refs.input.focus()
      }
    }
  }
</script>
<style lang="scss">
  .AppHeader{
    height:80px;
    line-height: 80px;
    text-align: center;
    color: #fff;
    position: relative;
    z-index: 100;

    .sideBtn{
      position: absolute;
      left: 30px;
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
        transition: all .1s;
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
    input{
      font-size: 32px;
      width:50%;
      text-align: center;
      border:none;
      outline: none;
      background: transparent;
      color: #fff;
      font-weight: bold;
    }
    ::-moz-placeholder { color: #fff; }
    ::-webkit-input-placeholder { color:#fff; }
    :-ms-input-placeholder { color:#fff; }
    ::selection {
      background:red;
    }
    ::-moz-selection{
      background:red;
    }
  }
</style>
