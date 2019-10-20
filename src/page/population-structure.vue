<template>
  <div id="index">
    <div class = "chart_main">
      <el-row>
        <el-col :span="7">
          <el-row>
            <el-col :span="24">
              <div class = "ind_left">
              <el-row>
                <el-col :span="24">
                  <div  style="height:3vh;">
                    <el-row>
                      <el-col :span="2">
                      </el-col>
                      <el-col :span="22">
                        <p class="_tit">常住人口年龄结构5年变迁</p>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div   style="height:26vh;" id="chart_left1"></div>
                </el-col>
              </el-row>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "ind_left" id="chart_left2"></div>
            </el-col>
            <el-col :span="24">
              <div class = "ind_left" id="chart_left3"></div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="10">
          <el-row>
            <el-col :span="24">
              <div  class="ind_center"></div>
            </el-col>
            <el-col :span="24">
              <div  class="ind_center1" id="chart_center2"></div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="7">
          <el-col :span="24">
            <div class = "ind_right" id="chart_right1"></div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_right" id="chart_right2"></div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_right" id="chart_right3"></div>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import 'font-awesome/css/font-awesome.min.css';
  var echarts = require('echarts');
  import '../../static/js/map/china.js';
  import '../../static/js/map/hainan.js';
  import hainan from '../../static/js/json/hainan.json';
  export default {
        name: "population-structure",
    components: {

    },
      data(){
        return{

      }
    },
      components: {
    },
      mounted () {
        this.chart_left1();
        this.chart_left2();
        this.chart_left3();
        this.chart_center2();
        this.chart_right1();
        this.chart_right2();
        this.chart_right3();
    },
      methods: {
        chart_left1(){
          var myChart=echarts.init(document.getElementById("chart_left1"));
          var option = {

            tooltip: {
              trigger: 'axis',
              textStyle: {
                color: "#fff",
                fontSize:7,
              },
            },
            grid: {
              left: '5%',
              right: '5%',
              bottom: '5%',
              top:'15%',
              containLabel: true
            },
            legend: {
              data: ['2014年年龄组占比', '2018年年龄组占比'],
              right: '8%',
              top:'1%',
              textStyle: {
                color: "#fff",
                fontSize:7,
              },
              itemWidth: 7,
              itemHeight: 5,
              // itemGap: 35
            },
            xAxis: {
              type: 'category',
              zlevel:10,
              data: ['0-4','5-9','10-14','15-19','20-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-64','65-69','70-74','75-79','80+'],
              axisLine: {
                show:false,
                lineStyle: {
                  color: '#138EEE'
                }
              },
              axisLabel: {
                interval:0,
                rotate:40,
                textStyle: {
                  fontFamily: 'Microsoft YaHei',
                  color:"#FFF",
                  fontSize:7,
                },
              },
              axisTick:{
                show:false
              }
            },

            yAxis: {
              type: 'value',
              name:'%',
              nameTextStyle:{
                color:'#fff',
                fontSize:7,
                padding:[0,0,-10,0],
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#138EEE'
                }
              },
              axisLabel:{
                show:true,
                textStyle:{
                  fontFamily: 'Microsoft YaHei',
                  color:"#FFF",
                  fontSize:7,
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,0.3)'
                }
              },

              axisTick:{
                show:false
              }
            },
            series: [{
              name: '2014年年龄组占比',
              type: 'bar',
              barWidth: '30%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#D94076'
                  }, {
                    offset: 1,
                    color: '#B83664'
                  }]),
                },
              },
              data: [20, 17, 5, 6, 9,10,17,15,14,13, 16, 19,10,1,12,14,13]
            },
              {
                name: '2018年年龄组占比',
                type: 'bar',
                barWidth: '30%',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#67C2EF'
                    }, {
                      offset: 1,
                      color: '#4877BD'
                    }]),
                  }

                },
                data: [5, 12, 8, 16, 19,10,7,5,4,3, 6, 9,0,11,12,14,13]
              }]
          };
          myChart.setOption(option);
          window.onresize = myChart.resize;
        },
        chart_left2(){
          var myChart=echarts.init(document.getElementById("chart_left2"));
          // 指定图表的配置项和数据
          var data1 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
          var data2 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
          var data3 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
          var data4 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
          var datacity = ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年'];
          var option = {
            color: ['#3157B0','#B34836', '#fff', '#152135', '#FFD52E'],
            tooltip: {
              trigger: 'axis',
              textStyle: {
                color: "#fff",
                fontSize:7,
              },
            },
            legend: {
              textStyle: {
                color: "#fff",
                fontSize:7,
              },
              itemWidth: 7,
              itemHeight: 5,
              right: '8%',
              top:'1%',
              data: ['0-14岁人口占比', '15-64岁人口占比', '65-80岁人口占比', '80岁以上人口占比'],
            },
            grid: {
              left: '5%',
              right: '5%',
              bottom: '5%',
              top:'15%',
              containLabel: true
            },
            yAxis: [{
              type: 'value',
              name:'%',
              nameTextStyle:{
                color:'#fff',
                fontSize:7,
                padding:[0,0,-10,0],
              },
              axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value} ',
                textStyle:{
                  color:'#fff',
                  fontSize:7
                }
              },
              splitLine: {
                show: false,
                lineStyle: {
                  type: 'dashed'
                }
              },
              axisLine:{
                show:false
              },
              show: true,
              axisTick:{
                show:false
              }

            }],
            xAxis: [{
              type: 'category',
              axisLabel: {
                interval: 0,
                show: true,
                splitNumber: 15,
                textStyle: {
                  fontSize: 7,
                  color: '#fff'
                },

              },
              axisLine:{
                show:false
              },
              axisTick:{
                show:false
              },
              data: datacity,
            }],
            series: [{
              name: '0-14岁人口占比',
              type: 'bar',
              stack: 'sum',
              barCategoryGap:'5%',
              barWidth: '10',
              data: data1

            },
              {
                name: '15-64岁人口占比',
                type: 'bar',
                barWidth: '10',
                barCategoryGap:'5%',
                stack: 'sum',
                data: data2,

              },
              {
                name: '65-80岁人口占比',
                type: 'bar',
                stack: 'sum',
                barWidth: '10',
                barCategoryGap:'5%',
                data: data3

              },
              {
                name: '80岁以上人口占比',
                type: 'bar',
                stack: 'sum',
                barWidth: '10',
                barCategoryGap:'5%',
                data: data3

              },

            ]
          };
          myChart.setOption(option);
        },
        chart_left3(){
          var myChart=echarts.init(document.getElementById("chart_left3"));
          var labelData = ["0-4", "10-14", "20-24", "30-34", "40-44", "50-54", "60-64", "70-74", "80-84", "86+"];
          var manData = [50, 28, 80, 65, 68, 60, 35, 52,77,23];
          var womanData = [-50, -28, -40, -45, -38, -58, -26, -45,-34,-12];
          var option = {
            legend:{
              textStyle: {
                color: "#fff",
                fontSize:7,
              },
              itemWidth: 7,
              itemHeight: 5,
              right: '8%',
              top:'1%',
              data: [
                {
                  name:'男',
                  textStyle:{
                    color:'#fff'
                    // color:'#cccccc'
                  }
                },
                {
                  name:'女',
                  textStyle:{
                    color:'#fff'
                  },
                }
              ]

            },
            // tooltip（提示框组件）
            tooltip: {
              //trigger(触发类型)，可选'item','axis','none'
              trigger: 'axis',
              axisPointer: {
                //指示器类型,可选'line','shadow','cross'
                type: 'line'
              },
              textStyle:{
                fontSize:7
              },
              // 自定义提示内容
              formatter: function(a){
                var v = a[0];
                return v.name + '<br/>' + v.marker +v.seriesName + '：'+ Math.abs(v.value);
              }
            },
            xAxis: [{
              type: 'value',
              min:-100,max:0,
              gridIndex: 0,
              axisTick:{show: false, inside:false},
              axisLabel : {show: false},
              axisLine: {// Y轴轴线样式
                show: false,
                lineStyle:{
                  color:'#000',
                }
              },
              splitLine: {
                show: false
              }
            },{
              type: 'value',
              gridIndex: 1, min:0,max:100,
              axisTick:{show: false}, //是否显示刻度
              axisLine: {// Y轴轴线样式
                show: false, // 是否显示X轴
                lineStyle:{
                  color:'#000',
                }
              },
              axisLabel : {
                show: false //是否显示X轴内容
              },
              splitLine: {
                show: false
              }
            }],
            yAxis: [{
              type: 'category',
              gridIndex: 0,
              inverse: true,
              data: labelData,
              axisTick:{show:false},
              axisLabel : {show:false,color:'#fff',fontSize:'7',},
              axisLine: {// Y轴轴线样式
                show: true,
                lineStyle:{
                  color:'gray',
                }
              }
            },{
              type: 'category',
              gridIndex: 1,
              inverse: true,
              data: labelData,
              axisTick:{show:false},
              axisLabel : {
                color:'#fff',
                fontSize:'7'
              },
              axisLine: {
                show: false //是否显示轴线
              }
            }
            ],
            grid: [{
              left: '5%',
              right: '50%',
              bottom: '5%',
              top:'15%',
              containLabel: true,gridIndex: 0,
            }, {
              left: '50%',
              right: '5%',
              bottom: '5%',
              top:'15%',
              containLabel: true,gridIndex: 1,
            }],
            color:['#2FACFA','#F5A623'],
            series: [
              {
                name: '男',
                type: 'bar',
                barWidth:'40%',
                gridIndex: 0,
                label:{
                  normal: {
                    show: false,
                    position: 'left',
                    formatter: "{c}%",
                    color:'#fff'
                  }
                },
                itemStyle:{
                  normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 1, 0,
                      [{
                        offset: 0,
                        color: '#67C2EF' /*#0085FA*/
                      }, {
                        offset: 0.7,
                        color: '#4877BD' /*#00BBFD*/
                      }]),
                    borderWidth:0,
                    borderColor:'#333',
                    label:{
                      show:true,position:'left',
                      formatter:function(v){
                        return (v.value * -1);
                      }
                    }
                  }
                },
                data: womanData
              },
              {
                name: '女',
                type: 'bar',
                barWidth:'40%',
                xAxisIndex: 1,
                yAxisIndex: 1,
                label:{
                  fontsize:7,
                  normal: {
                    show: false,
                    position: 'right',
                    formatter: "{c}%",

                    color:'#fff'
                  }
                },
                itemStyle:{
                  normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 1, 0,
                      [{
                        offset: 0,
                        color: '#B83664' /*#0085FA*/
                      }, {
                        offset: 0.7,
                        color: '#D94076' /*#00BBFD*/
                      }]),
                    borderWidth:0,
                    borderColor:'#333',
                    label:{
                      show:true,position:'right',
                      formatter:function(v){
                        return v.value;
                      }
                    }
                  }
                },
                data: manData
              }

            ]
          };
          myChart.setOption(option);
        },
        chart_center2(){
          var myChart=echarts.init(document.getElementById("chart_center2"));
          var option = {
            tooltip: {
              trigger: 'axis',
              textStyle:{
                fontSize:7
              },
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['2014年', '2015年', '2016年', '2017年', '2018年'],
              left:'center',
              align: 'left',
              top:'2%',
              textStyle: {
                color: "#fff",
                fontSize:7,
              },
              itemWidth: 7,
              itemHeight: 7,
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              data: ['小学',
                '初中',
                '高中',
                '中职',
                '专科',
                '本科',
                '研究生'
              ],
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#15233C",
                  width: 1,
                  type: "solid"
                }
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize:7,
                }
              },
            }],
            yAxis: [{
              type: 'value',
              name:'人',
              nameTextStyle:{
                color:'#fff',
                fontSize:7,
              },
              axisLabel: {
                formatter: '{value}',
                color:'#fff',
                fontSize:7,
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#00c7ff",
                  width: 1,
                  type: "solid"
                },
              },
              splitLine: {
                lineStyle: {
                  color: "gray",
                }
              }
            }],
            series: [{
              name: '2014年',
              type: 'bar',
              data: [220, 120, 240, 266, 210, 246,260],
              barWidth: 5, //柱子宽度
              barGap: 1, //柱子之间间距
              itemStyle: {
                normal: {
                  color: '#1E7C32',
                  opacity: 1,
                }
              }
            }, {
              name: '2015年',
              type: 'bar',
              data: [130, 150, 220, 245, 136, 256,260],
              barWidth: 5,
              barGap: 1,
              itemStyle: {
                normal: {
                  color: '#93514F',
                  opacity: 1,
                }
              }
            }, {
              name: '2016年',
              type: 'bar',
              data: [350, 270, 460, 511, 346, 502, 50],
              barWidth: 5,
              barGap: 1,
              itemStyle: {
                normal: {
                  color: '#8E919B',
                  opacity: 1,
                }
              }
            },{
              name: '2017年',
              type: 'bar',
              data: [220, 120, 240, 266, 210, 246,260],
              barWidth: 5, //柱子宽度
              barGap: 1, //柱子之间间距
              itemStyle: {
                normal: {
                  color: '#32589E',
                  opacity: 1,
                }
              }
            },{
              name: '2018年',
              type: 'bar',
              data: [220, 120, 240, 266, 210, 246,260],
              barWidth: 5, //柱子宽度
              barGap: 1, //柱子之间间距
              itemStyle: {
                normal: {
                  color: '#7F61A4',
                  opacity: 1,
                }
              }
            },]
          };
          myChart.setOption(option);
        },
        chart_right1(){
          var myChart=echarts.init(document.getElementById("chart_right1"));
          var labels = ['定安县', '屯昌县', '澄迈县', '临高县', '白沙黎族自治县', '昌江黎族自治县','乐东黎族自治','陵水黎族自治县','保亭黎族苗族自治县','琼中黎族苗族自治县'];
          var option = {
            tooltip: {
              textStyle:{
                fontSize:7
              },
              formatter: function(params) {
                var results = '';
                for (var i = 0; i < labels.length; i++) {
                  results += labels[i] + '：' + params.value[i] + '%<br>';
                }
                return results;
              }
            },
            radar: {
              nameGap:2,
              name: {
                textStyle: {
                  color: '#fff',
                  fontSize:7
                }
              },
              indicator: [{name:'定安县', max: 100},
                {name: '屯昌县', max: 100},
                {name:'澄迈县', max: 100},
                {name:'临高县', max: 100},
                {name:'白沙黎族自治县', max: 100},
                {name:'昌江黎族自治县', max: 100},
                {name:'乐东黎族自治', max: 100},
                {name:'陵水黎族自治县', max: 100},
                {name:'保亭黎族苗族自治县', max: 100},
                {name:'琼中黎族苗族自治县', max: 100}]
            },
            series: [{
              type: 'radar',
              label:{
                distance:3
              },
              data: [{
                value: [5, 10, 20, 30, 5, 0,12,24,30,25],
              }, ],
              areaStyle:{
                normal:{
                  color:'blue',
                  opacity:0
                },

              },
              lineStyle:{
                normal:{
                  color:'blue'
                }
              },
              itemStyle:{
                normal:{
                  color:'blue'
                }
              },
              label:{
                show:true,
                position:'',
                color:'#fff',
                fontSize:'40%'
              }
            }],
          };
          myChart.setOption(option);
        },
        chart_right2(){
          var myChart=echarts.init(document.getElementById("chart_right2"));
          var labels = ['海口市', '三亚市', '三沙市', '儋州市', '五指山市', '文昌市','琼海市','万宁市','东方市'];
          var option = {
            tooltip: {
              textStyle:{
                fontSize:7
              },
              formatter: function(params) {
                var results = '';
                for (var i = 0; i < labels.length; i++) {
                  results += labels[i] + '：' + params.value[i] + '%<br>';
                }
                return results;
              }
            },
            radar: {
              nameGap:2,
              name: {
                textStyle: {
                  color: '#fff',
                  fontSize:7
                }
              },
          indicator: [{name:'海口市', max: 100},
                {name: '三亚市', max: 100},
                {name:'三沙市', max: 100},
                {name:'儋州市', max: 100},
                {name:'五指山市', max: 100},
                {name:'文昌市', max: 100},
                {name:'琼海市', max: 100},
                {name:'万宁市', max: 100},
                {name:'东方市', max: 100},]
            },
            series: [{
              type: 'radar',
              label:{
                distance:3
              },
              data: [{
                value: [50, 70, 20, 30, 65, 60,28,89,92,15],
              }, ],
              areaStyle:{
                normal:{
                  color:'blue',
                  opacity:0
                },

              },
              lineStyle:{
                normal:{
                  color:'blue'
                }
              },
              itemStyle:{
                normal:{
                  color:'blue'
                }
              },
              label:{
                show:true,
                position:'',
                color:'#fff',
                fontSize:'40%'
              }
            }],
          };
          myChart.setOption(option);
        },
        chart_right3(){
          var myChart=echarts.init(document.getElementById("chart_right3"));
          var option = {
            legend: {
              name: [],
              align: 'left',
              right: '5%',
              top: '10%',
              itemWidth:10,
              itemHeight: 7,
              textStyle: {
                color: '#fff',
                fontSize: '40%',
              },
            },
            // tooltip（提示框组件）
            tooltip: {
              //trigger(触发类型)，可选'item','axis','none'
              trigger: 'axis',
              axisPointer: {
                //指示器类型,可选'line','shadow','cross'
                type: 'line'
              },
              textStyle:{
                fontSize:'40%'
              }
            },
            xAxis: {
              type: 'value',
              max:100,
              position: 'bottom',
              axisLabel: {
                show: true,
                color: '#fff',
                fontSize: '40%',
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#162645'
                }
              },
              axisLine: {
                show:false,
                lineStyle: {
                  color: '#FFFFFF'
                }
              },
              axisTick: {
                show: false
              },

            },
            yAxis: [{
              type: 'category',
              //是否反向坐标轴
              inverse: true,
              //axisTick 坐标轴刻度相关设置
              axisTick: {
                show: false
              },
              //axixLine 坐标轴轴线相关设置
              axisLine: {
                lineStyle: {
                  color: 'gray',
                }
              },
              data: ['2014年', '2018年'],
              //axisLabel 坐标轴刻度标签的相关设置
              axisLabel: {
                show: true,
                color: '#fff',
                fontSize: '40%'
              },

            }, ],
            series: [{
              name: '一孩率',
              type: 'bar',
              stack: '费用',
              data: [25, 20],
              barWidth: '40%',
              itemStyle: {
                color: '#4699FF',
              },

            },
              {
                name: '二孩率',
                //type决定图表类型
                type: 'bar',
                //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
                stack: '费用',
                data: [22, 12],
                barWidth: '40%',
                itemStyle: {
                  color: '#FF5B35',
                },
              },
              {
                name: '三孩率',
                //type决定图表类型
                type: 'bar',
                //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
                stack: '费用',
                data: [15, 20],
                barWidth: '40%',
                itemStyle: {
                  color: '#47D1FF',
                },
              },
              {
                name: '四人户',
                //type决定图表类型
                type: 'bar',
                //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
                stack: '费用',
                data: [15, 13],
                barWidth: '40%',
                itemStyle: {
                  color: '#fff',
                },
              },
              {
                name: '五人及五人以上户',
                //type决定图表类型
                type: 'bar',
                //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
                stack: '费用',
                data: [15, 16],
                barWidth: '40%',
                itemStyle: {
                  color: '#5DEA80',
                },
              },

            ]
          };
          myChart.setOption(option);
          window.onresize = chart_right3.resize;
        }
    }
}

</script>

<style lang="scss" scoped>
  #index{
    ._tit{
      background-color: #222A34;
      color:#fff;
      font-size: 10%;
    }
  .ind_left{
    border: 1px #0091ff solid;
    width: 98%;
    height: 29.5vh;
    width:27.5vw;
    margin-top: 1vh;
    margin-left: 2%;
  }
  .ind_center{
    border: 1px #0091ff solid;
    height: 59.5vh;
    width: 100%;
    margin-top: 1vh;
    margin-top: 1vh;
  }
    .ind_center1{
      border: 1px #0091ff solid;
      height: 30.5vh;
      width: 100%;
      margin-top: 1vh;
      margin-top: 1vh;
    }
  .ind_right{
    border: 1px #0091ff solid;
    width: 98%;
    height: 29.5vh;
    width:27.5vw;
    margin-top: 1vh;
    margin-right: 1%;
    margin-left: 4%;
  }
  }
</style>
