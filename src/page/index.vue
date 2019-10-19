<template>
  <div id="index">
    <div class = "chart_main">
    <el-row>
      <el-col :span="7">
        <el-row>
          <el-col :span="24">
            <div class = "ind_left"></div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left"></div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left"></div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left"></div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left"></div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left"></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
        <div class = "ind_center">

        </div>
      </el-col>
      <el-col :span="7">
        <el-col :span="24">
          <div class = "ind_right"></div>
        </el-col>
        <el-col :span="24">
          <div class = "ind_right"></div>
        </el-col>
        <el-col :span="24">
          <div class = "ind_right"></div>
        </el-col>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
  import 'font-awesome/css/font-awesome.min.css';
  import {config} from '../../static/js/config/chartConfig.js';
  var echarts = require('echarts');
  import '../../static/js/map/china.js';
  import '../../static/js/map/hainan.js';
  import hainan from '../../static/js/json/hainan.json';
  export default {
    name:"index",
    components: {

    },
    data(){
      return{

      }
    },
    components: {
    },

    mounted () {

    },
    methods: {

    }
  }
</script>
<style lang="scss" scoped>
  #index{
    .ind_left{
      width: 98%;
      height: 14.3vh;
      margin-top: 1vh;
      margin-left: 2%;
      background-image:url('../../static/img/ind_left.png');
      background-repeat: no-repeat;
      background-size: 100% 14.3vh;
    }
    .ind_center{
      height: 91vh;
      width: 100%;
      background-image:url('../../static/img/main_BG.png');
      background-repeat: no-repeat;
      background-size: 100% 91vh;
      margin-top: 1vh;
    }
    .ind_right{
      width: 98%;
      height: 29.6vh;
      margin-top: 1vh;
      margin-right: 2%;
      background-image:url('../../static/img/ind_right.png');
      background-repeat: no-repeat;
      background-size: 100% 29.6vh;
    }
  }
</style>
