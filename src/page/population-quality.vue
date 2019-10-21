<template>
  <div class="chart_main">
    <el-row>
      <el-col :span="8">
        <div class="quality_col chart_col">
          <div class="pop_col_tit">
            <i class="tit_icon icon-tit-line"></i>
            <h3>儿童抚养情况</h3>
          </div>
          <div id="chart_line_1" class="quality_chart_box"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="quality_col chart_col">
          <div class="pop_col_tit">
            <i class="tit_icon icon-tit-line"></i>
            <h3>居民可支配收入</h3>
          </div>
          <div id="chart_bar_1" class="quality_chart_box"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="quality_col chart_col">
          <div class="pop_col_tit">
            <i class="tit_icon icon-tit-line"></i>
            <h3>人力资本投入</h3>
          </div>
          <div id="chart_line_2" class="quality_chart_box"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="quality_col chart_col">
          <div class="pop_col_tit">
            <i class="tit_icon icon-tit-line"></i>
            <h3>人口受教育情况</h3>
          </div>
          <div id="chart_bar_2" class="quality_chart_box"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="quality_col chart_col">
          <div class="pop_col_tit">
            <i class="tit_icon icon-tit-line"></i>
            <h3>家庭恩格尔系数</h3>
          </div>
          <div id="chart_radar_1" class="quality_chart_box"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="quality_col chart_col">
          <div class="pop_col_tit">
            <i class="tit_icon icon-tit-line"></i>
            <h3>劳动效率</h3>
          </div>
          <div id="chart_bar_3" class="quality_chart_box"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="quality_col chart_col">
          <div class="pop_col_tit">
            <i class="tit_icon icon-tit-line"></i>
            <h3>基本公共文化</h3>
          </div>
          <div id="chart_lgLine_1" class="quality_chart_box"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="quality_col chart_col">
          <div class="pop_col_tit">
            <i class="tit_icon icon-tit-line"></i>
            <h3>医疗卫生服务</h3>
          </div>
          <div id="chart_bar_4" class="quality_chart_box"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="quality_col chart_col">
          <div class="pop_col_tit">
            <i class="tit_icon icon-tit-line"></i>
            <h3>科研成果产出</h3>
          </div>
          <div id="chart_lgLine_2" class="quality_chart_box"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  var echarts = require('echarts');
    export default {
        name: "population-quality",

      data(){
        return{
          pop_month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          pop_hou_bar:[190,118,172,176,223,84,111,90,94,241,100,110],
          pop_hou_line:[164,218,72,76,180,184,86,190,94,222,100,110],
          nameB: ['城乡居民人均可支配收入','6岁及以上人口人均受教育年限','劳动生产率','每千人口医院床位数'],
          nameL: ['增长率','文盲率',]

        }
      },
      mounted () {
        this.chart_line ('chart_line_1')
        this.chart_line ('chart_line_2')
        this.chart_bar ('chart_bar_1',this.pop_month,this.pop_hou_bar,this.pop_hou_line,this.nameB[0],this.nameL[0])
        this.chart_bar ('chart_bar_2',this.pop_month,this.pop_hou_bar,this.pop_hou_line,this.nameB[1],this.nameL[1])
        this.chart_bar ('chart_bar_3',this.pop_month,this.pop_hou_bar,this.pop_hou_line,this.nameB[2],this.nameL[0])
        this.chart_bar ('chart_bar_4',this.pop_month,this.pop_hou_bar,this.pop_hou_line,this.nameB[3],this.nameL[0])
        this.chart_lgLine('chart_lgLine_1')
        this.chart_lgLine('chart_lgLine_2')
        this.chart_radar('chart_radar_1')
      },

      methods: {
        chart_line(id){
          var chart_line=echarts.init(document.getElementById(id));
          var fontColor = '#30eee9';
          var option ={
            grid: {
              left: '5%',
              right: '5%',
              top:'20%',
              bottom: '10%',
              containLabel: true
            },
            tooltip : {
              show: true,
              trigger: 'item'
            },
            legend: {
              show:true,
              x:'center',
              y:'0',
              icon: 'stack',
              itemWidth:10,
              itemHeight:10,
              textStyle:{
                color:'#1bb4f6'
              },
              data:['第一项','第二项']
            },
            xAxis : [
              {
                type : 'category',
                boundaryGap : false,
                axisLabel:{
                  color: fontColor
                },
                axisLine:{
                  show:true,
                  lineStyle:{
                    color:'#397cbc'
                  }
                },
                axisTick:{
                  show:false,
                },
                splitLine:{
                  show:true,
                  lineStyle:{
                    color:'#195384'
                  }
                },
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
              }
            ],
            yAxis : [
              {
                type : 'value',
                min:0,
                max:1000,
                axisLabel : {
                  formatter: '{value}',
                  textStyle:{
                    color:'#2ad1d2'
                  }
                },
                axisLine:{
                  lineStyle:{
                    color:'#27b4c2'
                  }
                },
                axisTick:{
                  show:false,
                },
                splitLine:{
                  show:true,
                  lineStyle:{
                    color:'#11366e'
                  }
                }
              },
            ],
            series : [
              {
                name:'第一项',
                type:'line',
                stack: '总量',
                symbol:'circle',
                symbolSize: 8,
                itemStyle: {
                  normal: {
                    color:'#0092f6',
                    lineStyle: {
                      color: "#0092f6",
                      width:1
                    },
                    areaStyle: {
                      //color: '#94C9EC'
                      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(7,44,90,0.3)'
                      }, {
                        offset: 1,
                        color: 'rgba(0,146,246,0.9)'
                      }]),
                    }
                  }
                },
                markPoint:{
                  itemStyle:{
                    normal:{
                      color:'red'
                    }
                  }
                },
                data:[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
              },
              {
                name:'第二项',
                type:'line',
                stack: '总量',
                symbol:'circle',
                symbolSize: 8,

                itemStyle: {
                  normal: {
                    color:'#00d4c7',
                    lineStyle: {
                      color: "#00d4c7",
                      width:1
                    },
                    areaStyle: {
                      //color: '#94C9EC'
                      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(7,44,90,0.3)'
                      }, {
                        offset: 1,
                        color: 'rgba(0,212,199,0.9)'
                      }]),
                    }
                  }
                },
                data:[220, 182, 191, 234, 290, 330, 310,201, 154, 190, 330, 410]
              },
            ]
          };
          chart_line.setOption(option);
          window.onresize = chart_line.resize;
        },
        chart_bar(id,month,barVal,lineVal,nameB,nameL){
          var chart_bar=echarts.init(document.getElementById(id));
          var option = {
            legend: {
              textStyle:{
                color:'#1bb4f6',
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
              top:'20%',
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

          chart_bar.setOption(option);
          window.onresize = chart_bar.resize;
        },
        chart_lgLine(id){
          var chart_lgLine=echarts.init(document.getElementById(id));
          var option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#57617B'
                }
              }
            },
            grid:{
              top:'20%',
              left: '5%',
              right: '5%',
              bottom: '10%',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              boundaryGap: false,
              axisLine: {
                lineStyle: {
                  color: 'rgba(255,255,255,.5)'
                }
              },
              data: ['2009','2010','2011','2012','2013','2014','2015','2016','2017','2018',]
            }],
            yAxis: [{
              type: 'value',
              name: '',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(255,255,255,.5)'
                }
              },
              axisLabel: {
                margin: 5,
                textStyle: {
                  fontSize: 14
                }
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(255,255,255,.1)'
                }
              }
            }],
            series: [{
              name: '最高温度',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 5,
              showSymbol: false,
              lineStyle: {
                normal: {
                  width: 3
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(16,97,204, 0.3)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(17,235,210, 0)'
                  }], false),
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowBlur: 10
                }
              },
              itemStyle: {
                normal: {

                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(16,97,204,1)'
                  }, {
                    offset: 1,
                    color: 'rgba(17,235,210,1)'
                  }])
                },
                emphasis: {
                  color: 'rgb(0,196,132)',
                  borderColor: 'rgba(0,196,132,0.2)',
                  extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                  borderWidth: 10,

                },
              },
              data: [11,32, 34, 39,15, 35,1, 38, 36, 34 ]
            }, ]
          };
          chart_lgLine.setOption(option);
          window.onresize = chart_lgLine.resize;
        },
        chart_radar(id){
          var chart_radar=echarts.init(document.getElementById(id));
          var option = {
            color: ['#3D91F7', '#61BE67'],
            legend: {
              show: true,
              icon: "circle",
              right:0,
              top:0,
              itemWidth: 14,
              itemHeight: 14,
              itemGap: 21,
              orient: "horizontal",
              data: ['城镇居民家庭恩格尔系数', '农村居民家庭恩格尔系数'],
              textStyle: {
                fontSize: 14,
                color: '#1bb4f6'
              },
            },
            radar: {
              // shape: 'circle',
              name: {
                textStyle: {
                  color: 'rgba(255,255,255,.5)',
                  borderRadius: 3,
                  padding: [3, 5]
                }
              },
              indicator: [{
                name: '2009',
                max: 50000
              },
                {
                  name: '2018',
                  max: 50000
                },
                {
                  name: '2017',
                  max: 50000
                },
                {
                  name: '2016',
                  max: 50000
                },
                {
                  name: '2015',
                  max: 50000
                },
                {
                  name: '2014',
                  max: 50000
                },
                {
                  name: '2013',
                  max: 50000
                },
                {
                  name: '2012',
                  max: 50000
                },
                {
                  name: '2011',
                  max: 50000
                },
                {
                  name: '2010',
                  max: 50000
                }
              ],
              splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                  color: ['#21293d'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }

              },
              // axisLabel:{//展示刻度
              //     show: true
              // },
              axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                  color: 'rgba(255,255,255,.1)'
                }
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(255,255,255,.1)',
                  width: 1, // 分隔线线宽
                }
              }

            },
            series: [{
              type: 'radar',
              //areaStyle: {normal: {}},

              data: [{
                value: [35000, 35000, 35000, 35000, 50000, 19000, 21000, 35000, 35000, 35000,],
                name: 'a',
                areaStyle: {
                  normal: {
                    color: '#366BAF'
                  },
                },


              },
                {
                  value: [50000, 14000, 28020, 31100, 35000, 21000, 35000, 35000, 35000, 19000],
                  name: 'b',
                  areaStyle: {
                    normal: {
                      color: '#4B8659'
                    },
                  },
                }
              ]
            }]
          };
          chart_radar.setOption(option);
          window.onresize = chart_radar.resize;
        }
      }
    }
</script>

<style scoped lang="scss">
  .quality_col {
    height:29.6vh;
    margin-top: 1vh;
  }
  .chart_col{
    background: #0c1752;
    border:1px solid #162f58;
    border-radius: 1vh;
    margin-left: 2vh;
    margin-right: 2vh;
  }
  /*.pop_col_tit {*/
  /*  padding:2vh 5vh;*/
  /*  position: relative;*/
  /*  height: 3.6vh;*/
  /*  h3 {*/
  /*    font-size: 1.6vh;*/
  /*    color: #a9b2d4;*/
  /*    font-weight: 400;*/
  /*    line-height: 3.6vh;*/
  /*  }*/
  /*  .tit_icon {*/
  /*    width: 3.6vh;*/
  /*    height: 3.6vh;*/
  /*    display: inline-block;*/
  /*    position: absolute;*/
  /*    top:2vh;*/
  /*    left: 1vh;*/
  /*    z-index: 1;*/
  /*  }*/
  /*}*/
  .quality_chart_box {
    height: 24.6vh;
  }
  .icon-tit-line { background: url("../../static/img/icon-tit-line.svg") no-repeat 100%;}

</style>
