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
                      <p class="pop_type_val">{{leftIndex.gdp}}<span class="pop_type_unit">元</span></p>
                    </el-col>
                    <el-col :span="14">
                      <span class="pop_type_last">同比</span>
                      <span class="pop_type_prop" :class = "leftIndex.gdp_yty_growth >= 0 ?'up':'dn'">
                        <i class="arr_icon" :class = "leftIndex.gdp_yty_growth >= 0 ?'icon-upArr':'icon-dnArr'"></i>{{leftIndex.gdp_yty_growth}}%
                      </span>
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
                      <p class="pop_type_val">{{leftIndex.egr_coef}}<span class="pop_type_unit"></span></p>
                    </el-col>
                    <el-col :span="14">
                      <span class="pop_type_last">同比</span>
                      <span class="pop_type_prop" :class = "leftIndex.egr_yty_growth >= 0 ?'up':'dn'">
                        <i class="arr_icon" :class = "leftIndex.egr_yty_growth >= 0 ?'icon-upArr':'icon-dnArr'"></i>{{leftIndex.egr_yty_growth}}%
                      </span>
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
                      <p class="pop_type_val">{{leftIndex.yty_growth_01}}<span class="pop_type_unit">%</span></p>
                    </el-col>
                    <el-col :span="14">
                      <span class="pop_type_last">同比</span>
                      <span class="pop_type_prop" :class = "leftIndex.yty_growth_02 >= 0 ?'up':'dn'">
                        <i class="arr_icon" :class = "leftIndex.yty_growth_02 >= 0 ?'icon-upArr':'icon-dnArr'"></i>{{leftIndex.yty_growth_02}}%
                      </span>
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
                      <p class="pop_type_val">{{leftIndex.age_yty_growth1}}<span class="pop_type_unit">%</span></p>
                    </el-col>
                    <el-col :span="14">
                      <span class="pop_type_last">同比</span>
                      <span class="pop_type_prop" :class = "leftIndex.age_yty_growth2 >= 0 ?'up':'dn'">
                        <i class="arr_icon" :class = "leftIndex.age_yty_growth2 >= 0 ?'icon-upArr':'icon-dnArr'"></i>{{leftIndex.age_yty_growth2}}%
                      </span>
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
                      <p class="pop_type_val">{{leftIndex.old_yty_growth1}}<span class="pop_type_unit">%</span></p>
                    </el-col>
                    <el-col :span="14">
                      <span class="pop_type_last">同比</span>
                      <span class="pop_type_prop" :class = "leftIndex.old_yty_growth2 >0 ?'up':'dn'">
                        <i class="arr_icon" :class = "leftIndex.old_yty_growth2 > 0 ?'icon-upArr':'icon-dnArr'"></i>{{leftIndex.old_yty_growth2}}%
                      </span>
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
                      <p class="pop_type_val">{{leftIndex.totl_yty_growth1}}<span class="pop_type_unit">%</span></p>
                    </el-col>
                    <el-col :span="14">
                      <span class="pop_type_last">同比</span>
                      <span class="pop_type_prop" :class = "leftIndex.gdp_yty_growth2 >= 0 ?'up':'dn'">
                        <i class="arr_icon" :class = "leftIndex.gdp_yty_growth2 >= 0 ?'icon-upArr':'icon-dnArr'"></i>{{leftIndex.totl_yty_growth2}}%
                      </span>
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
                      <div class="tltleBox" style="z-index: 9999;margin-top: 1vh;"><span>地区</span><span>空气质量优良天数</span><span>排名</span></div>
                      <div  style="height: 51vh;overflow: hidden; position:relative">
                        <div>
                          <div class="textBox" v-for="(item,index) in tableData" :class="{'active':index%2 != 1}" :key="index" ><span>{{item.areaName}}</span><span>{{item.practitionerNum}}天</span><span>{{item.qltyFstNm}}</span></div>
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
                        <div class = "diff1"><span>人均住房面积</span></div>
                        <div class = "diff2"><span>{{bottomIndex1.acreage2}}</span><span>m²</span></div>
                        <div class = "diff3"><span>{{bottomIndex1.acreage1}}</span><span>m²</span></div>
                      </div>
                      <div class = "dev_diff">
                        <div class = "diff1"><span>固定资产投资完成率</span></div>
                        <div class = "diff2"><span>{{80}}</span><span>%</span></div>
                        <div class = "diff3"><span>{{75}}</span><span>%</span></div>
                      </div>
                      <div class = "dev_diff">
                        <div class = "diff1"><span>恩格尔系数</span></div>
                        <div class = "diff2"><span>{{bottomIndex1.coef2}}</span></div>
                        <div class = "diff3"><span>{{bottomIndex1.coef1}}</span></div>
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

                    <el-row style="margin: 0 2vh;margin-top: 2vh">
                      <el-col :span="5">
                        <div class = "dev_pe">
                          <div><div class = "rkmd"></div><div>人口密度</div></div>
                          <div class = "rkmd_span"><span style="margin-left: -4vh">{{bottomIndex2.watr_qty}}</span><span>人/m²</span></div>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class = "dev_pe">
                          <div><div class = "rjgy"></div><div>人均公园绿地面积</div></div>
                          <div class = "rjgy_span"><span>{{bottomIndex2.consm_qty}}</span><span>m²/人</span></div>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class = "dev_pe">
                          <div><div class = "rjsl"></div><div>人均日生活用水量</div></div>
                          <div class = "rjsl_span"><span>{{bottomIndex2.popu_denst}}</span><span>吨/人</span></div>
                        </div>
                      </el-col>
                      <el-col :span="7">
                        <div class = "dev_pe">
                          <div><div class = "rjny"></div><div>人均生活能源消耗量</div></div>
                          <div class = "rjny_span"><span>{{bottomIndex2.green_area}}</span><span>千克标准煤</span></div>
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
                    <div class = "gua_tab">
                      <div class = "dev_gua">
                        <p><span>每万人口拥有医生数</span></p>
                        <p>
                          <span>{{bottomIndex3.doct_cnt_num}}</span>
                          <span>人</span>
                        </p>
                      </div>
                      <div class = "dev_gua">
                        <p><span>每万人口拥有床位数</span></p>
                        <p>
                          <span>{{bottomIndex3.bed_digit_num}}</span>
                          <span>张</span>
                        </p>
                      </div>
                      <div class = "dev_gua">
                        <p><span>新农合参保率</span></p>
                        <p>
                          <span>{{bottomIndex3.insud_rate_num}}</span>
                          <span>%</span>
                        </p>
                      </div>
                      <div class = "dev_gua">
                        <p><span>人均卫生总费用</span></p>
                        <p>
                          <span>{{bottomIndex3.total_fee}}</span>
                          <span>元/人</span>
                        </p>
                      </div>
                      <div class = "dev_gua">
                        <p><span>人均受教育年限</span></p>
                        <p>
                          <span>{{bottomIndex3.year_num}}</span>
                          <span>年</span>
                        </p>
                      </div>
                    </div>
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
            {"areaCode":"469001000000","areaName":"五指山市","dateStat":"201907","qltyFstNm":"1","unit":"名次"}
          ],
          tableData3:[
            {name:'人口密度',value:500},
            {name:'人均公园绿地面积',value:20},
            {name:'人均日生活用水量',value:10},
            {name:'人均生活能源消耗量',value:666}
          ],
          leftIndex:{
          "egr_yty_growth": "-3.66",
            "gdp": "4819.65",
            "gdp_yty_growth": "9.26",
            "yty_growth_01": "0.9",
            "old_yty_growth1": "90.15",
            "yty_growth_02": "0",
            "egr_coef": "39.5",
            "old_yty_growth2": "12.76",
            "age_yty_growth2": "5.55",
            "totl_yty_growth1": "0.41",
            "age_yty_growth1": "19.41",
            "totl_yty_growth2": "-2.39"
        },
          bottomIndex1:{"coef2":"37","coef1":"42","acreage1":"30","acreage2":"31"},
          bottomIndex2:{"watr_qty":"0.237","consm_qty":"253","popu_denst":"260","green_area":"11"},
          bottomIndex3:{},
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
        this.left_index()
        this.tableDatas()
        this.top_chart1Data()
        this.bottom1Index()
        this.bottom2Index()
        this.bottom3Index()
      },
      methods: {
        left_index(){
          this.$http({
            url: this.$http.adornUrl("/t07qltyfstnm/leftIndex"),
            method: 'get',
            params: this.$http.adornParams({
            })
          }).then(({data}) => {
            //alert(JSON.stringify(data.page))
            this.leftIndex = data.page[0];
          })
        },
        bottom1Index(){
          this.$http({
            url: this.$http.adornUrl("/t07qltyfstnm/bottomIndex1"),
            method: 'get',
            params: this.$http.adornParams({
            })
          }).then(({data}) => {
            this.bottomIndex1 = data.page[0];
          })
        },
        bottom2Index(){
          this.$http({
            url: this.$http.adornUrl("/t07qltyfstnm/bottomIndex2"),
            method: 'get',
            params: this.$http.adornParams({
            })
          }).then(({data}) => {
            this.bottomIndex2 = data.page[0];
          })
        },
        bottom3Index(){
          this.$http({
            url: this.$http.adornUrl("/t07qltyfstnm/bottomIndex3"),
            method: 'get',
            params: this.$http.adornParams({
            })
          }).then(({data}) => {
            this.bottomIndex3 = data.page[0];
          })
        },
        tableDatas(){
          this.$http({
            url: this.$http.adornUrl("/t07qltyfstnm/select"),
            method: 'get',
            params: this.$http.adornParams({
            })
          }).then(({data}) => {
            //alert(JSON.stringify(data.page))
            this.tableData = data.page;
          })
        },
        top_chart1Data(){
          this.$http({
            url: this.$http.adornUrl("/t07persrecveduyrspersgdprel/select"),
            method: 'get',
            params: this.$http.adornParams({
            })
          }).then(({data}) => {
            this.top_chart1(data.page);
          })
        },
        top_chart1(data){
          var tData = []


          var itemStyle = {
            normal: {
              color:new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00feff'
                },
                  {
                    offset: 0.5,
                    color: '#027eff'
                  },
                  {
                    offset: 1,
                    color: '#00feff'
                  }
                ]
              ),
              opacity: 0.65,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          };
          var opt = [];
          for (var i = 0; i < data.length; i++) {
            tData.push(data[i].dateStat)
            var dat = []
            var d = [];
            d.push(data[i].ytyGrowth,data[i].eduYrsNum,'海口')
            dat.push(d)
            opt.push({
              series: {
                name: data[i].dateStat,
                type: 'scatter',
                symbolSize: function (val) {
                  if(val[0]/1000*1.5<20){
                    return 20
                  }
                  return val[0]/1000*1.5
                },
                data: dat,
                itemStyle: itemStyle
              }
            });
          }
          var colorsJob = ["#ffca67", "#ff60a2", "#bf64ff", "#6c65fb", "#93dffc"];
          var top_chart = echarts.init(document.getElementById('top_chart1'));
          var option = {
            baseOption: {
              timeline: {
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 2000,
                left: null,
                  right: "3%",
                  width: '5%',
                  height: '90%',
                label: {
                  normal: {
                    textStyle: config().textStyle
                  },
                  emphasis: {
                    textStyle: {
                      fontSize:config().fontSize,
                      color:'#00ddff'
                    }
                  }
                },
                symbol: 'circle',
                lineStyle: {
                  color: '#ddd'
                },
                itemStyle: {
                  normal: {
                    symbolSize: config().fontSize,
                    color: '#04a5f1'
                  },
                  emphasis: {
                    color: '#04a5f1'
                  }
                },
                checkpointStyle: {
                    symbol: 'circle',
                    symbolSize: config().fontSize*1.5,
                    color: '#aed2ff',
                    borderColor: 'rgba(4, 165, 261, .5)'
                  },
                controlStyle: {
                  showNextBtn: false,
                  showPrevBtn: false,
                  normal: {
                    color: '#666',
                    borderColor: '#666'
                  },
                  emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                  }
                },
                data: tData
              },
              calculable: true,
              grid: {
                left: '8%',
                right: '15%',
                bottom: '10%',
                containLabel: true
              },
              tooltip: {
                //backgroundColor:'rgba(255,202,103,0.4)',
                backgroundColor: 'rgba(7,14,28,0.9)',
                textStyle: config().textStyle,
                formatter: function(value) {
                  var str = '';
                  if(value.componentType == 'series'){
                    str = value.seriesName+'<br/>'+value.data[2]+'<br/>人均受教育年限：'+value.data[1]+
                      '年<br/>人均地区GDP：'+value.data[0]+'元';
                  }else{
                    str = value.name
                  }
                  return str
                }
              },
              xAxis: [{
                name: '人均地区GDP',
                nameGap:config().fontSize*4,
                nameLocation:'center',
                nameTextStyle: config().textStyle,
                boundaryGap: true,
                max:60000,
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
                name: '人均受教育年限',
                nameGap:20,
                nameTextStyle: config().textStyle,
                type: 'value',
                max:15,
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

              series: [opt[data.length-1].series],
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
        width: 89.8%;
        height: 23vh;
        margin: 0 5%;
        border: 2px #1D4375 solid;
        border-radius: 1vh;
      }
    }
    .dev_diff{
      width: 100%;
      height: 6vh;
      text-align: center;
      color: #fff;
      font-size: 1.5vh;
      div{
        width: 30%;
        height: 100%;
        float: left;
        line-height: 6vh;
      }
      /*.diff1,.diff2{*/
        /*border-right: 1px #fff solid;*/
      /*}*/
      div:nth-child(1){
        width: 39%;
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
      height: 5vh;
      div{
        line-height: 5vh;
      }
    }
    .dev_diff:nth-child(2),.dev_diff:nth-child(4){
      background:-moz-linear-gradient(left,#0E2266,#1D3389,#0E2266);/*火狐*/
      background: -webkit-linear-gradient(left,#0E2266,#1D3389,#0E2266); /*Safari5.1 Chrome 10+*/
    }
    .dev_pe{
      width: 100%;
      height: 22.6vh;

      color: #fff;
      font-size: 1.5vh;
      div:nth-child(1){
        height: 10vh;
        line-height: 10vh;
        div{
          float: left;
        }
        div:nth-child(2){
          margin-left: 0.5vh;
        }
      }
      div:nth-child(2){
        height: 10vh;
        line-height: 10vh;
        span:nth-child(1){
           font-size: 3vh;
         }
        span:nth-child(2){
          margin-left: 1vh;
        }
      }
      .rkmd{
        height: 3vh;
        width: 3vh;
        margin-left: 4vh;
        margin-top: 3.1vh;
        background-image:url('../../static/img/rkfz/rkmd.png');
        background-repeat: no-repeat;
        background-size: 100%;
      }
      .rjgy{
        height: 3vh;
        width: 3vh;
        margin-left: 4vh;
        margin-top: 3.1vh;
        background-image:url('../../static/img/rkfz/rjgy.png');
        background-repeat: no-repeat;
        background-size: 100%;
      }
      .rjsl{
        height: 3vh;
        width: 3vh;
        margin-left: 4vh;
        margin-top: 3.1vh;
        background-image:url('../../static/img/rkfz/rjsl.png');
        background-repeat: no-repeat;
        background-size: 100%;
      }
      .rjny{
        height: 3vh;
        width: 3vh;
        margin-left: 4vh;
        margin-top: 3.1vh;
        background-image:url('../../static/img/rkfz/rjny.png');
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }
    .rkmd_span span{
      color: #3054A9;
    }
    .rjgy_span span{
      color: #A34072;
    }
    .rjsl_span span{
      color: #D4B035;
    }
    .rjny_span span{
      color: #0390C9;
    }

    .gua_tab{
      margin: 0 2vh;
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
