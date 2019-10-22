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
        nameL: '同比增长率',
        tableData:[
          {region:'海口市',rate:40,num:1,coor:[110.326837,20.031624]},
          {region:'三亚市',rate:38,num:2,coor:[109.524255,18.256929]},
          {region:'三沙市',rate:37,num:3,coor:[112.351689,16.838364]},
          {region:'儋州市',rate:36,num:4,coor:[109.565074,19.533091]},
          {region:'五指山市',rate:35,num:5,coor:[109.52483,18.780731]},
          {region:'文昌市',rate:35,num:6,coor:[110.932715,19.616634]},
          {region:'琼海市',rate:34,num:7,coor:[110.480832,19.255009]},
          {region:'万宁市',rate:33,num:8,coor:[110.396559,18.802845]},
          {region:'东方市',rate:32,num:9,coor:[108.65629,19.100448]},
          {region:'定安县',rate:32,num:10,coor:[110.359209,19.683308]},
          {region:'屯昌县',rate:31,num:11,coor:[110.108546,19.357035]},
          {region:'澄迈县',rate:30,num:12,coor:[110.010062,19.744893]},
          {region:'临高县',rate:29,num:13,coor:[109.688244,19.916212]},
          {region:'白沙黎族自治县',rate:29,num:14,coor:[109.455171,19.233017]},
          {region:'昌江黎族自治县',rate:29,num:15,coor:[109.063039,19.30236]},
          {region:'乐东黎族自治县',rate:28,num:16,coor:[109.179933,18.756966]},
          {region:'陵水黎族自治县',rate:27,num:17,coor:[110.042739,18.512332]},
          {region:'保亭黎族自治县',rate:26,num:18,coor:[109.706931,18.647458]},
          {region:'琼中黎族自治县',rate:25,num:19,coor:[109.846811,19.038617]}
        ],
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

        var pd = [];
        for (var i = 0; i < this.tableData.length; i++) {
          var tmp = {}
          var d = []
          tmp.name = this.tableData[i].region
          d.push(this.tableData[i].coor[0],this.tableData[i].coor[1],this.tableData[i].region,this.tableData[i].rate,i+1)
          tmp.value = d
          pd.push(tmp)
        };
        var  option =  {
          tooltip: {
            trigger: 'item',
            textStyle: config().textStyle,
            formatter: function (params) {
              var st = params.value[2]+'</br>常住人口：'+params.value[3]+'</br>增量：'+params.value[4]
              return st
            }
          },
          legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['pm2.5'],
            textStyle: config().textStyle,
          },
          geo: {
            show: true,
            map: 'hainan',
            layoutSize: "500%",
            zoom:5.5,
            center: [109.76112,18.8472],
            label: {
              normal: {
                show: true,
                textStyle: config().textStyle,
              },
              emphasis: {
                show: true,
                textStyle: config().textStyle,
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: 'transparent',
                borderColor: '#3fdaff',
                borderWidth: 2,
                shadowColor: 'rgba(63, 218, 255, 0.5)',
                shadowBlur: 30
              },
              emphasis: {
                areaColor: '#2B91B7',
              }
            }
          },
          visualMap: {
            show:false,
            max: 19,
            min:1,
            dimension:4,
            seriesIndex:0,
            calculable: true,
            inRange: {
              color: ['#ff3800','#ff4f00' ,'#ff8c00','#ffc900','#e8ff00','#6dff00','#00ff23']
            }
          },
          series : [
            { //城市点位
              name: 'city',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              symbolSize: function (val) {
                return config().fontSize*val[3]/18 //val[3]*1.5-18
              },
              itemStyle: {
                normal: {
                  color: 'red'
                }
              },
              zlevel: 9,
              data: pd,
            },
            { //城市点位
              name: 'city',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'pin',
              symbolSize: function (val) {
                if(val[4]<=10){
                  return config().fontSize*3
                }
              },
              itemStyle: {
                normal: {
                  color: '#0000ff'
                }
              },
              label: {
                normal: {
                  formatter:  function (val) {
                    if(val.data.value[4]<=10){
                      return val.data.value[4]
                    }else{
                      return '';
                    }
                  },
                  //position: 'top',
                  textStyle: config().textStyle,
                  show: true
                }
              },
              zlevel: 10,
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
