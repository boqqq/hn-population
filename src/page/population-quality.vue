<template>
  <div class="chart_main">
    <el-row :gutter="7">
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
          xName: []
        }
      },
      mounted () {

        this.init_chrn_br()
        this.init_cap_invst()
        this.init_gover_incom()
        this.init_recv_edu()
        this.init_labr_work()
        this.init_pub_cult()
        this.init_achie_situ()
        this.init_hlth_serv()
        this.init_egr_coef()
      },

      methods: {

        init_chrn_br(){
          let _this = this;
          var dataX = [];
          var dataY1 = [];
          var dataY2 = [];
          _this.$http({
            url: _this.$http.adornUrl('/t05chrnbrsitu/list'),
            method: 'get',
            params: _this.$http.adornParams({
              'areaCode':'460000000000'
            }, false)
          }).then(({data}) => {
            if (data.code == 0) {
              data.list.forEach(x=>{
                dataX.push(x.dateStat);
                dataY1.push(x.businessNum);
                dataY2.push(x.childDieNum);
                _this.chart_line('chart_line_1',dataX,dataY1, dataY2,'5岁以下儿童中、重度营养不良患病率','5岁以下儿童死亡率','#4478fc','#00d4c7');
              })
            }
          })

        },
        init_cap_invst(){
          let _this = this;
          var dataX = [];
          var dataY1 = [];
          var dataY2 = [];
          _this.$http({
            url: _this.$http.adornUrl('/t05perscapinvst/list'),
            method: 'get',
            params: _this.$http.adornParams({
              'areaCode':'460000000000'
            }, false)
          }).then(({data}) => {
            if (data.code == 0) {
              data.list.forEach(x=>{
                dataX.push(x.dateStat);
                dataY1.push(x.capInvstRadio);
                dataY2.push(x.ytyGrowth);
                _this.chart_line('chart_line_2',dataX,dataY1, dataY2,'文教卫科支出占地方一般公共预算支出的比重','增长率','#4478fc','#f0396b');
              })
            }
          })

        },
        chart_line(id,dataX,dataY1, dataY2,name1,name2,color1,color2){
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
              left:10,
              top:0,
              icon: 'stack',
              itemWidth:10,
              itemHeight:10,
              textStyle:{
                color:'#1bb4f6'
              },
              data:[name1,name2]
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
                data :dataX
              }
            ],
            yAxis : [
              {
                type : 'value',
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
                name:name1,
                smooth:true,
                type:'line',
                stack: '总量',
                symbol:'circle',
                symbolSize: 8,
                itemStyle: {
                  normal: {
                    color:color1,
                    lineStyle: {
                      color: color1,
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
                data:dataY1
              },
              {
                name:name2,
                smooth:true,
                type:'line',
                stack: '总量',
                symbol:'circle',
                symbolSize: 8,

                itemStyle: {
                  normal: {
                    color:color2,
                    lineStyle: {
                      color: color2,
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
                data:dataY2
              },
            ]
          };
          chart_line.setOption(option);
          window.onresize = chart_line.resize;
        },

        init_gover_incom(){
          let _this = this;
          var dataX = [];
          var dataY1 = [];
          var dataY2 = [];
          _this.$http({
            url: _this.$http.adornUrl('/t05rsdntgoverincom/list'),
            method: 'get',
            params: _this.$http.adornParams({
              'areaCode':'460000000000'
            }, false)
          }).then(({data}) => {
            if (data.code == 0) {
              data.list.forEach(x=>{
                dataX.push(x.dateStat);
                dataY1.push(x.goverIncom1);
                dataY2.push(x.ytyGrowth);
                _this.chart_bar('chart_bar_1',dataX,dataY1,dataY2,'城乡居民人均可支配收入','增长率','#42c7f1','#4478fc','#f8c300');
              })
            }
          })

        },
        init_recv_edu(){
          let _this = this;
          var dataX = [];
          var dataY1 = [];
          var dataY2 = [];
          _this.$http({
            url: _this.$http.adornUrl('/t05popurecvedusitu/list'),
            method: 'get',
            params: _this.$http.adornParams({
              'areaCode':'460000000000'
            }, false)
          }).then(({data}) => {
            if (data.code == 0) {
              data.list.forEach(x=>{
                dataX.push(x.dateStat);
                dataY1.push(x.educatedYear);
                dataY2.push(x.illRadio);
                _this.chart_bar('chart_bar_2',dataX,dataY1,dataY2,'6岁及以上人口人均受教育年限','文盲率','#42c7f1','#4478fc','#f8c300');
              })
            }
          })

        },
        init_labr_work(){
          let _this = this;
          var dataX = [];
          var dataY1 = [];
          var dataY2 = [];
          _this.$http({
            url: _this.$http.adornUrl('/t05populabrwork/list'),
            method: 'get',
            params: _this.$http.adornParams({
              'areaCode':'460000000000'
            }, false)
          }).then(({data}) => {
            if (data.code == 0) {
              data.list.forEach(x=>{
                dataX.push(x.dateStat);
                dataY1.push(x.labrWorkRadio);
                dataY2.push(x.ytyGrowth);
                _this.chart_bar('chart_bar_3',dataX,dataY1,dataY2,'劳动生产率','增长率','#20e19f','#20e19f','#03baff');
              })
            }
          })

        },
        chart_bar(id,dataX,dataY1,dataY2,name1,name2,color1,color2,color3){
          var chart_bar=echarts.init(document.getElementById(id));
          var option = {
            tooltip : {
              show: true,
              trigger: 'item'
            },
            legend: {
              textStyle:{
                color:'#1bb4f6',
              },
              left:10,
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
              data: dataX
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
                data:dataY1,
                type: 'bar',
                name: name1,
                itemStyle: {
                  normal: {
                    barBorderRadius: 0,//圆角
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1, [{
                        offset: 0,
                        color: color1
                      },
                        // {
                        //   offset: 1,
                        //   color: color2
                        // }
                      ])
                  }
                }
              },
              {
                data: dataY2,
                type: 'line',
                name: name2,
                color:color3
              }
            ]
          };

          chart_bar.setOption(option);
          window.onresize = chart_bar.resize;
        },

        init_hlth_serv(){
          let _this = this;
          var dataX = [];
          var dataY1 = [];
          var dataY2 = [];
          _this.$http({
            url: _this.$http.adornUrl('/t05mdclhlthserv/list'),
            method: 'get',
            params: _this.$http.adornParams({
              'areaCode':'460000000000'
            }, false)
          }).then(({data}) => {
            if (data.code == 0) {
              data.list.forEach(x=>{
                dataX.push(x.dateStat);
                dataY1.push(x.bedNum);
                dataY2.push(x.ytyGrowth);
                _this.chart_pictorialBar('chart_bar_4',dataX,dataY1,dataY2,'每千人口医院床位数','增长率','#20e19f','#20e19f','#03baff');
              })
            }
          })

        },
        chart_pictorialBar(id,dataX,dataY1,dataY2,name1,name2,color1,color2,color3){
          var chart_bar=echarts.init(document.getElementById(id));
          var option = {
            tooltip : {
              show: true,
              trigger: 'item'
            },
            legend: {
              textStyle:{
                color:'#1bb4f6',
              },
              left:10,
              icon: 'circle'
            },
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
              data: dataX
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
                data:dataY1,
                type: 'pictorialBar',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                name: name1,
                itemStyle: {
                  normal: {
                    barBorderRadius: 0,//圆角
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1, [{
                        offset: 0,
                        color: color1
                      },
                        // {
                        //   offset: 1,
                        //   color: color2
                        // }
                      ])
                  }
                }
              },
              {
                data: dataY2,
                type: 'line',
                name: name2,
                color:color3
              }
            ]
          };

          chart_bar.setOption(option);
          window.onresize = chart_bar.resize;
        },

        init_pub_cult(){
          let _this = this;
          var dataX = [];
          var dataY = [];
          _this.$http({
            url: _this.$http.adornUrl('/t05basicpubcult/list'),
            method: 'get',
            params: _this.$http.adornParams({
              'areaCode':'460000000000'
            }, false)
          }).then(({data}) => {
            if (data.code == 0) {
              data.list.forEach(x=>{
                dataX.push(x.dateStat);
                dataY.push(x.pubCultNum);
                _this.chart_lgLine('chart_lgLine_1',dataX,dataY,'人均拥有公共图书馆藏量','#1986ff','#dd0042');
              })
            }
          })
        },
        init_achie_situ(){
          let _this = this;
          var dataX = [];
          var dataY = [];
          _this.$http({
            url: _this.$http.adornUrl('/t05reseaachiesitu/list'),
            method: 'get',
            params: _this.$http.adornParams({
              'areaCode':'460000000000'
            }, false)
          }).then(({data}) => {
            if (data.code == 0) {
              data.list.forEach(x=>{
                dataX.push(x.dateStat);
                dataY.push(x.ytyGrowth);
                _this.chart_lgLine('chart_lgLine_2',dataX,dataY,'每万人专利数量','#0e55b7', '#0fd9c7');
              })
            }
          })
        },
        chart_lgLine(id,dataX,dataY,name1,color1,color2){
          var chart_lgLine=echarts.init(document.getElementById(id));
          var option = {
            legend:{
              show:true,
              left:10,
              textStyle:{
                color:'#1bb4f6'
              },
            },
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
              data:dataX
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
              name:name1,
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
                    color: 'rgba(16,97,204,.2)'
                  }, {
                    offset: 1,
                    color:'rgba(16,97,204,.2)'
                  }], false),
                  shadowColor:  'rgba(17,235,210,.2)',
                  shadowBlur: 10
                }
              },
              itemStyle: {
                normal: {

                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: color1
                  }, {
                    offset: 1,
                    color: color2
                  }])
                },
                emphasis: {
                  color: 'rgb(0,196,132)',
                  borderColor: 'rgba(0,196,132,0.2)',
                  extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                  borderWidth: 10,

                },
              },
              data:dataY
            }, ]
          };
          chart_lgLine.setOption(option);
          window.onresize = chart_lgLine.resize;
        },

        init_egr_coef(){
          let _this = this;
          var dataX = [];
          var dataY1 = [];
          var dataY2 = [];
          this.xName = []
          _this.$http({
            url: _this.$http.adornUrl('/t05familyegrcoef/list'),
            method: 'get',
            params: _this.$http.adornParams({
              'areaCode':'460000000000'
            }, false)
          }).then(({data}) => {
            if (data.code == 0) {
              data.list.forEach(x=>{
                dataX.push(x.dateStat);
                this.xName.push({'name': x.dateStat})
                dataY1.push(x.counEgrCoef);
                dataY2.push(x.cityEgrCoef);
                _this.chart_radar('chart_radar_1',dataX,dataY1,dataY2,'城镇居民家庭恩格尔系数','农村居民家庭恩格尔系数');
              })
            }
          })
        },
        chart_radar(id,dataX,dataY1,dataY2,name1,name2){
          var chart_radar=echarts.init(document.getElementById(id));
          var option = {
            tooltip: {
              show: true,
              trigger: "item",
              right:20,
            },
            color: ['#3D91F7', '#61BE67'],
            legend: {
              show: true,
              icon: "circle",
              left:10,
              top:0,
              itemWidth: 14,
              itemHeight: 14,
              itemGap: 21,
              orient: "horizontal",
              data: [name1, name2],
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
              indicator: this.xName,

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
                value: dataY1,
                name:name1,
                areaStyle: {
                  normal: {
                    color: 'rgba(54,107,175,.3)'
                  },
                },


              },
                {
                  value:dataY2,
                  name: name2,
                  areaStyle: {
                    normal: {
                      color: 'rgba(75,134,89,.3)'
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
