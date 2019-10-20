<template>
  <div id="populationAgeing">
    <div class = "chart_main">
      <el-row>
        <el-col :span="8">
          <el-row>
            <el-col :span="24">
              <div class = "left_age">
                <div class = "_tit"><h4>老龄人口结构与趋势</h4></div>
                <div id = "left_chart1" class = "left_chart"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "left_age">
                <div class = "_tit"><h4>老龄人口结构与趋势</h4></div>
                <div id = "left_chart2" class = "left_chart"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "left_age">
                <div class = "_tit"><h4>老龄人口结构与趋势</h4></div>
                <div id = "left_chart3" class = "left_chart"></div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16">
          <el-row>
            <el-col :span="24">
              <div class = "top_age"></div>
            </el-col>
            <el-col :span="24">
              <el-row>
                <el-col :span="12">
                  <div class = "bottom_age"></div>
                </el-col>
                <el-col :span="12">
                  <div class = "bottom_age" style="margin-right: 1vh"></div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  var echarts = require('echarts');
  import {config} from '../../static/js/config/chartConfig.js';
    export default {
        name: "population-ageing",
      data(){
        return{

        }
      },
      components: {
      },

      mounted () {
        this.left_chart1()
        this.left_chart2()
      },
      methods: {
        left_chart1(){
          var xData = ['2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'];
          var data1 = [300,600,140,210,500,600,110,230,600,120];
          var data2 = [100,500,120,160,300,400,100,130,500,90];
          var data3 = [20.2,20.4,15.2,16.9,23.1,14.4,16.3,18.5,19.1,26.6];
          var data4 = [16.2,14.4,11.2,13.9,18.1,10.4,12.3,15.5,14.1,16.6];

          var top_chart  = echarts.init(document.getElementById('left_chart1'));
          var option = {
            color: ["#ed9d3c",'#4fd7fd'],
            tooltip : {
              trigger: 'axis',
              textStyle: config().textStyle,
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: { //图例的设置
              show: true, //是否显示图例
              //icon: 'circle',//图例形状，示例为原型
              top: '3%',//图例离底部的距离
              right:"5%",
              itemWidth: config().fontSize, // 图例标记的图形宽度。
              itemHeight: config().fontSize, // 图例标记的图形高度。
              itemGap: config().fontSize, // 图例每项之间的间隔。
              textStyle: config().textStyle,
              data: ['60岁+人数', '65岁+人数', '60岁+占比','65岁+占比'],//图例的名称数据
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '5%',
              top:'18%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : xData ,
                axisLabel: {
                  //rotate:45,//斜体字可不用
                  textStyle: config().textStyle
                },
              },
            ],
            yAxis : [
              {
                type : 'value',
                minInterval:100,//设置左侧Y轴最小刻度
                splitLine: {
                  show: false
                },//设置横线样式
                axisLabel: {
                  textStyle: config().textStyle
                },
              },
              {
                type: "value",
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                axisLabel: {
                  textStyle: config().textStyle
                },
              }
            ],
            series : [
              {
                name:'60岁+人数',
                type:'bar',
                data:data1,
                barWidth:'30%',
                itemStyle: {
                  //折线拐点标志的样式
                  normal: {
                    color: '#ffba00'
                  }
                }
              },{
                name:'65岁+人数',
                type:'bar',
                data:data2,
                barWidth:'30%',
                itemStyle: {
                  //折线拐点标志的样式
                  normal: {
                    color: '#ff0014'
                  }
                }
              },{
                name: "60岁+占比",
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                //symbolSize: 10, //标记的大小
                itemStyle: {
                  //折线拐点标志的样式
                  color: "#00edff"
                },
                lineStyle: {
                  color: "#00edff"
                },
                data: data3,
                zlevel: 11
              },
              {
                name: "65岁+占比",
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                //symbolSize: 10, //标记的大小
                itemStyle: {
                  //折线拐点标志的样式
                  color: "#058cff"
                },
                lineStyle: {
                  color: "#0035ff"
                },
                data: data4,
                zlevel: 11
              }
            ]
          };
          top_chart.setOption(option)
          window.onresize = top_chart.resize;
        },
        left_chart2(){
          var xData = ['2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'];
          var data1 = [30,60,44,61,50,60,61,53,68,42];
          var data2 = [33,55,51,46,67,66,64,51,43,47];
          var data3 = [31,50,54,66,46,60,59,56,51,63];
          var data4 = [20.2,20.4,15.2,16.9,23.1,14.4,16.3,18.5,19.1,26.6];
          var data5 = [16.2,14.4,11.2,13.9,18.1,10.4,12.3,15.5,14.1,16.6];

          var top_chart  = echarts.init(document.getElementById('left_chart2'));
          var option = {
            color: ["#ed9d3c",'#4fd7fd'],
            tooltip : {
              trigger: 'axis',
              textStyle: config().textStyle,
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: { //图例的设置
              show: true, //是否显示图例
              //icon: 'circle',//图例形状，示例为原型
              top: '3%',//图例离底部的距离
              right:"5%",
              itemWidth: config().fontSize, // 图例标记的图形宽度。
              itemHeight: config().fontSize, // 图例标记的图形高度。
              itemGap: config().fontSize, // 图例每项之间的间隔。
              textStyle: config().textStyle,
              data: ['合计', '男', '女','常住人口出生率','户籍人口出生率'],//图例的名称数据
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '5%',
              top:'18%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : xData ,
                axisLabel: {
                  //rotate:45,//斜体字可不用
                  textStyle: config().textStyle
                },
              },
            ],
            yAxis : [
              {
                type : 'value',
                //minInterval:100,//设置左侧Y轴最小刻度
                splitLine: {
                  show: false
                },//设置横线样式
                axisLabel: {
                  textStyle: config().textStyle
                },
              },
              {
                type: "value",
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                axisLabel: {
                  textStyle: config().textStyle
                },
              }
            ],
            series : [
             {
                name: "合计",
                type: "line",
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                //symbolSize: 10, //标记的大小
                itemStyle: {
                  //折线拐点标志的样式
                  color: "#fff700"
                },
                lineStyle: {
                  color: "#fff700"
                },
                data: data1,
                zlevel: 11
              },
              {
                name: "男",
                type: "line",
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                //symbolSize: 10, //标记的大小
                itemStyle: {
                  //折线拐点标志的样式
                  color: "#0016ff"
                },
                lineStyle: {
                  color: "#0016ff"
                },
                data: data2,
                zlevel: 11
              },
              {
                name: "女",
                type: "line",
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                //symbolSize: 10, //标记的大小
                itemStyle: {
                  //折线拐点标志的样式
                  color: "#ff00d3"
                },
                lineStyle: {
                  color: "#ff00d3"
                },
                data: data3,
                zlevel: 11
              },
              {
                name: "常住人口出生率",
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                //symbolSize: 10, //标记的大小
                itemStyle: {
                  //折线拐点标志的样式
                  color: "#00ffea"
                },
                lineStyle: {
                  type: 'dashed',
                  color: "#00ffea"
                },
                data: data4,
                zlevel: 11
              },
              {
                name: "户籍人口出生率",
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                //symbolSize: 10, //标记的大小
                itemStyle: {
                  //折线拐点标志的样式
                  color: "#11ff00"
                },
                lineStyle: {
                  type: 'dashed',
                  color: "#11ff00"
                },
                data: data5,
                zlevel: 11
              }
            ]
          };
          top_chart.setOption(option)
          window.onresize = top_chart.resize;
        },
      }
    }
</script>

<style  lang="scss" scoped>
  #populationAgeing {
    .left_age{
      height: 29.6vh;
      margin-top: 1vh;
      margin-left: 1vh;
      background-image:url('../../static/img/ind_right.png');
      background-repeat: no-repeat;
      background-size: 100% 29.6vh;
      .left_chart{
        width: 100%;
        height: 25.6vh;
      }
    }
    .top_age{
      //width: 98%;
      height: 60.3vh;
      margin-top: 1vh;
      margin-left: 1vh;
      margin-right: 1vh;
      background-image:url('../../static/img/ind_right.png');
      background-repeat: no-repeat;
      background-size: 100% 60.3vh;
    }
    .bottom_age{
      height: 29.6vh;
      margin-top: 1vh;
      margin-left: 1vh;
      background-image:url('../../static/img/ind_right.png');
      background-repeat: no-repeat;
      background-size: 100% 29.6vh;
    }
  }
</style>
