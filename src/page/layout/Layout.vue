<template>
    <div id="layout">
        <div class="charts">
          <div class="titleBoxs">
            <div></div>
            <div></div>
          </div>
            <div class="titleBox">
              <div v-for="(item, index) in nav" @click="routerLink(index, item.path)" class = "ind_title" :class="navIndex === index ? 'ind_title_active' : ''">
                <h4>{{item.title}}</h4>
              </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
export default {
    data(){
        return{
            nav: [
                {title: '人口总览', path: '/index'},
                {title: '人口质量', path: '/populationQuality'},
                {title: '人口结构', path: '/populationStructure'},
                {title: '海南省人口专题分析',path:''},
                {title: '人口总量', path: '/populationTotal'},
                {title: '人口就业', path: '/populationEmployment'},
                {title: '人口发展', path: '/populationDevelopment'},
                {title: '人口老龄化', path: '/populationAgeing'},
            ],
            navIndex:1,
            title:'宏观经济运行',
            isCollapse:false
        }
    },
    methods: {
      routerLink(index, path) {
        if(index != 3){
          this.navIndex = index;
          this.$router.push(path)
        }
        //this.threeGo()
      },
      currentPage(){
        var s = 0
        for (let i = 0; i < this.nav.length; i++) {
          if(this.nav[i].path == this.$route.path){
            this.navIndex  =  i;
            this.title = this.nav[i].title
          }
        }
        //return s;
      },
      checkRouterLocal(path) {
        // 查找当前路由下标高亮
        this.navIndex = this.nav.findIndex(item => item.path === path);
        console.log(path,"path")
      },


    },
    watch: {
        // "$route"() {
        //     let path = this.$route.path;
        //   alert(path)
        //     // 检索当前路径
        //     this.checkRouterLocal(path);
        // }
    },
    mounted () {
      this.currentPage()
    },
}
</script>

<style lang="scss" scoped>
  .charts{
    overflow:auto;
    width: 100%;
    .selfont{
      background-color: #128eee;
    }
    .titleBoxs {
      width: 100%;
      height: 7vh;
      position: fixed;
      top: 0;
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div{
        height: 100%;
        width: 50%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        float: left;
      }
      div:nth-child(1){
        background-image:url('../../../static/img/top_left.png');
      }
      div:nth-child(2){
        background-image:url('../../../static/img/top_right.png');
      }
    }

    .titleBox{
      width: 100%;
      height: 7vh;
      position: fixed;
      top: 0;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .ind_title{
        width: 10%;
        line-height: 7vh;
      }

      .ind_title:nth-child(1),.ind_title:nth-child(2),.ind_title:nth-child(3){
        width: 13.5%;
      }
      .ind_title:hover{
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image:url('../../../static/img/active.png');
      }
      .ind_title_active{
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image:url('../../../static/img/active.png');
      }

      div:nth-child(4){
        width: 16%;
      }
      h4{
        font-size: 2.5vh;
        font-weight: bold;
        font-family: 'ºÚÌå',Verdana, Arial, Helvetica, AppleGothic, sans-serif;
        color: #9CA5D3;
        text-align: center;
      }
      div:nth-child(4) h4{
        font-size: 3.5vh;
        color: #fff;
      }
    }
  }

</style>
<style lang="scss">
  .el-switch__label{-webkit-transition:.2s;transition:.2s;font-size:2.3vh;font-weight:500;vertical-align:middle;color:#AFB8D2}
  .el-switch__label *{line-height: 0; font-size:2.3vh!important;display:inline-block}
  .el-switch__input{position:absolute;width:0;height:0;opacity:0;margin:0}
  .el-switch__core{margin:0;position:relative;width:7vh!important;height:3vh!important;border:1px solid #DCDFE6;outline:0;border-radius:3vh!important;-webkit-box-sizing:border-box;box-sizing:border-box;background:#DCDFE6;-webkit-transition:border-color .3s,background-color .3s;transition:border-color .3s,background-color .3s;vertical-align:middle}
  .el-switch__core:after{content:"";position:absolute;top:0.1vh!important;left:0.1vh!important;border-radius:100%;-webkit-transition:all .3s;transition:all .3s;width:2.6vh!important;height:2.6vh!important;background-color:#FFF}
  .el-switch.is-checked .el-switch__core::after{left:100%;margin-left:4vh!important;}
</style>
