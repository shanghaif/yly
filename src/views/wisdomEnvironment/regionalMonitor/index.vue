<template>
  <div id="wisdomEnvironment">
    <div class="wisdomEnvironment_top">
      <div class="location">
        <img src="../../../../static/images/location.png" alt />
        {{$t('environmentMonitor.hangzhou')}}
      </div>
      <div class="weather">
        <ul class="weather_box">
          <li>
            <img
              class="weather_icon"
              src="../../../../static/images/weather-thunder-showe2.png"
              alt
            />
            <!-- <i class="fa fa-sun-o weather_icon"></i> -->
          </li>
          <li class="weather_num">12°</li>
          <li>
            <p class="weather_name">{{$t('environmentMonitor.shower')}}</p>
            <p class="weather_random">12-18℃</p>
          </li>
        </ul>
        <ul class="allinfo">
          <li>
            <img src alt />
            <span>湿度98RH%</span>
          </li>
          <li>
            <img src alt />
            <span>紫外线指数3</span>
          </li>
          <li>
            <img src alt />
            <span>PM2.5含量 51ug/m3</span>
          </li>
          <li>
            <img src alt />
            <span>co2含量 400pppm</span>
          </li>
          <li>
            <img src alt />
            <span>光照强度 5wlux</span>
          </li>
          <li>
            <img src alt />
            <span>风速 5m/s</span>
          </li>
        </ul>
      </div>
    </div>

    <el-row class="wisdomEnvironment_temp">
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-sunny.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-rainstorm.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-heavy-snow.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-heavy-rain.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-sandstorm.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-fog.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-snow.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-overcast.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-rain.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-sleet.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-shower.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
      <el-col :span="1" class="item">
        <p class="time">1am</p>
        <img class="icon" src="../../../../static/images/weather-cloudy.png" alt />
        <p class="temp">14°</p>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top:40px;">
      <el-col :span="16">
        <div class="left">
          <div class="imgs">
            <h1>{{$t('deviceTopology.nursingHome1f')}}</h1>
            <div class="imgbox" v-show="showimg">
              <img src="../../../../static/images/floor2.png" alt class="floorlog" />
              <img
                src="../../../../static/images/watersucc.png"
                alt
                style="position:absolute;top:3rem;left:4.8rem;"
              />
              <img
                src="../../../../static/images/somkesucc.png"
                alt
                style="position:absolute;top:3rem;left:6.4rem;"
              />
              <img
                src="../../../../static/images/papersucc.png"
                alt
                style="position:absolute;top:3rem;left:6.4rem;"
              />
              <img
                src="../../../../static/images/waterwarn.png"
                alt
                style="position:absolute;top:4rem;left:7rem;"
              />
              <img
                src="../../../../static/images/somkesucc.png"
                alt
                style="position:absolute;top:4.6rem;left:7rem;"
              />
              <img
                src="../../../../static/images/somkesucc.png"
                alt
                style="position:absolute;top:3.3rem;left:7.14rem;"
              />
              <img
                src="../../../../static/images/paperout.png"
                alt
                style="position:absolute;top:3rem;left:7.3rem;"
              />
              <img
                src="../../../../static/images/smokeout.png"
                alt
                style="position:absolute;top:4.3rem;left:7.8rem;"
              />
              <img
                src="../../../../static/images/paperwarn.png"
                alt
                style="position:absolute;top:3rem;left:8.5rem;"
              />
              <img
                src="../../../../static/images/waterout.png"
                alt
                style="position:absolute;top:3.2rem;left:8.7rem;"
              />

              <img
                src="../../../../static/images/smokewarn.png"
                alt
                style="position:absolute;top:5rem;left:9.2rem;"
              />
              <img
                src="../../../../static/images/waterwarn.png"
                alt
                style="position:absolute;top:4.4rem;left:10rem;"
              />
              <img
                src="../../../../static/images/watersucc.png"
                alt
                style="position:absolute;top:4rem;left:10.4rem;"
              />
              <img
                src="../../../../static/images/somkesucc.png"
                alt
                style="position:absolute;top:3.3rem;left:10.6rem;"
              />
              <img
                src="../../../../static/images/waterout.png"
                alt
                style="position:absolute;top:2.8rem;left:11rem;"
              />
              <img
                src="../../../../static/images/waterwarn.png"
                alt
                style="position:absolute;top:3rem;left:11.3rem;"
              />
              <img
                src="../../../../static/images/papersucc.png"
                alt
                style="position:absolute;top:4rem;left:12.8rem;"
              />
              <img
                src="../../../../static/images/watersucc.png"
                alt
                style="position:absolute;top:4.3rem;left:13.4rem;"
              />
            </div>
            <div class="imgbox" v-show="!showimg">
              <img src="../../../../static/images/floor1.png" alt class="floorlog" />
              <img
                src="../../../../static/images/watersucc.png"
                alt
                style="position:absolute;top:3rem;left:4.8rem;"
              />
              <img
                src="../../../../static/images/waterwarn.png"
                alt
                style="position:absolute;top:3.2rem;left:7rem;"
              />
              <img
                src="../../../../static/images/somkesucc.png"
                alt
                style="position:absolute;top:4.6rem;left:7rem;"
              />
              <img
                src="../../../../static/images/somkesucc.png"
                alt
                style="position:absolute;top:3.3rem;left:7.14rem;"
              />
              <img
                src="../../../../static/images/paperout.png"
                alt
                style="position:absolute;top:2.4rem;left:7.3rem;"
              />
              <img
                src="../../../../static/images/smokeout.png"
                alt
                style="position:absolute;top:4.3rem;left:7.8rem;"
              />
              <img
                src="../../../../static/images/paperwarn.png"
                alt
                style="position:absolute;top:2.4rem;left:8.5rem;"
              />
              <img
                src="../../../../static/images/waterout.png"
                alt
                style="position:absolute;top:3.1rem;left:8.7rem;"
              />
              <img
                src="../../../../static/images/smokewarn.png"
                alt
                style="position:absolute;top:5rem;left:9.2rem;"
              />
              <img
                src="../../../../static/images/waterwarn.png"
                alt
                style="position:absolute;top:4.4rem;left:10rem;"
              />
              <img
                src="../../../../static/images/watersucc.png"
                alt
                style="position:absolute;top:4rem;left:10.4rem;"
              />
              <img
                src="../../../../static/images/somkesucc.png"
                alt
                style="position:absolute;top:2.9rem;left:10.6rem;"
              />
              <img
                src="../../../../static/images/waterout.png"
                alt
                style="position:absolute;top:4rem;left:11rem;"
              />
              <img
                src="../../../../static/images/waterwarn.png"
                alt
                style="position:absolute;top:4rem;left:11.3rem;"
              />
              <img
                src="../../../../static/images/papersucc.png"
                alt
                style="position:absolute;top:5rem;left:12.8rem;"
              />
              <img
                src="../../../../static/images/watersucc.png"
                alt
                style="position:absolute;top:4.4rem;left:13.4rem;"
              />
            </div>
            <div class="select">
              <div class="floor" :class="{active:showimg}" @click="select(0)">1F</div>
              <div class="floor" :class="{active:!showimg}" @click="select(1)">2F</div>
            </div>
            <ul class="icon">
              <li>
                <img src="../../../../static/images/somkesucc.png" alt />
                <span>{{$t('deviceTopology.smoke')}}</span>
              </li>
              <li>
                <img src="../../../../static/images/watersucc.png" alt />
                <span>{{$t('deviceTopology.waterPressure')}}</span>
              </li>
              <li>
                <img src="../../../../static/images/papersucc.png" alt />
                <span>{{$t('deviceTopology.handReport')}}</span>
              </li>
              <li>{{$t('deviceTopology.redTip')}}</li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="right">
          <div class="device">
            <h1>{{$t('deviceTopology.equipmentOverview')}}</h1>
            <ul class="list">
              <li>
                {{$t('deviceTopology.smokeDevNum')}}
                <p>
                  22
                  <span>{{$t('deviceTopology.ge')}}</span>
                </p>
              </li>
              <li>
                {{$t('deviceTopology.waterPressureDevNum')}}
                <p>
                  11
                  <span>{{$t('deviceTopology.ge')}}</span>
                </p>
              </li>
              <li>
                {{$t('deviceTopology.handReportNum')}}
                <p>
                  7
                  <span>{{$t('deviceTopology.ge')}}</span>
                </p>
              </li>
            </ul>
          </div>
          <div class="temp">
            <h1>{{$t('deviceTopology.temperature&humidityParameters')}}</h1>
            <ul class="list">
              <li>
                {{$t('deviceTopology.currentTemperature')}}
                <p style="color:#4287ff;">
                  35.1
                  <span>&#8451;</span>
                </p>
              </li>
              <li>
                {{$t('deviceTopology.currentHumidity')}}
                <p style="color:#1bd3b9;">
                  67.6
                  <span>RH%</span>
                </p>
              </li>
            </ul>
            <ve-line
              :data="chartData"
              :settings="chartSettings"
              width="94%"
              height="300px"
              :legend-visible="false"
              :extend="chartExtend"
            ></ve-line>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="conT" :gutter="20" style="margin-top:20px;">
      <el-col :span="16">
        <div class="box">
          <div class="devStatis">
            <h1>智慧用电设备统计</h1>
            <ul class="list">
              <li>
                设备总安装数
                <p>
                  22
                  <span>{{$t('deviceTopology.ge')}}</span>
                </p>
              </li>
              <li>
                设备在线数
                <p>
                  11
                  <span>{{$t('deviceTopology.ge')}}</span>
                </p>
              </li>
              <li>
                设备在线比例
                <p style="color:#1cbe4e;">
                  7
                  <span>{{$t('deviceTopology.ge')}}</span>
                </p>
              </li>
            </ul>
          </div>
          <div class="devStatis">
            <h1>智慧用电告警统计</h1>
            <ul class="list">
              <li>
                总次数
                <p>
                  22
                  <span>{{$t('deviceTopology.ge')}}</span>
                </p>
              </li>
              <li>
                今日次数
                <p>
                  11
                  <span>{{$t('deviceTopology.ge')}}</span>
                </p>
              </li>
              <li>
                昨日次数
                <p>
                  7
                  <span>{{$t('deviceTopology.ge')}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="box" style="margin-top:20px;">
          <div class="devStatis" style="margin-right:20px;">
            <h1>智慧用电设备分布</h1>
            <ve-histogram
              :data="chartDataT"
              height="300px"
              :legend-visible="false"
              :colors="color"
              :extend="chartExtend"
            ></ve-histogram>
          </div>
          <div class="devStatis">
            <h1>智慧用电区域告警占比</h1>
            <ve-ring :data="chartDataS" height="300px" :extend="chartExtend"></ve-ring>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="alarm">
          <h1>智慧用电告警列表</h1>
          <ul class="alarm_list">
            <li class="title">
              <span>位置</span>
              <span>告警设备</span>
              <span>时间</span>
            </li>
            <li>
              <span>办公室2</span>
              <span>烟感</span>
              <span>19-07-03 14:44:33</span>
            </li>
            <li>
              <span>办公室2</span>
              <span>烟感</span>
              <span>19-07-03 14:44:33</span>
            </li>
            <li>
              <span>办公室2</span>
              <span>烟感</span>
              <span>19-07-03 14:44:33</span>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>

    <div class="energy_statis">
      <h1>能耗统计</h1>
      <ul class="statis_box">
        <li>
          <img src alt />
          <h1>1832.4kWh</h1>
          <p>总耗电量</p>
        </li>
        <li>
          <img src alt />
          <h1>134kWh</h1>
          <p>本月耗电量</p>
        </li>
        <li>
          <img src alt />
          <h1>144kWh</h1>
          <p>上月耗电量</p>
        </li>
        <li>
          <img src alt />
          <h1>49kWh</h1>
          <p>环比电量</p>
        </li>
        <li>
          <img src alt />
          <h1>100t</h1>
          <p>总用水量</p>
        </li>
        <li>
          <img src alt />
          <h1>12t</h1>
          <p>本月用水量</p>
        </li>
        <li>
          <img src alt />
          <h1>15t</h1>
          <p>上月用水量</p>
        </li>
        <li>
          <img src alt />
          <h1>0.5t</h1>
          <p>环比用水量</p>
        </li>
      </ul>
    </div>

    <el-row :gutter="20" class="chart_cont">
      <el-col :span="8">
        <div class="chart">
          <h1>月耗电量统计图</h1>
          <ve-line
            :data="chartDataT"
            height="300px"
            :legend-visible="false"
            :extend="chartExtend"
          ></ve-line>
        </div>
        <div class="chart">
          <h1>月用水量统计图</h1>
          <ve-line
            :data="chartDataT"
            height="300px"
            :legend-visible="false"
            :extend="chartExtend"
          ></ve-line>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="chart">
          <h1>季耗电量统计图</h1>
          <ve-histogram
            :data="chartDataT"
            height="300px"
            :legend-visible="false"
            :colors="color"
            :extend="chartExtend"
          ></ve-histogram>
        </div>
        <div class="chart">
          <h1>季用水量统计图</h1>
          <ve-histogram
            :data="chartDataT"
            height="300px"
            :legend-visible="false"
            :colors="color"
            :extend="chartExtend"
          ></ve-histogram>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="chart">
          <h1>区域用电占比</h1>
          <ve-ring :data="chartDataS" height="300px" :extend="chartExtend"></ve-ring>
        </div>
        <div class="chart">
          <h1>区域用电占比</h1>
          <ve-ring :data="chartDataS" height="300px" :extend="chartExtend"></ve-ring>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { AP } from '../../../utils/mUtils.js';
export default {
    name: '',

    data () {
        this.chartSettings = {
            axisSite: { right: ['当前湿度'] },
            yAxisType: ['KMB', 'percent'],
            yAxisName: ['温度(℃)', '当前湿度']
        };
        return {
            chartData: {
                columns: ['时间', '当前温度', '当前湿度'],
                rows: [
                    { 时间: '14:15', 当前温度: 10, 当前湿度: 0.22 },
                    { 时间: '14:30', 当前温度: 14, 当前湿度: 0.36 },
                    { 时间: '14:45', 当前温度: 15, 当前湿度: 0.34 },
                    { 时间: '15:00', 当前温度: 18, 当前湿度: 0.2 },
                    { 时间: '15:15', 当前温度: 12, 当前湿度: 0.44 },
                    { 时间: '15:30', 当前温度: 11, 当前湿度: 0.55 }
                ]
            },
            chartDataT: {
                columns: ['地点', '耗电量'],
                rows: [
                    { 地点: '健身房', 耗电量: 22 },
                    { 地点: '休闲插座', 耗电量: 23 },
                    { 地点: '阅览室', 耗电量: 13 },
                    { 地点: '多功能室', 耗电量: 37 },
                    { 地点: '卫生间1', 耗电量: 37 },
                    { 地点: '配电', 耗电量: 12 }
                ]
            },
            chartDataS: {
                columns: ['地点', '耗电量'],
                rows: [
                    { 地点: '健身房', 耗电量: 22 },
                    { 地点: '休闲插座', 耗电量: 23 },
                    { 地点: '阅览室', 耗电量: 13 },
                    { 地点: '多功能室', 耗电量: 37 },
                    { 地点: '卫生间1', 耗电量: 37 },
                    { 地点: '配电', 耗电量: 12 }
                ]
            },
            chartExtend: {
                grid: {
                    bottom: '10%',
                    top: '15%'
                },
                barWidth: 15,
                legend: {
                    data: []
                }
            },
            color: ['#f2d879'],
            weatherInfo: {},
            showimg: false
        };
    },
    created () {},
    mounted () {
    // this.getWeather();
    },
    methods: {
        getMap () {
            return new Promise(function (resolve, reject) {
                AP().then(AMap => {
                    var citysearch = new AMap.CitySearch();
                    citysearch.getLocalCity(function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            if (result && result.city && result.bounds) {
                                resolve(result.city);
                            }
                        } else {
                            console.log('定位失败');
                            console.log(result);
                            reject(result.info);
                        }
                    });
                });
            }).catch(function (reason) {
                console.log('catch:', reason);
            });
        },
        async getWeather () {
            let $self = this;
            let countyInfo = await $self.getMap();
            console.log(countyInfo);
            AMap.plugin('AMap.Weather', function () {
                var weather = new AMap.Weather();
                weather.getLive(countyInfo, function (err, data) {
                    if (!err) {
                        console.log('实时天气', data);
                        $self.weatherInfo = data;
                    }
                });

                weather.getForecast(countyInfo, function (err, data) {
                    console.log(err, data);
                });
            });
        }
    }
};
</script>

<style lang='scss' scope>
#wisdomEnvironment {
  padding: 10px;
  // height: 90vh;
  background-color: #f5f5f5;
  .wisdomEnvironment_top {
    //  height: 4.65rem;
    height: 40%;
    background-image: url("../../../../static/images/weather-bg.png");
    background-size: 100% 100%;
    text-align: center;
    padding-top: 0.54rem;
    box-sizing: border-box;
    .fa-map-marker {
      color: #fff;
    }
    .location {
      font-size: 0.38rem;
      color: #fff;
      height: 0.43rem;
      line-height: 0.43rem;
      text-align: left;
      padding-left: 0.65rem;
      img {
        display: inline-block;
        width: 0.347rem;
        vertical-align: middle;
        margin-right: 0.28rem;
      }
    }
    .weather {
      .weather_box {
        width: 33%;
        // background-color: #fff;
        height: 1.76rem;
        display: flex;
        margin: 0.727rem auto;
        li {
          flex: 1;
          // border: 1px solid #000;
          box-sizing: border-box;
        }
        .weather_icon {
          width: 100%;
          margin-top: -12%;
          // height: 100%;
          // display: inline-block;
        }
        .weather_num {
          font-size: 1.55rem;
          line-height: 1.56rem;
          color: #fff;
          // font-weight: 400;
          font-family: Microsoft YaHei;
        }
        .weather_name {
          font-size: 0.43rem;
          color: #fff;
          margin-top: 0.1rem;
        }
        .weather_random {
          font-size: 0.33rem;
          color: #fff;
          margin-top: 0.34rem;
        }
      }
      .allinfo {
        margin: 0 auto;
        color: #fff;
        width: 12rem;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .wisdomEnvironment_temp {
    //  height: 2.11rem;
    height: 15%;
    box-sizing: border-box;
    padding: 10px 10px;
    background-color: #fff;
    border-bottom: 1px solid #f6f6f6;
    .time {
      font-size: 5.25px;
      color: rgb(153, 153, 153);
    }
    .icon {
      display: block;
      width: 23px;
      margin: 5px auto;
    }
    .temp {
      font-size: 5.25px;
      color: rgb(153, 153, 153);
    }
    .item {
      text-align: center;
      margin-top: 0.4rem;
    }
  }
  .left {
    .imgs {
      height: 9.3rem;
      background: #fff;
      padding: 30px;
      position: relative;
      h1 {
        font-size: 22px;
        font-weight: normal;
      }
      .imgbox {
        position: relative;
        .floorlog {
          display: block;
          width: 18rem;
          height: 10rem;
          margin: -1rem auto 0;
        }
      }
      .select {
        position: absolute;
        top: 0.6rem;
        right: 30px;
        .floor {
          width: 0.7rem;
          height: 0.7rem;
          text-align: center;
          line-height: 0.7rem;
          border: 1px solid #eeeeee;
          font-size: 0.26rem;
          cursor: pointer;
        }
        .active {
          background: #2d86e1;
          border: 1px solid #2d86e1;
          color: white;
        }
      }
      .icon {
        position: absolute;
        top: 7rem;
        left: 0.4rem;
        li {
          margin-top: 0.2rem;
          color: #999999;
          img {
            vertical-align: middle;
          }
        }
      }
    }
  }
  .right {
    .device {
      padding: 30px;
      height: 2.9rem;
      box-sizing: border-box;
      background: #fff;
      h1 {
        font-weight: normal;
      }
      .list {
        width: 6rem;
        margin-top: 0.4rem;
        display: flex;
        justify-content: space-between;
        li {
          font-size: 0.2rem;
          color: #666;
          p {
            font-size: 0.58rem;
            color: #2d86e1;
            margin-top: 0.1rem;
          }
          span {
            font-size: 0.2rem;
          }
        }
      }
    }
    .temp {
      height: 6.3rem;
      background: #fff;
      margin-top: 20px;
      padding: 30px;
      h1 {
        font-weight: normal;
        font-size: 0.3rem;
      }
      .list {
        width: 4rem;
        margin-top: 0.4rem;
        display: flex;
        justify-content: space-between;
        li {
          font-size: 0.2rem;
          color: #666;

          p {
            font-size: 0.68rem;
            color: #2d86e1;
            margin-top: 0.1rem;
          }
          span {
            font-size: 0.2rem;
          }
        }
      }
    }
  }
  .conT {
    .box {
      display: flex;
      justify-content: space-between;
    }
    .devStatis {
      width: 9.3rem;
      padding: 30px;
      box-sizing: border-box;
      background: #fff;
      h1 {
        font-weight: normal;
        font-size: 0.3rem;
      }
      .list {
        width: 6rem;
        margin-top: 0.4rem;
        display: flex;
        justify-content: space-between;
        li {
          font-size: 0.2rem;
          color: #666;
          p {
            font-size: 0.58rem;
            color: #2d86e1;
            margin-top: 0.1rem;
          }
          span {
            font-size: 0.2rem;
          }
        }
      }
    }
    .alarm {
      padding: 30px;
      background: #fff;
      width: 7.8rem;
      h1 {
        font-weight: normal;
        font-size: 0.3rem;
      }
      .alarm_list {
        li {
          padding: 12px 10px;
          border-bottom: 1px solid rgb(238, 238, 238);
          span {
            width: 2.4rem;
            display: inline-block;
            color: rgb(153, 153, 153);
          }
        }
        .title {
          span {
            color: rgb(51, 51, 51);
          }
        }
      }
    }
  }
  .energy_statis {
    padding: 30px;
    background: #fff;
    margin-top: 20px;
    h1 {
      font-weight: normal;
      font-size: 0.3rem;
    }
    .statis_box {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      li {
        img {
          width: 0.9rem;
          height: 0.9rem;
        }
        box-sizing: border-box;
        padding: 0.64rem;
        width: 3.4rem;
        height: 3.4rem;
        text-align: center;
        h1 {
          font-size: 0.3rem;
          font-weight: bold;
          color: rgb(102, 102, 102);
          margin: 0.3rem 0;
        }
      }
    }
    li:nth-child(2n-1) {
      background: rgb(247, 247, 247);
    }
    li:nth-child(2n) {
      background: rgb(242, 242, 242);
    }
  }
  .chart_cont {
    margin-top: 20px;
    .chart {
      padding: 38px 30px;
      background: #fff;
      box-sizing: border-box;
      margin-bottom: 20px;
      h1 {
        font-size: 22px;
        color: rgb(51, 51, 51);
        font-weight: normal;
      }
    }
  }
}
</style>
