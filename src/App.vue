<template>
  <div id="app">
    <app-header @controls="menuStatusChange()">loading...</app-header>
    <div class="appBody">
      <div :class="['leftContent',{showContent: showtabs}]">
        <app-sidebar :btnShowStatus="showtabs">loading...</app-sidebar>
      </div>
      <div class="rightContent">
        <app-content>loading...</app-content>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue';
  import AppSidebar from './components/AppSidebar.vue';
  import AppContent from './components/AppContent.vue';
export default {
  name: 'App',
  components:{
    AppHeader,
    AppSidebar,
    AppContent
  },
  data(){
    return{
      showtabs:false
    }
  },

  methods:{
    menuStatusChange(){
        this.showtabs = !this.showtabs
    }
  }
}
</script>

<style lang="scss">
  *{
    padding:0;
    margin:0;
  }
  .defaultColor{
    background: #00b0fc;
  }
  ul,li,a{list-style: none;text-decoration: none}

  /*主题内容样式*/
  .appBody{
    display: flex;
    flex-direction: row;
    position: absolute;
    top:0;
    width:100%;

    .leftContent{
      width:0vw;
      transition: all ease-in .3s;
    }
    .showContent{
      width:20vw;
    }
    .rightContent{
      flex-grow: 1;
    }

  }
</style>
