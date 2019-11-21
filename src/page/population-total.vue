<template>
  <div id="total">
    <div class = "chart_main">
      <el-row>
        <el-col :span="8">
          <el-row>
            <el-col :span="24">
              <div class = "ind_left">
                <div class="chart_title">
                  <i class="tit_icon icon-tit-line"></i>
                  <h3 >户籍人口与常住外来人口总量变化趋势</h3></div>
                <div id="chart1" class="left_chart"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "ind_left">
                <div class="chart_title">
                  <i class="tit_icon icon-tit-line"></i>
                  <h3>常住人口与常住外来人口增长率变化趋势</h3>
                </div>
                <div id="chart2"  class="left_chart"></div>

              </div>
            </el-col>
            <el-col :span="24">
              <div class = "ind_left">
                <div class="chart_title">
                  <i class="tit_icon icon-tit-line"></i>
                  <h3>劳动力人口增长率变化趋势</h3></div>
                <div id="chart3"  class="left_chart"></div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16">
          <el-row>
            <el-col :span="24">
              <div class = "top_right">
                <div class = "chart_title">
                  <i class="tit_icon icon-tit-line"></i>
                  <h3>各地区户籍与常住外来人口增量分布</h3>
                  </div>
                <div style="position: absolute;top:10vh; left:5vh;width:15vh;z-index: 1000;">
                  <el-radio-group v-model="radio">
                    <el-radio  :label="1" style="color: wheat; " >户籍人口</el-radio>
                    <el-radio  :label="2" style="margin-top: 2vh;color:wheat ">常住外来人口</el-radio>
                  </el-radio-group>
                </div>
                <div id = "chart6" style="height: 55vh;width: 99%"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <el-row>
                <el-col :span="12">

                  <div class = "ind_right2">
                    <div class="chart_title">
                      <i class="tit_icon icon-tit-line"></i>
                      <h3>各地区户籍人口增量变化</h3></div>
                    <div id="chart4" class = "bottom_char"></div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class = "ind_right2 " style="margin-right: 1vh">
                    <div class="chart_title">
                      <i class="tit_icon icon-tit-line"></i>
                      <h3>各地区常住外来人口增量变化</h3></div>
                    <div id="chart5" class = "bottom_char"></div>
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
    import '../../static/js/map/hainan.js';
    import jq from 'jquery';
    import hainan from '../../static/js/json/hainan.json';
    export default {
        name: "populaton-total",
        data(){
            return {
                radio: 1
            };
        },
        created () {
        },
        beforeDestroy() {

        },
        watch: {
            radio(newVal ,oldValue) {
                this.init_chart6();
            }
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
                this.$http({
                    url: this.$http.adornUrl("/t02housdrgstprmnfognpoputotlchg/list"),
                    method: 'get',
                    params: this.$http.adornParams({
                    })
                }).then(({data}) => {
                    let dts=data.list;
                    let xData=[];
                    let hjData=[];
                    let czData=[];
                    for(let i = dts.length-1;i >=0; i--){
                        xData.push(dts[i]["dateStat"].substr(0,4));
                        hjData.push(Number.parseInt(dts[i]["hjPopu"]));
                        czData.push(Number.parseInt(dts[i]["wlPopu"]));
                    }
                    let chart1 = echarts.init(document.getElementById('chart1'), 'macarons');
                    let option = {

                        tooltip: {
                          trigger: 'axis',
                          textStyle: config().textStyle,
                          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                          },
                          formatter: function(params) {
                            var result = params[0].name
                            result += '<br/>'+params[0].seriesName + '：' + params[0].data+
                              " 万人</br>" + params[1].seriesName + '：' + params[1].data+' 万人';
                            return result
                          }
                        },
                        legend: {
                            top: '3%',
                            right: '10%',
                          textStyle: config().textStyle,
                          itemWidth: config().fontSize,
                          itemHeight: config().fontSize,
                            data: ['户籍人口', '常住外来人口']
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '5%',
                            top:'20%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                axisLabel: {
                                    interval: 0,
                                  textStyle: config().textStyle,
                                },
                                //data: ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年']
                                data:xData
                            }
                        ],
                        yAxis: [
                            {
                              name:'万人',
                              nameTextStyle: {
                                color: '#fff',
                                fontSize: config().fontSize,
                                padding: [0, 0, 0, -config().fontSize*2.5],
                              },
                                type: 'value',
                                splitLine: false,
                                axisLabel: {
                                  textStyle: config().textStyle,
                                },
                            },
                        ],
                        series: [
                            {
                                name: '户籍人口',
                                type: 'bar',
                              barWidth:'50%',
                                stack: '人口',
                                color: '#10a2ff',
                                data: hjData//[1030, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, ]
                            },
                            {
                                name: '常住外来人口',
                                type: 'bar',
                              barWidth:'50%',
                                stack: '人口',
                                color: '#01fea8',
                                data:czData //[400, 400, 500, 600, 700, 600, 700, 800, 900, 1000, ]
                            }
                        ]

                    }
                    chart1.setOption(option);
                    window.onresize = chart1.resize;
                })
            },
            init_chart2() {
                this.$http({
                    url: this.$http.adornUrl("/t02prmnpopuprmnfognpopugrowchg/list"),
                    method: 'get',
                    params: this.$http.adornParams({
                    })
                }).then(({data}) => {
                        let dts=data.list;
                        let xData=[];
                        let czGrowth=[];
                        let wlGrowth=[];
                        for(let i = dts.length-1;i >=0; i--){
                            xData.push(dts[i]["dateStat"].substr(0,4));
                            czGrowth.push(Number.parseFloat(dts[i]["czGrowth"]));
                            wlGrowth.push(Number.parseFloat(dts[i]["wlGrowth"]));
                        }
                let chart2 = echarts.init(document.getElementById('chart2'), 'macarons');
                let option = {

                    tooltip: {
                      trigger: 'axis',
                      textStyle: config().textStyle,
                      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      },
                      formatter: function(params) {
                        var result = params[0].name
                        result += '<br/>'+params[0].seriesName + '：' + params[0].data+
                          " %</br>" + params[1].seriesName + '：' + params[1].data+' %';
                        return result
                      }
                    },
                    legend: {
                        top: '3%',
                        right: '10%',
                      itemWidth: config().fontSize,
                      itemHeight: config().fontSize,
                      textStyle: config().textStyle,
                        data:['常住人口增长率','常住外来人口增长率']                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                      bottom: '5%',
                      top:'20%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        splitLine:{
                            show:false,
                            lineStyle:{
                                width:10,
                                type:'solid',
                                color:'#4478fc'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                          textStyle: config().textStyle,
                            margin: config().fontSize
                        },
                        data: xData//['2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年']
                    },
                    yAxis: {
                          name:'%',
                            nameTextStyle: {
                            color: '#fff',
                            fontSize: config().fontSize,
                            padding: [0, 0, 0, -config().fontSize*2.5],
                        },
                        type: 'value',
                        axisLabel: {
                          margin:config().fontSize,
                          textStyle: config().textStyle,
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
                            //stack: '常住人口增长率',
                            color:'#03baff',
                            data:czGrowth//[10, 20, 30, 20, 30,30,20,30,20,30]
                        },
                        {
                            name:'常住外来人口增长率',
                            type:'line',
                            //stack: '常住外来人口增长率',

                            color:'#01fea8',
                            data:wlGrowth//[-20, -30, -20, -10, 50,40,50,60,50,90]
                        }
                    ]
                };
                chart2.setOption(option);
                window.onresize=chart2.resize;
                })
            },
            init_chart3(){
                this.$http({
                    url: this.$http.adornUrl("/t02labrpopugrowratechgtrnd/list"),
                    method: 'get',
                    params: this.$http.adornParams({
                    })
                }).then(({data}) => {
                        let dts=data.list;
                        let xData=[];
                        let ytyGrowth01=[];
                        let ytyGrowth02=[];
                        let ytyGrowth03=[];
                        for(let i = dts.length-1;i >=0; i--){
                            xData.push(dts[i]["dateStat"].substr(0,4));
                            ytyGrowth01.push(dts[i]["ytyGrowth01"]);
                            ytyGrowth02.push(dts[i]["ytyGrowth02"]);
                            ytyGrowth03.push(dts[i]["ytyGrowth03"]);
                        }
                let chart3 = echarts.init(jq('#chart3')[0], 'macarons');
                let option = {

                    tooltip: {
                      trigger: 'axis',
                      textStyle: config().textStyle,
                      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      },
                      formatter: function(params) {
                        var result = params[0].name
                        result += '<br/>'+params[0].seriesName + '：' + params[0].data+
                          " %</br>" + params[1].seriesName + '：' + params[1].data+' %<br/>'+
                          params[2].seriesName + '：' + params[2].data+' %';
                        return result
                      }
                    },
                    legend: {
                        top: '3%',
                        right: '10%',
                      textStyle: config().textStyle,
                      itemWidth: config().fontSize,
                      itemHeight: config().fontSize,
                        data:['0-14岁增长率','15-64岁增长率','65岁增长率']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                      bottom: '5%',
                        top:'20%',
                        containLabel: true
                    },

                    xAxis: {
                        type: 'category',
                        axisLine:{
                            lineStyle:{
                                color:'#ffffff',
                            },
                        },
                      axisLabel: {
                          margin:config().fontSize,
                        textStyle: config().textStyle,
                      },
                        boundaryGap: false,
                        color:'blue',
                        data:xData //['2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年']
                    },
                    yAxis: {
                      name:'%',
                      nameTextStyle: {
                        color: '#fff',
                        fontSize: config().fontSize,
                        padding: [0, 0, 0, -config().fontSize*2.5],
                      },
                        type: 'value',
                        show:true,
                        axisLabel: {
                          textStyle: config().textStyle,
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
                            //stack: '0-14岁增长',
                            color:'#4478fc',
                            data:ytyGrowth01//[0.09, 0.06, 0.03, 0.04, 0.03,0.025,0.02,0.015,0.01,0.012]
                        },
                        {
                            name:'15-64岁增长率',
                            type:'line',
                            //stack: '15-64岁增长率',

                            color:'#01fea8',
                            data:ytyGrowth02//[0.04, 0.03, 0.031, 0.025, 0.020,0.018,0.011,0.01,-0.01,-0.001]
                        },
                        {
                            name:'65岁增长率',
                            type:'line',
                            //stack: '65岁增长率',

                            color:'#f0396b',
                            data:ytyGrowth03//[0.07, 0.05, 0.02, 0.09, 0.07,0.06,0.05,0.04,0.02,0.03]
                        }
                    ]
                };
                chart3.setOption(option);
                window.onresize=chart3.resize;
                })
            },
            init_chart4(){
                this.$http({
                    url: this.$http.adornUrl("/t02zonehousdrgstpopuincchg/list"),
                    method: 'get',
                    params: this.$http.adornParams({
                    })
                }).then(({data}) => {
                    let dts = data.list;
                    let xData = [];
                    let popuTotal = [];

                    for (let i = 0; i < dts.length; i++) {
                        xData.push(dts[i]["areaName"]);
                        popuTotal.push(dts[i]["popuTotal"]);
                    }
                    let chart4 = echarts.init(jq('#chart4')[0], 'macarons');
                    let option = {
                        tooltip: {
                          trigger: 'axis',
                          textStyle: config().textStyle,
                          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                          },
                          formatter: '{b}<br/>户籍人口增量: {c} 万人'
                        },
                        xAxis: {
                            type: 'category',
                            data: xData,//['海口市', '三亚市', '三沙市', '儋州市', '五指山市', '文昌市', '琼海市', '万宁市', '东方市',
                                //'定安县', '屯昌县', '澄迈县', '临高县', '白沙黎族自治县',
                                //'昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县',
                                //'保亭黎族苗族自治县', '琼中苗族黎族自治县'],
                            axisLabel: {
                                interval: 0,
                              textStyle: config().textStyle,
                                margin: config().fontSize,
                                rotate: 30
                            },
                            axisLine: {}

                        },
                        yAxis: {
                          name:'万人',
                          nameTextStyle: {
                            color: '#fff',
                            fontSize: config().fontSize,
                            padding: [0, 0, 0, -config().fontSize*2.5],
                          },
                            type: 'value',
                            show: true,
                            axisLabel: {
                              textStyle: config().textStyle,
                                margin: config().fontSize
                            },
                            splitLine: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#FFFFFF'
                                },
                            },
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                             top:'18%',
                            containLabel: true
                        },
                        series: [{
                            data: popuTotal,//[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, -9, -8, -7, -6, -5, -4, -3, -2, -1],
                            type: 'bar',
                            barWidth: '50%',
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        if (params.data < 0) {
                                            return '#ff2800'
                                        } else {
                                            return '#15d20d'
                                        }
                                    }
                                },


                            }
                        }]
                    };
                    chart4.setOption(option);
                    window.onresize = chart4.resize;
                })
            },
            init_chart5(){
                this.$http({
                    url: this.$http.adornUrl("/t02zoneprmnfognpopuincchg/list"),
                    method: 'get',
                    params: this.$http.adornParams({
                    })
                }).then(({data}) => {
                    let dts = data.list;
                    let xData = [];
                    let popuTotal = [];

                    for (let i = 0; i < dts.length; i++) {
                        xData.push(dts[i]["areaName"]);
                        popuTotal.push(dts[i]["popuTotal"]);
                    }
                    let chart5 = echarts.init(jq('#chart5')[0], 'macarons');
                    let option = {
                        tooltip: {
                          trigger: 'axis',
                          textStyle: config().textStyle,
                          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                          },
                          formatter: '{b}<br/>外来人口增量: {c} 万人'
                        },
                        xAxis: {
                            type: 'category',
                            data: xData,//['海口市', '三亚市', '三沙市', '儋州市', '五指山市', '文昌市', '琼海市', '万宁市', '东方市',
                                //'定安县', '屯昌县', '澄迈县', '临高县', '白沙黎族自治县',
                                //'昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县',
                                //'保亭黎族苗族自治县', '琼中苗族黎族自治县'],
                            axisLabel: {
                                interval: 0,
                              textStyle: config().textStyle,
                              margin:config().fontSize,
                                rotate: 30
                            },
                            axisLine: {}

                        },
                        yAxis: {
                          name:'万人',
                          nameTextStyle: {
                            color: '#fff',
                            fontSize: config().fontSize,
                            padding: [0, 0, 0, -config().fontSize*2.5],
                          },
                            type: 'value',
                            show: true,
                            axisLabel: {
                              textStyle: config().textStyle,
                              margin:config().fontSize,
                            },
                            splitLine: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#FFFFFF'
                                },
                            },
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            top:'18%',
                            containLabel: true
                        },
                        series: [{
                            data:popuTotal, //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, -9, -8, -7, -6, -5, -4, -3, -2, -1],
                            type: 'bar',
                            barWidth: '50%',
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        if (params.data < 0) {
                                            return '#f3e50a'
                                        } else {
                                            return '#00ddff'
                                        }
                                    }
                                },


                            }
                        }]
                    };
                    chart5.setOption(option);
                    window.onresize = chart5.resize;
                })
            },
            init_chart6(){
                let chart6 = echarts.init(jq('#chart6')[0]);
                let geoCoordMap= {
                    '海口市': [110.326837, 20.031624],
                    '三亚市': [109.524255, 18.256929],
                    '三沙市': [112.351689, 16.838364],
                    '儋州市': [109.565074, 19.533091],
                    '五指山市': [109.52483, 18.780731],
                    '文昌市': [110.932715, 19.616634],
                    '琼海市': [110.480832, 19.255009],
                    '万宁市': [110.396559, 18.802845],
                    '东方市': [108.65629, 19.100448],
                    '定安县': [110.359209, 19.683308],
                    '屯昌县': [110.108546, 19.357035],
                    '澄迈县': [110.010062, 19.744893],
                    '临高县': [109.688244, 19.916212],
                    '白沙黎族自治县': [109.455171, 19.233017],
                    '昌江黎族自治县': [109.063039, 19.30236],
                    '乐东黎族自治县': [109.179933, 18.756966],
                    '陵水黎族自治县': [110.042739, 18.512332],
                    '保亭黎族自治县': [109.706931, 18.647458],
                    '琼中黎族自治县': [109.846811, 19.038617]
                }
                let data=[]
              var tip = '外来人口增量'
                if(this.radio=='1'){
                  tip = '户籍人口增量'
                    data = [
                        {name: '海口市', value: 1 },
                        {name: '三亚市', value: 2 },
                        {name: '三沙市', value: 3 },
                        {name: '儋州市', value: 4 },
                        {name: '五指山市', value: 5 },
                        {name: '文昌市', value: 6 },
                        {name: '琼海市', value: 7 },
                        {name: '万宁市', value: 8 },
                        {name: '东方市', value: 9 },
                        {name: '定安县', value: 10 },
                        {name: '屯昌县', value: 11 },
                        {name: '澄迈县', value: 12 },
                        {name: '临高县', value: 13 },
                        {name: '白沙黎族自治县',value: 14 },
                        {name: '昌江黎族自治县', value: 15 },
                        {name: '乐东黎族自治县', value: 16 },
                        {name: '陵水黎族自治县', value: 17 },
                        {name: '保亭黎族自治县', value: 18 },
                        {name: '琼中黎族自治县', value: 19 },

                    ];
                }else{
                        data = [
                            {name: '海口市', value: 2 },
                            {name: '三亚市', value: 4 },
                            {name: '三沙市', value: 6 },
                            {name: '儋州市', value: 12 },
                            {name: '五指山市', value: 24 },
                            {name: '文昌市', value: 48 },
                            {name: '琼海市', value: 96 },
                            {name: '万宁市', value: 192 },
                            {name: '东方市', value: 96 },
                            {name: '定安县', value: 48 },
                            {name: '屯昌县', value: 24 },
                            {name: '澄迈县', value: 12 },
                            {name: '临高县', value: 6 },
                            {name: '白沙黎族自治县',value: 4 },
                            {name: '昌江黎族自治县', value: 3 },
                            {name: '乐东黎族自治县', value: 2 },
                            {name: '陵水黎族自治县', value: 1 },
                            {name: '保亭黎族自治县', value: 18 },
                            {name: '琼中黎族自治县', value: 19 },
                        ];
                }
                let dataValues=[];

                for(let i=0;i<data.length;i++){
                    dataValues.push(data[i]['value']);
                }
                let max = Math.max.apply(null, dataValues);
                let min = Math.min.apply(null, dataValues);

                console.log(max, min) // 55,6
                //取得json的样式，读取json文件
                echarts.registerMap('hainan', hainan)
                let handleData = function(data) {
                    let list = [];
                    for (let i = 0; i < data.length; i++) {
                        let geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            list.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            });
                        }
                    }
                    return list;
                };
                let option = {
                    baseOption: {
                        timeline: {
                            show: false,
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: '{b}<br/> '+tip+': {c} 万人',
                          textStyle: config().textStyle,
                        },
                    },
                    options: [{
                        visualMap: {
                            min: min,
                            max: max,
                            left: '3%',
                            bottom: '2%',
                            text: [max, min],
                            calculable: true,
                            inRange: {
                                color: ['#9EA3FF', '#6966FF', '#0300FF']
                            },
                          textStyle: config().textStyle,
                            itemWidth: 20,
                            itemHeight: 150,
                        },
                      geo: {
                        show: true,
                        map: 'hainan',
                        layoutSize: "300%",
                        zoom:9,
                        //top:'-3%',
                        center: [109.68983,19.13139],
                        label: {
                          normal: {
                            show: true,
                            textStyle: config().textStyle
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
                            borderColor: '#02308d',
                            borderWidth: 1,
                            shadowColor: 'rgba(63, 218, 255, 0.5)',
                            shadowBlur: 30
                          },
                          emphasis: {
                            areaColor: '#e2d445',
                          }
                        }
                      },
                        "series": [
                          {
                            name: "mapSer",
                            type: "map",
                            roam: false,
                            geoIndex: 0,
                            data: data
                          }
                        ]
                    }]
                }

                chart6.setOption(option);
                window.onresize = chart6.resize;
            },
        }
    }
</script>

<style lang="scss" scoped>
  #total{
    .el-radio__label{
      font-size: 1.5vh !important;
    }
    .chart_title{
      color: #a9b2d4;
      padding-left: 5vh;
      position: relative;
      height: 4vh;
      line-height: 4vh;
      padding-top: 1vh;
    }
    .ind_left{
      height: 29.6vh;
      margin-top: 1vh;
      margin-left: 1vh;
      background-image:url('../../static/img/ind_right.png');
      background-repeat: no-repeat;
      background-size: 100% 29.6vh;
      .left_chart{
        height: 24.6vh;
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
    .bottom_char{
      height: 24.6vh;
    }
  }
</style>
