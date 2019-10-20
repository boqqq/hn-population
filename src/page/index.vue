<template>
  <div id="index">
    <div class = "chart_main">
    <el-row>
      <el-col :span="7">
        <el-row>
          <el-col :span="24">
            <div class = "ind_left">
              <div class="pop_type_item">
                <div class="pop_type_icon fa_bg_1"><i class="fa fa-user fa-fw"></i></div>
                <h3 class="pop_type_title">常住人口</h3>
                <el-row>
                  <el-col :span="10">
                    <p class="pop_type_val">835.258<span class="pop_type_unit">万人</span></p>
                  </el-col>
                  <el-col :span="14">
                    <span class="pop_type_last">同比上周</span>
                    <span class="pop_type_prop up"><i class="arr_icon icon-upArr"></i>10%</span>
                  </el-col>
                </el-row>
                <div class="pop_type_frIcon icon-dec-line"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left">
              <div class="pop_type_item">
                <div class="pop_type_icon fa_bg_2"><i class="fa fa-user fa-fw"></i></div>
                <h3 class="pop_type_title">户籍人口</h3>
                <el-row>
                  <el-col :span="10">
                    <p class="pop_type_val">835.258<span class="pop_type_unit">万人</span></p>
                  </el-col>
                  <el-col :span="14">
                    <span class="pop_type_last">同比上周</span>
                    <span class="pop_type_prop dn"><i class="arr_icon icon-dnArr"></i>10%</span>
                  </el-col>
                </el-row>
                <div class="pop_type_frIcon icon-dec-line"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left">
              <div class="pop_type_item">
                <div class="pop_type_icon fa_bg_3"><i class="fa fa-user fa-fw"></i></div>
                <h3 class="pop_type_title">流动人口</h3>
                <el-row>
                  <el-col :span="10">
                    <p class="pop_type_val">835.258<span class="pop_type_unit">万人</span></p>
                  </el-col>
                  <el-col :span="14">
                    <span class="pop_type_last">同比上周</span>
                    <span class="pop_type_prop up"><i class="arr_icon icon-upArr"></i>10%</span>
                  </el-col>
                </el-row>
                <div class="pop_type_frIcon icon-dec-line"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left">
              <div class="pop_type_item">
                <div class="pop_type_icon fa_bg_4"><i class="fa fa-user fa-fw"></i></div>
                <h3 class="pop_type_title">劳动力人口比例</h3>
                <el-row>
                  <el-col :span="10">
                    <p class="pop_type_val">58<span class="pop_type_unit">%</span></p>
                  </el-col>
                  <el-col :span="14">
                    <span class="pop_type_last">同比上周</span>
                    <span class="pop_type_prop up"><i class="arr_icon icon-upArr"></i>10%</span>
                  </el-col>
                </el-row>
                <div class="pop_type_frIcon icon-dec-line"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left">
              <div class="pop_type_item">
                <div class="pop_type_icon fa_bg_5"><i class="fa fa-user fa-fw"></i></div>
                <h3 class="pop_type_title">老龄人口比</h3>
                <el-row>
                  <el-col :span="10">
                    <p class="pop_type_val">83<span class="pop_type_unit">%</span></p>
                  </el-col>
                  <el-col :span="14">
                    <span class="pop_type_last">同比上周</span>
                    <span class="pop_type_prop up"><i class="arr_icon icon-upArr"></i>10%</span>
                  </el-col>
                </el-row>
                <div class="pop_type_frIcon icon-dec-line"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left">
              <div class="pop_type_item">
                <div class="pop_type_icon fa_bg_6"><i class="fa fa-user fa-fw"></i></div>
                <h3 class="pop_type_title">常住人口年龄中位数</h3>
                <el-row>
                  <el-col :span="10">
                    <p class="pop_type_val">55<span class="pop_type_unit">%</span></p>
                  </el-col>
                  <el-col :span="14">
                    <span class="pop_type_last">同比上周</span>
                    <span class="pop_type_prop up"><i class="arr_icon icon-upArr"></i>10%</span>
                  </el-col>
                </el-row>
                <div class="pop_type_frIcon icon-dec-line"></div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
        <div class = "ind_center" id="ind_chart_map"></div>
      </el-col>
      <el-col :span="7">
        <el-col :span="24">
          <div class = "ind_right">
            <div class="pop_col_tit">
              <i class="tit_icon icon-tit-line"></i>
              <h3>户籍人口及增长率</h3>
            </div>
            <div id="pop_bar_1" class="pop_chart_fr"></div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class = "ind_right">
            <div class="pop_col_tit">
              <i class="tit_icon icon-tit-line"></i>
              <h3>常住人口及增长率</h3>
            </div>
            <div id="pop_bar_2" class="pop_chart_fr"></div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class = "ind_right">
            <div class="pop_col_tit">
              <i class="tit_icon icon-tit-line"></i>
              <h3>流动人口及增长率</h3>
            </div>
            <div id="pop_bar_3" class="pop_chart_fr"></div>
          </div>
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
        pop_month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        pop_hou_bar:[190,118,172,176,223,84,111,90,94,241,100,110],
        pop_hou_line:[164,218,72,76,180,184,86,190,94,222,100,110],
        pop_fix_bar:[190,118,172,176,223,84,111,90,94,241,100,110],
        pop_fix_line:[164,218,72,76,180,184,86,190,94,222,100,110],
        pop_flow_bar:[190,118,172,176,223,84,111,90,94,241,100,110],
        pop_flow_line:[164,218,72,76,180,184,86,190,94,222,100,110],
        nameB: ['户籍人口','常住人口','流动人口'],
        nameL: '同比增长率'
      }
    },
    components: {
    },

    mounted () {
      this.pop_bar("pop_bar_1",this.pop_month,this.pop_hou_bar,this.pop_hou_line,this.nameB[0],this.nameL)
      this.pop_bar("pop_bar_2",this.pop_month,this.pop_fix_bar,this.pop_fix_line,this.nameB[1],this.nameL)
      this.pop_bar("pop_bar_3",this.pop_month,this.pop_flow_bar,this.pop_flow_line,this.nameB[2],this.nameL)
      this.ind_chart_map ('ind_chart_map')
    },
    methods: {
      pop_bar(id,month,barVal,lineVal,nameB,nameL){
        var pop_bar=echarts.init(document.getElementById(id));
        var option = {
          legend: {
            textStyle:{
              color:'#fff',
            },
            right:'4%',
            icon: 'circle'
          },
          barWidth:'15',
          xAxis: {
            axisTick:{
              show:false
            },
            type: 'category',
            axisLine:{
              lineStyle:{
                color:'rgba(255,255,255,.6)'
              }
            },
            textStyle:{
              color:'#fff'
            },
            data: month
          },
          yAxis: [{
            axisTick:{
              show:false
            },
            splitLine: {
              show:false
            },
            type: 'value',
            axisLine:{
              show:false,
              lineStyle:{
                color:'rgba(255,255,255,.6)'
              }
            },
            min:60,
            max:260,
          },
            {
              axisTick:{
                show:false
              },
              splitLine: {
                show:true,
                lineStyle:{
                  color:'rgba(255,255,255,.1)'
                }
              },
              type: 'value',
              axisLine:{
                show:false,
                lineStyle:{
                  color:'rgba(255,255,255,.6)'
                }
              },
              min:0,
              max:100,
              position: "right",
              axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                  color:'rgba(255,255,255,.6)'
                }
              }
            },
          ],
          grid:{
            top:'10%',
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
          },
          series: [
            {
              data:barVal,
              type: 'bar',
              name: nameB,
              itemStyle: {
                normal: {
                  barBorderRadius: 0,//圆角
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                      offset: 0,
                      color: '#42c7f1'
                    },
                      {
                        offset: 1,
                        color: '#4478fc'
                      }
                    ])
                }
              }
            },
            {
              data: lineVal,
              type: 'line',
              name: nameL,
              color:'#f8c300'
            }
          ]
        };

        pop_bar.setOption(option);
        window.onresize = pop_bar.resize;
      },
      ind_chart_map(id){
        var ind_chart_map = echarts.init(document.getElementById(id));
        echarts.registerMap('hainan',  hainan)
        var pd = [{"name":"海口","value":[110.326837,20.031624,"海口","20.18"]}]
        var option ={
          tooltip: {
            trigger: 'item',
            textStyle: config().textStyle,
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
                return params.name + ' : ' + params.value;
              }else{
                return params.name + ' : ' + params.value[2];
              }
            }
          },
          legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['pm2.5'],
            textStyle: config().textStyle,
          },
          visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
              // color: ['#3B5077', '#031525'] // 蓝黑
              // color: ['#ffc0cb', '#800080'] // 红紫
              // color: ['#3C3B3F', '#605C3C'] // 黑绿
              //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
              //color: ['#23074d', '#cc5333'] // 紫红
              // color: ['#00467F', '#A5CC82'] // 蓝绿
              // color: ['#1488CC', '#2B32B2'] // 浅蓝
              // color: ['#00467F', '#A5CC82'] // 蓝绿
              // color: ['#00467F', '#A5CC82'] // 蓝绿
              // color: ['#00467F', '#A5CC82'] // 蓝绿
              // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
          },
          geo: {
            show: true,
            top:0,
            map: 'hainan',
            layoutSize: "500%",
            zoom:6,
            center: [109.76112,19.2472],
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#052363',
                borderColor: 'rgba(63, 218, 255, 0.5)',
                borderWidth: 2,
                shadowColor: 'rgba(63, 218, 255, 0.5)',
                shadowBlur: 0,
              },
              emphasis: {
                areaColor: '#2B91B7',
              }
            }
          },
          series : [
            { //城市点位
              name: 'city',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              symbolSize: 10,
              itemStyle: {
                normal: {
                  color: 'red'
                },
              },
              zlevel: 9,
              data: pd,
            },
            { //城市点位
              name: 'city',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'pin',
              symbolSize: 40,
              itemStyle: {
                normal: {
                  color: 'yellow'
                }
              },
              zlevel: 9,
              data: pd,
            }
          ]
        };
        ind_chart_map.setOption(option);
        window.onresize = ind_chart_map.resize;
      },
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
      background-size: auto 100%;
      background-position: center;
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
  .pop_type_item {
    padding: 4vh 20vh 0 13vh;
    position: relative;
    height: 10vh;
    .pop_type_icon {
      position: absolute;
      z-index: 1;
      top:4.7vh;
      left: 4.7vh;
      width: 4.7vh;
      height: 4.7vh;
      border-radius: 4.7vh;
      line-height: 4.7vh;
      text-align: center;
      .fa { color: #fff;}
    }
    .fa_bg_1 { background: linear-gradient(#8343ff, #7f26ff)}
    .fa_bg_2 { background: linear-gradient(#facb17, #de8b13)}
    .fa_bg_3 { background: linear-gradient(#25fa91, #08d28c)}
    .fa_bg_4 { background: linear-gradient(#dd5246, #cf281c)}
    .fa_bg_5 { background: linear-gradient(#4accfd, #02aeee)}
    .fa_bg_6 { background: linear-gradient(#842af0, #9350e9)}

    .pop_type_title {
      font-size: 1.4vh;
      color: #a1bcfd;
      margin:.5vh 0;
      white-space: nowrap;
      overflow: hidden;
    }
    .pop_type_val {
      font-size: 2.8vh;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      .pop_type_unit {
        font-size: 1.8vh;
        color: #fff;
      }
    }
    .pop_type_last {
      font-size: 1.4vh;
      color: #a1bcfd;
      white-space: nowrap;
      overflow: hidden;
    }
    .pop_type_prop {
      font-size: 1.4vh;
      white-space: nowrap;
      overflow: hidden;
      .arr_icon {
        width: 3.6vh;
        height: 3.6vh;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .pop_type_frIcon {
      position: absolute;
      top:4.7vh;
      right: 5vh;
      width: 14vh;
      height: 5vh;
    }
    .up {color: #0ff1a4;}
    .dn {color: #ff584b;}
  }
  .pop_chart_fr { height: 22vh}
  .icon-dnArr { background: url("../../static/img/icon-dnArr.svg") no-repeat 100%;}
  .icon-upArr { background: url("../../static/img/icon-upArr.svg") no-repeat 100%;}
  .icon-dec-line { background: url("../../static/img/icon-dec-line.svg") no-repeat; background-size: 100%;}
</style>
