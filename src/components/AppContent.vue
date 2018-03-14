<template>
  <div class="mainContent">
    <div class="inner">
      <app-event-add @inputData="getData"></app-event-add>
      <app-event-list :unCompletedText="inputText"></app-event-list>
    </div>
  </div>
</template>
<script>
  import AppEventAdd from './AppEventAdd.vue'
  import AppEventList from './AppEventList.vue'
  export default {
    data(){
      return{
          inputText: ''
      }
    },
    components:{
      AppEventAdd,
      AppEventList
    },
    methods:{
      getData(dataList){
        this.inputText = dataList
      }
    }
  }
</script>
<style lang="scss">
  .mainContent{
    width:100%;
    background: #ccc;
    min-height: 100vh;
    .inner{
      padding:140px 0 0 20px;
    }
  }
</style>
