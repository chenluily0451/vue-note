<template>
  <div id="app" :class="['c'+getTheme]">
    <app-header @controls="menuStatusChange()">loading...</app-header>
    <div class="appBody">
      <div :class="['leftContent',{showContent: showtabs}]">
        <app-sidebar :btnShowStatus="showtabs" :themeShowStatus="showTheme" @changeTheme ="getThemeBlock()" v-show="!showTheme">loading...</app-sidebar>
        <app-theme v-show="showTheme" @closeTheme="getCloseTheme()">loading...</app-theme>
      </div>
      <div class="rightContent">
        <app-content>loading...</app-content>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppSidebar from './components/AppSidebar.vue'
  import AppContent from './components/AppContent.vue'
  import AppTheme from './components/AppTheme.vue'

export default {
  name: 'App',
  components:{
    AppHeader,
    AppSidebar,
    AppContent,
    AppTheme,
  },
  data(){
    return{
      showtabs:true,
      showTheme:false,
    }
  },
  methods:{
    menuStatusChange(){
        this.showtabs = !this.showtabs
    },
    getThemeBlock(){
      this.showTheme = true
    },
    getCloseTheme(e){
      this.showTheme = !this.showTheme
    }
  },
  computed:{
    getTheme(){
      return this.$store.getters.getCurrentTheme
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  body,html{
    min-width: 1200px;
  }
  *{
    padding:0;
    margin:0;
  }
  .defaultColor{
    /*background: #00b0fc;*/
  }
  ul,li,a{list-style: none;text-decoration: none;margin:0;padding:0;}

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
      background: rgba(0,0,0,0.5);
    }
    .showContent{
      width:20vw;
    }
    .rightContent{
      flex-grow: 1;
    }




  }
</style>

<style lang="scss" rel="stylesheet/scss" src="../static/css/theme.scss"></style>    <!--主题样式-->
