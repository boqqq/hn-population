<template>
  <div id="populationAgeing">
    <div class = "chart_main">
      <el-row>
        <el-col :span="8">
          <el-row>
            <el-col :span="24">
              <div class = "left_age">
                <div class="pop_col_tit">
                  <i class="tit_icon icon-tit-line"></i>
                  <h3>老龄人口结构与趋势</h3>
                </div>
                <div id = "left_chart1" class = "left_chart"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "left_age">
                <div class="pop_col_tit">
                  <i class="tit_icon icon-tit-line"></i>
                  <h3>人口出生率与死亡率趋势</h3>
                </div>
                <div id = "left_chart2" class = "left_chart"></div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "left_age">
                <div class="pop_col_tit">
                  <i class="tit_icon icon-tit-line"></i>
                  <h3>年龄随迁徙变化特征</h3>
                </div>
                <div id = "left_chart3" class = "left_chart"></div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16">
          <el-row>
            <el-col :span="24">
              <div class = "top_age">
                <el-row>
                  <el-col :span="17">
                    <div class="pop_col_tit">
                      <i class="tit_icon icon-tit-line"></i>
                      <h3>老年人分布地图（2019年）</h3>
                    </div>
                    <div id = "top_chart" class = "top_chart"></div>
                  </el-col>
                  <el-col :span="7">
                    <div class = "top_chart" style="margin-top: 4vh">
                      <div class="tltleBox" style="z-index: 9999;margin-top: 1vh;"><span>排名</span><span>地区</span><span>老年人口占比</span></div>
                      <div  style="height: 51vh;overflow: hidden; position:relative">
                        <div>
                          <div class="textBox act_tb" v-for="(item,index) in tableData1"  :key="index" ><span>{{item.rankNo}}</span><span>{{item.areaName}}</span><span>{{item.unitCnt}}</span></div>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="24">
              <el-row>
                <el-col :span="12">
                  <div class = "bottom_age">
                    <div class="pop_col_tit">
                      <i class="tit_icon icon-tit-line"></i>
                      <h3>人口中位数变化率</h3>
                    </div>
                    <div id = "bottom_chart1" class = "bottom_chart"></div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class = "bottom_age" style="margin-right: 1vh">
                    <div class="pop_col_tit">
                      <i class="tit_icon icon-tit-line"></i>
                      <h3>老年抚养比变化特征</h3>
                    </div>
                    <div id = "bottom_chart2" class = "bottom_chart"></div>
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
  var echarts = require('echarts');
  import '../../static/js/map/hainan.js';
  import hainan from '../../static/js/json/hainan.json';
  import {config} from '../../static/js/config/chartConfig.js';
  import $ from 'jquery';
    export default {
        name: "population-ageing",
      data(){
        return{
          tableData:[
            {region:'海口市',coor:[110.326837,20.031624],code:460100000000},
            {region:'三亚市',coor:[109.524255,18.256929],code:460200000000},
            {region:'三沙市',coor:[112.351689,16.838364],code:460300000000},
            {region:'儋州市',coor:[109.565074,19.533091],code:460400000000},
            {region:'五指山市',coor:[109.52483,18.780731],code:469001000000},
            {region:'文昌市',coor:[110.932715,19.616634],code:469005000000},
            {region:'琼海市',coor:[110.480832,19.255009],code:469002000000},
            {region:'万宁市',coor:[110.396559,18.802845],code:469006000000},
            {region:'东方市',coor:[108.65629,19.100448],code:469007000000},
            {region:'定安县',coor:[110.359209,19.683308],code:469021000000},
            {region:'屯昌县',coor:[110.108546,19.357035],code:469022000000},
            {region:'澄迈县',coor:[110.010062,19.744893],code:469023000000},
            {region:'临高县',coor:[109.688244,19.916212],code:469024000000},
            {region:'白沙黎族自治县',coor:[109.455171,19.233017],code:469025000000},
            {region:'昌江黎族自治县',coor:[109.063039,19.30236],code:469026000000},
            {region:'乐东黎族自治县',coor:[109.179933,18.756966],code:469027000000},
            {region:'陵水黎族自治县',coor:[110.042739,18.512332],code:469028000000},
            {region:'保亭黎族自治县',coor:[109.706931,18.647458],code:469029000000},
            {region:'琼中黎族自治县',coor:[109.846811,19.038617],code:469030000000}
          ],
          tableData1:[{areaName:"海口",unit:"",unitCnt:215667,rankNo:1}],
          t_ind:0,
        }
      },
      components: {
      },

      mounted () {
        this.left_chart1Data();
        this.left_chart2Data()
        this.left_chart3Data()
        this.top_chartData()
        this.bottom_chart1Data()
        this.bottom_chart2Data()
      },
      methods: {
        left_chart1Data(){
          this.$http({
            url: this.$http.adornUrl("/t06agingpopustruandtrnd/select"),
            method: 'get',
            params: this.$http.adornParams({
            })
          }).then(({data}) => {
            this.left_chart1(data.page)
          })
        },
        left_chart1(data){
          //alert(JSON.stringify(data))
          var xData = [];
          var data1 = [];
          var data2 = [];
          var data3 = [];
          var data4 = [];

          for (var i = 0;i < data.length; i++) {
            if(data[i].unitType == '60岁+'){
              xData.push(data[i].dateStat)
              data1.push(data[i].popuTotal)
              data3.push(data[i].ytyGrowth)
            }else{
              data2.push(data[i].popuTotal)
              data4.push(data[i].ytyGrowth)
            }
          }

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
        left_chart2Data(){
          this.$http({
            url: this.$http.adornUrl("/t06popubirthrateanddeadratetrnd/select"),
            method: 'get',
            params: this.$http.adornParams({
            })
          }).then(({data}) => {
            this.left_chart2(data.page)
          })
        },
        left_chart2(data){
          //alert(JSON.stringify(data))
          var xData = [];
          var data1 = [];
          var data2 = [];
          for (var i = 0;i < data.length; i++) {
            xData.push(data[i].dateStat)
            data1.push(data[i].birthRate)
            data2.push(data[i].deadRate)
          }
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
              data: ['出生率','死亡率'],//图例的名称数据
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
                name: "出生率",
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
                data: data1,
                zlevel: 11
              },
              {
                name: "死亡率",
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
                data: data2,
                zlevel: 11
              }
            ]
          };
          top_chart.setOption(option)
          window.onresize = top_chart.resize;
        },
        left_chart3Data(){
          this.$http({
            url: this.$http.adornUrl("/t06agegrpchgfeat/select"),
            method: 'get',
            params: this.$http.adornParams({
            })
          }).then(({data}) => {
            this.left_chart3(data.page)
          })
        },
        distinct(arr) {
         return Array.from(new Set(arr));
       },
        left_chart3(data){
          var legengData = [];
          for (var i = 0;i < data.length; i++) {
            legengData.push(data[i].dateStat)
          }
          legengData = this.distinct(legengData)
        let myData = [];
        var dat1 = [];
        var dat2 = [];
        for (var j = 0;j < data.length; j++) {
          if(data[j].unitType != '中位数') {
            if (data[j].dateStat == legengData[0]) {
              myData.push(data[j].unitType)
              dat1 .push(data[j].ytyGrowth);
            } else {
              dat2.push(data[j].ytyGrowth);
            }
          }
        }
          var top_chart  = echarts.init(document.getElementById('left_chart3'));
          var dataFirm = {
            1: dat1
          }
          var dataDevice = {
            1: dat2
          }
          var timeLineData = [1]
          var option = {
            baseOption: {
              timeline: {
                show: false,
                top: 0,
                data: []
              },
              legend: { // 图例
                top: '4%', // 图例距离顶部距离
                left: 'center', // 图例距离左侧距离(此处水平居中)
                itemWidth: config().fontSize,
                itemHeight: config().fontSize,
                itemGap: config().fontSize*15,
                textStyle: config().textStyle,
                data: legengData // 图例的数据数组,一般对应系列名称,即 series.name
              },
              tooltip: {
                show: true,
                trigger: 'axis',
                textStyle: config().textStyle,
                formatter: '{b}<br/>{a}: {c}',
                axisPointer: {
                  type: 'shadow'
                }
              },

              grid: [{
                show: false,
                left: '15%',
                top: '16%',
                bottom: '4%',
                containLabel: true,
                width: '31%'
              },
                {
                  show: false,
                  left: '50%',
                  top: '16%',
                  bottom: '4%',
                  width: '0%'
                },
                {
                  show: false,
                  right: '15%',
                  top: '16%',
                  bottom: '4%',
                  containLabel: true,
                  width: '31%'
                }
              ],

              xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                position: 'top',
                axisLabel: {
                  show: false
                },
                splitLine: {
                  show: false
                }
              },
                {
                  gridIndex: 1,
                  show: false
                },
                {
                  gridIndex: 2,
                  nameTextStyle: {
                    color: '#000',
                    fontSize: 14
                  },
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  position: 'top',
                  axisLabel: {
                    show: false
                  },
                  splitLine: {
                    show: false
                  }
                }
              ],
              yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: false
                },
                data: myData
              },
                {
                  gridIndex: 1,
                  type: 'category',
                  inverse: true,
                  position: 'left',
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  axisLabel: {
                    show: true,
                    //interval: 0,
                    textStyle: config().textStyle
                  },
                  data: myData.map(function(value) {
                    return {
                      value: value,
                      textStyle: {
                        align: 'center'
                      }
                    }
                  })
                },
                {
                  gridIndex: 2,
                  type: 'category',
                  inverse: true,
                  position: 'left',
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  axisLabel: {
                    show: false
                  },
                  data: myData
                }
              ],
              series: []
            },
            options: []
          }
          option.baseOption.timeline.data.push(timeLineData[0])
          option.options.push({
            tooltip: {
              trigger: 'axis',
              formatter: '{b}<br/>{a}: {c} '
            },
            series: [{
              name: legengData[0],
              type: 'bar',
              barWidth: '40%',
              //barMinWidth: 5,
              itemStyle: {
                normal: {
                  color: '#4ca8f6',
                  barBorderRadius: 5
                }
              },

              data: dataFirm[timeLineData[0]]
            },
              {
                name: legengData[1],
                type: 'bar',
                barWidth: '40%',
                xAxisIndex: 2,
                yAxisIndex: 2,
                // label: {
                //   normal: {
                //     show: true,
                //     position: 'right',
                //     formatter: function(params) {
                //       return params.value + "字"
                //     },
                //     offset: [0, 0],
                //     textStyle: {
                //       color: '#000',
                //       fontSize: 14
                //     }
                //   }
                // },
                itemStyle: {
                  normal: {
                    color: '#00d484',
                    barBorderRadius: 5
                  }
                },
                data: dataDevice[timeLineData[0]]
              }
            ]
          })
          top_chart.setOption(option)
          window.onresize = top_chart.resize;
        },
        top_chartData(){
          this.$http({
            url: this.$http.adornUrl("/t06theageddisbumap/select"),
            method: 'get',
            params: this.$http.adornParams({
            })
          }).then(({data}) => {
            this.top_chart(data.page)
            this.tableData1 = data.page
          })
        },
        top_chart(data){
          //alert(JSON.stringify(data))
          var chart_center1 = echarts.init(document.getElementById('top_chart'));
          echarts.registerMap('hainan',  hainan)
          var pd = []
          for (var i = 0; i < data.length; i++) {
            var tmp = {}
            var d = []
            tmp.name = data[i].areaName
            for (var j = 0; j < this.tableData.length; j++) {
              if(data[i].areaCode == this.tableData[j].code){
                d.push(this.tableData[j].coor[0],this.tableData[j].coor[1]);
              }
            }
            d.push(data[i].areaName,data[i].unitCnt,data[i].rankNo)
            tmp.value = d
            pd.push(tmp)
          }
          //alert(JSON.stringify(pd))
          var  option =  {
            tooltip: {
              trigger: 'item',
              textStyle: config().textStyle,
              formatter: function (params) {
               var st = params.value[2]+'</br>老年人口占比：'+params.value[3]+' %</br>排名：'+params.value[4]
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
              zoom:9,
              center: [109.76112,19.2472],
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
                  return config().fontSize*(20-val[4])/4//val[3]*1.5-18
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
          chart_center1.setOption(option)
          chart_center1.on('click', function (params) {
            var t_ind = params.data.value[4]*1
            $('.act_tb').css('background-color','transparent')
            $('.act_tb:nth-child('+t_ind+')').css('background-color','#465177')
            //alert( this.t_ind)
          })
          window.onresize = chart_center1.resize;
        },
        bottom_chart1Data(){
          this.$http({
            url: this.$http.adornUrl("/t06popuagemiddigitchgtrnd/select"),
            method: 'get',
            params: this.$http.adornParams({
            })
          }).then(({data}) => {
            this.bottom_chart1(data.page)
          })
        },
        bottom_chart1(data){
          var top_chart  = echarts.init(document.getElementById('bottom_chart1'));
          var XName= []
          var dat1 = []
          var dat2 = []
          for (var i = 0;i < data.length; i++) {
            if(data[i].popuType == '常住'){
              XName.push(data[i].dateStat)
              dat1.push(data[i].middleCnt)
            }else{
              dat2.push(data[i].middleCnt)
            }
          }
          var data1 = [
            dat1,
            dat2
          ]
          var Line = ["常住人口","户籍人口"];
          var img = [
            'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsSAAALEgHS3X78AAAEp0lEQVR42u3cz4sjRRTA8W9Vd3Vn8mMmjj9WQWSRZQ+CsH+B7MnDIgiCd0E8CYJ/gOAIelo8ehUP/gF6WLw5/gMueFP2sIcF0dHd2Z1kknR11fOQZJJJMtlZd03H7HtQpNOTnpn+8Lrm1etmjIig8e/DKoECKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIqoAJudKTr+osZMNPvBUQBHwHsPF9fB9R0DeHMOQ6T6WOrhEzXBM4swDOL0M6CrArRVoq3t2dGUIb9fTvatg8ZZup1PDBgzPmy98mey6qfzjLz2WaWjEUZKEvGyi9nWyneMOvGIyFQo2Sbg4MUSChpU9IeTTUpJdsEajPZOJeJG5uBZj7rLLduWS5dGm6XNLEELOFUFj54ACJCaychkpDSASK3bwsXL0YgVpWJKwM0iy9Zy8HdGru7jvt3Pbu7w0wES7drTwAbjTHMGCsQcIAnYTC1/wRx0wEnl27JNgZI8HQ6Kc1mQq83RNzaMjPzXqDbjTQaJRFLxIyyMSxAXEkWrhrQzAAmo5HOjCQf7jflILxOkohL+aUPgV4vEGNJo+E5PAy02+UIMEwBxo0CPDP7Dg5SnEtpt1PA0e87XO25FOoh8IYIH2Y5b45RzGAQBiIltZoHxqMcjbksXAVgdc2EQMYzzzdotyeZWKuleULXJtwT4SODfC2QCWR+IF9KnjuX1Xbo99Op7LVE8iXlz0YBTk5SyLEEjo5OLuccEoFUvHfO+reuUPx4zftXAIcx1hdcF+/TvFab4A0Bs0VwqyhpVnkJT89/Q4DDQ0e77YCMwIUsFMeFZD856699URRvX4nxE4A/jbnxXp7v4Zw3ReGNSDHI8wFQjIafuoyn58L/fB6sth/Ybg9fez2TRC6QZcZYvgHsazF+MP7YCyLXcM7gvSXLDGBqYDg+NhwdmSpPoTrAkub0W+f4FSB1fDucIunMHSLpO8WAH0rSy8u+19MBCHB4OHzd2pI+CEUhpigEiN+l6WcdY252jLn5s7Wf472ImPcN8pUl/tEHoV4XWq1Ke4KrLmPsTA3oODpytFoOyJKSyzHyMSIxteWngMW5cSEdDJQUhTdZVgxOz3/+jFJm4+bA2e5JpNU6WZ4Fw99JwnWMKccwpeddP+B7GZTNUPKqybJy0O+Hs1YfMz9swwvpB8fbGDG0GuGkkK7V0hxSmZQpABI8l2z0v3sJf50qpAMJCd2qCulql3LD1lRGQjm7lEsDz0rkxTQOfiPPxUBcuJTbbhss/Y1eyi3NwsmKInmkZsKk5gtPUzNhvp11507CSy/X6XYStpvFudpZw1ZWIOF4Cq6SdtbKbioJyAhRTu3u9yMJXerN+ugvaQQsjcZ8Q3VnZwxlSDhe1lB9GjrSw5b+1avT8+Jw+979nNaOI6U3KpTrWAosxVQmygK4ld8X0ZtK/7eViExD7O1NQPb3T7fsl4/4sBpwYzPwjFbTo95Yl9l9Vd1YN1X/147HebSjary1AHyc5qc+XLQEQx9ve8Kg6xr6hKoCKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIq4JrHP8fEWV8FMTmOAAAAAElFTkSuQmCC',
            'image://data:image/png;base64,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',
            'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABPCAYAAACqNJiGAAAACXBIWXMAAAsSAAALEgHS3X78AAAGZklEQVR42u2cTYgkSRXHfy8iP6q7qr92e+wunIPIIGyN60XRk+xFT7IHD3vypiDexJuHhZ5G2IOgZw96Fd3Z06J48SJ4VWGh66CLIDvSPXa7PVVdn5kR8TxUdpnVM8Muylb1FPEgqazKiMjKH/8XH+8FKapKtP/NTEQQ4UV4EV6EFy3Ci/AivAgvWoQX4UV4EV6EFy3Ci/AivAgvWoQX4UV4EV60CO//t+Q2/ikR5OZvqmiE93Fg6UeXuQ0wZZU7BuZArv/C8dOKe8qOqtKyeogrgyeCoDeAdarz7jMgdipI3RqsIxRZHUCzCmgL4E6QCprhsjqojk7tvH6tU9U7nrUzb3PdlSeC8KB60A5CF6GNsIdwhrCFcPlI4G6t1iPYu6tcoRyiXKKconTQuRIfoMtWoFmJq9bBgWGKMT2f29Rt2+Cb5HetafmWbfpd0/It8rvWBt+0qds2PZ8zrRTYnauWawWuJbwFV62DA0OOpSDHT2woRZBeGgZD762dhsHQI700lCL4yaxcjp3XvQZYc+G1c9u5u94AZw/8pu/bkl0MFovHEDAkCMVQyJqKQzEELAGP5wnBbvvUP7YjIABh7sJLdF+zdHcFaCO8hNgDv6kWS4alJGEwTIGUcpxRjDOcnX2W4wxIGQxTShIyrFqsPfCbvFT1mbU54rLUt9xJ8gkClfoeYby1BZMnCd4mZCYhb1rKSUJibG4RFXkVQb1w6cvJP8ibjjAUfJAw9CXZrsNhOETpIpw8b4r9ArvtgstezgYIpo8T8gPLJgkDUsw4NUl2J8HvA18FvoPh63hURAOKn5rcUY4dYaOkRckIx/SxJz9w5AT2CMt03eUMGNeP0UU47QpbiG2+3MRjGGGxWMyGTUs3QHkE8kXgPfVlplYyxfxURb6V+eK+sdk+Fsto1j/a5stNtqp2uzdWLC86vKf6n04HLhFNjUP7s8HBjG3DYNWIJZCo8KYib/7gC/IVAgnoe8A3gX8nom3M2BIwaN9oahyXCJ3ORwYXXvzAwNn7QvOehLFxZJIiCMmGBO9ewfIlVf746k4RfvTl8MvMcPha25/9vGu++5sPsl9LooX45IIkmfWdKhLGpqSJcPa+wL01XZ6dPKyUUH/ALUhGQokg5l/A9zAy+vYrvJ4ZDgEyw+E3PqOvYxBMJlhm5ZORwFatrXs37rNO8O6/Me+JbHDNxYsTRMonBL5GYDz19OtXiyBXBHJc8XvV6S5MFmovtFe7z9oFBjhEVXoFfAgNFKdKiuJRhCCi4Yd/yt49Hcmvho4/X0zkt7/4W/KuiG4AP0PlU6RVvQYKH6LSKzhcfmTlE5+q3Ag9zZZU21jKi4St/QSZTYqT1HzeSDIl+J8Av1ORd/AItoLq1EmWlVOZlIy1JN0oUEquLhzpvqOPn682lhSq+sSVt/AAHZQ2yh5Ke3+23DIEcvUBTnE+AG8D9wUtRbUU1bck6I8xfFaLok3Ak6ufL9fa+2HWXhVlWWKkeTmjrQAPat+vUJu6TbVCcNbR2JQwHJ0XmblsePlAs/wdwtSgCAnf12DbhLDprD6hCI7mpmOCN4nPZKiZL5M++Y376Rq47fNc13za52LIfG5LJiSUgwTTshisKaZ7ibCDsmOMnkw8St7wBDxh4ElbjgbOTn2qgSL8006X7bLLHTBk0XXDjp36nh3ROw80cGirBEoYliHxF4X3fy8a+V8mLhSkoYDh7Lq2Sho4eufB9+wo7NjpgsvKGg0Yz43nXa9xHcbs+A2CEAb9wJYxTLaFtIahRGn0lasQTGvbiKj1fTsgISysaZec01juVOUax0PgFCUnkBCCsSNxClnpkO2SXSoVVscuJbJdkpVOnKLKZA7uFOXhjfbXbZ43V8MRyn2UE5S9CkCT4Es7ZPOOM1kQe+VyO/YJfRx9nL1yucmCsHnH+dIOw46dzhV3UrVXpSSXmcdYTQKonnKsJ4FOETrA2TM0NIvZQfsZyZ8VpSBXkrddSHZfpx/f4L/52teAv9YAfg7lD7UB5yHM1bbC5PdKtluooiJINR9TQCslzgCcI+zVYJzXonRd4O3bsWtAVv2Chqe2XFzb8bHAEXAMR0f6rIFn1ftV5Da93eLjBDBv024pia8GeZFCUhFetAgvwovwIrwIL1qEF+FFeBFetAgvwovwIrwIL1qEF+FFeBFetAgvwovw1tD+A2QKHlM6/+MtAAAAAElFTkSuQmCC',
            'image://data:image/png;base64,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',
          ];
          var color =['#00f8ff','#00f15a','#0696f9','#dcf776'];

//数据处理
          var datas = [];
          Line.map((item,index)=>{
            datas.push(
              {
                symbolSize: 150,
                symbol: img[index],
                name: item,
                type: "line",
               // yAxisIndex: 1,
                data: data1[index] ,
                itemStyle: {
                  normal: {
                    borderWidth: 5,
                    color: color[index],
                  }
                }
              },
              {
                symbolSize: 150,
                symbol: img[index],
                name: item,
                type: "line",
               // yAxisIndex: 1,
                data: data1[index] ,
                itemStyle: {
                  normal: {
                    borderWidth: 5,
                    color: color[index],
                  }
                }
              }
            )
          })

          var option = {
            grid: {
              left: '5%',
              top: '10%',
              bottom: '5%',
              right: '5%',
              containLabel: true
            },
            yAxis: [
              {
                type: 'value',
                position: 'left',
                nameTextStyle: {
                  color: '#00FFFF'
                },
                splitLine: {
                  lineStyle: {
                    type: 'dashed',
                    color: 'rgba(135,140,147,0.8)'
                  }
                },
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  formatter: '{value}',
                  textStyle: config().textStyle,
                }
              },
            ],
            xAxis: [
              {
                type: 'category',
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: config().textStyle,
                },
                splitArea: {
                  show: false
                },
                splitLine: {
                  show: false
                },
                //-----
                data: XName,
              },
            ],
            series: datas,
          };
          top_chart.setOption(option)
          window.onresize = top_chart.resize;
        },
        bottom_chart2Data(){
          this.$http({
            url: this.$http.adornUrl("/t06bringchgfeat/select"),
            method: 'get',
            params: this.$http.adornParams({
            })
          }).then(({data}) => {
            this.bottom_chart2(data.page)
          })
        },
        bottom_chart2(data){
          var xData = [];
          var data1 = [];
          var data2 = [];
          for (var i = 0;i < data.length; i++) {
            xData.push(data[i].dateStat)
            data1.push(data[i].ytyGrowth/0.8)
            data2.push(data[i].ytyGrowth)
          }

          var chart_center1 = echarts.init(document.getElementById('bottom_chart2'));
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
              data: ['老年抚养比', '老年抚养比增速'],//图例的名称数据
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
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
              }
            ],
            yAxis : [
              {
                type : 'value',
                //minInterval:100,//设置左侧Y轴最小刻度
                splitLine: {
                  lineStyle: {
                    type: 'dashed',
                    color: 'rgba(135,140,147,0.8)'
                  }
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
                name:'老年抚养比',
                type:'bar',
                data:data1,
                barWidth:'40%'
              },{
                name: "老年抚养比增速",
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                symbolSize: 10, //标记的大小
                itemStyle: {
                  //折线拐点标志的样式
                  color: "#058cff"
                },
                lineStyle: {
                  color: "#058cff"
                },
                areaStyle:{
                  color: "rgba(5,140,255, 0.2)"
                },
                data: data2
              }
            ]
          };
          chart_center1.setOption(option)
          window.onresize = chart_center1.resize;
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
        height: 24.6vh;
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
      .top_chart{
        width: 100%;
        height: 55.3vh;
      }
    }
    .tltleBox{
      top: 0;
    }
    .tltleBox,.textBox{
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0.51vh 0;
      font-size: 1.5vh;
      line-height: 1.6vh;
      color: #fff;
      transition: all 0.5s;
      overflow: hidden;
      span{
        width: 30%;
        text-align: center;
      }
      span:nth-child(2){
        width: 40%;
      }
    }
    .textBox{
      color: #AFB8D2;
      overflow: hidden;
    }
    .tltleBox:hover,.textBox:hover{
      background: #465177;
    }

    .bottom_age{
      height: 29.6vh;
      margin-top: 1vh;
      margin-left: 1vh;
      background-image:url('../../static/img/ind_right.png');
      background-repeat: no-repeat;
      background-size: 100% 29.6vh;
      .bottom_chart{
        width: 100%;
        height: 24.6vh;
      }
    }
  }
</style>
