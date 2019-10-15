<template>
  <div class="energyAnalysis">
       <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="tabs">

         <!-- 用电tab -->
           <el-tab-pane label="用电" name="first">

              <el-card class="energyAnalysis_filter">
                  <el-select v-model="selectVal" class="pull-left " style="width: 2.6rem">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                  </el-select>

              <!-- 用电时间选择 -->
                <div class="time_filter pull-left">
                  <el-date-picker
                    v-model="time"
                    type="daterange"
                    :range-separator="$t('common.to')"
                    :start-placeholder="$t('common.startDate')"
                    :end-placeholder="$t('common.endDate')"
                  ></el-date-picker>
                </div>

                <!-- 用电查询按钮 -->
                <el-button type="primary" @click="queryData">{{$t('common.query')}}</el-button>
              </el-card>


              <!-- 柱状图 -->
              <el-card class="energyAnalysis_chart">
                <div id="chart1" style="width:100%;height:300px;"></div>
              </el-card>


              <!-- 用电表格 -->
                  <el-card class="energyAnalysis_table">
                    <span class="title">区域用电列表</span>

                    <el-dropdown class="pull-right icon">
                        <span class="el-dropdown-link">
                          <i class="fa fa-upload" aria-hidden="true"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>{{$t('common.exportExcel')}}</el-dropdown-item>
                          <el-dropdown-item>{{$t('electricityLoop.exportPDF')}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>


                    <el-table
                      border
                      :data="tableData"
                      tooltip-effect="dark"
                      :header-cell-style="{background:'#F2F2F2',color:'rgb(51,51,51)'}"
                      style="width: 100%;font-size: 14px">
                        <el-table-column
                          label="序号"
                          type="index" 
                          :index="indexMethod"
                          width="180">
                        </el-table-column>
                        <el-table-column
                          label="区域名称"
                          prop="areaName">
                        </el-table-column>
                        <el-table-column
                          label="所属上级"
                          prop="superior">
                        </el-table-column>
                        <el-table-column
                          label="开始日期"
                          prop="startDate"
                          :formatter="dateFormat">
                        </el-table-column>
                        <el-table-column
                          label="结束日期"
                          prop="eventDate"
                          :formatter="dateFormat">
                        </el-table-column>
                        <el-table-column
                          label="总用电量(kwh)"
                          prop="consume">
                        </el-table-column>
                    </el-table>
                    <div class="total">
                      <span style="padding-left:20px;">合计</span>
                      <span style="float:right;margin-right:8%;">{{total}}</span>
                    </div>
                  </el-card>
           </el-tab-pane>

          <!-- 用水tab -->
           <el-tab-pane label="用水" name="second">
              <el-card class="energyAnalysis_filter">
                  <el-select v-model="selectVal" class="pull-left " style="width: 2.6rem">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                  </el-select>

              <!-- 用电时间选择 -->
                <div class="time_filter pull-left">
                  <el-date-picker
                    v-model="time"
                    type="daterange"
                    :range-separator="$t('common.to')"
                    :start-placeholder="$t('common.startDate')"
                    :end-placeholder="$t('common.endDate')"
                  ></el-date-picker>
                </div>

                <!-- 用电查询按钮 -->
                <el-button type="primary" @click="queryData">{{$t('common.query')}}</el-button>
              </el-card>


              <!-- 柱状图 -->
              <el-card class="energyAnalysis_chart">
                <div id="chart2" style="width:100%;height:300px;"></div>
              </el-card>


              <!-- 用水表格 -->
                  <el-card class="energyAnalysis_table">
                    <span class="title">区域用水列表</span>
                    <el-dropdown class="pull-right icon">
                        <span class="el-dropdown-link">
                          <i class="fa fa-upload" aria-hidden="true"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>{{$t('common.exportExcel')}}</el-dropdown-item>
                          <el-dropdown-item>{{$t('electricityLoop.exportPDF')}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <el-table
                      border
                      :data="tableData"
                      tooltip-effect="dark"
                      :header-cell-style="{background:'#F2F2F2',color:'rgb(51,51,51)'}"
                      style="width: 100%;font-size: 14px">
                        <el-table-column
                          label="序号"
                          type="index" 
                          :index="indexMethod"
                          width="180">
                        </el-table-column>
                        <el-table-column
                          label="区域名称"
                          prop="areaName">
                        </el-table-column>
                        <el-table-column
                          label="所属上级"
                          prop="superior">
                        </el-table-column>
                        <el-table-column
                          label="开始日期"
                          prop="startDate"
                          :formatter="dateFormat">
                        </el-table-column>
                        <el-table-column
                          label="结束日期"
                          prop="eventDate"
                          :formatter="dateFormat">
                        </el-table-column>
                        <el-table-column
                          label="总用水量(t)"
                          prop="consume">
                        </el-table-column>
                    </el-table>
                    <div class="total">
                      <span style="padding-left:20px;">合计</span>
                      <span style="float:right;margin-right:8%;">{{total}}</span>
                    </div>
                  </el-card>
             
           </el-tab-pane>
       </el-tabs>
  </div>
</template>

<script>
import format from 'date-fns/format'
import echarts from 'echarts'
export default {
    name: '',

    data () {
        return {
          activeName:'first',
           time: [new Date(+new Date() - 7 * 24 * 60 * 60 * 1000), new Date()],
            options: [
                {
                    value: 'date',
                    label: '按日期'
                },
            ],

            selectVal: '',

            tableData: [
              {
                areaName: '区域A',
                superior: '上级a',
                startDate: new Date(),
                eventDate: new Date(),
                consume: 120,
              },
              {
                areaName: '区域B',
                superior: '上级b',
                startDate: new Date(),
                eventDate: new Date(),
                consume: 123,
              },{
                areaName: '区域A',
                superior: '上级a',
                startDate: new Date(),
                eventDate: new Date(),
                consume: 13,
              },{
                areaName: '区域A',
                superior: '上级a',
                startDate: new Date(),
                eventDate: new Date(),
                consume: 34,
              },{
                areaName: '区域A',
                superior: '上级a',
                startDate: new Date(),
                eventDate: new Date(),
                consume: 423,
              },{
                areaName: '区域A',
                superior: '上级a',
                startDate: new Date(),
                eventDate: new Date(),
                consume: 99,
              },{
                areaName: '区域A',
                superior: '上级a',
                startDate: new Date(),
                eventDate: new Date(),
                consume: 300,
              },
              {
                areaName: '区域A',
                superior: '上级a',
                startDate: new Date(),
                eventDate: new Date(),
                consume: 277,
              },
              {
                areaName: '区域A',
                superior: '上级a',
                startDate: new Date(),
                eventDate: new Date(),
                consume: 56,
              },
              {
                areaName: '区域A',
                superior: '上级a',
                startDate: new Date(),
                eventDate: new Date(),
                consume: 398,
              },
              {
                areaName: '区域A',
                superior: '上级a',
                startDate: new Date(),
                eventDate: new Date(),
                consume: 76,
              },
              {
                areaName: '区域A',
                superior: '上级a',
                startDate: new Date(),
                eventDate: new Date(),
                consume: 120,
              },
            ],

            // 表格数据参数
            queryDataParam: {
                // 解决状态的值
              dealStatus:-1,
              startTime:'',
              endTime:'',
                // 事件名称的值
              eventType:0,
              id:17,
              type: 1
            },

            chart: ''
        };
    },
    mounted(){
      // 获取类型
      this.getType();

      // 获取表格数据
      this.queryData();

      this.$nextTick(() => {
        this.drawBars('chart1')
      })
    },

    methods: {
      getSum(){

      },

      // 获取类型
        getType(){

        },

        // 获取表格数据
        queryData(){
          if (this.activeName === 'first') {
            this.$nextTick(() => {
              this.drawBars('chart1')
            })
          } else {
            this.$nextTick(() => {
              this.drawBars('chart2')
            })
          }
        },


        drawBars(id) {
          this.chart = echarts.init(document.getElementById(id))
          this.chart.setOption({
            title: {
              text: id === 'chart1' ? '区域耗电量统计图（kWh）' : '区域耗水量统计图（t）'
            },
            tooltip: {
              trigger: 'axis'
            },
            grid:{
              left: 30,
              right: 30,
              bottom: 30
            },
            series: [
              {
                name:'本月',
                type:'bar',
                data: this.tableData.map(item => item.consume)
              },
            ],
            xAxis: {
                type: 'category',
                data: this.tableData.map(item => item.areaName)
              },
            yAxis: {
                type: 'value',
              },
              barWidth: 30,
              color: ['#1191FF']
          })
        },



        indexMethod (index) {
            return index + 1;
        },

        dateFormat(row, column, cellValue, index){
             const daterc = row[column.property]
             return format(daterc,'YYYY-MM-DD');
        },

        handleClick () {
            if (this.activeName === 'second') {
              this.$nextTick(() => {
                this.drawBars('chart2')
              })
            }
        },
    },

    computed: {
      total() {
        if (this.tableData.length === 1) {
          return this.tableData[0].consume
        } else {
          return this.tableData.reduce((pre, next) => {
            return pre.consume + next.consume
          })
        }
      }
    }
};
</script>

<style lang='scss' scope>
  .energyAnalysis {
    .el-tabs__header {
      background-color: #fff;
      padding:15px 0 0 15px;
      margin: 0;
    }
    .el-card {
      margin: 20px;
    }
    .energyAnalysis_filter {
      margin: 0;
      border-top: 0;
      background-color: #fff;
      .el-select {
        .el-input__inner {
          border-radius:0 4px 4px 0;
        }
      }
      .time_filter {
         margin-left: 10px;
         .el-range-editor.el-input__inner {
           border-radius: 4px ;
         }
      }
      .el-button {
         margin-left: 10px;
         font-size: 14px;
      }
    }
     .export {
         border: 1px solid rgb(64,169,255);
         color: rgb(64,169,255);
         background-color: rgb(236,245,255);
     }

    .energyAnalysis_table {
      .title {
        font-size: 18px;
        font-weight: 700;
        margin:0 0 15px 5px;
      }
      td:last-of-type {
        color: rgb(24,144,255);
      }
      .total {
        overflow: hidden;
        width: 100%;
        background-color: rgb(242,242,242);
        span {
          line-height: 50px;
        }
      }

      .icon {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-bottom: 15px;
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
  }
</style>
