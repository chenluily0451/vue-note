<template>
  <div class="eventList">
    <template v-for="(st,idx) in data">
      <div class="selectbar" @click="toggleMenu(idx)"><p>{{st.status}}({{st.sublists.length}})</p><span :class="{arrowRotate:!st.listShowStatus}"></span></div>
      <ul :class="['list',{hideList:!st.listShowStatus}]">
        <li v-for="(l,index) in st.sublists">
          <p>{{l.text}}</p>
          <a href="javascript:void(0)" class="eventBtn" @click=clickEvent(st.statusCode,index,idx)>{{st.btnText}}</a>
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
  import ls from '../store/storage.js'
  export default {
    mounted(){
      this.data[0].sublists = JSON.parse(ls.ls_todo.get()) || []
      this.data[1].sublists = JSON.parse(ls.ls_completed.get()) || []
      this.data[2].sublists = JSON.parse(ls.ls_deleted.get()) || []
      console.log(localStorage)
    },
    data(){
      return {
        data:[
          {
            status:'未完成',
            statusCode:1,
            showSubmenus:true,
            sublists:[],
            btnText:'完成',
            listShowStatus:true
          },
          {
            status:'已完成',
            statusCode:2,
            showSubmenus:true,
            sublists:[],
            btnText:'删除',
            listShowStatus:true
          },
          {
            status:'已删除',
            statusCode:3,
            showSubmenus:true,
            sublists:[],
            btnText:'还原',
            listShowStatus:true
          }
        ]
      }
    },
    props:['unCompletedText'],
    watch:{

      //添加至未完成列表
      unCompletedText:function(msg){
        let sl = this.data[0].sublists
        sl.push({text:msg})
        ls.ls_todo.set(JSON.stringify(sl))
        console.log(localStorage)
      }

    },
    methods:{
      clickEvent(statusCode,index,idx){
        if(statusCode ===1){
          this.data[1].sublists.push(this.data[0].sublists[index])
          this.data[0].sublists.splice(index, 1)

          ls.ls_todo.set(JSON.stringify(this.data[0].sublists))
          ls.ls_completed.set(JSON.stringify(this.data[1].sublists))

        } else if(statusCode ===2){
          this.data[2].sublists.push(this.data[1].sublists[index])
          this.data[1].sublists.splice(index, 1)

          ls.ls_completed.set(JSON.stringify(this.data[1].sublists))
          ls.ls_deleted.set(JSON.stringify(this.data[2].sublists))
        } else{
          this.data[1].sublists.push(this.data[2].sublists[index])
          this.data[2].sublists.splice(index, 1)

          ls.ls_completed.set(JSON.stringify(this.data[1].sublists))
          ls.ls_deleted.set(JSON.stringify(this.data[2].sublists))
        }
        this.$toasted.show('已'+ this.data[idx].btnText)
        console.log(localStorage)
      },
      toggleMenu(idx){
        this.data[idx].listShowStatus = !this.data[idx].listShowStatus
      }
    }
  }
</script>
<style lang="scss">
  .eventList{
    width:60%;
    margin:0 auto;

    .selectbar{
      width:100%;
      line-height: 60px;
      margin-top: 10px;
      border-radius: 4px;
      color: #fff;
      position: relative;
      cursor: pointer;

      p{
        padding-left:10px;
        font-size: 18px;
      }
      span{
        position: absolute;
        right: 20px;
        top: 23px;
        width: 10px;
        height: 10px;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        transform: rotate(135deg);
        transition: transform .3s;

        &.arrowRotate{
          transform: rotate(45deg);
        }
      }
    }
    .list{
      width:100%;
      overflow: hidden;
      transition: height ease-in-out .3s;

      li{
        background: #fff;
        color: #000;
        font-size: 20px;
        margin-bottom: 5px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;

        p{
          flex-grow: 1;
          word-break: break-all;
        }
        a{
          margin-left: 10px;
          width:80px;
          padding:4px 2px;
          text-align: center;
          color:#fff;
          border-radius: 4px;
          word-break: keep-all;
          font-size: 14px;
          flex-shrink:0;

          &:hover{
            opacity:.8;
          }
        }
      }
    }
    .hideList{
      height:0;
    }
  }
</style>
