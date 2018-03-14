<template>
  <div class="eventList">
    <template v-for="(st,idx) in data">
      <div class="selectbar" @click="toggleMenu"><p>{{st.status}}({{st.sublists.length}})</p><span></span></div>
      <ul class="list">
        <li v-for="(l,index) in st.sublists">
          <p>{{l.text}}</p>
          <a href="javascript:void(0)" class="eventBtn" @click=clickEvent(st.statusCode,index,idx)>{{st.btnText}}</a>
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        data:[
          {
            status:'未完成',
            statusCode:1,
            showSubmenus:true,
            sublists:[
              {
                text:'1111111111111'
              }
            ],
            btnText:'完成'
          },
          {
            status:'已完成',
            statusCode:2,
            showSubmenus:true,
            sublists:[
              {
                text:'222222222222'
              }
            ],
            btnText:'删除'
          },
          {
            status:'已删除',
            statusCode:3,
            showSubmenus:true,
            sublists:[
              {
                text:'333333333333'

              }
            ],
            btnText:'还原'
          }
        ]
      }
    },
    props:['unCompletedText'],
    watch:{

      //添加至未完成列表
      unCompletedText:function(msg){
        this.data[0].sublists.push({text:msg})
      }

    },
    methods:{
      clickEvent(statusCode,index,idx){
        if(statusCode ===1){
          this.data[1].sublists.push(this.data[0].sublists[index])
          this.data[0].sublists.splice(index, 1)
        } else if(statusCode ===2){
          this.data[2].sublists.push(this.data[1].sublists[index])
          this.data[1].sublists.splice(index, 1)
        } else{
          this.data[1].sublists.push(this.data[2].sublists[index])
          this.data[2].sublists.splice(index, 1)
        }
        this.$toasted.show('已'+ this.data[idx].btnText)
      },
      toggleMenu(){

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

      p{
        padding-left:10px;
        font-size: 18px;
      }
      span{
        position: absolute;
        right: 20px;
        top: 20px;
        width: 10px;
        height: 10px;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        transform: rotate(135deg);
        transition: transform .3s;
      }
    }
    .list{
      width:100%;

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
  }
</style>
