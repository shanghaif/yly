<template>
  <div class="compareAnalysis">

    <el-tabs v-model="active1" type="card" @tab-click="tabClick1" class="tabs">
      <el-tab-pane label="用电" name="first">

    <div class="compareAnalysis_search">
      <el-date-picker v-model="timeVal" type="date" :placeholder="$t('electricityLoop.pickAday')"></el-date-picker>
      <el-button type="primary">{{$t('common.query')}}</el-button>
    </div>

    <div class="compareAnalysis_chart">
      <p class="title">{{$t('electricityLoop.regionalLoopPowerStatistics')}}</p>
      

      <el-tabs v-model="active2" @tab-click="tabClick2">
        <el-tab-pane label="当日" name="day">
          <div id="day1"></div>
        </el-tab-pane>
        <el-tab-pane label="当月" name="month">
          <div id="month1"></div>
        </el-tab-pane>
      </el-tabs>

      
    </div>

    <div class="compareAnalysis_table">
       <p class="clearfix">
          <span class="pull-left title">{{$t('electricityLoop.regionalLoopPowerList')}}</span>
          
          <el-dropdown class="pull-right icon">
              <span class="el-dropdown-link">
                <i class="fa fa-upload" aria-hidden="true"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>{{$t('common.exportExcel')}}</el-dropdown-item>
                <el-dropdown-item>{{$t('electricityLoop.exportPDF')}}</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
        </p>
      <!-- <p class="title">区域环比用电量列表</p> -->
     
      <div class="table">
        <el-table
          :data="tableData1"
          border
          :header-cell-style="{background:'#F2F2F2',color:'rgb(51,51,51)'}"
          style="width: 100%;font-size: 14px"
        >
          <el-table-column prop="num" :label="$t('common.serialNum')" width="100"></el-table-column>
          <el-table-column prop="areaName" :label="$t('electricityLoop.areaName')"></el-table-column>
          <el-table-column prop="superior" :label="$t('electricityLoop.affiliation')"></el-table-column>
          <el-table-column prop="todayElectricity" :label="$t('electricityLoop.todayPower')"></el-table-column>
          <el-table-column prop="yesterdayElectricity" :label="$t('electricityLoop.yesterdayPower')"></el-table-column>
          <el-table-column prop="thisMon" :label="$t('electricityLoop.thisMonthPower')"></el-table-column>
          <el-table-column prop="lastMon" :label="$t('electricityLoop.lastMonthPower')"></el-table-column>
          <el-table-column prop="loopElectricity" :label="$t('electricityLoop.loopPower')"></el-table-column>
        </el-table>
      </div>

      <div class="pagination clearfix">
        <el-pagination
          class="pull-right"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout=" prev, pager, next, sizes"
          x-placement="top-start"
          :total="100"
        ></el-pagination>
      </div>
    </div>
      </el-tab-pane>



      <el-tab-pane label="用水" name="second">
    
    
    <div class="compareAnalysis_search">
      <el-date-picker v-model="timeVal" type="date" :placeholder="$t('electricityLoop.pickAday')"></el-date-picker>
      <el-button type="primary">{{$t('common.query')}}</el-button>
    </div>

    <div class="compareAnalysis_chart">
      <p class="title">{{$t('waterLoop.regionalLooopWaterStatistics')}}</p>
      
      <el-tabs v-model="active2" @tab-click="tabClick2">
        <el-tab-pane label="当日" name="day">
          <div id="day2"></div>
        </el-tab-pane>
        <el-tab-pane label="当月" name="month">
          <div id="month2"></div>
        </el-tab-pane>
      </el-tabs>

    </div>

    <div class="compareAnalysis_table">
       <p class="clearfix">
          <span class="pull-left title">{{$t('waterLoop.regionalLoopWaterList')}}</span>
          <el-dropdown class="pull-right icon">
              <span class="el-dropdown-link">
                <i class="fa fa-upload" aria-hidden="true"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>{{$t('common.exportExcel')}}</el-dropdown-item>
                <el-dropdown-item>{{$t('electricityLoop.exportPDF')}}</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
        </p>
      <!-- <p class="title">区域环比用电量列表</p> -->
     
      <div class="table">
        <el-table
          :data="tableData2"
          border
          :header-cell-style="{background:'#F2F2F2',color:'rgb(51,51,51)'}"
          style="width: 100%;font-size: 14px"
        >
          <el-table-column 
          prop="num" 
          :label="$t('common.serialNum')" 
          width="100"></el-table-column>
          <el-table-column 
          prop="areaName" 
          :label="$t('electricityLoop.areaName')">
          </el-table-column>
          <el-table-column 
          prop="superior" 
          :label="$t('electricityLoop.affiliation')">
          </el-table-column>
          <el-table-column 
          prop="todayWater" 
          :label="$t('waterLoop.todayWater')">
          </el-table-column>
          <el-table-column 
          prop="yesterdayWater" 
          :label="$t('waterLoop.yesterdayWater')">
          </el-table-column>
          <el-table-column 
          prop="thisMon" 
          :label="$t('waterLoop.thisMonthWater')">
          </el-table-column>
          <el-table-column 
          prop="lastMon" 
          :label="$t('waterLoop.lastMonthWater')">
          </el-table-column>
          <el-table-column 
          prop="loopWater" 
          :label="$t('waterLoop.loopWater')">
          </el-table-column>
        </el-table>
      </div>

      <div class="pagination clearfix">
        <el-pagination
          class="pull-right"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout=" prev, pager, next, sizes"
          x-placement="top-start"
          :total="100"
        ></el-pagination>
      </div>
    </div>
      </el-tab-pane>
    </el-tabs>




    
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name: '',

    data () {
        // this.chartSettings = {
        //     metrics: ['本月', '上月', '环比'],
        //     dimension: ['区域']
        // };
        // this.chartSettings1 = {
        //     metrics: ['本日', '上日', '环比'],
        //     dimension: ['区域']
        // };
        return {
          chart:'',
          active1:'first',
          active2:'month',
            timeVal: '',
            chartData: {
                columns: ['area', 'thisMon', 'lastMon', 'compare'],
                rows: [
                    { area: '区域A', thisMon: 8, lastMon: 11, compare: -2 },
                    { area: '区域A', thisMon: 6, lastMon: 11, compare: -3 },
                    { area: '区域A', thisMon: 11, lastMon: 8, compare: 2 },
                    { area: '区域A', thisMon: 9, lastMon: 11, compare: -1 },
                    { area: '区域A', thisMon: 4, lastMon: 11, compare: -4 },
                    { area: '区域A', thisMon: 8, lastMon: 11, compare: -2 },
                    { area: '区域A', thisMon: 6, lastMon: 11, compare: -3 },
                    { area: '区域A', thisMon: 11, lastMon: 8, compare: 2 },
                    { area: '区域A', thisMon: 9, lastMon: 11, compare: -1 },
                    { area: '区域A', thisMon: 4, lastMon: 11, compare: -4 },
                    { area: '区域A', thisMon: 8, lastMon: 11, compare: -2 },
                    { area: '区域A', thisMon: 6, lastMon: 11, compare: -3 },
                    { area: '区域A', thisMon: 11, lastMon: 8, compare: 2 },
                    { area: '区域A', thisMon: 9, lastMon: 11, compare: -1 },
                    { area: '区域A', thisMon: 4, lastMon: 11, compare: -4 }
                ]
            },

            chartData1: {
                columns: ['area', 'today', 'yesterday', 'compare'],
                rows: [
                    { area: '区域A', today: 8, yesterday: 5, compare: 3 },
                    { area: '区域A', today: 5, yesterday: 4, compare: 1 },
                    { area: '区域A', today: 1, yesterday: 3, compare: -2 },
                    { area: '区域A', today: 2, yesterday: 6, compare: -4 },
                    { area: '区域A', today: 8, yesterday: 2, compare: 6 },
                    { area: '区域A', today: 3, yesterday: 2, compare: 1 },
                    { area: '区域A', today: 1, yesterday: 5, compare: -4 },
                    { area: '区域A', today: 2, yesterday: 5, compare: -3 },
                    { area: '区域A', today: 5, yesterday: 1, compare: 4 },
                    { area: '区域A', today: 6, yesterday: 3, compare: 3 },
                    { area: '区域A', today: 2, yesterday: 2, compare: 0 },
                    { area: '区域A', today: 1, yesterday: 2, compare: -1 },
                    { area: '区域A', today: 5, yesterday: 5, compare: 0 },
                    { area: '区域A', today: 2, yesterday: 1, compare: 1 },
                    { area: '区域A', today: 3, yesterday: 3, compare: 0 }
                ]
            },

            chartExtend: {
                // title:{
                //     text: '区域环比用电量统计图(kWh)'
                //   },
                barWidth: 15,
                series: {
                    center: ['50%', '60%']
                }
            },
            barColors: ['#1191FF', '#126CC1', '#FFCD66'],
            tableData1: [
                {
                    num: 1,
                    areaName: '区域A',
                    superior: '上级a',
                    todayElectricity: 0.32,
                    yesterdayElectricity: 0.22,
                    thisMon: 9.8,
                    lastMon: 10.8,
                    loopElectricity: -0.1
                },
                {
                    num: 1,
                    areaName: '区域A',
                    superior: '上级a',
                    todayElectricity: 0.32,
                    yesterdayElectricity: 0.22,
                    thisMon: 9.8,
                    lastMon: 10.8,
                    loopElectricity: -0.1
                },
                {
                    num: 1,
                    areaName: '区域A',
                    superior: '上级a',
                    todayElectricity: 0.32,
                    yesterdayElectricity: 0.22,
                    thisMon: 9.8,
                    lastMon: 10.8,
                    loopElectricity: -0.1
                },
                {
                    num: 1,
                    areaName: '区域A',
                    superior: '上级a',
                    todayElectricity: 0.32,
                    yesterdayElectricity: 0.22,
                    thisMon: 9.8,
                    lastMon: 10.8,
                    loopElectricity: -0.1
                },
                {
                    num: 1,
                    areaName: '区域A',
                    superior: '上级a',
                    todayElectricity: 0.32,
                    yesterdayElectricity: 0.22,
                    thisMon: 9.8,
                    lastMon: 10.8,
                    loopElectricity: -0.1
                },
                {
                    num: 1,
                    areaName: '区域A',
                    superior: '上级a',
                    todayElectricity: 0.32,
                    yesterdayElectricity: 0.22,
                    thisMon: 9.8,
                    lastMon: 10.8,
                    loopElectricity: -0.1
                },
                {
                    num: 1,
                    areaName: '区域A',
                    superior: '上级a',
                    todayElectricity: 0.32,
                    yesterdayElectricity: 0.22,
                    thisMon: 9.8,
                    lastMon: 10.8,
                    loopElectricity: -0.1
                },
                {
                    num: 1,
                    areaName: '区域A',
                    superior: '上级a',
                    todayElectricity: 0.32,
                    yesterdayElectricity: 0.22,
                    thisMon: 9.8,
                    lastMon: 10.8,
                    loopElectricity: -0.1
                },
                {
                    num: 1,
                    areaName: '区域A',
                    superior: '上级a',
                    todayElectricity: 0.32,
                    yesterdayElectricity: 0.22,
                    thisMon: 9.8,
                    lastMon: 10.8,
                    loopElectricity: -0.1
                },
                {
                    num: 1,
                    areaName: '区域A',
                    superior: '上级a',
                    todayElectricity: 0.32,
                    yesterdayElectricity: 0.22,
                    thisMon: 9.8,
                    lastMon: 10.8,
                    loopElectricity: -0.1
                }
            ],

            tableData2: [
                {
                    num: 1,
                    areaName: '区域A',
                    superior: '上级a',
                    todayWater: 0.32,
                    yesterdayWater: 0.22,
                    thisMon: 9.8,
                    lastMon: 10.8,
                    loopWater: -0.1
                },
                
            ],
            currentPage: 1,
            options: [
                {
                    value: '10',
                    label: '10条/页'
                },
                {
                    value: '20',
                    label: '20条/页'
                },
                {
                    value: '30',
                    label: '30条/页'
                },
                {
                    value: '40',
                    label: '40条/页'
                },
                {
                    value: '50',
                    label: '50条/页'
                }
            ],
            value: '10条/页'
        };
    },

    mounted() {
      this.$nextTick(() => {
        this.drawMonthBars('month1')
      })
    },

    methods: {
        handleSizeChange (val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange (val) {
            // $('html, body').animate({scrollTop: 100}, 1000);
            console.log(`当前页: ${val}`);
        },

        tabClick1(e) {
          this.active2 = 'month'
          
          if (e.name === 'second') {
            this.$nextTick(() => {
              this.drawMonthBars('month2')
            })
          }
        },

        tabClick2(e) {
          if (this.active1 === 'first') {
            if (e.name === 'day') {
              this.$nextTick(() => {
                this.drawDayBars('day1')
              })
            }
          } else {
            if (e.name === 'day') {
              this.$nextTick(() => {
                this.drawDayBars('day2')
              })
          }
          }


          
        },

        drawMonthBars(id) {
          this.chart = echarts.init(document.getElementById(id))
          this.chart.setOption({
            tooltip : {
              trigger: 'axis'
            },
            grid:{
              left: 40,
              right: 40,
              bottom: 20
            },
            legend : {
                data : ["本月", "上月", "环比"],
                top: 0
            },
            series : [
              {
                name:'本月',
                type:'bar',
                data: this.chartData.rows.map(item => item.thisMon)
              },
              {
                name:'上月',
                type:'bar',
                data:this.chartData.rows.map(item => item.lastMon)
              },
              {
                name:'环比',
                type:'bar',
                data:this.chartData.rows.map(item => item.compare)
              }
            ],
            xAxis : [
              {
                type : 'category',
                data : this.chartData.rows.map(item => item.area)
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            color: ['#1191FF', '#126CC1', '#FFCD66'],
            barWidth: 15
          })
        },

        drawDayBars(id) {
          this.chart = echarts.init(document.getElementById(id))
          this.chart.setOption({
            tooltip : {
              trigger: 'axis'
            },
            grid:{
              left: 40,
              right: 40,
              bottom: 20
            },
            legend : {
                data : ["本日", "上日", "环比"],
                top: 0
            },
            series : [
              {
                name:'本日',
                type:'bar',
                data: this.chartData1.rows.map(item => item.today)
              },
              {
                name:'上日',
                type:'bar',
                data:this.chartData1.rows.map(item => item.yesterday)
              },
              {
                name:'环比',
                type:'bar',
                data:this.chartData1.rows.map(item => item.compare)
              },
            ],
            xAxis : [
              {
                type : 'category',
                data : this.chartData1.rows.map(item => item.area)
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            color: ['#1191FF', '#126CC1', '#FFCD66'],
            barWidth: 15
          })
        }
    }
};
</script>

<style lang='scss' scope>
.compareAnalysis {
  padding-bottom: 20px;
  .el-tabs__header {
      background-color: #fff;
      padding:15px 0 0 15px;
      margin: 0;
    }
  .compareAnalysis_search {
    background-color: #fff;
    padding-left: 10px;
    box-sizing: border-box;
    height: 80px;
    line-height:  80px;
    .el-button {
      margin-left: 10px;
    }
  }
  .compareAnalysis_chart {
    background-color: #fff;
    height: 6rem;
    margin: 10px;
    padding: 20px 10px 10px 10px;
    .title {
      font-weight: 700;
      font-size: 18px;
    }
    .el-tabs__nav {
      border: 1px solid #ccc;
      border-radius: 5px;
      float: right;
      #tab-day {
        padding-left: 20px;
      }
      #tab-month {
        padding-right: 20px;
      }
      .el-tabs__active-bar {
        height: 0;
      }
      .is-active {
        color: #fff;
        background-color: rgb(64, 169, 255)
      }
    }
    .el-tabs__nav-wrap::after {
      height: 0;
    }
    #day1, #month1, #day2, #month2 {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 300px;
    }
  }
  .compareAnalysis_table {
    padding: 10px;
    // padding-bottom: 30px;
    background-color: #fff;
    margin: 10px;
    margin-bottom: 0;
    p {
      .title {
      font-weight: 700;
      font-size: 18px;
     }
     .icon {
            display: inline-block;
            width: 25px;
            height: 25px;
            border-radius: 5px;
            line-height: 25px;
            background-color: rgb(236,243,252);
            text-align: center;
            .fa-upload {
              color: rgb(24,144,255);
              font-size: 7px;
            }
          }
    }
    
    .table {
      margin: 20px 0 30px 0;
    }
    
  }

  .clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  .clearfix {
    zoom: 1;
  }
  .el-select-dropdown .el-popper {
    transform-origin: center bottom 0px !important;
  }
}
</style>
