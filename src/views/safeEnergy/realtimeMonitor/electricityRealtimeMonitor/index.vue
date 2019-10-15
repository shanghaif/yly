<template>
  <div id="gismap">
    <el-amap class="amap-box" vid="map" :zoom="zoom" :center="center" :plugin="plugin" :amap-manager="amapManager" >
        <el-amap-marker vid="marker"  v-for="(marker,index) in markerGroups"  :key="index" :position="marker.position" :visible="true" :draggable="false" :icon="marker.icon" :isHotspot="open"></el-amap-marker>
    </el-amap>

    <div class="left">
      <div class="device_statistics">
        <h1>设备统计</h1>
        <div class="bd">
          <ul>
            <li>
              设备总安装数
              <p><span>{{total}}</span>个</p>
            </li>
            <li>
              设备在线数
              <p><span>{{chartData1.rows[0].num}}</span>个</p>
            </li>
          </ul>
          <div class="chart1">
            <ve-ring :data="chartData1" :legend-visible="false" :extend="chartExtend1" :settings="chartSetting1" height="230px">
            </ve-ring>
            <div class="rate">
              <h4>设备在线比例</h4>
              <p><span>{{rate}}</span>%</p>
            </div>
          </div>
        </div>
      </div>
      <div class="device_location">
        <h1>设备分布</h1>
        <ve-bar :data="chartData2" :legend-visible="false" :extend="chartExtend2" :colors="barColors" height="450px"></ve-bar>
      </div>
    </div>
    <div class="right">
      <div class="abnormal_alarm_statistics">
        <h1>异常告警统计</h1>
        <ul>
          <li>
            总次数
            <p><span>{{alarmTotal}}</span>次</p>
          </li>
          <li>
            今日次数
            <p><span>{{alarmToday}}</span>次</p>
          </li>
          <li>
            昨日次数
            <p><span>{{alarmYesterday}}</span>次</p>
          </li>
        </ul>

        <el-table
          :data="tableData"
          style="width: 100%"
          :header-cell-style="{background:'rgb(45,134,225)',color:'#fff'}"
          :border="false">
          <el-table-column
            prop="deviceName"
            label="设备名称"
            align="center">
          </el-table-column>
          <el-table-column
            prop="location"
            label="安装位置"
            align="center">
          </el-table-column>
          <el-table-column
            prop="alarmType"
            label="告警类型"
            align="center">
          </el-table-column>
          <el-table-column
            prop="alarmTime"
            label="告警时间"
            align="center"
            width="100">
          </el-table-column>
        </el-table>
      </div>
      <div class="area_device_alarm_rate">
        <h1>区域设备告警占比</h1>
        <ve-ring :data="chartData3" :legend-visible="false" :extend="chartExtend3" :settings="chartSetting3" height="300px"></ve-ring>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAMap from 'vue-amap';
import AMap from 'vue-amap';
Vue.use(VueAMap);
let amapManager = new AMap.AMapManager();
export default {
    data () {
      this.chartSetting1 = {
        radius: [60, 70],
        offsetY: 150
      }
      this.chartSetting3 = {
        radius: [40, 70],
        offsetY: 150
      }
        return {
          active:'a',
            zoom: 15,
            amapManager,

            // 地图中心坐标
            center: [120.275177, 30.201746],
            open: true,

            // 地图标记数据
            markerGroups: [
                {
                    position: [120.28316, 30.2363],
                    content: '设备1号',
                    offset: [10, 12],
                    icon: 'el-icon-location',
                    map: this.map
                },
                {
                    position: [120.275177, 30.201746],
                    content: '设备2号',
                    offset: [10, 12],
                    icon: '../../../static/images/abnormal-dev.png'

                },
                {
                    position: [120.273794, 30.20058],
                    content: '设备3号',
                    offset: [10, 12],
                    icon: '../../../static/images/abnormal-dev.png'

                },
                {
                    position: [120.276112, 30.197751],
                    content: '测试设备1',
                    offset: [10, 12],
                    icon: '../../../static/images/abnormal-dev.png'
                },
                {
                    position: [120.275112, 30.198751],
                    content: '测试设备2',
                    offset: [10, 12],
                    icon: '../../../static/images/offline-dev.png'
                },
                {
                    position: [120.296112, 30.197751],
                    content: '钦汇园',
                    offset: [10, 12],
                    icon: '../../../static/images/online-dev.png'
                },
                {
                    position: [120.277772, 30.200051],
                    content: '钦汇园',
                    offset: [10, 12],
                    icon: '../../../static/images/abnormal-dev.png'
                }
            ],
            
            plugin: [
                {
                    pName: 'ToolBar', // 工具条插件
                    position: 'LB'
                },
                {
                    pName: 'MapType', // 卫星与地图切换
                    defaultType: 0
                }
                //  {
                //     pName: 'PlaceSearch', //  POI搜索插件
                //      position: 'LT'
                // }
            ],

            chartData1: {
              columns: ['type', 'num'],
              rows: [
                { 'type': '在线', 'num': 108 },
                { 'type': '离线', 'num': 1 }
              ]
            },

            chartExtend1: {
              // title:{
              //   text: '设备在线比例',
              //   subtext: this.active,
              //   x:"center",
              //   y:"40%",
              //   textStyle: {
              //     fontSize: 12,
              //   },
              //   subtextStyle: {
              //     fontSize: 30,
              //     fontWeight: 'bold',
              //     color: '#000',
              //   }
              // },

              label: {
                normal: {
                  // formatter: `设备{b}比例\n{d}%`,
                  show: false,
                }
              },
            },

            chartData2: {
              columns: ['位置', '数量'],
              rows: [
                { '位置': '位置A', '数量': 985},
                { '位置': '位置B', '数量': 2105},
                { '位置': '位置C', '数量': 1846},
                { '位置': '位置D', '数量': 554},
                { '位置': '位置E', '数量': 2474},
                { '位置': '位置F', '数量': 1206},
                { '位置': '位置G', '数量': 689},
                { '位置': '位置H', '数量': 1022},
                { '位置': '位置I', '数量': 1415},
              ]
            },

            chartExtend2: {
              grid: {
                top: 10,
                bottom: 10,
                left: 0,
              },
              xAxis: {
                show: false,
                max: 3000
              },
              yAxis: {
                position: 'right',
                inverse: true,
                nameTextStyle: {
                  align: 'right'
                }
              },
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  color: '#000'
                }
              },
              barWidth: 10,
              barLength: 30,
              itemStyle: {
                emphasis: {
                  barBorderRadius: 10
                },
                normal: {
                  barBorderRadius: 10
                }
              }
            },

            barColors:['rgb(242,216,121)'],

            chartData3: {
              columns: ['位置', '数量'],
              rows: [
                { '位置': '位置1', '数量': 985},
                { '位置': '位置2', '数量': 2105},
                { '位置': '位置3', '数量': 1846},
                { '位置': '位置4', '数量': 554},
                { '位置': '位置5', '数量': 2474},
                { '位置': '位置6', '数量': 1206}
              ]
            },

            chartExtend3: {
              label: {
                normal: {
                  formatter: `{b} \n {d}%`,
                }
              }
            },

            tableData: [
              {
                deviceName: '20180614',
                location: '位置1',
                alarmType: '过压',
                alarmTime: '2019-02-12 16:03:48'
              },
              {
                deviceName: '20180614',
                location: '位置2',
                alarmType: '过压',
                alarmTime: '2019-02-12 16:03:48'
              },
              {
                deviceName: '20180614',
                location: '位置3',
                alarmType: '过压',
                alarmTime: '2019-02-12 16:03:48'
              },
              {
                deviceName: '20180614',
                location: '位置4',
                alarmType: '过压',
                alarmTime: '2019-02-12 16:03:48'
              },
              {
                deviceName: '20180614',
                location: '位置5',
                alarmType: '过压',
                alarmTime: '2019-02-12 16:03:48'
              },
              {
                deviceName: '20180614',
                location: '位置6',
                alarmType: '过压',
                alarmTime: '2019-02-12 16:03:48'
              },
            ],

            alarmTotal: 136,
            alarmToday: 0,
            alarmYesterday: 1,

        };
    },
    created () {
        VueAMap.initAMapApiLoader({
            key: '5d0c10b13cc908bc1c00f012ec739e9d',
            plugin: [
                'AMap.Autocomplete', // 输入提示插件
                'AMap.PlaceSearch', // POI搜索插件
                'AMap.Scale', // 右下角缩略图插件 比例尺
                'AMap.OverView', // 地图鹰眼插件
                'AMap.ToolBar', // 地图工具条
                'AMap.MapType', // 类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
                'AMap.PolyEditor', // 编辑 折线多，边形
                'AMap.CircleEditor', // 圆形编辑器插件
                'AMap.Geolocation' // 定位控件，用来获取和展示用户主机所在的经纬度位置
            ],
            v: '1.4.4',
            uiVersion: '1.0.11'
        });
    },
    computed: {
      total() {
        return this.chartData1.rows[0].num + this.chartData1.rows[1].num
      },
      rate() {
        return (this.chartData1.rows[0].num / this.chartData1.rows.reduce((pre,next) => pre.num + next.num)).toFixed(4) * 100
      }
    },
    methods: {

    }
};
</script>

<style lang='scss' scope>
#gismap {
  box-sizing: border-box;
  height: 87.3vh;
  position: relative;
  h1 {
      font-size: 18px;
      margin-top: 25px;
      margin-left: 20px;
  }
  .left {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      width: 23%;
      height: 100%;
      z-index: 999;
      .device_statistics {
        flex:1;
        background-color: #fff;
        // padding-left: 20px;
        border-bottom: 2px solid #eee;
        .bd {
          display: flex;
          font-size: 14px;
          color: rgb(102,102,102);
          text-align: center;
          ul {
            flex: 1;
            li {
              margin-top: 30px;
              p {
                color: #000;
                span {
                  font-size: 30px;
                  font-weight: 700;
                }
              }
            }
          }
          .chart1 {
            flex: 2;
            position: relative;
            .rate {
              position: absolute;
              top: 40%;
              left: 35%;
              text-align: center;
              font-size: 12px;
              color: #000;
              span {
                font-size: 30px;
                font-weight: 700;
              }
            }
            canvas {
              top: -30px!important;
            }

          }
        }
      }
      .device_location {
        flex:2;
        background-color: #fff;
        padding-left: 20px;
      }
  }
  .right {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      right: 0;
      width: 26%;
      height: 100%;
      z-index: 999;
      .abnormal_alarm_statistics {
        flex:6;
        background-color: #fff;
        padding: 0;
        ul {
          display: flex;
          margin: 15px 0;
          li {
            flex:1;
            padding-left: 30px;
            font-size: 14px;
            color: #000;
            span {
              font-size: 30px;
              font-weight: 700;
            }
          }
        }
        .el-table {
          tr,td {
            padding: 0!important;
          }
        }
        .el-table__row>td{
	        border: none;
        }
      }
      .area_device_alarm_rate {
        flex:5;
        background-color: #fff;
      }
  }
}
</style>
