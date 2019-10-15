<template>
  <div id="realtimecontrol">
    <div class="device_top">
      <el-select v-model="value" :placeholder="$t('common.pleaseSelect')">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input v-model="input" :placeholder="$t('realtimecontrol.pleaseInput')" clearable></el-input>
      <el-button type="primary">{{$t('common.query')}}</el-button>
    </div>
    <div class="device_body">
      <el-col :span="24">
        <ul class="device_body_lists">
          <el-row :gutter="13">
           <el-col :xs="12" :sm="6" class="el-col-lg-4-8">
              <li class="item" @click="allDel && selectItem($event,'1')" :class="{selectStyle1 : chooseArr.includes('1')}">
                <img src="../../../../static/images/terminal.png" alt class="item_img">
                <p>
                  {{$t('common.deviceName')}}：
                  <span>设备名称1</span>
                </p>
                <p>
                  {{$t('realtimecontrol.devStatus')}}：
                  <span class="status_red">异常</span>
                </p>
                <p>
                   {{$t('realtimecontrol.devClassify')}}：
                  <span>分类1</span>
                </p>
                <p class="item_address">
                  {{$t('realtimecontrol.commAddress')}}：
                  <span>115.192.58.181</span>
                </p>
                <i class="delete checkbox"><span class="el-icon-check" v-show="chooseArr.includes('1')"></span></i>
                <i class="operator">
                  
                  <el-dropdown trigger="click">
                    <span class="detail" @click="visible = !visible">
                    <img src="../../../../static/images/detail.png" alt="">
                  </span>
                   <el-dropdown-menu slot="dropdown" v-model="visible">
                      <el-dropdown-item> {{$t('realtimecontrol.open')}}</el-dropdown-item>
                      <el-dropdown-item> {{$t('realtimecontrol.close')}}</el-dropdown-item>
                      <el-dropdown-item> {{$t('realtimecontrol.restart')}}</el-dropdown-item>
                      <el-dropdown-item> {{$t('realtimecontrol.threshold')}}</el-dropdown-item>
                      <el-dropdown-item @click.native="dialogVisible1 = true">{{$t('realtimecontrol.realtimeData')}}</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </i>
              </li>
            </el-col>
            <el-col :xs="12" :sm="6" class="el-col-lg-4-8">
              <li class="item" @click="allDel && selectItem($event,'1')" :class="{selectStyle1 : chooseArr.includes('1')}">
                <img src="../../../../static/images/terminal.png" alt class="item_img">
                <p>
                  设备名称：
                  <span>设备名称1</span>
                </p>
                <p>
                  设备状态：
                  <span class="status_red">异常</span>
                </p>
                <p>
                  设备分类：
                  <span>分类1</span>
                </p>
                <p class="item_address">
                  通信地址：
                  <span>115.192.58.181</span>
                </p>
                <i class="delete checkbox"><span class="el-icon-check" v-show="chooseArr.includes('1')"></span></i>
                <i class="operator">
                  
                  <el-dropdown trigger="click">
                    <span class="detail" @click="visible = !visible">
                    <img src="../../../../static/images/detail.png" alt="">
                  </span>
                   <el-dropdown-menu slot="dropdown" v-model="visible">
                      <el-dropdown-item>开</el-dropdown-item>
                      <el-dropdown-item>关</el-dropdown-item>
                      <el-dropdown-item>重启</el-dropdown-item>
                      <el-dropdown-item>阈值</el-dropdown-item>
                      <el-dropdown-item @click.native="dialogVisible1 = true">实时数据</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </i>
              </li>
            </el-col>
            <el-col :xs="12" :sm="6" class="el-col-lg-4-8">
              <li class="item" @click="allDel && selectItem($event,'1')" :class="{selectStyle1 : chooseArr.includes('1')}">
                <img src="../../../../static/images/terminal.png" alt class="item_img">
                <p>
                  设备名称：
                  <span>设备名称1</span>
                </p>
                <p>
                  设备状态：
                  <span class="status_gray">离线</span>
                </p>
                <p>
                  设备分类：
                  <span>分类1</span>
                </p>
                <p class="item_address">
                  通信地址：
                  <span>115.192.58.181</span>
                </p>
                <i class="delete checkbox"><span class="el-icon-check" v-show="chooseArr.includes('1')"></span></i>
                <i class="operator">
                  <span class="detail" @click="dialogVisible = true">
                    <img src="../../../../static/images/detail.png" alt="">
                  </span>
                  <span class="edit" @click="editDialogVisible = true">
                     <img src="../../../../static/images/edit.png" alt="">
                  </span>
                </i>
              </li>
            </el-col>
            <el-col :xs="12" :sm="6" class="el-col-lg-4-8">
              <li class="item" @click="allDel && selectItem($event,'1')" :class="{selectStyle1 : chooseArr.includes('1')}">
                <img src="../../../../static/images/terminal.png" alt class="item_img">
                <p>
                  设备名称：
                  <span>设备名称1</span>
                </p>
                <p>
                  设备状态：
                  <span class="status_green">正常</span>
                </p>
                <p>
                  设备分类：
                  <span>分类1</span>
                </p>
                <p class="item_address">
                  通信地址：
                  <span>115.192.58.181</span>
                </p>
                <i class="delete checkbox"><span class="el-icon-check" v-show="chooseArr.includes('1')"></span></i>
                <i class="operator">
                  <span class="detail" @click="dialogVisible = true">
                    <img src="../../../../static/images/detail.png" alt="">
                  </span>
                  <span class="edit" @click="editDialogVisible = true">
                     <img src="../../../../static/images/edit.png" alt="">
                  </span>
                </i>
              </li>
            </el-col>
            <el-col :xs="12" :sm="6" class="el-col-lg-4-8">
              <li class="item" @click="allDel && selectItem($event,'1')" :class="{selectStyle1 : chooseArr.includes('1')}">
                <img src="../../../../static/images/terminal.png" alt class="item_img">
                <p>
                  设备名称：
                  <span>设备名称1</span>
                </p>
                <p>
                  设备状态：
                  <span class="status_green">正常</span>
                </p>
                <p>
                  设备分类：
                  <span>分类1</span>
                </p>
                <p class="item_address">
                  通信地址：
                  <span>115.192.58.181</span>
                </p>
                <i class="delete checkbox"><span class="el-icon-check" v-show="chooseArr.includes('1')"></span></i>
                <i class="operator">
                  <span class="detail" @click="dialogVisible = true">
                    <img src="../../../../static/images/detail.png" alt="">
                  </span>
                  <span class="edit" @click="editDialogVisible = true">
                     <img src="../../../../static/images/edit.png" alt="">
                  </span>
                </i>
              </li>
            </el-col>
            <el-col :xs="12" :sm="6" class="el-col-lg-4-8">
              <li class="item" @click="allDel && selectItem($event,'1')" :class="{selectStyle1 : chooseArr.includes('1')}">
                <img src="../../../../static/images/terminal.png" alt class="item_img">
                <p>
                  设备名称：
                  <span>设备名称1</span>
                </p>
                <p>
                  设备状态：
                  <span class="status_green">正常</span>
                </p>
                <p>
                  设备分类：
                  <span>分类1</span>
                </p>
                <p class="item_address">
                  通信地址：
                  <span>115.192.58.181</span>
                </p>
                <i class="delete checkbox"><span class="el-icon-check" v-show="chooseArr.includes('1')"></span></i>
                <i class="operator">
                  <span class="detail" @click="dialogVisible = true">
                    <img src="../../../../static/images/detail.png" alt="">
                  </span>
                  <span class="edit" @click="editDialogVisible = true">
                     <img src="../../../../static/images/edit.png" alt="">
                  </span>
                </i>
              </li>
            </el-col>
            <el-col :xs="12" :sm="6" class="el-col-lg-4-8">
              <li class="item" @click="allDel && selectItem($event,'1')" :class="{selectStyle1 : chooseArr.includes('1')}">
                <img src="../../../../static/images/terminal.png" alt class="item_img">
                <p>
                  设备名称：
                  <span>设备名称1</span>
                </p>
                <p>
                  设备状态：
                  <span class="status_green">正常</span>
                </p>
                <p>
                  设备分类：
                  <span>分类1</span>
                </p>
                <p class="item_address">
                  通信地址：
                  <span>115.192.58.181</span>
                </p>
                <i class="delete checkbox"><span class="el-icon-check" v-show="chooseArr.includes('1')"></span></i>
                <i class="operator">
                  <span class="detail" @click="dialogVisible = true">
                    <img src="../../../../static/images/detail.png" alt="">
                  </span>
                  <span class="edit" @click="editDialogVisible = true">
                     <img src="../../../../static/images/edit.png" alt="">
                  </span>
                </i>
              </li>
            </el-col>
            <el-col :xs="12" :sm="6" class="el-col-lg-4-8">
              <li class="item" @click="allDel && selectItem($event,'1')" :class="{selectStyle1 : chooseArr.includes('1')}">
                <img src="../../../../static/images/terminal.png" alt class="item_img">
                <p>
                  设备名称：
                  <span>设备名称1</span>
                </p>
                <p>
                  设备状态：
                  <span class="status_green">正常</span>
                </p>
                <p>
                  设备分类：
                  <span>分类1</span>
                </p>
                <p class="item_address">
                  通信地址：
                  <span>115.192.58.181</span>
                </p>
                <i class="delete checkbox"><span class="el-icon-check" v-show="chooseArr.includes('1')"></span></i>
                <i class="operator">
                  <span class="detail" @click="dialogVisible = true">
                    <img src="../../../../static/images/detail.png" alt="">
                  </span>
                  <span class="edit" @click="editDialogVisible = true">
                     <img src="../../../../static/images/edit.png" alt="">
                  </span>
                </i>
              </li>
            </el-col>
            <el-col :xs="12" :sm="6" class="el-col-lg-4-8">
              <li class="item" @click="allDel && selectItem($event,'1')" :class="{selectStyle1 : chooseArr.includes('1')}">
                <img src="../../../../static/images/terminal.png" alt class="item_img">
                <p>
                  设备名称：
                  <span>设备名称1</span>
                </p>
                <p>
                  设备状态：
                  <span class="status_green">正常</span>
                </p>
                <p>
                  设备分类：
                  <span>分类1</span>
                </p>
                <p class="item_address">
                  通信地址：
                  <span>115.192.58.181</span>
                </p>
                <i class="delete checkbox"><span class="el-icon-check" v-show="chooseArr.includes('1')"></span></i>
                <i class="operator">
                  <span class="detail" @click="dialogVisible = true">
                    <img src="../../../../static/images/detail.png" alt="">
                  </span>
                  <span class="edit" @click="editDialogVisible = true">
                     <img src="../../../../static/images/edit.png" alt="">
                  </span>
                </i>
              </li>
            </el-col>
          </el-row>
        </ul>
      </el-col>
    </div>
    <div class="device_footer">
      <el-button type="primary">{{$t('realtimecontrol.open')}}</el-button>
      <el-button type="primary">{{$t('realtimecontrol.close')}}</el-button>
      <el-button type="primary" >{{$t('realtimecontrol.restart')}}</el-button>
      <el-button type="primary" >{{$t('realtimecontrol.threshold')}}</el-button>
    </div>

  <!-- 实时数据弹框 -->
    <el-dialog
      class="realtime_data_dialog clearfix"
      :title="$t('realtimecontrol.realtimeData')"
      :visible.sync="dialogVisible1"
      width="1000px"
     >
      <div class="dialog_left pull-left">
        <div class="dev_info">
          <h3>{{$t('realtimecontrol.devInfo')}}</h3>
          <p>{{$t('common.deviceName')}}：<span>设备名称1</span></p>
          <p>{{$t('realtimecontrol.devStatus')}}：<span>正常</span></p>
          <p>{{$t('realtimecontrol.devClassify')}}：<span>分类1</span></p>
          <p>{{$t('realtimecontrol.commAddress')}}:<span>115.152.58.181</span></p>
        </div>
        <div class="realtime_data">
          <h3>{{$t('realtimecontrol.realtimeData')}}</h3>
          <p>{{$t('realtimecontrol.currentA')}}：<span>2A</span></p>
          <p>{{$t('realtimecontrol.voltageA')}}：<span>220V</span></p>
          <p>{{$t('realtimecontrol.powerA')}}：<span>440W</span></p>
          <p>{{$t('realtimecontrol.temperatureA')}}：<span>60℃</span></p>
          <p>{{$t('realtimecontrol.residualCurrent')}}：<span>2A</span></p>
        </div>
      </div>
      <div class="dialog_right pull-left">
         <h3>{{$t('realtimecontrol.currentTrendChart')}}</h3>
         <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
            <el-tab-pane :label="$t('realtimecontrol.current')" name="first" lazy>
              <ve-line :data="currentData" :settings="currentChartSettings" style="width: 10rem;" :extend="chartExtend"></ve-line>
            </el-tab-pane>
            <el-tab-pane :label="$t('realtimecontrol.voltage')" name="second" lazy>
                <ve-line :data="currentData" :settings="currentChartSettings" style="width: 10rem;" :extend="chartExtend"></ve-line>
            </el-tab-pane>
            <el-tab-pane :label="$t('realtimecontrol.power')" name="third" lazy>
               <ve-line :data="currentData" :settings="currentChartSettings" style="width: 10rem;" :extend="chartExtend"></ve-line>
            </el-tab-pane>
            <el-tab-pane :label="$t('realtimecontrol.temperature')" name="fourth" lazy>
               <ve-line :data="currentData" :settings="currentChartSettings" style="width: 10rem;" :extend="chartExtend"></ve-line>
            </el-tab-pane>
            <el-tab-pane :label="$t('realtimecontrol.residualCurrent')" name="five" lazy>
               <ve-line :data="currentData" :settings="currentChartSettings" style="width: 10rem;" :extend="chartExtend"></ve-line>
            </el-tab-pane>
        </el-tabs>
      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
      </span> -->
   </el-dialog>


   

  </div>
</template>

<script>
export default {
    name: '',

    data () {
        this.currentChartSettings = {
            metrics: ['电流(A)'],
            dimension: ['日期'],
            yAxisName: ['电流(A)']
        };
        return {
            options: [
                {
                    value: '选项1',
                    label: '设备名称'
                },
                {
                    value: '选项2',
                    label: '设备EIMI'
                },
                {
                    value: '选项3',
                    label: '设备分类'
                },
                {
                    value: '选项4',
                    label: '通信地址'
                },
                {
                    value: '选项5',
                    label: '设备ID'
                }
            ],
            value: '',
            input: '',
            dialogVisible: false,
            addDialogVisible: false,
            editDialogVisible: false,
            formLabelAlign: {
                devName: '',
                devEIMI: '',
                devAddress: '',
                devLongitude: '',
                devLatitude: '',
                devNote: ''
            },
            allDel: false,
            isSelect: false,
            index: '',
            chooseArr: [],
            visible: false,
            dialogVisible1: false,
            activeName: 'first',
            currentData: {
                columns: ['日期', '电流(A)'],
                rows: [
                    { '日期': '1/1', '电流(A)': 2},
                    { '日期': '1/2', '电流(A)': 4 },
                    { '日期': '1/3', '电流(A)': 2 },
                    { '日期': '1/4', '电流(A)': 6 },
                    { '日期': '1/5', '电流(A)': 1 },
                    { '日期': '1/6', '电流(A)': 3 }
                ]
            },
            chartExtend: {
                legend: {
                    bottom: 0,

                    textStyle: {
                        color: '#409EFF',
                        fontSize: 12
                    }
                },
                xAxis: {
                    show: false
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

            }

        };
    },

    methods: {
        dele () {
            this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {});
        },
        // 点击批量删除按钮
        batchDel () {
            this.allDel = true;
        },
        selectItem (item, index) {
            if (this.chooseArr.includes(index)) {
                this.chooseArr = this.chooseArr.filter(function (ele) { return ele != index; });
            } else {
                this.chooseArr.push(index);
            }
            console.log('this.chooseArr', this.chooseArr);
        },
        //    取消删除
        cancleDel () {
            this.allDel = false;
            this.isSelect = false;
            this.chooseArr = [];
        },
        //    确定删除
        deleteItem () {
            console.log('批量删除');
        },
        // tab切换
        handleClick (tab, event) {
        // console.log(tab, event);
        }

    }
};
</script>

<style lang='scss' scope>
#realtimecontrol {
  background-color: #fff;
  box-sizing: border-box;
  .device_top {
    padding-left:10px;
    height: 80px;
    line-height:80px;
    background-color: #fff;
    box-sizing: border-box;
    .el-input {
      width: 217px;
      margin-right: 10px;
    }
  }
  .device_body {
    height: 61vh;
    background-color: rgb(243, 243, 243);
    padding: 10px;
    padding-top: 0;
    overflow-y: auto;
    .device_body_lists {
      .item {
        border: 1px solid transparent;
        background-color: #fff;
        box-sizing: border-box;
        // height: 200px;
        margin-top: 15px;
        padding: 15px;
        position: relative;
        .status_green {
            color: rgb(34,172,56);
        }
        .status_red {
            color: rgb(228,0,18);
        }
        .status_gray {
            color: rgb(204,204,204);
        }
        .item_img {
          display: block;
          width: 0.65rem;
          height: 0.65rem;
          margin-bottom: 0.3rem;
        }
        p {
          font-size: 14px;
          color: rgb(153, 153, 153);
          margin-bottom: 0.2rem;
          span {
            color: rgb(51, 51, 51);
          }
        }
        .item_address {
          margin-bottom: 0;
        }
        .delete {
          position: absolute;
          right: 15px;
          top: 15px;
          font-size: 18px;
          color: rgb(153, 153, 153);
        }
        .operator {
          position: absolute;
          right: 15px;
          bottom: 12px;
          font-size: 14px;
          .detail {
            background-color: rgb(236, 243, 252);
            padding: 4px;
            border-radius: 2px;
            display: inline-block;
            width: 20px;
            height: 20px;
            
            box-sizing: border-box;
            margin-right: 5px;
            img {
              display: block;
              height: 12px;
              width: 12px;

            }
          }
          .edit {
            background-color: rgb(236, 243, 252);
            padding: 4px;
            border-radius: 2px;
            display: inline-block;
            width: 20px;
            height: 20px;
            box-sizing: border-box;
            img {
              display: block;
              height: 12px;
              width: 12px;

            }
          }
        }
      }

      .checkbox {
          display: block;
          border: 1px solid rgb(243, 243, 243);
          width: 18px;
          height: 18px;
          line-height: 18px;
          text-align: center;
            span {
                font-size: 17px;
                color: #fff;
            }
      }
      .selectStyle {
          background-color: rgb(24,144,255);
          border-color: rgb(24,144,255);
      }
      .selectStyle1 {
          border-color: rgb(24,144,255);
      }
    }
  }
  .device_footer {
    height: 80px;
    line-height: 80px;
    background-color: #fff;
    padding-left: 10px;
  }
 
 
  .realtime_data_dialog {
     .el-dialog__header {
          border-bottom: 1px solid rgb(243, 243,243);
          padding: 10px;
          padding-left: 20px;
      }
      .el-dialog__title {
          font-size: 16px;
          color: rgb(51, 51, 51);
      }
      .el-dialog__headerbtn {
          top: 12px;
          right: 10px;
      }
      .el-dialog__body {
        padding: 10px;
        overflow: hidden;
        .dialog_left {
          display: inline-block;
          width: 255px;
          .dev_info {
            padding-left: 10px;
            border-bottom: 1px solid rgb(243, 243, 243);
            h3 {
              font-size: 18px;
              color: #000;
              margin-bottom: 15px;
            }
            p {
              color: rgb(153, 153, 153);
              font-size: 14px;
              margin: 8px 0;
              span {
                color: rgb(102,102,102);
              }
            }
          }
          .realtime_data {
            padding-left: 10px;
            h3 {
              font-size: 18px;
              color: #000;
              margin-top: 10px;
              margin-bottom: 15px;
            }
            p {
              color: rgb(153, 153, 153);
              font-size: 14px;
              margin: 8px 0;
              span {
                color: rgb(102,102,102);
              }
            }
          }
        }
        .dialog_right {
          height: 530px;
          border-left: 1px solid rgb(243, 243, 243);
          padding-left: 10px;
          h3 {
            font-size: 18px;
            color: #000;
            margin-bottom: 15px;
          }

        }
      }
      
  }

  @media only screen and (min-width: 1200px) {
    .el-col-lg-4-8 {
      width: 20%;
    }
  }
}
</style>

