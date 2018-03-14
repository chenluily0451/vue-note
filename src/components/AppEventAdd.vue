<template>
  <div class="eventAdd">
    <input type="text" placeholder="请添加事项" v-model="inputText">
    <a href="javascript:void(0)" class="addBtn" @click="addEventList()">添加</a>
  </div>
</template>
<script>
  export default {
    data(){
        return {
            inputText:''
        }
    },
    methods:{
      addEventList(){
        if(this.inputText !==''){
            this.$emit('inputData',this.inputText)
        }
      }
    }
  }
</script>
<style lang="scss">
  .eventAdd{
    width:60%;
    margin:0 auto;
    display: flex;
    flex-direction: row;

    input{
      height:60px;
      flex-grow: 1;
      font-size: 20px;
      outline:none;
      padding-left: 10px;
      border:none;
      border-radius: 4px;
    }
    .addBtn{
      width:120px;
      line-height: 60px;
      border-radius: 5px;
      color: #fff;
      text-align: center;
      margin-left: 10px;

      &:hover{
        opacity: .8;
      }
    }
  }
</style>
