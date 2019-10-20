<template>
  <div id="total">
    <div class = "chart_main">
      <el-row>
        <el-col :span="8">
          <el-row>
            <el-col :span="24">
              <div class = "ind_left">
                <div class="chart_title">户籍人口与常驻外来人口总量变化趋势</div>
                <div id="chart1" class="left_chart"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "ind_left">
                <div class="chart_title">户籍人口与常驻外来人口总量变化趋势</div>
                <div id="chart2"  class="left_chart"></div>

              </div>
            </el-col>
            <el-col :span="24">
              <div class = "ind_left">
                <div class="chart_title">劳动力人口增长率变化趋势</div>
                <div id="chart3"  class="left_chart"></div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16">
          <el-row>
            <el-col :span="24">
              <div class = "top_right">
                <div class = "chart_title"><h4>各地区户籍与常住外来人口增量分布</h4></div>
                <div id = "chart6" style="height: 90%"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <el-row>
                <el-col :span="12">

                  <div class = "ind_right2">
                    <div class="chart_title">各地区户籍人口增量变化</div>
                    <div id="chart4" style="height: 97%"></div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class = "ind_right2 " style="margin-right: 1vh">
                    <div class="chart_title">各地区常住外来人口增量变化</div>
                    <div id="chart5" style="height: 98%;"></div>
                  </div>
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
    import 'font-awesome/css/font-awesome.min.css';
    import {config} from '../../static/js/config/chartConfig.js';
    var echarts = require('echarts');
    import '../../static/js/map/china.js';
    import '../../static/js/map/hainan.js';
    import jq from 'jquery';
    import hainan from '../../static/js/json/hainan.json';
    export default {
        name: "populaton-total",
        data(){
            return {

            }
        },
        created () {
        },
        beforeDestroy() {

        },
        mounted() {
            this.init_chart1()
            this.init_chart2()
            this.init_chart3()
            this.init_chart4()
            this.init_chart5()
            this.init_chart6()
        },
        methods:{
            //户籍人口与常驻外来人口总量变化趋势
            init_chart1() {
                let chart1 = echarts.init(document.getElementById('chart1'), 'macarons');
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        top: '3%',
                        right: '4%',
                        textStyle: {
                            color : 'white',
                        },
                        data: ['户籍人口', '常驻外来人口']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        width:'93%',
                        height:'70%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLabel: {
                                interval: 0,
                                color:'#fff',
                                margin: 20
                            },
                            data: ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            splitLine: false,
                            axisLabel: {
                                interval: 0,
                                color:'#fff',
                                margin: 20
                            },
                        },
                    ],
                    series: [
                        {
                            name: '户籍人口',
                            type: 'bar',
                            stack: '额度',
                            color: '#10a2ff',
                            data: [1030, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, ]
                        },
                        {
                            name: '常驻外来人口',
                            type: 'bar',
                            stack: '额度',
                            color: '#ff2e83',
                            data: [400, 400, 500, 600, 700, 600, 700, 800, 900, 1000, ]
                        }
                    ]

                }
                chart1.setOption(option);
            },
            init_chart2() {
                let chart2 = echarts.init(document.getElementById('chart2'), 'macarons');
                let option = {

                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        top: '3%',
                        right: '4%',
                        textStyle: {
                            color : 'white',
                        },
                        data:['常住人口增长率','常住外来人口增长率']                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        width:'93%',
                        height:'70%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        splitLine:{
                            show:true,
                            lineStyle:{
                                width:10,
                                type:'solid',
                                color:'#a098ff'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            color:'#fff',
                            margin: 20
                        },
                        data: ['2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            interval: 0,
                            color:'#fff',
                            margin: 20
                        },
                        splitLine:{
                            show:false,
                        },
                    },
                    series: [
                        {
                            name:'常住人口增长率',
                            type:'line',
                            symbol:'circle',
                            stack: '常住人口增长率',
                            color:'#10a2ff',
                            data:[10, 20, 30, 20, 30,30,20,30,20,30]
                        },
                        {
                            name:'常住外来人口增长率',
                            type:'line',
                            stack: '常住外来人口增长率',

                            color:'#ff2e83',
                            data:[-20, -30, -20, -10, 50,40,50,60,50,90]
                        }
                    ]
                };
                chart2.setOption(option);
            },
            init_chart3(){
                let chart3 = echarts.init(jq('#chart3')[0], 'macarons');
                let option = {

                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        top: '3%',
                        right: '4%',
                        textStyle: {
                            color : 'white',
                        },
                        data:['0-14岁增长率','15-64岁增长率','65岁增长率']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        width:'93%',
                        height:'70%',
                        containLabel: true
                    },

                    xAxis: {
                        type: 'category',
                        axisLine:{
                            lineStyle:{
                                color:'#ffffff',
                            },
                        },
                        boundaryGap: false,
                        color:'blue',
                        data: ['2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年']
                    },
                    yAxis: {
                        type: 'value',
                        show:true,
                        axisLabel: {
                            interval: 0,
                            color:'#fff',
                            margin: 20
                        },
                        splitLine:{
                            show:false,
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#FFFFFF'
                            },
                        },
                    },
                    series: [
                        {
                            name:'0-14岁增长率',
                            type:'line',
                            symbol:'circle',
                            stack: '0-14岁增长',
                            color:'#10a2ff',
                            data:[0.09, 0.06, 0.03, 0.04, 0.03,0.025,0.02,0.015,0.01,0.012]
                        },
                        {
                            name:'15-64岁增长率',
                            type:'line',
                            stack: '15-64岁增长率',

                            color:'rgb(255,0,72)',
                            data:[0.04, 0.03, 0.031, 0.025, 0.020,0.018,0.011,0.01,-0.01,-0.001]
                        },
                        {
                            name:'65岁增长率',
                            type:'line',
                            stack: '65岁增长率',

                            color:'rgb(219,32,255)',
                            data:[0.07, 0.05, 0.02, 0.09, 0.07,0.06,0.05,0.04,0.02,0.03]
                        }
                    ]
                };
                chart3.setOption(option);
            },
            init_chart4(){
                let chart4 = echarts.init(jq('#chart4')[0], 'macarons');
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['海口市','三亚市','三沙市','儋州市','五指山市','文昌市','琼海市','万宁市','东方市',
                            '定安县','屯昌县','澄迈县','临高县','白沙黎族自治县',
                            '昌江黎族自治县','乐东黎族自治县','陵水黎族自治县',
                            '保亭黎族苗族自治县','琼中苗族黎族自治县'],
                        axisLabel: {
                            interval: 0,
                            color:'#fff',
                            margin: 20,
                            rotate:30
                        },
                        axisLine:{

                        }

                    },
                    yAxis: {
                        name:'万人',
                        type: 'value',
                        show:true,
                        axisLabel: {
                            interval: 0,
                            color:'#fff',
                            margin: 20
                        },
                        splitLine:{
                            show:false,
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#FFFFFF'
                            },
                        },
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '10%',
                        width:'95%',
                        height:'75%',
                        containLabel: true
                    },
                    series: [{
                        data: [10,9,8, 7, 6, 5, 4,3,2,1,-9,-8,-7,-6,-5, -4, -3, -2, -1],
                        type: 'bar',
                        barWidth:'15%',
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    if(params.data<0)
                                    {
                                        return 'rgb(35,255,29)'
                                    }
                                    else
                                    {
                                        return 'rgb(255,46,131)'
                                    }
                                }
                            },


                        }
                    }]
                };
                chart4.setOption(option);
            },
            init_chart5(){
                let chart5 = echarts.init(jq('#chart5')[0], 'macarons');
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['海口市','三亚市','三沙市','儋州市','五指山市','文昌市','琼海市','万宁市','东方市',
                            '定安县','屯昌县','澄迈县','临高县','白沙黎族自治县',
                            '昌江黎族自治县','乐东黎族自治县','陵水黎族自治县',
                            '保亭黎族苗族自治县','琼中苗族黎族自治县'],
                        axisLabel: {
                            interval: 0,
                            color:'#fff',
                            margin: 20,
                            rotate:30
                        },
                        axisLine:{

                        }

                    },
                    yAxis: {
                        name:'万人',
                        type: 'value',
                        show:true,
                        axisLabel: {
                            interval: 0,
                            color:'#fff',
                            margin: 20
                        },
                        splitLine:{
                            show:false,
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#FFFFFF'
                            },
                        },
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '10%',
                        width:'93%',
                        height:'75%',
                        containLabel: true
                    },
                    series: [{
                        data: [10,9,8, 7, 6, 5, 4,3,2,1,-9,-8,-7,-6,-5, -4, -3, -2, -1],
                        type: 'bar',
                        barWidth:'15%',
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    if(params.data<0)
                                    {
                                        return 'rgb(35,255,29)'
                                    }
                                    else
                                    {
                                        return 'rgb(255,46,131)'
                                    }
                                }
                            },


                        }
                    }]
                };
                chart5.setOption(option);
            },
            init_chart6(){
                let chart6 = echarts.init($('#chart6')[0]);
                echarts.registerMap('hainan',  hainan)
                var pd = [{"name":"海口","value":[110.326837,20.031624,"海口","20.18"]}]
                var   option = {
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
                        data:['shopping'],
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
                        map: 'hainan',
                        layoutSize: "500%",
                        zoom:9,
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
                    series : [
                        { //城市点位
                            name: 'city',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            symbol: 'circle',
                            symbolSize: 30,
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
                            symbolSize: 50,
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
                chart6.setOption(option)
                window.onresize = chart6.resize;
            },
        }
    }
</script>

<style lang="scss" scoped>
  #total{
    .chart_title{
      color: white;
      padding: 1vh;
      height: 1vh;
      font-size: 1.5em;
    }
    .ind_left{
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


    .ind_right2{
      height: 29.6vh;
      margin-top: 1vh;
      margin-left: 1vh;
      background-image:url('../../static/img/ind_right.png');
      background-repeat: no-repeat;
      background-size: 100% 29.6vh;
    }
    .top_right{
      //width: 98%;
      height: 60.3vh;
      margin-top: 1vh;
      margin-left: 1vh;
      margin-right: 1vh;
      background-image:url('../../static/img/ind_right.png');
      background-repeat: no-repeat;
      background-size: 100% 60.3vh;
    }
  }
</style>
