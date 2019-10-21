<template>
  <div class="employment">
    <el-row style="margin-top: 7vh">
      <el-col :span="8">
        <el-col :span="24">
          <div class="fix-mini">
            <div class="pop_col_tit">
              <i class="tit_icon icon-tit-line"></i>
              <h3>从业人员数量及劳动力人口比例趋势</h3>
            </div>
            <div id="labor_trend" class="bar-comtent">
            </div>
          </div>

        </el-col>
        <el-col :span="24">
          <div class="fix-mini">
            <div class="fix-title">
              <div class="pop_col_tit">
                <i class="tit_icon icon-tit-line"></i>
                <h3>从业人扣增长率趋势</h3>
              </div>
            </div>
            <div id="growth_trend" class="bar-comtent">

            </div>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="fix-mini">
            <div class="fix-title">
              <div class="pop_col_tit">
                <i class="tit_icon icon-tit-line"></i>
                <h3>三次产业从业人员结构变化趋势</h3>
              </div>
            </div>
            <div id="industrial_structure" class="bar-comtent">l

            </div>
          </div>
        </el-col>
      </el-col>
      <el-col :span="16">
        <el-col :span="24">
          <div class="fix-small fix-margin-right">
            <div class="fix-title">
              <div class="pop_col_tit">
                <i class="tit_icon icon-tit-line"></i>
                <h3>各行业从业人员数量变化趋势</h3>
              </div>
            </div>
            <div id="various_industries" class="bar-comtent2">

            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="fix-mini">
            <div class="fix-title">
              <div class="pop_col_tit">
                <i class="tit_icon icon-tit-line"></i>
                <h3>按登记注册类型从业人员结构变化趋势</h3>
              </div>
            </div>
            <div id="registration_type" class="bar-comtent">

            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="fix-mini fix-margin-right">
            <div class="fix-title">
              <div class="pop_col_tit">
                <i class="tit_icon icon-tit-line"></i>
                <h3>按登记注册类型从业人员结构变化趋势</h3>
              </div>
            </div>
            <div id="changes_employment" class="bar-comtent">

            </div>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  var echarts = require('echarts');
  import {config} from '../../static/js/config/chartConfig.js';
  export default {
    name: "population-ageing",
    data(){
      return{
        incDate:['2010','2011','2012','2013','2014','2015', '2016', '2017', '2018', '2019',],
        incData:[14,22,33,44,55,65,69,73,77,80],
        incVel:[64,68,72,76,80,84,86,90,94, 100],
      }
    },
    components: {
    },

    mounted () {
      this.labor_trend()
      this.growth_trend()
      this.industrial_structure()
      this.various_industries()
      this.registration_type()
      this.changes_employment()
    },
    methods: {
      labor_trend(){
        var labor_trend = echarts.init(document.getElementById('labor_trend'));
        var option = {
          barWidth:'15',
          legend: {
            data: ['从业人员', '从业人员劳动力人口比例'],
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
          },
          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            axisLine:{
              show:false,
            },
            axisLabel: {
              rotate:45,//斜体字可不用
              textStyle: config().textStyle
            },
            axisTick:{
              show:false,
            },
            data: this.incDate,
          },
          yAxis: {
            show:true,
            name:'百万',
            nameTextStyle:{
              color:config().textStyle.color,
              fontSize:config().textStyle.fontSize,
              padding:[0,40,0,0]
            },
            splitLine: {
              show:false
            },
            type: 'value',
            axisLine:{
              show:false,
            },
            axisLabel: {
              textStyle: config().textStyle
            },
            axisTick:{
              show:false,
            },
            // min:1000,
            // max:10000,
          },
          grid:{
            top:'20%',
            left: '2%',
            right: '2%',
            bottom: '5%',
            containLabel: true
          },
          series: [
            {
              data: this.incData,
              type: 'bar',
              name: '从业人员',
              barWidth : '15%',
              itemStyle: {
                emphasis: {
                  barBorderRadius: 15
                },
                normal: {
                  barBorderRadius: 15,
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                      offset: 0,
                      color: '#4575D2'
                    },
                      {
                        offset: 1,
                        color: '#2444A0'
                      }
                    ])
                }
              }
            },
            {
              data: this.incVel,
              type: 'line',
              symbol: "none",
              name: '从业人员劳动力人口比例',
              color:'#A54436'
            }
          ]
        };
        labor_trend.setOption(option)
        window.onresize = labor_trend.resize;
      },
      growth_trend(){
        var growth_trend = echarts.init(document.getElementById('growth_trend'));
        var option = {
          legend: {
            data: ['劳动力人口', '从业人口'],
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
          },
          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            axisLine:{
              show:false,
            },
            axisLabel: {
              //rotate:45,//斜体字可不用
              textStyle: config().textStyle
            },
            axisTick:{
              show:false,
            },
            data: this.incDate,
          },
          yAxis: {
            show:true,
            name:'%',
            nameTextStyle:{
              color:config().textStyle.color,
              fontSize:config().textStyle.fontSize,
              padding:[0,30,0,0]
            },
            splitLine: {
              show:true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)'
              }
            },
            type: 'value',
            axisLine:{
              show:false,
            },
            axisLabel: {
              textStyle: config().textStyle
            },
            axisTick:{
              show:false,
            },
            // min:1000,
            // max:10000,
          },
          grid:{
            top:'20%',
            left: '2%',
            right: '5%',
            bottom: '5%',
            containLabel: true
          },
          series: [
            {
              data: this.incData,
              type: 'line',
              symbol: "none",
              name: '劳动力人口',
              color:'#3661B3'
            },
            {
              data: this.incVel,
              type: 'line',
              symbol: "none",
              name: '从业人口',
              color:'#A54436'
            }
          ]
        };
        growth_trend.setOption(option)
        window.onresize = growth_trend.resize;
      },
      industrial_structure (){
        var industrial_structure = echarts.init(document.getElementById('industrial_structure'));
        var option = {
          tooltip : {
            trigger: 'axis',
            textStyle:config().textStyle,
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          color:['#335BB5','#F85B36','#8C8F92'],
          legend: {
            data:['第一产业从业人员','第二产业从业人员','第三产业从业人员'],
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
          },
          grid: {
            left: '4%',
            right: '4%',
            bottom: '8%',
            top:'20%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              axisLabel: {
                margin:config().fontSize,
                rotate:45,//斜体字可不用
                textStyle:config().textStyle
              },
              axisTick:{
                show:false,
              },
              axisLine:{
                show:false,
              },
              data : ['2019','2011','2012','2013','2014','2015','2016','2017','2018','2019']
            }
          ],
          yAxis : [
            {
              show:true,
              type : 'value',
              name:'万人',
              nameTextStyle:{
                color:config().textStyle.color,
                fontSize:config().textStyle.fontSize,
                padding:[0,40,0,0]
              },
              axisLabel: {
                // rotate:45,//斜体字可不用
                textStyle:config().textStyle,
              },
              splitLine: {
                show:false
              },
              axisLine:{
                show:false,
              },
              axisTick:{
                show:false,
              },
            }
          ],
          series : [
            {
              name:'第一产业从业人员',
              type:'bar',
              barWidth : '15%',
              stack: '产业结构',
              data:[220, 330, 430, 320, 260, 550, 250, 540,210,320],
              itemStyle: {
                normal: {
                  barBorderRadius:[0, 0, 10, 10],
                }
              }
            },
            {
              name:'第二产业从业人员',
              type:'bar',
              stack: '产业结构',
              data:[320, 210, 260, 320, 220, 430, 550, 330,250,540]
            },
            {
              name:'第三产业从业人员',
              type:'bar',
              stack: '产业结构',
              data:[260, 540, 250, 330, 430, 210, 320,220,320,540],
              itemStyle: {
                normal: {
                  barBorderRadius:[10, 10, 0, 0],
                }
              }
            },
          ]
        };
        industrial_structure.setOption(option)
      },
      various_industries (){
        var various_industries = echarts.init(document.getElementById('various_industries'));
        var hours = ['', '2009', '2010', '2011', '2012', '2013', '2014','2015','2016','2017','2018'];
        var days = ['',
          '零售批发',
          '建筑业',
          '电力',
          '制造业',
          '采矿业',
          '农林牧渔'
        ];

        var data =[
          //[0, 0, 10],
          //第一位表示纵轴-Y从1开始录入
          //[1, 0, 5],
          [1, 1, 11],
          [1, 2, 9],
          [1, 3, 36],
          [1, 4,15],
          [1, 5, 41],
          [1, 6, 30],
          [1, 7, 12],
          [1, 8, 9],
          [1, 9, 12],
          [1, 10,9],
          //[2, 0, 0.0],
          [2, 1, 7],
          [2, 2, 20],
          [2, 3, 7],
          [2, 4, 10],
          [2, 5, 11],
          [2, 6, 2],
          [2, 7,23],
          [2, 8,3],
          [2, 9, 31],
          [2, 10,15],
          //[3, 0, 0.0],
          [3, 1, 65],
          [3, 2,29],
          [3, 3, 78],
          [3, 4, 18],
          [3, 5, 16],
          [3, 6, 8],
          [3, 7, 17],
          [3, 8, 40],
          [3, 9, 9],
          [3, 10,18],

          [4, 1, 83],
          [4, 2,55],
          [4, 3, 84],
          [4, 4,9],
          [4, 5, 41],
          [4, 6, 55],
          [4, 7,8],
          [4, 8, 6],
          [4, 9, 5],
          [4, 10,2],

          [5, 1,4],
          [5, 2,3],
          [5, 3,14],
          [5, 4, 98],
          [5, 5, 21],
          [5, 6,12],
          [5, 7, 8],
          [5, 8, 20],
          [5, 9, 21],
          [5, 10, 2],

          [6, 1,20],
          [6, 2,7],
          [6, 3,15],
          [6, 4, 13],
          [6, 5, 2],
          [6, 6,11],
          [6, 7, 12],
          [6, 8, 86],
          [6, 9, 15],
          [6, 10, 32],
        ];
        data = data.map(function (item) {
          return [item[1], item[0], item[2]];
        });

        var option = {
          draggable:true,
          tooltip: {
            position: 'top',
            textStyle: config().textStyle,
            formatter: function (params) {
              return days[params.value[1]] + "<br>" + hours[params.value[0]] + ':' + params.value[2];
            }
          },
          grid: {
            top:'10%',
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: hours,
            boundaryGap: false,
            axisLabel: {
              textStyle:config().textStyle
            },
            axisLine: {
              show: false
            },
            axisTick:{
              show:false,
            },
          },
          yAxis: {
            type: 'category',
            boundaryGap:false,
            data: days,
            axisLabel: {
              textStyle:config().textStyle
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)'
              }
            },
            axisLine: {
              show: false
            },
            axisTick:{
              show:false,
            },
          },
          series: [{
            name: 'patents',
            type: 'scatter',
            itemStyle:
              {
                normal: {
                  show: true,
                  color: function (params){
                    var color = ['#208590','#414B92','#237B3F','#8A8D92','#8A382C','#145C8E','#5F3611'];
                    return color[params.data[1]-1];
                  }
                }
              },
            symbolSize: function (val) {
              return Math.sqrt(val[2])*5
            },
            data: data,
            animationDelay: function (idx) {
              return idx * 5;
            }
          }]
        };
        various_industries.setOption(option)
      },
      registration_type (){
        var registration_type = echarts.init(document.getElementById('registration_type'));
        var option = {
          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['国有', '集体', '联营','有限责任','股份','外商','港澳台商','私营','个体'],
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
          },
          grid: {
            left: '4%',
            right: '4%',
            bottom: '8%',
            top:'20%',
            containLabel: true
          },
          xAxis: {
            axisLine:{
              show:false,
            },
            axisTick:{
              show:false,
            },
            splitLine: {
              show:true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)'
              }
            },
            axisLabel: {
              // rotate:45,//斜体字可不用
              textStyle:config().textStyle,
              formatter:'{value}%'
            },
          },
          yAxis: {
            type: 'category',
            axisTick:{
              show:false,
            },
            axisLabel: {
              // rotate:45,//斜体字可不用
              textStyle:config().textStyle,
              formatter:'{value}年'
            },
            data: ['2014', '2015', '2015', '2017', '2018']
          },
          series : [
            {
              name: '国有',
              type: 'bar',
              stack: '总量',
              barWidth:'40%',
              itemStyle: {
                color: '#4698FF'
              },
              data: [25, 20,15,25,20]
            },
            {
              name: '集体',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#F95C35'
              },
              data: [10, 5,15,5,5]
            },
            {
              name: '联营',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#3AE45F'
              },
              data: [15, 10,10,15,10]
            },
            {
              name: '有限责任',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#465DFF'
              },
              data: [15, 15,10,15,10]
            },
            {
              name: '股份',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#DDB41C'
              },
              data: [5, 10,10,10,15]
            },
            {
              name: '外商',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#36F5FA'
              },
              data: [10, 10,15,10,15]
            },
            {
              name: '港澳台商',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#7684FC'
              },
              data: [10, 10,5,5,5]
            },
            {
              name: '私营',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#9DF9E5'
              },
              data: [5, 5,10,10,10]
            },
            {
              name: '个体',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#FFFFFF'
              },
              data: [5, 15,10,5,10]
            }
          ]
        };
        registration_type.setOption(option)
      },
      changes_employment (){
        var changes_employment = echarts.init(document.getElementById('changes_employment'));
        var option = {

          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '5%',
            right: '4%',
            bottom: '25%',
            top:'20%',
            containLabel: false
          },
          legend: {
            data: ['2014', '2018'],
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
          },
          xAxis: {
            type: 'category',
            zlevel:10,
            data: ['农林牧渔','采矿','制造','建设','批发','计算机通信','软件信息','能源采矿','消费品','居民服务','住宿餐饮'],
            axisLine: {
              lineStyle: {
                color: '#138EEE'
              }
            },
            axisLabel: {
              rotate:30,//斜体字可不用
              textStyle: config().textStyle
            },
            axisTick:{
              show:false
            }
          },

          yAxis: {
            type: 'value',
            name:'%',
            nameTextStyle:{
              color:config().textStyle.color,
              fontSize:config().textStyle.fontSize,
              padding:[0,30,0,0]
            },
            axisLine: {
              show: false,
            },
            axisLabel:{
              textStyle: config().textStyle
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
            name: '2014',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
              normal: {
                color: '#196027'
              },
            },
            data: [30, -20, -10, 35, 43,32,45,56,88,75,90]
          },
            {
              name: '2018',
              type: 'bar',
              barWidth: '20%',
              itemStyle: {
                normal: {
                  color: '#A9544B'
                },
              },
              data: [34, -43, -21, 66, 56,76,43,78,88,65, 34]
            }]
        };
        changes_employment.setOption(option)
      },
    }
  }
</script>
<style lang="scss">
  .employment{
    .fix-mini{
      height: 29.6vh;
      margin-top: 1vh;
      margin-left: 1vh;
      background-image:url('../../static/img/ind_right.png');
      background-repeat: no-repeat;
      background-size: 100% 29.6vh;
    }
    .fix-small{
      height: 60.3vh;
      margin-top: 1vh;
      margin-left: 1vh;
      background-image:url('../../static/img/ind_right.png');
      background-repeat: no-repeat;
      background-size: 100% 60.3vh;
    }
    .fix-margin-right{
      margin-right: 1vh;
    }
    .bar-comtent{
       height: 22.6vh;
       margin-top: 2vh;
     }
    .bar-comtent2{
      height: 53.3vh;
      margin-top: 2vh;
    }
    /*.pop_col_tit {*/
    /*  position: relative;*/
    /*  height: 4vh;*/
    /*  h3 {*/
    /*    font-size: 2vh;*/
    /*    color: #a9b2d4;*/
    /*    font-weight: bold;*/
    /*    line-height: 4vh;*/
    /*  }*/
    /*  .tit_icon {*/
    /*    width: 3.6vh;*/
    /*    height: 3.6vh;*/
    /*    display: inline-block;*/
    /*    position: absolute;*/
    /*    left: 1vh;*/
    /*    z-index: 1;*/
    /*  }*/
    /*}*/
    /*.icon-tit-line { background: url("../../static/img/icon-tit-line.svg") no-repeat 100%;}*/

  }

</style>
