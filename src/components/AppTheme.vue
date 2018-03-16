<template>
  <div class="themeContent">
    <ul>
      <li class="title">
        点击切换主题
      </li>
      <li @click="changeTheme('609dee')">
        <span class="c609dee"></span>
        <b>#609dee</b>
      </li>
      <li @click="changeTheme('f39894')">
        <span class="cf39894"></span>
        <b>#f39894</b>
      </li>
      <li @click="changeTheme('5fdb54')">
        <span class="c5fdb54"></span>
        <b>#5fdb54</b>
      </li>
      <li @click="changeTheme('f4b976')">
        <span class="cf4b976"></span>
        <b>#f4b976</b>
      </li>
      <li @click="changeTheme('202020')">
        <span class="c202020"></span>
        <b>#202020</b>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    methods:{
      changeTheme(color){
        this.$store.dispatch('change_theme',color)
        this.$emit('closeTheme')
        setTimeout(() => {
          this.$toasted.show('主题设置为 '+color)
        },500)
      }
    }
  }
</script>
<style lang="scss">
  .themeContent {
    ul {
      padding-top: 140px;
      padding-left: 20px;
      padding-right: 20px;

      li {
        width: 100%;
        border: 1px solid #aaa;
        border-radius: 3px;
        cursor: pointer;
        margin-bottom: 20px;
        background: #fff;
        padding:5px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;

        &.title {
          font-size: 24px;
          color: #fff;
          background: transparent;
          text-align: center;
          border:none;
          margin-bottom: 60px;
        }
        span{
          display: inline-block;
          vertical-align: middle;
          width: 20px;
          height:20px;
          margin-left: 5px;

          &.cf39894{
            background: #f39894;
          }
          &.c609dee{
            background: #609dee;
          }
          &.c26b6be{
            background: #26b6be;
          }
          &.cf4b976{
            background: #f4b976;
          }
          &.c202020{
            background: #202020;
          }
          &.c5fdb54{
            background: #5fdb54;
          }
        }
        b{
          display: inline-block;
          vertical-align: middle;
          flex-grow:1;
          text-align: center;
        }
        &:hover{
          opacity: .8;
        }
      }
    }
  }
</style>
