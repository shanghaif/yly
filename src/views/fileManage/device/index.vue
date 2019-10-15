<template>
  <div id="device">
    <div class="device_top">
      <el-select v-model="value" :placeholder="$t('common.pleaseSelect')" @change="changeVal">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input v-model="input" :placeholder="$t('deviceManage.pleaseInput')" clearable v-show="!devClassifyShow"></el-input>
      <el-select v-model="devClassifyVal" :placeholder="$t('common.pleaseSelect')" v-show="devClassifyShow">
        <el-option
          v-for="item in devClassifOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="primary" @click.native="queryByFactor">{{ $t('common.query')}}</el-button>
    </div>
    <div class="device_body">
      <el-col :span="24">
        <ul class="device_body_lists" >
          <el-row :gutter="13" v-infinite-scroll="load">
            <el-col :xs="12" :sm="6" class="el-col-lg-4-8" v-for="(item,index) in deviceData" :key="index">
              <li
                class="item"
                @click="allDel && selectItem($event,index+1, item.rtuId)"
                :class="{selectStyle1 : chooseArr.includes(item.rtuId)}"
              >
                <img :src="item.deviceType|getDevTypeIcon" alt class="item_img" />
                <p>
                  {{ $t('common.deviceName')}}：
                  <span>{{item.disc}}</span>
                </p>
                <p>
                  {{ $t('deviceManage.deviceEIMI')}}：
                  <span>{{item.simCode}}</span>
                </p>
                <p>
                  {{ $t('deviceManage.deviceType')}}：
                  <span>{{item.typeName}}</span>
                </p>
                <p class="item_address">
                  {{ $t('deviceManage.commAddress')}}：
                  <span>{{item.commAddress}}</span>
                </p>
                <i class="el-icon-close delete" @click="dele(item)" v-show="!allDel"></i>
                <i
                  class="delete checkbox"
                  v-show="allDel"
                  :class="{selectStyle : chooseArr.includes(item.rtuId)}"
                >
                  <span class="el-icon-check" v-show="chooseArr.includes(item.rtuId)"></span>
                </i>
                <i class="operator" v-show="!allDel">
                  <span class="detail" @click="showDetail(item)">
                    <img src="../../../../static/images/detail.png" alt />
                  </span>
                  <span class="edit" @click="editDev(item)">
                    <img src="../../../../static/images/edit.png" alt />
                  </span>
                </i>
              </li>
            </el-col>
          </el-row>
        </ul>
      </el-col>
    </div>
    <div class="device_footer">
      <el-button
        type="primary"
        @click="clickAddDev"
        v-show="!allDel"
      >{{ $t('common.add')}}</el-button>
      <el-button
        type="primary"
        @click="batchDel"
        v-show="!allDel"
      >{{ $t('deviceManage.multipleDelete')}}</el-button>
      <el-button type="primary" @click="cancleDel()" v-show="allDel">{{ $t('common.cancel')}}</el-button>
      <el-button type="primary" @click="deleteItem()" v-show="allDel">{{ $t('common.delete')}}</el-button>
    </div>


    <!-- 设备详情弹框 -->
    <el-dialog
      class="detail_dialog"
      :title="$t('deviceManage.deviceDetails')"
      :visible.sync="dialogVisible"
      width="420px"
      >
      <img :src="detailData.deviceType|getDevTypeIcon" alt class="detail_img" />
      <p>
        {{ $t('common.deviceName')}}：
        <span>{{detailData.disc}}</span>
      </p>
      <p>
        {{ $t('deviceManage.deviceEIMI')}}：
        <span>{{detailData.simCode}}</span>
      </p>
      <p>
        {{ $t('deviceManage.deviceType')}}：
        <span>{{detailData.typeName}}</span>
      </p>
      <p>
        {{ $t('deviceManage.commAddress')}}：
        <span>{{detailData.commAddress}}</span>
      </p>
      <p>
        {{ $t('deviceManage.location')}}：
        <span>{{detailData.localtion}}</span>
      </p>
      <p>
        {{ $t('deviceManage.installAddress')}}:
        <span>{{detailData.installer}}</span>
      </p>
      <p>
        {{ $t('deviceManage.longitude')}}:
        <span>{{detailData.longitude}}</span>
      </p>
      <p>
        {{ $t('deviceManage.dimension')}}:
        <span>{{detailData.dimension}}</span>
      </p>
      <p>
        {{ $t('deviceManage.note')}}:
        <span>{{detailData.describe}}</span>
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="dialogVisible = false"
          style="width: 100%;"
        >{{ $t('common.yes')}}</el-button>
      </span>
    </el-dialog>

    <!-- 增加设备 -->
    <el-dialog
      class="addDev_dialog"
      :title="$t('deviceManage.addDevice')"
      :visible.sync="addDialogVisible"
      width="510px"
     >
      <el-form label-position="left" label-width="80px" ref="formLabelAlign1" :model="formLabelAlign1" :rules="rules">
        <el-form-item :label="$t('common.deviceName')" prop="devName">
          <el-input v-model="formLabelAlign1.devName"></el-input>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.deviceEIMI')" prop="devEIMI">
          <el-input v-model="formLabelAlign1.devEIMI"></el-input>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.deviceType')" required>
          <el-select v-model="addTypeVal" :placeholder="$t('deviceManage.pleaseSelectDev')" @change="getAddType">
            <el-option
              v-for="item in devClassifOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.commAddress')" prop="devAddress">
          <el-input v-model="formLabelAlign1.devAddress"></el-input>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.location')" required>
           <el-cascader
            v-model="addLocationVal"
            :options="locationOptions"
            :props="{ expandTrigger: 'hover' }"
            style="width: 100%"
            :placeholder="$t('deviceManage.pleaseSelectAddress')"
            @change="handleChange1">
          </el-cascader>
          <!-- <el-select v-model="value" :placeholder="$t('deviceManage.pleaseSelectAddress')">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select> -->
        </el-form-item>
        <el-form-item :label="$t('deviceManage.installAddress')" prop="installAddress">
          <el-input v-model="formLabelAlign1.installAddress"></el-input>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.longitude')" prop="devLongitude">
          <el-input v-model="formLabelAlign1.devLongitude"></el-input>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.dimension')" prop="devLatitude">
          <el-input v-model="formLabelAlign1.devLatitude "></el-input>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.note')">
          <el-input v-model="formLabelAlign1.devNote" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="checkAddDev('formLabelAlign1')"
          style="width: 100%;"
        >{{$t('deviceManage.newBuild')}}</el-button>
      </span>
    </el-dialog>

    <!-- 编辑设备弹框 -->
    <el-dialog
      class="addDev_dialog editDev_dialog"
      :title="$t('deviceManage.editDev')"
      :visible.sync="editDialogVisible"
      width="510px"
      >
      <el-form label-position="left" label-width="80px" :model="formLabelAlign">
        <el-form-item :label="$t('common.deviceName')">
          <el-input v-model="formLabelAlign.devName"></el-input>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.deviceEIMI')">
          <el-input v-model="formLabelAlign.devEIMI"></el-input>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.deviceType')">
          <el-select v-model="editDeviceTypeVal" :placeholder="$t('deviceManage.pleaseSelectDev')" @change="getEditType">
            <el-option
              v-for="item in devClassifOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.commAddress')">
          <el-input v-model="formLabelAlign.devAddress"></el-input>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.location')">
          <el-cascader
            v-model="locationVal"
            :options="locationOptions"
            :props="{ expandTrigger: 'hover' }"
            style="width: 100%"
            :placeholder="$t('deviceManage.pleaseSelectAddress')"
            @change="handleChange">
          </el-cascader>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.installAddress')">
          <!-- <el-select v-model="value" :placeholder="$t('deviceManage.pleaseSelectInstallAddress')">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option> -->
            <el-input v-model="formLabelAlign.installAddress"></el-input>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.longitude')">
          <el-input v-model="formLabelAlign.devLongitude"></el-input>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.dimension')">
          <el-input v-model="formLabelAlign.devLatitude "></el-input>
        </el-form-item>
        <el-form-item :label="$t('deviceManage.note')">
          <el-input v-model="formLabelAlign.devNote" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="checkEdit"
          style="width: 100%;"
        >{{$t('common.yes')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name: '',

    data () {
        return {
            options: [
                {
                    value: 'disc',
                    label: this.$t('common.deviceName')
                },
                {
                    value: 'simCode',
                    label: this.$t('common.devEIMI')
                },
                {
                    value: 'type',
                    label: this.$t('common.devClassify')
                },
                {
                    value: 'commAddress',
                    label: this.$t('common.commAddress')
                }
            ],
            devClassifOptions: [],
            locationOptions: [],
            deviceData: [],
            detailData: {},
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
                devNote: '',
                installAddress: ''
            },
            formLabelAlign1: {
                devName: '',
                devEIMI: '',
                devAddress: '',
                devLongitude: '',
                devLatitude: '',
                devNote: '',
                installAddress: ''
            },
            rules: {
                devName: [
                    { required: true, message: '请输入设备名称', trigger: 'blur' }
                ],
                devEIMI: [
                    { required: true, message: '请输入设备EIMI', trigger: 'blur'}
                ],
                devAddress: [
                    {required: true, message: '请输入通信地址', trigger: 'blur'}
                ],
                installAddress: [
                    {required: true, message: '请输入安装位置', trigger: 'blur'}
                ],
                devLongitude: [
                    {required: true, message: '请输入经度', trigger: 'blur'}
                ],
                devLatitude: [
                    {required: true, message: '请输入纬度', trigger: 'blur'}
                ]

            },
            addTypeVal: '',
            addLocationVal: '',
            editDeviceTypeVal: '',
            locationVal: '',
            allDel: false,
            isSelect: false,
            index: '',
            chooseArr: [],
            queryParams: {
                'pageNum': 1,
                'pageSize': 20
            },
            totalNum: 0,
            devClassifyShow: false,
            devClassifyVal: '',
            deleteParams: {
                'rtuIdList': []
            },
            editDevParams: {
                'commAddress': 'string',
                'describe': 'string',
                'dimension': 'string',
                'disc': 'string',
                'installer': 'string',
                'longitude': 'string',
                'ownerId': 0,
                'ownerType': 0,
                'rtuId': 0,
                'simCode': 'string',
                'type': 0
            },
            addDevParams: {
                'commAddress': 'string',
                'describe': 'string',
                'dimension': 'string',
                'disc': 'string',
                'installer': 'string',
                'longitude': 'string',
                'ownerId': 0,
                'ownerType': 0,
                'rtuId': 0,
                'simCode': 'string',
                'type': 0
            }

        };
    },
    mounted () {
        this.getDeviceData();
        this.getDevClassify();
        this.getAreaList();
    },
    methods: {
        getDeviceData () {
            this.$request('queryDeviceList', this.queryParams).then(res => {
                if (res.data.returnCode == 0) {
                    // console.log("getDeviceData",res)
                    this.totalNum = res.data.total;
                    if (this.queryParams.pageNum == 1) {
                        this.deviceData = res.data.deviceInfos;
                    } else {
                        this.deviceData.concat(res.data.deviceInfos);
                    }
                }
            });
        },
        // 滚动加载数据
        load () {
            if (this.deviceData.length < this.totalNum) {
                this.queryParams.pageNum += 1;
                this.getDeviceData();
            }
        },
        changeVal (event, item) {
            if (event == 'type') {
                this.devClassifyShow = true;
            } else {
                this.devClassifyShow = false;
            }
        },
        // 按设备分类查询的选项
        getDevClassify () {
            this.$request('queryDeviceTypeList').then(res => {
                if (res.data.returnCode == 0) {
                    for (let i = 0; i < res.data.typeInfos.length; i++) {
                        let obj = {
                            value: res.data.typeInfos[i].typeNo,
                            label: res.data.typeInfos[i].alias
                        };
                        this.devClassifOptions.push(obj);
                    }
                }
            });
        },
        // 按条件查询
        queryByFactor () {
            if (this.value == 'type') {
                this.queryParams = {};
                this.queryParams[this.value] = this.devClassifyVal;
            } else {
                this.queryParams = {};
                this.queryParams[this.value] = this.input;
            }
            this.queryParams.pageNum = 1;
            this.queryParams.pageSize = 20;
            this.getDeviceData();
        },
        // 编辑设备
        editDev (item) {
            this.editDialogVisible = true;
            this.formLabelAlign.devName = item.disc;
            this.formLabelAlign.devEIMI = item.simCode;
            this.editDeviceTypeVal = item.typeName;
            this.formLabelAlign.devAddress = item.commAddress;
            this.formLabelAlign.installAddress = item.installer;
            this.formLabelAlign.devLongitude = item.longitude;
            this.formLabelAlign.devLatitude = item.dimension;
            this.formLabelAlign.devNote = item.describe;
            this.locationVal = item.addressIds;
            // this.locationVal = [3,80,45,45];
            this.editDevParams.rtuId = item.rtuId;
        },
        checkEdit () {
            this.editDialogVisible = false;
            this.editDevParams.commAddress = this.formLabelAlign.devAddress;
            this.editDevParams.describe = this.formLabelAlign.devNote;
            this.editDevParams.dimension = this.formLabelAlign.devLatitude;
            this.editDevParams.disc = this.formLabelAlign.devName;
            this.editDevParams.installer = this.formLabelAlign.installAddress;
            this.editDevParams.longitude = this.formLabelAlign.devLongitude;
            this.editDevParams.ownerId = this.locationVal[3];
            this.editDevParams.ownerType = 33;
            this.editDevParams.simCode = this.formLabelAlign.devEIMI;
            this.$request('updateDevice', this.editDevParams).then(res => {
                if (res.data.returnCode == 0) {
                    this.getDeviceData();
                    this.$message({
                        title: this.$t('common.tip'),
                        message: this.$t('common.editSuccess'),
                        type: 'success'
                    });
                } else {
                    this.$message({
                        title: this.$t('common.tip'),
                        message: res.data.returnMsg,
                        type: 'warning'
                    });
                }
            });
        },
        getAreaList () {
            this.$request('manageAreaList').then(res => {
            // console.log("省市区", res)
                if (res.data.returnCode == 0) {
                    this.locationOptions = res.data.areaInfos;
                }
            });
        },
        handleChange (value) {
            this.locationVal = value;
        },
        getEditType (value) {
            this.editDevParams.type = value;
        },
        //  单个删除
        dele (item) {
            this.deleteParams.rtuIdList.push(item.rtuId);
            this.$confirm(
                this.$t('areaManage.deleteTip'),
                this.$t('areaManage.reminder'),
                {
                    confirmButtonText: this.$t('common.yes'),
                    cancelButtonText: this.$t('common.cancel'),
                    type: 'warning'
                }
            ).then(() => {
                this.$request('deleteDevice', this.deleteParams).then(res => {
                // console.log("shanchu", res)
                    if (res.data.returnCode == 0) {
                        this.getDeviceData();
                        this.$message({
                            title: this.$t('common.tip'),
                            message: this.$t('common.deleteSuccess'),
                            type: 'success'
                        });
                    } else {
                        this.$message({
                            title: this.$t('common.tip'),
                            message: res.data.returnMsg,
                            type: 'warning'
                        });
                    }
                });
            }).catch(() => {

            });
        },
        // 点击批量删除按钮
        batchDel () {
            this.allDel = true;
        },
        selectItem (item, index, id) {
            if (this.chooseArr.includes(id)) {
                this.chooseArr = this.chooseArr.filter(function (ele) {
                    return ele != id;
                });
            } else {
                this.chooseArr.push(id);
            }
            // console.log('this.chooseArr', this.chooseArr);
        },
        // 取消批量删除
        cancleDel () {
            this.allDel = false;
            this.isSelect = false;
            this.chooseArr = [];
        },
        // 确定批量删除
        deleteItem () {
            this.deleteParams.rtuIdList = this.chooseArr;
            this.$confirm(
                this.$t('areaManage.deleteTip'),
                this.$t('areaManage.reminder'),
                {
                    confirmButtonText: this.$t('common.yes'),
                    cancelButtonText: this.$t('common.cancel'),
                    type: 'warning'
                }
            ).then(() => {
                this.$request('deleteDevice', this.deleteParams).then(res => {
                    if (res.data.returnCode == 0) {
                        this.getDeviceData();
                        this.$message({
                            title: this.$t('common.tip'),
                            message: this.$t('common.deleteSuccess'),
                            type: 'success'
                        });
                    } else {
                        this.$message({
                            title: this.$t('common.tip'),
                            message: res.data.returnMsg,
                            type: 'warning'
                        });
                    }
                });
            }).catch(() => {

            });
        },
        // 设备详情显示
        showDetail (item) {
            this.dialogVisible = true;
            this.detailData = item;
        },
        // 新增设备
        clickAddDev () {
            this.addDialogVisible = true;
        },
        checkAddDev (formLabelAlign1) {
            this.$refs[formLabelAlign1].validate((valid) => {
                // console.log("valid",valid)
                if (valid) {
                    this.addDialogVisible = false;
                    this.addDevParams.commAddress = this.formLabelAlign1.devAddress;
                    this.addDevParams.describe = this.formLabelAlign1.devNote;
                    this.addDevParams.dimension = this.formLabelAlign1.devLatitude;
                    this.addDevParams.disc = this.formLabelAlign1.devName;
                    this.addDevParams.installer = this.formLabelAlign1.installAddress;
                    this.addDevParams.longitude = this.formLabelAlign1.devLongitude;
                    this.addDevParams.ownerId = this.addLocationVal[3];
                    this.addDevParams.ownerType = 33;
                    this.addDevParams.simCode = this.formLabelAlign1.devEIMI;
                    this.$request('addDevice', this.addDevParams).then(res => {
                        if (res.data.returnCode == 0) {
                            this.getDeviceData();
                            this.$message({
                                title: this.$t('common.tip'),
                                message: this.$t('common.addSuccess'),
                                type: 'success'
                            });
                        } else {
                            this.$message({
                                title: this.$t('common.tip'),
                                message: res.data.returnMsg,
                                type: 'warning'
                            });
                        }
                    });
                } else {
                //  this.$message({
                //         title: this.$t('common.tip'),
                //         message: this.$t('common.invalid'),
                //         type: 'warning'
                //     });
                }
            });
        },
        handleChange1 (value) {
            // console.log(value)
            this.addLocationVal = value;
        },
        getAddType (value) {
            // console.log(value)
            this.addDevParams.type = value;
        }
    }
};
</script>

<style lang='scss' scope>
#device {
  background-color: #fff;
  box-sizing: border-box;
  .device_top {
    padding-left: 10px;
    height: 80px;
    line-height: 80px;
    background-color: #fff;
    box-sizing: border-box;
    .el-input {
      width: 217px;
      margin-right: 10px;
    }
  }
  .device_body {
    // height: 79%;
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
        background-color: rgb(24, 144, 255);
        border-color: rgb(24, 144, 255);
      }
      .selectStyle1 {
        border-color: rgb(24, 144, 255);
      }
    }
  }
  .device_footer {
    height: 88px;
    line-height: 88px;
    background-color: #fff;
    padding-left: 10px;
  }
  .detail_dialog {
    .el-dialog__header {
      border-bottom: 1px solid rgb(243, 243, 243);
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
      padding-left: 20px;
    }
    .detail_img {
      display: block;
      width: 0.65rem;
      height: 0.65rem;
      margin: 0 auto;
    }
    p {
      font-size: 14px;
      color: rgb(153, 153, 153);
      margin-top: 10px;
      span {
        color: rgb(51, 51, 51);
      }
    }
  }
  .addDev_dialog {
    .el-dialog__header {
      border-bottom: 1px solid rgb(243, 243, 243);
      padding: 10px;
    }
    .el-dialog__headerbtn {
      top: 12px;
      right: 10px;
    }
    .el-dialog__title {
      font-size: 16px;
    }
    .el-dialog__body {
      padding: 10px;
    }
    .el-form-item {
      margin-bottom: 15px;
    }
    .el-form-item__label {
      text-align: left;
      color: rgb(102, 102, 102);
      font-size: 14px;
    }
    .el-input__inner {
      height: 30px;
      line-height: 30px;
    }
    .el-select {
      width: 100%;
    }
    .el-button {
      padding: 8px 127px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .el-col-lg-4-8 {
      width: 20%;
    }
  }
}
</style>
