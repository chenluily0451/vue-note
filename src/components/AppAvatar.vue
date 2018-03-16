<template>
  <div class="avatar">
    <div class="imgWrap">
      <img :src=avatar alt="头像">
    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return {
        clickStatus:this.$store.state.avatar.clickStatus,
        avatar:this.$store.state.avatar.avatar
      }
    },
    watch:{
      '$store.state.avatar.clickStatus' : function(){
        this.avatar = this.$store.state.avatar.avatar
      }
    }
  }
</script>
<style lang="scss">
  .avatar{
    display: flex;
    justify-content: center;

    .imgWrap{
      width:150px;
      height:150px;
      margin-bottom: 20px;


    }
    img{
      width:100%;
      height:100%;
      border-radius:50%;
    }

  }
</style>
