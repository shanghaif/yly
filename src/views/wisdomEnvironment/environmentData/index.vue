<template>
  <div class="historicalData">
    <div class="statis_top">
      <el-date-picker
        v-model="timeframe"
        type="daterange"
        :range-separator="$t('common.to')"
        :start-placeholder="$t('common.startDate')"
        :end-placeholder="$t('common.endDate')"
      ></el-date-picker>
      <el-button type="primary">{{$t('common.query')}}</el-button>
    </div>
    <div class="envirChart">
      <h3>{{$t('realtimecontrol.currentTrendChart')}}</h3>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="$t('realtimecontrol.temperature')" name="first" lazy>
          <ve-line
            :data="currentData"
            :settings="currentChartSettings"
            style="width: 28rem;"
            :extend="chartExtend"
          ></ve-line>
        </el-tab-pane>
        <el-tab-pane :label="$t('environmentData.humidity')" name="second" lazy>
          <ve-line
            :data="currentData"
            :settings="currentChartSettings"
            style="width: 28rem;"
            :extend="chartExtend"
          ></ve-line>
        </el-tab-pane>
        <el-tab-pane :label="$t('environmentMonitor.UV index')" name="third" lazy>
          <ve-line
            :data="currentData"
            :settings="currentChartSettings"
            style="width: 28rem;"
            :extend="chartExtend"
          ></ve-line>
        </el-tab-pane>
        <el-tab-pane :label="$t('environmentMonitor.PM25')" name="fourth" lazy>
          <ve-line
            :data="currentData"
            :settings="currentChartSettings"
            style="width: 28rem;"
            :extend="chartExtend"
          ></ve-line>
        </el-tab-pane>
        <el-tab-pane :label="$t('environmentMonitor.CO₂')" name="five" lazy>
          <ve-line
            :data="currentData"
            :settings="currentChartSettings"
            style="width: 28rem;"
            :extend="chartExtend"
          ></ve-line>
        </el-tab-pane>
        <el-tab-pane :label="$t('environmentMonitor.lightIntensity')" name="six" lazy>
          <ve-line
            :data="currentData"
            :settings="currentChartSettings"
            style="width: 28rem;"
            :extend="chartExtend"
          ></ve-line>
        </el-tab-pane>
        <el-tab-pane :label="$t('environmentMonitor.windSpeed')" name="seven" lazy>
          <ve-line
            :data="currentData"
            :settings="currentChartSettings"
            style="width: 28rem;"
            :extend="chartExtend"
          ></ve-line>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="envir_table">
      <p class="clearfix">
        <span class="pull-left title">{{$t('environmentData.envirlDataList')}}</span>
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
      <div class="table">
        <el-table
          :data="tableData"
          border
          :header-cell-style="{background:'#F2F2F2',color:'rgb(51,51,51)'}"
          style="width: 100%;font-size: 14px"
        >
          <el-table-column prop="num" :label="$t('common.serialNum')" width="100"></el-table-column>
          <el-table-column prop="areaName" :label="$t('common.time')"></el-table-column>
          <el-table-column prop="superior" :label="$t('environmentData.temperature')"></el-table-column>
          <el-table-column prop="todayElectricity" :label="$t('environmentData.humiditys')"></el-table-column>
          <el-table-column prop="yesterdayElectricity" :label="$t('environmentData.pm')"></el-table-column>
          <el-table-column prop="thisMon" :label="$t('environmentData.co2')"></el-table-column>
          <el-table-column prop="lastMon" :label="$t('environmentData.linght')"></el-table-column>
          <el-table-column prop="loopElectricity" :label="$t('environmentData.windSpeed')"></el-table-column>
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
          :total="100"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: '',

    data () {
        this.currentChartSettings = {
            dimension: ['日期'],
            yAxisName: ['℃'],
            area: true
        };
        return {
            timeframe: '',
            currentData: {
                columns: ['日期', '电流(A)'],
                rows: [
                    { 日期: '1/1', '电流(A)': 2 },
                    { 日期: '1/2', '电流(A)': 4 },
                    { 日期: '1/3', '电流(A)': 2 },
                    { 日期: '1/4', '电流(A)': 6 },
                    { 日期: '1/5', '电流(A)': 1 },
                    { 日期: '1/6', '电流(A)': 3 }
                ]
            },
            activeName: 'first',
            chartExtend: {
                grid: {
                    bottom: 0
                },
                // yAxis:{
                //   name: '电流(A)'
                // },
                lineStyle: {
                    normal: {
                        width: 10, // 连线粗细
                        color: '#409EFF' // 连线颜色
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#409EFF' // 图标颜色
                    }
                }
            },
            tableData: [
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
            currentPage: 1,
            radioVal: '当月'
        };
    },

    methods: {
        handleClick (tab, event) {
            // console.log(tab, event);
        },
        handleSizeChange (val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange (val) {
            console.log(`当前页: ${val}`);
        }
    }
};
</script>

<style lang='scss' scope>
.historicalData {
  .statis_top {
    padding: 10px;
    height: 80px;
    line-height: 80px;
    background-color: #fff;
  }
  .envirChart{
    margin: 10px 0 0 10px;
    padding: 15px;
    background: #fff;
    height: 8rem;
    h3 {
      font-size: 18px;
      color: #000;
      margin-bottom: 15px;
    }
  }
  .envir_table {
    padding: 10px;
    background-color: #fff;
    margin: 10px;
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
        background-color: rgb(236, 243, 252);
        text-align: center;
        .fa-upload {
          color: rgb(24, 144, 255);
          font-size: 7px;
        }
      }
    }
    .table {
      margin: 20px 0 30px 0;
    }
  }
}
</style>
