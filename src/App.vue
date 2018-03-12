<template>
  <div id="app">
    <app-header>loading...</app-header>
    <div class="appBody">
      <div class="leftContent">
        <app-sidebar>loading...</app-sidebar>
      </div>
      <div class="rightContent">
        123123
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue';
  import AppSidebar from './components/AppSidebar.vue';
export default {
  name: 'App',
  components:{
      AppHeader,
      AppSidebar
  }
}
</script>

<style>
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
    width:100%;
  }
</style>
