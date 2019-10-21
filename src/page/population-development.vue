<template>
  <div id="populationDevelopment">
    <div class = "chart_main">
      <el-row>
        <el-col :span="7">
          <el-row>
            <el-col :span="24">
              <div class = "dev_left">
                <div class="pop_type_item">
                  <div class="pop_type_icon fa_bg_1"><i class="fa fa-user fa-fw"></i></div>
                  <h3 class="pop_type_title">人均地区GDP</h3>
                  <el-row>
                    <el-col :span="10">
                      <p class="pop_type_val">65000<span class="pop_type_unit">元</span></p>
                    </el-col>
                    <el-col :span="14">
                      <span class="pop_type_last">同比</span>
                      <span class="pop_type_prop up"><i class="arr_icon icon-upArr"></i>5.05%</span>
                    </el-col>
                  </el-row>
                  <div class="pop_type_frIcon icon-dec-line"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "dev_left">
                <div class="pop_type_item">
                  <div class="pop_type_icon fa_bg_2"><i class="fa fa-user fa-fw"></i></div>
                  <h3 class="pop_type_title">恩格尔系数</h3>
                  <el-row>
                    <el-col :span="10">
                      <p class="pop_type_val">4.5<span class="pop_type_unit"></span></p>
                    </el-col>
                    <el-col :span="14">
                      <span class="pop_type_last">同比</span>
                      <span class="pop_type_prop up"><i class="arr_icon icon-upArr"></i>5.05%</span>
                    </el-col>
                  </el-row>
                  <div class="pop_type_frIcon icon-dec-line"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "dev_left">
                <div class="pop_type_item">
                  <div class="pop_type_icon fa_bg_3"><i class="fa fa-user fa-fw"></i></div>
                  <h3 class="pop_type_title">人口自然增长率</h3>
                  <el-row>
                    <el-col :span="10">
                      <p class="pop_type_val">3<span class="pop_type_unit">%</span></p>
                    </el-col>
                    <el-col :span="14">
                      <span class="pop_type_last">同比</span>
                      <span class="pop_type_prop dn"><i class="arr_icon icon-dnArr"></i>0.35%</span>
                    </el-col>
                  </el-row>
                  <div class="pop_type_frIcon icon-dec-line"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "dev_left">
                <div class="pop_type_item">
                  <div class="pop_type_icon fa_bg_4"><i class="fa fa-user fa-fw"></i></div>
                  <h3 class="pop_type_title">老年系数</h3>
                  <el-row>
                    <el-col :span="10">
                      <p class="pop_type_val">17<span class="pop_type_unit">%</span></p>
                    </el-col>
                    <el-col :span="14">
                      <span class="pop_type_last">同比</span>
                      <span class="pop_type_prop up"><i class="arr_icon icon-upArr"></i>0.55%</span>
                    </el-col>
                  </el-row>
                  <div class="pop_type_frIcon icon-dec-line"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "dev_left">
                <div class="pop_type_item">
                  <div class="pop_type_icon fa_bg_5"><i class="fa fa-user fa-fw"></i></div>
                  <h3 class="pop_type_title">老少比</h3>
                  <el-row>
                    <el-col :span="10">
                      <p class="pop_type_val">77<span class="pop_type_unit">%</span></p>
                    </el-col>
                    <el-col :span="14">
                      <span class="pop_type_last">同比</span>
                      <span class="pop_type_prop dn"><i class="arr_icon icon-dnArr"></i>0.15%</span>
                    </el-col>
                  </el-row>
                  <div class="pop_type_frIcon icon-dec-line"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class = "dev_left">
                <div class="pop_type_item">
                  <div class="pop_type_icon fa_bg_6"><i class="fa fa-user fa-fw"></i></div>
                  <h3 class="pop_type_title">总抚养比</h3>
                  <el-row>
                    <el-col :span="10">
                      <p class="pop_type_val">27<span class="pop_type_unit">%</span></p>
                    </el-col>
                    <el-col :span="14">
                      <span class="pop_type_last">同比</span>
                      <span class="pop_type_prop up"><i class="arr_icon icon-upArr"></i>0.15%</span>
                    </el-col>
                  </el-row>
                  <div class="pop_type_frIcon icon-dec-line"></div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="17">
          <el-row>
            <el-col :span="24">
              <el-row>
                <el-col :span="16">
                  <div class = "dev_top">
                    <div class="pop_col_tit">
                      <i class="tit_icon icon-tit-line"></i>
                      <h3>人均受教育年限与人均GDP关系演变</h3>
                    </div>
                    <div id = "top_chart1" class = "top_chart"></div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class = "dev_top" style="margin-right: 1vh;">
                    <div class="pop_col_tit">
                      <i class="tit_icon icon-tit-line"></i>
                      <h3>空气质量排名（2019年9月）</h3>
                    </div>
                    <div class = "top_chart">
                      <div class="tltleBox" style="z-index: 9999;margin-top: 1vh;"><span>地区</span><span>空气质量优良率</span><span>排名</span></div>
                      <div  style="height: 51vh;overflow: hidden; position:relative">
                        <div>
                          <div class="textBox" v-for="(item,index) in tableData" :class="{'active':index%2 != 1}" :key="index" ><span>{{item.region}}</span><span>{{item.rate}}</span><span>{{index+1}}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <el-row>
                <el-col :span="8">
                  <div class = "dev_bottom">
                    <div class="pop_col_tit">
                      <i class="tit_icon icon-tit-line"></i>
                      <h3>城乡发展差异</h3>
                    </div>
                    <div class = "bottom_chart">
                      <div class = "dev_diff">
                        <div class = "diff1"></div>
                        <div class = "diff2">城市</div>
                        <div class = "diff3">农村</div>
                      </div>
                      <div class = "dev_diff">
                        <div class = "diff1"><span>{{tableData2[0].name}}</span></div>
                        <div class = "diff2"><span>{{tableData2[0].city}}</span><span>m²</span></div>
                        <div class = "diff3"><span>{{tableData2[0].countryside}}</span><span>m²</span></div>
                      </div>
                      <div class = "dev_diff">
                        <div class = "diff1"><span>{{tableData2[1].name}}</span></div>
                        <div class = "diff2"><span>{{tableData2[1].city}}</span><span>%</span></div>
                        <div class = "diff3"><span>{{tableData2[1].countryside}}</span><span>%</span></div>
                      </div>
                      <div class = "dev_diff">
                        <div class = "diff1"><span>{{tableData2[2].name}}</span></div>
                        <div class = "diff2"><span>{{tableData2[2].city}}</span></div>
                        <div class = "diff3"><span>{{tableData2[2].countryside}}</span></div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class = "dev_bottom">
                    <div class="pop_col_tit">
                      <i class="tit_icon icon-tit-line"></i>
                      <h3>人与资源环境</h3>
                    </div>
                    <el-row>
                      <el-col :span="5">
                        <div class = "dev_pe">
                          <p>人口密度</p>
                          <p><span>{{tableData3[0].value}}</span><span>人/m²</span></p>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class = "dev_pe">
                          <p>人均公园绿地面积</p>
                          <p><span>{{tableData3[1].value}}</span><span>m²/人</span></p>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class = "dev_pe">
                          <p>人均日生活用水量</p>
                          <p><span>{{tableData3[2].value}}</span><span>吨/人</span></p>
                        </div>
                      </el-col>
                      <el-col :span="7">
                        <div class = "dev_pe">
                          <p>人均生活能源消耗量</p>
                          <p><span>{{tableData3[3].value}}</span><span>千克标准煤</span></p>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class = "dev_bottom" style="margin-right: 1vh;">
                    <div class="pop_col_tit">
                      <i class="tit_icon icon-tit-line"></i>
                      <h3>人与社会保障</h3>
                    </div>
                    <dev>
                      <div class = "dev_gua" v-for="(item,index) in tableData4" :key="index">
                        <p><span>{{item.name}}</span></p>
                        <p>
                          <span>{{item.value}}</span>
                          <span>{{item.unit}}</span>
                        </p>
                      </div>
                    </dev>
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
    export default {
      name: "population-development",
      data(){
        return{
          tableData:[
            {region:'海口市',rate:'90%',num:1},
            {region:'三亚市',rate:'89%',num:2},
            {region:'三沙市',rate:'87%',num:3},
            {region:'儋州市',rate:'86%',num:4},
            {region:'五指山市',rate:'85%',num:5},
            {region:'文昌市',rate:'85%',num:6},
            {region:'琼海市',rate:'84%',num:7},
            {region:'万宁市',rate:'83%',num:8},
            {region:'东方市',rate:'82%',num:9},
            {region:'定安县',rate:'79%',num:10},
            {region:'屯昌县',rate:'78%',num:11},
            {region:'澄迈县',rate:'77%',num:12},
            {region:'临高县',rate:'76%',num:13},
            {region:'白沙黎族自治县',rate:'75%',num:14},
            {region:'昌江黎族自治县',rate:'74%',num:15},
            {region:'乐东黎族自治县',rate:'73%',num:16},
            {region:'陵水黎族自治县',rate:'73%',num:17},
            {region:'保亭黎族自治县',rate:'72%',num:18},
            {region:'琼中黎族自治县',rate:'71%',num:19}
          ],
          tableData2:[
            {name:'人均住房面积',city:30,countryside:50},
            {name:'固定资产投资完成率',city:80,countryside:75},
            {name:'恩格尔系数',city:4.5,countryside:5.5}
          ],
          tableData3:[
            {name:'人口密度',value:500},
            {name:'人均公园绿地面积',value:20},
            {name:'人均日生活用水量',value:10},
            {name:'人均生活能源消耗量',value:666}
          ],
          tableData4:[
            {name:'每万人口拥有医生数',value:300,unit:'人'},
            {name:'每万人口拥有床位数',value:30,unit:'张'},
            {name:'新农合参保率',value:86,unit:'%'},
            {name:'人均卫生总费用',value:5000,unit:'元/人'},
            {name:'人均受教育年限',value:16.9,unit:'年'}
          ],
          pop_month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          pop_hou_bar:[190,118,172,176,223,84,111,90,94,241,100,110],
          pop_hou_line:[164,218,72,76,180,184,86,190,94,222,100,110],
          pop_fix_bar:[190,118,172,176,223,84,111,90,94,241,100,110],
          pop_fix_line:[164,218,72,76,180,184,86,190,94,222,100,110],
          pop_flow_bar:[190,118,172,176,223,84,111,90,94,241,100,110],
          pop_flow_line:[164,218,72,76,180,184,86,190,94,222,100,110],
          nameB: ['户籍人口','常住人口','流动人口'],
          nameL: '同比增长率'
        }
      },
      components: {
      },

      mounted () {

        this.top_chart1()
      },
      methods: {
        top_chart1(){
          var tData = ['1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
            '2010','2011','2012','2013','2014','2015','2016','2017','2018']


          var itemStyle = {
            normal: {
              opacity: 0.65,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          };
          var opt = [];
          for (var i = 0; i <= tData.length; i++) {
            var dat = []
            for (var j = 0; j < 15; j++) {
              var d = [];
              d.push(Math.random()*10*2.5,Math.random()*10*i,Math.random()*10,'海口')
              dat.push(d)
            }
            opt.push({
              title: {
                text: "大小：执行时长",
                textStyle: {
                  color: "#707aa0",
                  fontStyle: "normal",
                  fontSize: '14px',
                  fontFamily: "微软雅黑",
                },
                right: "4%"
              },
              series: {
                //name: data.timeline[n],
                type: 'scatter',
                data: dat,
                //itemStyle: itemStyle,
                symbolSize: 20
              }
            });
          }
          var colorsJob = ["#ffca67", "#ff60a2", "#bf64ff", "#6c65fb", "#93dffc"];
          var top_chart = echarts.init(document.getElementById('top_chart1'));
          var option = {
            baseOption: {
              timeline: {
                axisType: 'category',
                autoPlay: true,
                orient: 'vertical',
                playInterval: 3000,
                symbol: 'circle',
                inverse: false,
                rewind: true,
                symbolSize: config().fontSize,
                checkpointStyle: {
                  symbol: 'circle',
                  symbolSize: config().fontSize*1.5,
                  color: '#aed2ff',
                  borderColor: "#aed2ff"
                },
                right: "3%",
                width: '5%',
                height: '90%',
                lineStyle: {
                  color: "#454e72"
                },
                label: {
                  normal: {
                    textStyle: config().textStyle
                  },
                  position: 15,
                  // formatter: function(value, index) {
                  //   return value.replace(/-/g, ".");
                  // }
                },
                data: tData
              },
              calculable: true,
              grid: {
                left: '1.5%',
                right: '15%',
                bottom: '5%',
                containLabel: true
              },
              tooltip: {
                //backgroundColor:'rgba(255,202,103,0.4)',
                backgroundColor: 'rgba(7,14,28,0.9)',
                textStyle: config().textStyle,
                formatter: function(value, index) {
                  //判断是否为数组，若是数组则鼠标滑过的是散点图 若不是则不显示tooltip
                  if(Object.prototype.toString.call(value.data)=='[object Array]'){
                    var tooltip = '';
                    tooltip = "<div style='width:185px;height:90px;border-radius:8px;'>" + "<span style='display:block;padding:16px 10px 0 10px;font-size:14px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>" + value.data[3] + " " + value.data[4] + "运行情况" + "</span>" + "<span style='display:block;padding:2px 10px 0 10px;font-size:12px;font-weight:600;;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:" + value.color + "'>" + "Job数量:" + value.data[2] + "个" + "</span>" + "<span style='display:block;padding:0px 10px 0 10px;font-size:12px;font-weight:600;;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#707aa0'>" + "执行时长：" + value.data[1] + "分钟" + "</span>" + "</div>";
                    return tooltip;
                  }else{
                    return;
                  }

                }
              },
              xAxis: [{
                boundaryGap: true,
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  textStyle: config().textStyle,
                  margin: 15
                },
                splitLine: {
                  lineStyle: {
                    color: "#1d203b"
                  }
                }
              }],
              yAxis: [{
                name: '单位（分钟）',
                nameGap:20,
                nameTextStyle: config().textStyle,
                type: 'value',

                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  textStyle: config().textStyle,
                  margin: 20
                },
                splitLine: {
                  lineStyle: {
                    color: "#1d203b"
                  }
                }
              }],

              // visualMap: [{
              //   show: false,
              //   type: 'piecewise',
              //   dimension: 3,
              //   orient: 'horizontal',
              //   right: "17%",
              //   top: 0,
              //   categories: Job_scatter_data.namelist,
              //   calculable: true,
              //   //precision: 0.1,
              //   textGap: 2,
              //   itemGap: 16,
              //   textStyle: {
              //     color: [],
              //     fontSize: 14
              //   },
              //   inRange: {
              //     color: colorsJob,
              //     symbol: 'circle'
              //   },
              //   outOfRange: {
              //     color: '#555'
              //   }
              // }],
              // animation: true,
              // animationDurationUpdate: 1000,
              // animationEasingUpdate: 'quinticInOut',
              series: [{
                type: 'scatter',
                itemStyle: itemStyle,
                data:[
                  [22.24, 13, 90, "default", "2017-03-16"],
                  [10.7, 6, 3, "a", "2017-03-16"],
                  [10, 20, 1, "a", "2017-03-16"],
                  [18.5, 0, 1, "a", "2017-03-16"],
                  [11.0, 8, 19, "default", "2017-03-16"],
                  [6.6, 2, 87, "default", "2017-03-16"],
                  [18.9, 3, 90, "default", "2017-03-16"],
                  [23.8, 2, 97, "default", "2017-03-16"],
                  [12.8, 20, 77, "default", "2017-03-16"],
                  [9.9, 2, 5, "adminyarn_default", "2017-03-16"],
                  [7.9, 2, 10, "adminyarn_default", "2017-03-16"],
                  [6.9, 0, 5, "adminyarn", "2017-03-16"],
                ]
              }],
            },
            options: opt
          };
          top_chart.setOption(option)
          window.onresize = top_chart.resize;
        },
      }
    }
</script>

<style  lang="scss" scoped>
  #populationDevelopment{
    .dev_left{
      height: 14.3vh;
      margin-top: 1vh;
      margin-left: 1vh;
      background-image:url('../../static/img/ind_left.png');
      background-repeat: no-repeat;
      background-size: 100% 14.3vh;
    }
    .dev_top{
      height: 60.3vh;
      margin-top: 1vh;
      margin-left: 1vh;
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
      border-top: 1px #fff solid;
      border-bottom: 1px #fff solid;
    }
    .tltleBox,.textBox{
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0.51vh 0;
      font-size: 1.5vh;
      line-height: 1.6vh;
      color: #0475C3;
      transition: all 0.5s;
      overflow: hidden;
      span{
        width: 30%;
        text-align: center;
      }
      span:nth-child(1){
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

    .dev_bottom{
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
    .dev_diff{
      width: 100%;
      height: 6.5vh;
      text-align: center;
      color: #fff;
      font-size: 1.5vh;
      div{
        width: 32%;
        height: 100%;
        float: left;
        line-height: 6.5vh;
      }
      .diff1,.diff2{
        border-right: 1px #fff solid;
      }
      div:nth-child(1){
        width: 35%;
        height: 100%;
        text-align: left;
      }
      .diff1{
        span{
          margin-left: 30%;
        }
      }
      div:nth-child(2),div:nth-child(3){
        span:nth-child(1){
          font-size: 3vh;
        }
        span:nth-child(2){
          margin-left: 0.8vh;
        }
      }
    }
    .dev_diff:nth-child(1){
      height: 4vh;
      border-bottom: 1px #fff solid;
      div{
        line-height: 4vh;
      }
    }
    .dev_pe{
      width: 100%;
      height: 25.6vh;
      text-align: center;
      color: #fff;
      font-size: 1.5vh;
      p:nth-child(1){
        height: 10vh;
        line-height: 10vh;
      }
      p:nth-child(2){
        height: 15vh;
        line-height: 13vh;
        span:nth-child(1){
           font-size: 4vh;
         }
        span:nth-child(2){
          margin-left: 1vh;
        }
      }
    }
    .dev_gua{
      height: 4vh;
      line-height: 4vh;
      color: #fff;
      font-size: 1.5vh;
      text-align: left;
      p{
        float: left;
      }
      p:nth-child(1){
        width: 50%;
        span{
          margin-left: 40%;
        }
      }
      p:nth-child(2){
        width: 50%;
       span:nth-child(1){
         margin-left: 30%;
         font-size: 3vh;
       }
        span:nth-child(2){
          margin-left: 0.5vh;
        }
      }
    }
    .dev_gua:nth-child(1){
      margin-top: 1.5vh;
    }

    .pop_type_item {
      padding: 3.5vh 20vh 0 13vh;
      position: relative;
      height: 10vh;
      .pop_type_icon {
        position: absolute;
        z-index: 1;
        top:4.7vh;
        left: 4.7vh;
        width: 4.7vh;
        height: 4.7vh;
        border-radius: 4.7vh;
        line-height: 4.7vh;
        text-align: center;
        .fa { color: #fff;}
      }
      .fa_bg_1 { background: linear-gradient(#8343ff, #7f26ff)}
      .fa_bg_2 { background: linear-gradient(#facb17, #de8b13)}
      .fa_bg_3 { background: linear-gradient(#25fa91, #08d28c)}
      .fa_bg_4 { background: linear-gradient(#dd5246, #cf281c)}
      .fa_bg_5 { background: linear-gradient(#4accfd, #02aeee)}
      .fa_bg_6 { background: linear-gradient(#842af0, #9350e9)}

      .pop_type_title {
        font-size: 1.4vh;
        color: #a1bcfd;
        margin:.5vh 0;
        white-space: nowrap;
        overflow: hidden;
      }
      .pop_type_val {
        font-size: 2.8vh;
        line-height: 5.5vh;
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        .pop_type_unit {
          font-size: 1.8vh;
          color: #fff;
        }
      }
      .pop_type_last {
        font-size: 1.4vh;
        color: #a1bcfd;
        white-space: nowrap;
        overflow: hidden;
      }
      .pop_type_prop {
        font-size: 1.4vh;
        white-space: nowrap;
        overflow: hidden;
        .arr_icon {
          width: 3.6vh;
          height: 3.6vh;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .pop_type_frIcon {
        position: absolute;
        top:4.7vh;
        right: 5vh;
        width: 14vh;
        height: 5vh;
      }
      .up {color: #0ff1a4;}
      .dn {color: #ff584b;}
    }
    .pop_chart_fr { height: 22vh}
    .icon-dnArr { background: url("../../static/img/icon-dnArr.svg") no-repeat 100%;}
    .icon-upArr { background: url("../../static/img/icon-upArr.svg") no-repeat 100%;}
    .icon-dec-line { background: url("../../static/img/icon-dec-line.svg") no-repeat; background-size: 100%;}
  }
</style>
