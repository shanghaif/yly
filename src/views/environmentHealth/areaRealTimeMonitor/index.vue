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

    <el-row>
      <el-col :span="8">
          <el-card class="left">
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
              height="200px"
              :legend-visible="false"
              :extend="chartExtend"
            ></ve-line>
          </div>
          </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="right">
          <div class="params">
            <h1>其他参数</h1>
            <ul class="list">
              <li>
                <img src="../../../../static/images/uv.png" alt="" />
                <h4>紫外线指数</h4>
                <p>3</p>
              </li>
              <li>
                <img src="../../../../static/images/pm2.5.png" alt="" />
                <h4>PM2.5含量</h4>
                <p>51μg/m3</p>
              </li>
              <li>
                <img src="../../../../static/images/c02.png" alt="" />
                <h4>CO<span>2</span>含量</h4>
                <p>400 ppm</p>
              </li>
              <li>
                <img src="../../../../static/images/light-intensity.png" alt="" />
                <h4>光照强度</h4>
                <p>5 wlux</p>
              </li>
              <li>
                <img src="../../../../static/images/wind-speed.png" alt="" />
                <h4>风速</h4>
                <p>5 m/s</p>
              </li>
            </ul>
          </div>
        </el-card>
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
        },
        select(n) {
          this.showimg = n === 0 ? true : false
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
    .temp {
      height: 6rem;
      background: #fff;
      margin-top: 20px;
      // padding: 30px;
      h1 {
        // font-weight: normal;
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
  .right {
    .params {
      height: 6rem;
      background: #fff;
      margin-top: 20px;
      // padding: 30px;
      h1 {
        // font-weight: normal;
        font-size: 0.3rem;
      }
      .list {
        display: flex;
        justify-content: space-around;
        li {
          margin-top: 50px;
          text-align: center;
          h4 {
            margin: 20px;
            font-weight: 400;
            font-size: 0.2rem;
            color: rgb(153, 153, 153);
          }
          p {
            font-weight: 500;
            font-size: 0.6rem;
          }
        }
      }
    }
  }
}
</style>
