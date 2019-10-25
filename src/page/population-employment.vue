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
                <h3>从业人员增长率趋势</h3>
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
                <h3>各行业从业人员结构5年变迁</h3>
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
      this.init_labor_trend()
      this.init_growth_trend()
      this.init_industrial_structure()
      this.init_various_industries()
      this.init_registration_type()
      this.init_changes_employment()
    },
    methods: {
      init_labor_trend(){

        let _this = this;
        var dataX = [];
        var dataY1 = [];
        var dataY2 = [];
        _this.$http({
          url: _this.$http.adornUrl('/t04workpersmemqtyocuplabrpopuratio/list'),
          method: 'get',
          params: _this.$http.adornParams({
            'areaCode':'460000000000',
            'limit':10,
            'order':'date_stat'
          }, false)
        }).then(({data}) => {
          if (data.code == 0) {
            data.list.forEach(x=>{
              dataX.push(x.dateStat);
              dataY1.push(x.practitionerNum);
              dataY2.push(x.ytyGrowth);
              _this.labor_trend(dataX,dataY1, dataY2);
            })
          }
        })

      },
      labor_trend(dataX, dataY1, dataY2){

        var labor_trend = echarts.init(document.getElementById('labor_trend'));
        var option = {
          barWidth:'15',
          legend: {
            data: ['从业人员', '从业人员劳动力人口比例'],
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
            top: '3%',//图例离底部的距离
            right:"8%"
          },
          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            formatter:function(params)
            {
              var relVal = params[0].name;
                relVal += '<div class="square" ><span style="background:#4478fc"></span>'+ params[0].seriesName + ' : ' + params[0].value+"百万</div>" +
                  '<div class="circle" ><span style="background:#02faa9"></span>'+ params[1].seriesName + ' : ' + params[1].value+"%</div>";
              return relVal;
            },
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: [{
            type: 'category',
            axisLine:{
              show:false,
            },
            axisLabel: {
              // rotate:45,//斜体字可不用
              textStyle: config().textStyle
            },
            axisTick:{
              show:false,
            },
            data: dataX,
          }],
          yAxis: [
            {
              type: 'value',
              name:'百万',
              nameTextStyle:{
                color:config().textStyle.color,
                fontSize:config().textStyle.fontSize,
                padding:[0,40,0,0]
              },
              splitLine: {
                show:false
              },
              axisLine:{
                show:false,
              },
              axisLabel: {
                textStyle: config().textStyle
              },
              axisTick:{
                show:false,
              },
            },
            {
              type: "value",
              // name:'%',
              // nameTextStyle:{
              //   color:config().textStyle.color,
              //   fontSize:config().textStyle.fontSize,
              //   padding:[0,-32,0,0]
              // },
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
                textStyle: config().textStyle,
                formatter:'{value}%'
              },
            }
          ],
          grid:{
            top:'20%',
            left: '3%',
            right: '3%',
            bottom: '5%',
            containLabel: true
          },
          series: [
            {
              data: dataY1,
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
                      color: '#62b8fd'
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
              data: dataY2,
              type: 'line',
              showAllSymbol: true, //显示所有图形。
              symbol: "circle", //标记的图形为实心圆
              //symbolSize: 10, //标记的大小
              itemStyle: {
                //折线拐点标志的样式
                color: "#fff"
              },
              lineStyle: {
                color: "#02faa9"
              },
              yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
              name: '从业人员劳动力人口比例',
            }
          ]
        };
        labor_trend.setOption(option)
        window.onresize = labor_trend.resize;
      },
      init_growth_trend(){

        let _this = this;
        var dataX = [];
        var dataY1 = [];
        var dataY2 = [];
        _this.$http({
          url: _this.$http.adornUrl('/t04workpopugrowratetrnd/list'),
          method: 'get',
          params: _this.$http.adornParams({
            'areaCode':'460000000000',
            'limit':10,
            'order':'date_stat'
          }, false)
        }).then(({data}) => {
          if (data.code == 0) {
            data.list.forEach(x=>{
              dataX.push(x.dateStat);
              dataY2.push(x.orkingYtyGrowth);
              dataY1.push(x.workYtyGrowth);
              _this.growth_trend(dataX,dataY1, dataY2);
            })
          }
        })

      },
      growth_trend(dataX,dataY1, dataY2){
        var growth_trend = echarts.init(document.getElementById('growth_trend'));
        var option = {
          legend: {
            data: ['劳动力人口', '从业人口'],
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
            top: '3%',//图例离底部的距离
            right:"5%"
          },
          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            formatter:function(params)
            {
              var relVal = params[0].name;
              relVal += '<div class="circle" ><span style="background:#4478fc"></span>'+ params[0].seriesName + ' : ' + params[0].value+"%</div>" +
                '<div class="circle" ><span style="background:#02faa9"></span>'+ params[1].seriesName + ' : ' + params[1].value+"%</div>";
              return relVal;
            },
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
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
            data: dataX,
          },
          yAxis: {
            show:true,
            // name:'%',
            // nameTextStyle:{
            //   color:config().textStyle.color,
            //   fontSize:config().textStyle.fontSize,
            //   padding:[0,30,0,0]
            // },
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
              textStyle: config().textStyle,
              formatter:'{value}%'
            },
            axisTick:{
              show:false,
            },
            // min:1000,
            // max:10000,
          },
          grid:{
            top:'20%',
            left: '3%',
            right: '5%',
            bottom: '8%',
            containLabel: true
          },
          series: [
            {
              data: dataY1,
              type: 'line',
              name: '劳动力人口',
              showAllSymbol: true, //显示所有图形。
              symbol: "circle", //标记的图形为实心圆
              symbolSize: 8, //标记的大小
              itemStyle: {
                //折线拐点标志的样式
                color: "#4478fc"
              },
              lineStyle: {
                color: "#4478fc"
              },
            },
            {
              data: dataY2,
              type: 'line',
              name: '从业人口',
              showAllSymbol: true, //显示所有图形。
              symbol: "circle", //标记的图形为实心圆
              symbolSize: 8, //标记的大小
              itemStyle: {
                //折线拐点标志的样式
                color: "#02faa9"
              },
              lineStyle: {
                color: "#02faa9"
              },
            }
          ]
        };
        growth_trend.setOption(option)
        window.onresize = growth_trend.resize;
      },
      init_industrial_structure(){

        let _this = this;
        var dataX = [];
        var dataY1 = [];
        var dataY2 = [];
        var dataY3 = [];
        _this.$http({
          url: _this.$http.adornUrl('/t04indsworkpersmemstruchgtrnd/list'),
          method: 'get',
          params: _this.$http.adornParams({
            'areaCode':'460000000000',
            'limit':10,
            'order':'date_stat'
          }, false)
        }).then(({data}) => {
          if (data.code == 0) {
            data.list.forEach(x=>{
              dataX.push(x.dateStat);
              dataY3.push(x.tertiaryIndustryNum);
              dataY2.push(x.agroNum);
              dataY1.push(x.industrialNum);
              _this.industrial_structure(dataX,dataY1, dataY2, dataY3);
            })
          }
        })

      },
      industrial_structure (dataX,dataY1, dataY2,dataY3){
        var industrial_structure = echarts.init(document.getElementById('industrial_structure'));
        var option = {
          tooltip : {
            trigger: 'axis',
            textStyle:config().textStyle,
            formatter:function(params)
            {
              var relVal = params[0].name;
              relVal += '<div class="square" ><span style="background:#4478fc"></span>'+ params[0].seriesName + ' : ' + params[0].value+"万人</div>" +
                '<div class="square" ><span style="background:#62b8fd"></span>'+ params[1].seriesName + ' : ' + params[1].value+"万人</div>"+
                '<div class="square" ><span style="background:#7cedfe"></span>'+ params[2].seriesName + ' : ' + params[2].value+"万人</div>";
              return relVal;
            },
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          color:['#4478fc','#62b8fd','#7cedfe'],
          legend: {
            data:['第一产业从业人员','第二产业从业人员','第三产业从业人员'],
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
            top: '3%',//图例离底部的距离
            right:"5%"
          },
          grid: {
            left: '3%',
            right: '3%',
            bottom: '5%',
            top:'20%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              axisLabel: {
                margin:config().fontSize,
                // rotate:45,//斜体字可不用
                textStyle:config().textStyle
              },
              axisTick:{
                show:false,
              },
              axisLine:{
                show:false,
              },
              data : dataX
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
              data:dataY1
            },
            {
              name:'第二产业从业人员',
              type:'bar',
              barWidth : '15%',
              stack: '产业结构',
              data:dataY2
            },
            {
              name:'第三产业从业人员',
              type:'bar',
              barWidth : '15%',
              stack: '产业结构',
              data:dataY3
            },
          ]
        };
        industrial_structure.setOption(option)
      },
      init_various_industries(){

        let _this = this;
        var dataX = [];
        var dataY = [];
        var dataS = [];
        var unit = '';
        _this.$http({
          url: _this.$http.adornUrl('/t04indsworkpersmemqtychgtrnd/list'),
          method: 'get',
          params: _this.$http.adornParams({
            'areaCode':'460000000000'
          }, false)
        }).then(({data}) => {
          if (data.code == 0) {
            dataX = data.result.year;
            dataY = data.result.desc;
            dataS = data.result.lists;
            unit = data.result.unit;
            _this.various_industries(dataX,dataY,dataS,unit);
          }
        })

      },
      various_industries (dataX,dataY,dataS,unit){
        var various_industries = echarts.init(document.getElementById('various_industries'));
        var color = ['#4478fc','#03baff','#7cedfe','#842af0','#20e19f','#f8c300','#ea396a','#3945de','#007eff', '#09c3df', '#5a05c0'];
        var hours = dataX;
        var days = dataY;
        var data = dataS;
        // var data =[
        //   //[0, 0, 10],
        //   //第一位表示纵轴-Y从1开始录入
        //   //[1, 0, 5],
        //   [1, 1, 11],
        //   [1, 2, 9],
        //   [1, 3, 36],
        //   [1, 4,15],
        //   [1, 5, 41],
        //   [1, 6, 30],
        //   [1, 7, 12],
        //   [1, 8, 9],
        //   [1, 9, 12],
        //   [1, 10,9],
        //   //[2, 0, 0.0],
        //   [2, 1, 7],
        //   [2, 2, 20],
        //   [2, 3, 7],
        //   [2, 4, 10],
        //   [2, 5, 11],
        //   [2, 6, 2],
        //   [2, 7,23],
        //   [2, 8,3],
        //   [2, 9, 31],
        //   [2, 10,15],
        //   //[3, 0, 0.0],
        //   [3, 1, 65],
        //   [3, 2,29],
        //   [3, 3, 78],
        //   [3, 4, 18],
        //   [3, 5, 16],
        //   [3, 6, 8],
        //   [3, 7, 17],
        //   [3, 8, 40],
        //   [3, 9, 9],
        //   [3, 10,18],
        //
        //   [4, 1, 83],
        //   [4, 2,55],
        //   [4, 3, 84],
        //   [4, 4,9],
        //   [4, 5, 41],
        //   [4, 6, 55],
        //   [4, 7,8],
        //   [4, 8, 6],
        //   [4, 9, 5],
        //   [4, 10,2],
        //
        //   [5, 1,4],
        //   [5, 2,3],
        //   [5, 3,14],
        //   [5, 4, 98],
        //   [5, 5, 21],
        //   [5, 6,12],
        //   [5, 7, 8],
        //   [5, 8, 20],
        //   [5, 9, 21],
        //   [5, 10, 2],
        //
        //   [6, 1,20],
        //   [6, 2,7],
        //   [6, 3,15],
        //   [6, 4, 13],
        //   [6, 5, 2],
        //   [6, 6,11],
        //   [6, 7, 12],
        //   [6, 8, 86],
        //   [6, 9, 15],
        //   [6, 10, 32],
        // ];
        data = data.map(function (item) {
          return [item[1], item[0], item[2]];
        });

        var option = {
          draggable:true,
          tooltip: {
            position: 'top',
            textStyle: config().textStyle,
            formatter: function (params) {
              return hours[params.value[0]] + '<div class="circle" ><span style="background:' + color[params.value[1]-1] +'"></span>'+ days[params.value[1]] + ' : ' + params.value[2]+unit+"</div>";
            }
          },
          grid: {
            top:'10%',
            left: '2%',
            right: '10%',
            bottom: '13%',
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
          dataZoom: [
            {
              show: true,
              type: 'slider',
              yAxisIndex: 0,
              start: 0,
              end: 30,
              right: '1%',
              width: config().fontSize*1.5,
              backgroundColor: '#041257',
              borderColor: 'transparent',
              fillerColor: '#059DFA',
              handleStyle: {
                fontSize:config().fontSize,
                color: 'transparent'
              },
              textStyle: config().textStyle
            },
            // {
            //   show: true,
            //   type: 'slider',
            //   xAxisIndex: 0,
            //   start: 0,
            //   end: 60,
            //   bottom: '5%',
            //   height: config().fontSize*1.5,
            //   backgroundColor: '#041257',
            //   borderColor: 'transparent',
            //   fillerColor: '#059DFA',
            //   handleStyle: {
            //     fontSize:config().fontSize,
            //     color: 'transparent'
            //   },
            //   textStyle: config().textStyle
            // }
          ],
          series: [{
            name: 'patents',
            type: 'scatter',
            itemStyle:
              {
                normal: {
                  show: true,
                  color: function (params){
                    return color[params.data[1]-1];
                  }
                }
              },
            symbolSize: function (val) {
              return Math.sqrt(val[2])*config().textStyle.fontSize
            },
            data: data,
            animationDelay: function (idx) {
              return idx * 5;
            }
          }]
        };
        various_industries.setOption(option)
      },
      init_registration_type(){

        let _this = this;
        var dataX = [];
        var dataY1 = [];
        var dataY2 = [];
        var dataY3 = [];
        var dataY4 = [];
        var dataY5 = [];
        var dataY6 = [];
        _this.$http({
          url: _this.$http.adornUrl('/t04rgstrgsttypworkpersmemstruchg/list'),
          method: 'get',
          params: _this.$http.adornParams({
            'areaCode':'460000000000',
            'limit':5,
            'order':'date_stat'
          }, false)
        }).then(({data}) => {
          if (data.code == 0) {
            data.list.forEach(x=>{
              dataX.push(x.dateStat);
              dataY1.push(x.stateNumGrowth);
              dataY2.push(x.privateNumGrowth);
              dataY3.push(x.statOwenNumGrowth);
              dataY4.push(x.cityCollNum);
              dataY5.push(x.cityCollNumGrowth);
              dataY6.push(x.otherNumGrowth);
              _this.registration_type (dataX, dataY1,dataY2,dataY3,dataY4,dataY5,dataY6);
            })
          }
        })

      },
      registration_type (dataX, dataY1,dataY2,dataY3,dataY4,dataY5,dataY6){
        var registration_type = echarts.init(document.getElementById('registration_type'));
        var option = {
          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            formatter:function(params)
            {
              var relVal = params[0].name;
              for (var i = 0; i < params.length; i++) {
                relVal += '<div class="square" ><span style="background:'+params[i].color+'"></span>'+ params[i].seriesName + ' : ' + params[i].value+"%</div>";
              }
              return relVal;
            },
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['国有', '私营', '城镇私营','城镇个体','城镇集体','其他'],
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
            top: '3%',//图例离底部的距离
            right:"5%"
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
            data: dataX
          },
          series : [
            {
              name: '国有',
              type: 'bar',
              stack: '总量',
              barWidth:'40%',
              itemStyle: {
                color: '#4478fc'
              },
              data: dataY1
            },
            {
              name: '私营',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#62b8fd'
              },
              data: dataY2
            },
            {
              name: '城镇私营',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#7cedfe'
              },
              data: dataY3
            },
            {
              name: '城镇个体',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#842af0'
              },
              data: dataY4
            },
            {
              name: '城镇集体',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#20e19f'
              },
              data: dataY5
            },
            {
              name: '其他',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                color: '#f8e350'
              },
              data: dataY6
            }
          ]
        };
        registration_type.setOption(option)
      },
      init_changes_employment(){

        let _this = this;
        var dataX = [];
        var dataY = [];
        var dataS = [];
        var series = [];
        var color = ['#4478fc', '#03baff', '#20e19f', '#842af0', '#f8c300'];
        _this.$http({
          url: _this.$http.adornUrl('/t04indsworkpersmemstru5yrchg/list'),
          method: 'get',
          params: _this.$http.adornParams({
            'areaCode':'460000000000',
            'limit':5,
          }, false)
        }).then(({data}) => {
          if (data.code == 0) {
            dataS = data.result.year;
            dataY = data.result.lists;
            dataX = data.result.desc;
            for(var i = 0;i<dataY.length;i++){
              series.push({
                name: dataS[i],
                type: 'bar',
                barWidth: '15%',
                itemStyle: {
                  normal: {
                    color: color[i]
                  },
                },
                data: dataY[i]
              });
            }
          _this.changes_employment (dataX, series,dataS);
          }
        })

      },
      changes_employment (dataX, series,dataS){
        var color = ['#4478fc', '#03baff', '#20e19f', '#842af0', '#f8c300'];
        var changes_employment = echarts.init(document.getElementById('changes_employment'));
        var option = {

          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            formatter:function(params)
            {
              var relVal = params[0].name;
              for (var i = 0; i < params.length; i++) {
                relVal += '<div class="square" ><span style="background:'+params[i].color+'"></span>'+ params[i].seriesName + ' : ' + params[i].value+"%</div>";
              }
              return relVal;
            },
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '6%',
            right: '4%',
            bottom: '45%',
            top:'20%',
            containLabel: false
          },
          legend: {
            data: dataS,
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
            top: '3%',//图例离底部的距离
            right:"5%"
          },
          xAxis: {
            type: 'category',
            zlevel:10,
            data: dataX,
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
          // dataZoom: [// 这个dataZoom组件，若未设置xAxisIndex或yAxisIndex，则默认控制x轴。
          //   {
          //     show: true,
          //     type: 'slider',
          //     xAxisIndex: 0,
          //     start: 0,
          //     end: 60,
          //     bottom: '5%',
          //     height: config().fontSize*1.5,
          //     backgroundColor: '#041257',
          //     borderColor: 'transparent',
          //     fillerColor: '#059DFA',
          //     handleStyle: {
          //       fontSize:config().fontSize,
          //       color: 'transparent'
          //     },
          //     textStyle: config().textStyle
          //   }
          // ],
          yAxis: {
            type: 'value',
            // name:'%',
            // nameTextStyle:{
            //   color:config().textStyle.color,
            //   fontSize:config().textStyle.fontSize,
            //   padding:[0,30,0,0]
            // },
            axisLine: {
              show: false,
            },
            axisLabel:{
              textStyle: config().textStyle,
              formatter:'{value}%'
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
          series: series
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
       height: 24.6vh;
     }
    .bar-comtent2{
      height: 55.3vh;
    }
    .circle{
      font-size: 1vh;
    }
    .circle>span{
      display: inline-block;
      height: 1.4vh;
      width: 1.4vh;
      margin-right: 5px;
      vertical-align: middle;
      border-radius: 1vh;
    }
    .square{
      font-size: 1vh;
    }
    .square>span{
      display: inline-block;
      height: 1.3vh;
      width: 1.3vh;
      margin-right: 5px;
      vertical-align: middle;
      border-radius: 0.3vh;
    }
  }

</style>
