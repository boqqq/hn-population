<template>
  <div id="index">
    <div class = "chart_main">
      <el-row>
        <el-col :span="7">
          <el-row>
            <el-col :span="24">
              <div class="quality_col chart_col_left">
                <div class="pop_col_tit">
                  <i class="tit_icon icon-tit-line"></i>
                  <h3>常住人口年龄结构5年变迁</h3>
                </div>
                <div id="chart_left1" class="quality_chart_box"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="quality_col chart_col_left">
                <div class="pop_col_tit">
                  <i class="tit_icon icon-tit-line"></i>
                  <h3>劳动力人口结构变化</h3>
                </div>
                <div id="chart_left2" class="quality_chart_box"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="quality_col chart_col_left">
                <div class="pop_col_tit">
                  <i class="tit_icon icon-tit-line"></i>
                  <h3>人口性别结构(2019年9月)</h3>
                </div>
                <div id="chart_left3" class="quality_chart_box"></div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="10">
          <el-row>
            <el-col :span="24">
              <div class="quality_col1 chart_col_center">
                <div class="pop_col_tit">
                  <i class="tit_icon icon-tit-line"></i>
                  <h3>人口流入流出结构(2018年)</h3>
                </div>
                <div id="chart_center1" class="quality_chart_box1"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="quality_col chart_col_center">
                <div class="pop_col_tit">
                  <i class="tit_icon icon-tit-line"></i>
                  <h3>受教育程度结构变化</h3>
                </div>
                <div id="chart_center2" class="quality_chart_box"></div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="7">
          <el-col :span="24">
            <div class="quality_col chart_col_right">
              <div class="pop_col_tit">
                <i class="tit_icon icon-tit-line"></i>
                <h3>流出贡献占比</h3>
              </div>
              <div id="chart_right1" class="quality_chart_box"></div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="quality_col chart_col_right">
              <div class="pop_col_tit">
                <i class="tit_icon icon-tit-line"></i>
                <h3>流入贡献占比</h3>
              </div>
              <div id="chart_right2" class="quality_chart_box"></div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="quality_col chart_col_right">
              <div class="pop_col_tit">
                <i class="tit_icon icon-tit-line"></i>
                <h3>家庭规模结构5年变迁</h3>
              </div>
              <div id="chart_right3" class="quality_chart_box"></div>
            </div>
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
  import {config} from '../../static/js/config/chartConfig.js';
  export default {
    name: "population-structure",
    components: {},
    data() {
      return {
        tableData: [
          {region: '海口市',coor: [110.326837, 20.031624]},
          {region: '三亚市',coor: [109.524255, 18.256929]},
          {region: '三沙市',coor: [112.351689, 16.838364]},
          {region: '儋州市',coor: [109.565074, 19.533091]},
          {region: '五指山市',coor: [109.52483, 18.780731]},
          {region: '文昌市',coor: [110.932715, 19.616634]},
          {region: '琼海市',coor: [110.480832, 19.255009]},
          {region: '万宁市',coor: [110.396559, 18.802845]},
          {region: '东方市',coor: [108.65629, 19.100448]},
          {region: '定安县',coor: [110.359209, 19.683308]},
          {region: '屯昌县',coor: [110.108546, 19.357035]},
          {region: '澄迈县',coor: [110.010062, 19.744893]},
          {region: '临高县',coor: [109.688244, 19.916212]},
          {region: '白沙县',coor: [109.455171, 19.233017]},
          {region: '昌江县',coor: [109.063039, 19.30236]},
          {region: '乐东县',coor: [109.179933, 18.756966]},
          {region: '陵水县',coor: [110.042739, 18.512332]},
          {region: '保亭县',coor: [109.706931, 18.647458]},
          {region: '琼中县',coor: [109.846811, 19.038617]}
        ],
        tableData1: [
          {region: '海口市',coor: [110.396837, 20.091624]},
          {region: '三亚市',coor: [109.594255, 18.296929]},
          {region: '三沙市',coor: [112.391689, 16.898364]},
          {region: '儋州市',coor: [109.655074, 19.593091]},
          {region: '五指山市',coor: [109.530223,18.79489]},
          {region: '文昌市',coor: [110.992715, 19.696634]},
          {region: '琼海市',coor: [110.560832, 19.295009]},
          {region: '万宁市',coor: [110.466559, 18.892845]},
          {region: '东方市',coor: [108.69629, 19.190448]},
          {region: '定安县',coor: [110.36812,19.527614]},
          {region: '屯昌县',coor: [110.065458,19.403481]},
          {region: '澄迈县',coor: [110.090062, 19.794893]},
          {region: '临高县',coor: [109.634921,19.926612]},
          {region: '白沙县',coor: [109.421826,19.171567]},
          {region: '昌江县',coor: [108.868717,19.31628]},
          {region: '乐东县',coor: [109.219933, 18.796966]},
          {region: '陵水县',coor: [110.037852,18.48079]},
          {region: '保亭县',coor: [109.590799,18.635126]},
          {region: '琼中县',coor: [109.886811, 19.098617]}
        ],
        familyData:''
      }
    },
    components: {},
    mounted() {
      this.chart_left1Data();
      this.chart_left2Data();
      this.chart_left3Data();
      this.chart_right1Data();
      this.chart_right2Data();
      this.chart_right3Data();
      this.chart_center2Data();
      this.chart_center1Data();
    },
    methods: {
      chart_left1Data(){
        this.$http({
          url: this.$http.adornUrl("/t03prmnpopuagestru5yrchg/findAll"),
          method: 'get',
          params: this.$http.adornParams({
          })
        }).then(({data}) => {
          this.chart_left1(data);
        })
      },
      chart_left2Data(){
        this.$http({
          url: this.$http.adornUrl("/t03labrpopustruchg/findAll"),
          method: 'get',
          params: this.$http.adornParams({
          })
        }).then(({data}) => {
          this.chart_left2(data);
        })
      },
      chart_left3Data(){
        this.$http({
          url: this.$http.adornUrl("/t03popugenderstru/findAll"),
          method: 'get',
          params: this.$http.adornParams({
          })
        }).then(({data}) => {
          this.chart_left3(data);
        })
      },
      chart_center1Data(){
        this.$http({
          url: this.$http.adornUrl("/t03popuflowinflowoutstru/findAll"),
          method: 'get',
          params: this.$http.adornParams({
          })
        }).then(({data}) => {
          this.chart_center1(data);
        })
      },
      chart_center2Data(){
        this.$http({
          url: this.$http.adornUrl("/t03recvedudegrstruchg/findAll"),
          method: 'get',
          params: this.$http.adornParams({
          })
        }).then(({data}) => {
          this.chart_center2(data);
        })
      },
      chart_right1Data(){
        this.$http({
          url: this.$http.adornUrl("/t03zoneflowoutcibutepct/findAll"),
          method: 'get',
          params: this.$http.adornParams({
          })
        }).then(({data}) => {
          this.chart_right1(data);
        })
      },
      chart_right2Data(){
        this.$http({
          url: this.$http.adornUrl("/t03zoneflowincibutepct/findAll"),
          method: 'get',
          params: this.$http.adornParams({
          })
        }).then(({data}) => {
          this.chart_right2(data);
        })
      },
      chart_right3Data(){
    this.$http({
      url: this.$http.adornUrl("/t03familymtntysitu5yrchg/findAll"),
      method: 'get',
      params: this.$http.adornParams({
      })
    }).then(({data}) => {
      this.chart_right3(data);
    })
  },
      chart_left1(data) {
        var myChart = echarts.init(document.getElementById("chart_left1"));
        var option = {

          tooltip: {
            trigger: 'axis',
            textStyle: {
              color: "#fff",
              fontSize: config().fontSize,
            },
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '15%',
            containLabel: true
          },
          legend: {
            data: ['2014年年龄组占比', '2018年年龄组占比'],
            right: '10%',
            top: '1%',
            textStyle: {
              color: "#fff",
              fontSize: config().fontSize,
            },
            itemWidth: config().fontSize,
            itemHeight: config().fontSize,
            // itemGap: 35
          },
          xAxis: {
            type: 'category',
            zlevel: 10,
            data: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65+'],
            axisLine: {
              show: false,
              lineStyle: {
                color: '#138EEE'
              }
            },
            axisLabel: {
              interval: 0,
              rotate: 40,
              textStyle: {
                fontFamily: 'Microsoft YaHei',
                color: "#FFF",
                fontSize: config().fontSize,
              },
            },
            axisTick: {
              show: false
            }
          },

          yAxis: {
            type: 'value',
            name: '%',
            nameTextStyle: {
              color: '#fff',
              fontSize: config().fontSize,
              padding: [0, 0, -config().fontSize/2, -config().fontSize*2.5],
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#138EEE'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                fontFamily: 'Microsoft YaHei',
                color: "#FFF",
                fontSize: config().fontSize,
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)',
                width:config().lineStyle.width/3
              }
            },

            axisTick: {
              show: false
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
                  color: '#20e19f'
                }, {
                  offset: 1,
                  color: '#2CA26E'
                }]),
              },
            },
            data: data.page['2015']
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
              data: data.page['2019']
            }]
        };
        myChart.setOption(option);
        window.onresize = myChart.resize;
      },
      chart_left2(data) {
        var myChart = echarts.init(document.getElementById("chart_left2"));
        // 指定图表的配置项和数据
        var data1 = data.labr['one'];
        var data2 = data.labr['two'];
        var data3 = data.labr['three'];
        var datacity = ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];
        var option = {
          color: ['#842af0', '#4478fc', '#03baff'],
          tooltip: {
            trigger: 'axis',
            textStyle: {
              color: "#fff",
              fontSize: config().fontSize,
            },
          },
          legend: {
            right: '10%',
            top: '1%',
            textStyle: {
              color: "#fff",
              fontSize: config().fontSize,
            },
            itemWidth: config().fontSize,
            itemHeight: config().fontSize,
            right: '8%',
            top: '1%',
            data: ['0-14岁人口占比', '15-64岁人口占比', '65+人口占比'],
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '15%',
            containLabel: true
          },
          yAxis: [{
            type: 'value',
            name: '%',
            nameTextStyle: {
              color: '#fff',
              fontSize: config().fontSize,
              padding: [0, 0, -config().fontSize/2, -config().fontSize*3],
            },
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value} ',
              textStyle: {
                color: '#fff',
                fontSize: config().fontSize
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed'
              }
            },
            axisLine: {
              show: false
            },
            show: true,
            axisTick: {
              show: false
            }

          }],
          xAxis: [{
            type: 'category',
            axisLabel: {
              interval: 0,
              show: true,
              splitNumber: 15,
              textStyle: {
                fontSize: config().fontSize,
                fontSize: config().fontSize,
                color: '#fff'
              },

            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            data: datacity,
          }],
          series: [{
            name: '0-14岁人口占比',
            type: 'bar',
            stack: 'sum',
            barCategoryGap: '5%',
            barWidth: '10',
            data: data1

          },
            {
              name: '15-64岁人口占比',
              type: 'bar',
              barWidth: '10',
              barCategoryGap: '5%',
              stack: 'sum',
              data: data2,

            },
            {
              name: '65+人口占比',
              type: 'bar',
              stack: 'sum',
              barWidth: '10',
              barCategoryGap: '5%',
              data: data3

            }
          ]
        };
        myChart.setOption(option);
      },
      chart_left3(data) {
        var myChart = echarts.init(document.getElementById("chart_left3"));
        var xData = ['0-4岁', '5-9岁', '10-14岁', '15-19岁', '20-24岁', '25-29岁', '30-34岁', '35-39岁', '40-44岁', '45-49岁', '50-54岁', '55-59岁', '60-64岁', '65岁+'];
        var data1 = data.sexData['man'];
        var data2 = data.sexData['woman'];
        var option = {
          tooltip: {
            trigger: 'axis',
            textStyle:{
              fontSize:config().fontSize,
              color:config().lineStyle.color
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'15%',
            containLabel: true
          },
          xAxis: {
            data: xData,
            splitLine: {
              show: false
            }, //去除网格线
            splitArea: {
              show: false
            }, //保留网格区域
            axisTick: {
              show: false
            },
            axisLine: {
              onZero: false,
              show: false,
              lineStyle: {
                color: "#fff",
                width: config().lineStyle.width //这里是为了突出显示加上的
              }
              // symbol: ['none', 'arrow'],
              // symbolSize: [6, 12],
              // symbolOffset: [0, 8]
            },
            axisLabel: {
              //interval: 0, //隔几个显示
              //rotate: 30,
              interval:0,
              rotate:40,
              showMinLabel: true,
              textStyle: {
                fontSize: config().fontSize,
                color:'#fff',
              }
            }
          },
          yAxis:   {
            name:'%',
            type : 'value',
            nameTextStyle: {
              color: '#fff',
              fontSize: config().fontSize,
              padding: [0, 0, -config().fontSize/2, -config().fontSize*2.5],
            },
            show:true,
            //minInterval:100,//设置左侧Y轴最小刻度
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: 'rgba(135,140,147,0.8)'
              }
            },//设置横线样式
            axisLabel: {
              textStyle: {
                fontSize: config().fontSize,
                color:'#fff'
              }
            },
            axisLine:{
              show:false
            },
            axisTick:{
              show:false
            }
          },
          color: ['#e54035'],
          series: [{
            name: '男',
            barWidth:'80%',
            type: 'pictorialBar',
            barCategoryGap: '-50%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
              normal: {
                //barBorderRadius: 5,
                //渐变色
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#1D95F6'},{offset: 1, color: '#38DDF9'}
                  ]
                )
              }
            },
            data: data1,
            z: 10
          },{
            name: '女',
            type: 'pictorialBar',
            barWidth:'80%',
            barGap:'-50%',
            barCategoryGap: '-20%',
            //barCategoryGap: '50%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
              normal: {
                //barBorderRadius: 5,
                //渐变色
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#931038'},{offset: 1, color: '#E5487F'}
                  ]
                )
              }
            },
            data: data2,
            z: 10
          }]
        };
        myChart.setOption(option);
      },
      chart_center2(data) {
        var myChart = echarts.init(document.getElementById("chart_center2"));
        var option = {
          tooltip: {
            trigger: 'axis',
            textStyle: {
              fontSize: config().fontSize,
              color:config().lineStyle.color
            },
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['2013', '2014', '2015', '2016', '2017'],
            left: 'center',
            align: 'left',
            right: '10%',
            top: '1%',
            textStyle: {
              color: "#fff",
              fontSize: config().fontSize,
            },
            itemWidth: config().fontSize,
            itemHeight: config().fontSize,
          },
          grid: {
            left: '10%',
            right: '10%',
            bottom: '5%',
            top:'20%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['小学','中学', '高中', '专科', '本科', '研究生'],
            axisLine: {
              show: true,
              lineStyle: {
                color: "#15233C",
                width: config().lineStyle.width,
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
                fontSize: config().fontSize,
              }
            },
          }],
          yAxis: [{
            type: 'value',
            name: '%',
            nameTextStyle: {
              color: '#fff',
              fontSize: config().fontSize,
              padding: [0, 0, -config().fontSize/2, -config().fontSize*2.5],
            },
            axisLabel: {
              formatter: '{value}',
              color: '#fff',
              fontSize: config().fontSize,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#00c7ff",
                width: config().lineStyle.width,
                type: "solid"
              },
            },
            splitLine: {
              lineStyle: {
                color: "gray",
                width:config().lineStyle.width/3
              }
            }
          }],
          series: [
            {
              name: '2013',
              type: 'bar',
              data: data.edu['2013'],
              barWidth: '10%', //柱子宽度
              barGap: '20%', //柱子之间间距
              itemStyle: {
                normal: {
                  color: '#4478fc',
                  opacity: 1,
                }
              }
            },{
            name: '2014',
            type: 'bar',
            data: data.edu['2014'],
              barWidth: '10%', //柱子宽度
              barGap: '20%', //柱子之间间距
            itemStyle: {
              normal: {
                color: '#842af0',
                opacity: 1,
              }
            }
          }, {
            name: '2015',
            type: 'bar',
            data: data.edu['2015'],
              barWidth: '10%', //柱子宽度
              barGap: '20%', //柱子之间间距
            itemStyle: {
              normal: {
                color: '#03baff',
                opacity: 1,
              }
            }
          }, {
            name: '2016',
            type: 'bar',
            data: data.edu['2016'],
              barWidth: '10%', //柱子宽度
              barGap: '20%', //柱子之间间距
            itemStyle: {
              normal: {
                color: '#20e19f',
                opacity: 1,
              }
            }
          }, {
            name: '2017',
            type: 'bar',
            data: data.edu['2017'],
            barWidth: '10%', //柱子宽度
              barGap: '20%', //柱子之间间距
            itemStyle: {
              normal: {
                color: '#f8c300',
                opacity: 1,
              }
            }
          }]
        };
        myChart.setOption(option);
      },
      chart_right1(data) {
        var myChart = echarts.init(document.getElementById("chart_right1"));
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line'
            },
            textStyle:{
              color:config().lineStyle.color,
              fontSize:config().fontSize
            }
          },
          legend: {
            data: ['2016', '2017'],
            top:'1%',
            right:'1%',
            textStyle: {
              color: "#fff",
              fontSize:config().fontSize
            },
            itemWidth: config().fontSize,
            itemHeight: config().fontSize,
            itemGap: config().fontSize
          },
          grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            top:'15%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['琼海市', '文昌市', '万宁市', '东方市', '定安县', '屯昌县', '澄迈县', '临高县', '白沙县', '昌江县', '乐东县', '陵水县', '保亭县', '琼中县'],
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
                width: config().lineStyle.width,
                type: "solid"
              }
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              interval:0,
              rotate:40,
              textStyle: {
                color: "#fff",
                fontSize:config().fontSize
              }
            },
          }],
          yAxis: [{
            type: 'value',
            name:'%',
            nameTextStyle: {
              color: '#fff',
              fontSize: config().fontSize,
              padding: [0, 0, -config().fontSize/2, -config().fontSize*2.5],
            },
            axisLabel: {
              textStyle:{
                fontSize:config().fontSize
              },
              formatter: '{value}'
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
                width: config().lineStyle.width,
                type: "solid"
              },
            },
            splitLine: {
              show:false,
              lineStyle: {
                color: "#0F55B9",
              }
            }
          }],
          series: [{
            name: '2016',
            type: 'bar',
            data: data.flowOut['2016'],
            barWidth: '30%', //柱子宽度
            barGap: '10%', //柱子之间间距
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00C7E1'
                }, {
                  offset: 1,
                  color: '#005193'
                }]),
                opacity: 1,
                barBorderRadius: 12,
              }
            }
          }, {
            name: '2017',
            type: 'bar',
            data: data.flowOut['2017'],
            barWidth: '30%', //柱子宽度
            barGap: '10%', //柱子之间间距
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00da9c'
                }, {
                  offset: 1,
                  color: '#007a55'
                }]),
                opacity: 1,
                barBorderRadius: 12,
              }
            }
          }
          ]
        };
        myChart.setOption(option);
      },
      chart_right2(data) {
        var myChart = echarts.init(document.getElementById("chart_right2"));

        var fontColor = 'rgba(255,255,255,0.5)';
        var data=[
          {
            name:'2016',
            list:data.flowIn['2016']

          },
          {name:'2017',
            list:data.flowIn['2017']},
        ];
        let datelist = [];
        let safeList = [];
        let danger = [];
        data[0].list.forEach(function(value,index){
          datelist.push(data[0].list[index].enName);
          safeList.push(data[0].list[index].value);
          danger.push(data[1].list[index].value);
        });
        var option ={

          grid: {
            left: '2%',
            right: '10%',
            top:'15%',
            bottom: '2%',
            containLabel: true
          },
          tooltip : {
            trigger: 'axis',
            padding: [0, 0, 0, 0],
            textStyle: {
              color: '#FFFFFF',
              fontSize:config().fontSize
            }
          },
          legend: {
            right:'1%',
            top:'1%',
            itemWidth:config().fontSize,
            itemHeight:config().fontSize,
            textStyle:{
              color:'rgba(255,255,255,1)' ,
              fontSize:config().fontSize
            },
            nameTextStyle :{
              color:'rgba(255,255,255,1)'
            },
            data:[data[0].name,data[1].name]
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              axisLabel:{
                color: '#FFF',
                fontSize:config().fontSize
              },
              axisLine:{
                show:false,
                lineStyle:{
                  color:'#0B6472',
                }
              },
              axisTick:{
                show:false,
              },
              splitLine :{    //网格线
                lineStyle:{
                  type:'solid' ,   //设置网格线类型 dotted：虚线   solid:实线
                  color:'#0B6472'
                },
                show:false //隐藏或显示
              },
              data :datelist
            }
          ],
          yAxis : [
            {
              type : 'value',
              name : '%',
              nameTextStyle: {
                color: '#fff',
                fontSize: config().fontSize,
                padding: [0, 0, -config().fontSize/2, -config().fontSize*2.5],
              },
              show:true,
              axisLabel : {
                formatter: '{value}',
                textStyle:{
                  color:'#fff',
                  fontSize:config().fontSize
                }
              },
              axisLine:{
                show:false,
                lineStyle:{
                  color:'rgba(255,255,255,0.1)',
                }
              },
              axisTick:{
                show:false,
              },
              splitLine:{
                show:false,
                lineStyle:{
                  color:'rgba(255,255,255,0.05)',
                }
              }
            }
          ],
          series : [
            {
              name:data[0].name,
              type:'line',
              smooth: true , //true 为平滑曲线，false为直线
              // smooth:true,  //这个是把线变成曲线
              itemStyle: {
                normal: {
                  color:'#0092f6',
                  lineStyle: {
                    color: "#0092f6",
                    width:config().lineStyle.width
                  },
                  areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                      offset: 0,
                      color: 'rgba(0,255,255,0)'
                    }, {
                      offset: 1,
                      color: 'rgba(0,255,255,1)'
                    }]),
                  }
                }
              },
              data:safeList
            },
            {
              name:data[1].name,
              type:'line',
              smooth: true , //true 为平滑曲线，false为直线
              itemStyle: {
                normal: {
                  color:'rgba(251,14,68,0.7)',
                  lineStyle: {
                    color: "rgba(251,14,68,0.8)",
                    width:config().lineStyle.width
                  },
                  areaStyle: {
                    //color: '#94C9EC'
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                      offset: 0,
                      color: 'rgba(251,14,68,0)'
                    }, {
                      offset: 1,
                      color: 'rgba(251,14,68,0.9)'
                    }]),
                  }
                }
              },
              data:danger
            }
          ]
        };
        myChart.setOption(option);
      },
      chart_right3(data) {
        var myChart = echarts.init(document.getElementById("chart_right3"));
        var option = {
          grid:{
            top:'20%',
            bottom:'10%',
            right:'10%',
            containLabel:true
          },
          legend: {
            name: [],
            right: '10%',
            top: '1%',
            itemWidth: config().fontSize,
            itemHeight: config().fontSize,
            textStyle: {
              color: '#fff',
              fontSize: config().fontSize,
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
            textStyle: {
              fontSize: config().fontSize,
            }
          },
          xAxis: {
            type: 'value',
            name:'%',
            nameTextStyle: {
              color: '#fff',
              fontSize: config().fontSize,
              padding: [0,0, -config().fontSize/0.45, -config().fontSize/4],
            },
            max: 300,
            position: 'bottom',
            axisLabel: {
              show: true,
              color: '#fff',
              fontSize: config().fontSize,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#162645'
              }
            },
            axisLine: {
              show: false,
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
            data: data.page['years'],
            //axisLabel 坐标轴刻度标签的相关设置
            axisLabel: {
              show: true,
              color: '#fff',
              fontSize: config().fontSize,
            },

          },],
          series: [{
            name: '一孩率',
            type: 'bar',
            stack: '费用',
            data: data.page['one'],
            barWidth: '40%',
            itemStyle: {
              color: '#842af0',
            },

          },
            {
              name: '二孩率',
              //type决定图表类型
              type: 'bar',
              //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
              stack: '费用',
              data: data.page['two'],
              barWidth: '40%',
              itemStyle: {
                color: '#4478fc',
              },
            },
            {
              name: '三孩率',
              //type决定图表类型
              type: 'bar',
              //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
              stack: '费用',
              data: data.page['three'],
              barWidth: '40%',
              itemStyle: {
                color: '#03baff',
              },
            }
          ]
        };
        myChart.setOption(option);
        window.onresize = chart_right3.resize;
      },
      chart_center1(data) {
        var myChart = echarts.init(document.getElementById("chart_center1"));
        var flowIn=data.flow.flowIn;
        var flowOut=data.flow.flowOut;
        echarts.registerMap('hainan', hainan)
        var pd = []
        for (var i = 0; i < this.tableData.length; i++) {
          var tmp = {}
          var d = []
          tmp.name = this.tableData[i].region
          d.push(this.tableData[i].coor[0], this.tableData[i].coor[1], this.tableData[i].region)
          for(var y = 0; y < flowIn.length;y++){
            if (flowIn[y]['areaName'] == tmp.name){
                d.push(flowIn[y]['popuTotal'])
            }
          }
          tmp.value = d
          pd.push(tmp)
        }
        var pd1 = []
        for (var i = 0; i < this.tableData1.length; i++) {
          var tmp = {}
          var d = []
          tmp.name = this.tableData1[i].region
          d.push(this.tableData1[i].coor[0], this.tableData1[i].coor[1], this.tableData1[i].region)
          for(var y = 0; y < flowOut.length;y++){
            if (flowOut[y]['areaName'] == tmp.name){
              d.push(flowOut[y]['popuTotal'])
            }
          }
          tmp.value = d
          pd1.push(tmp)
        }
        var option = {
          tooltip: {
            trigger: 'item',
            textStyle: config().textStyle,
            formatter: function (params) {
              if(params.seriesName == '流入人口'){
                return params.value[2] + '</br>流入人口：' + params.value[3]+'万人'
              }else {
                return params.value[2] + '</br>流出人口：' + Math.abs(params.value[3])+'万人'
              }
            }
          },
          legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['pm2.5'],
            textStyle: config().textStyle,
          },
          geo: {
            show: true,
            map: 'hainan',
            layoutSize: "500%",
            zoom: 9,
            center: [109.76112, 19.2472],
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
            itemStyle: { //地图区域样式
              normal: {
                areaColor: 'transparent',
                borderColor: '#3fdaff', //区域边框颜色
                borderWidth: 1,
                shadowColor: 'rgba(63, 218, 255, 0.5)',
                shadowBlur: 30
              },
              emphasis: {
                areaColor: '#2B91B7',
              }
            }
          },
          series: [
            { //城市点位
              name: '流入人口',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbolSize: function (val) {
                if(val.length==4){
                  return config().fontSize * 1.5
                }
              },
              itemStyle: {
                normal: {
                  color: 'red'
                }
              },
              label: {
                normal: {
                  formatter: function (val) {
                    if(val.data.value.length==4){
                      return val.data.value[3]
                    }
                  },
                  //position: 'top',
                  textStyle: config().textStyle,
                  show: true
                }
              },
              zlevel: 10,
              data: pd,
            },
            { //城市点位
              name: '流出人口',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbolSize: function (val) {
                if(val.length==4){
                  return config().fontSize * 1.5
                }
                },
              itemStyle: {
                normal: {
                  color: 'blue'
                }
              },
              label: {
                normal: {
                  formatter: function (val) {
                    if(val.data.value.length==4){
                      return val.data.value[3]
                    }
                  },
                  //position: 'top',
                  textStyle: config().textStyle,
                  show: true
                }
              },
              zlevel: 10,
              data: pd1,
            }
          ]
        };
        myChart.setOption(option)
        /*myChart.on('click', function (params) {
          var t_ind = params.data.value[4] * 1
          $('.act_tb').css('background-color', 'transparent')
          $('.act_tb:nth-child(' + t_ind + ')').css('background-color', '#465177')
          //alert( this.t_ind)
        })*/
        window.onresize = myChart.resize;
      },
    }
}

</script>

<style lang="scss" scoped>
  #index{
    .quality_col {
      height:29.6vh;
      margin-top: 1vh;
    }
    .quality_col1 {
      height:60.5vh;
      margin-top: 1vh;
    }
    .chart_col_center{
      background: #0c1752;
      border:1px solid #162f58;
      border-radius: 1vh;
      margin-left: 2vh;
      margin-right: 2vh;
    }
    .chart_col_left{
      background: #0c1752;
      border:1px solid #162f58;
      border-radius: 1vh;
      margin-left: 2vh;
    }
    .chart_col_right{
      background: #0c1752;
      border:1px solid #162f58;
      border-radius: 1vh;
      margin-right: 2vh;
    }
    .pop_col_tit {
      padding:2vh 5vh;
      position: relative;
      height: 3.6vh;
      h3 {
        font-size: 2vh;
        color: #fff;
        font-weight: 400;
        line-height: 3.6vh;
      }
      .tit_icon {
        width: 3.6vh;
        height: 3.6vh;
        display: inline-block;
        position: absolute;
        top:2vh;
        left: 1vh;
        z-index: 1;
      }
    }
    .quality_chart_box {
      height: 22vh;
    }
    .quality_chart_box1 {
      height: 52.9vh;
    }
    .icon-tit-line { background: url("../../static/img/icon-tit-line.svg") no-repeat 100%;}
  }
</style>
