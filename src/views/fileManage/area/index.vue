<template>
  <div class="area">
    <el-row>
      <el-button type="primary" size="small" @click="alldelete">{{ $t('common.delete')}}</el-button>
      <!-- <el-button type="primary" size="small" @click="closeAll">{{ $t('areaManage.collapseAll')}}</el-button> -->
      <el-button type="primary" size="small" @click="expanAll">{{ expandName}}</el-button>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%;margin-top: 20px;"
      border
      ref="table"
      :row-key="getRowkey"
     
      @selection-change="handleSelectionChange"
       
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="disc" :label="$t('areaManage.name')"></el-table-column>
      <el-table-column prop="code" :label="$t('areaManage.code')"></el-table-column>
      <el-table-column prop="longitude" :label="$t('areaManage.longitude')"></el-table-column>
      <el-table-column prop="dimension" :label="$t('areaManage.dimension')"></el-table-column>
      <el-table-column  :label="$t('common.operate')">
        <template slot-scope="scope">
          <el-button type="text" @click="add(scope.$index, scope.row)" :disabled="scope.row.type == 33">{{ $t('common.add')}}</el-button>
          <el-button type="text" @click="edit(scope.$index, scope.row)">{{ $t('common.edit')}}</el-button>
          <el-button type="text" @click="dele(scope.$index, scope.row)">{{ $t('common.delete')}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增弹框 -->
    <el-dialog :title="conTitle" :visible.sync="dialogVisible" width="25%">
      <el-form ref="form" :model="form">
        <el-form-item :label="$t('areaManage.name')">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('areaManage.code')">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item :label="$t('areaManage.dimension')">
          <el-input v-model="form.dimension"></el-input>
        </el-form-item>
        <el-form-item :label="$t('areaManage.longitude')">
          <el-input v-model="form.longitude"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click.native="addArea()">{{ $t('areaManage.newBuild')}}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 编辑弹框 -->
    <el-dialog :title="conTitle1" :visible.sync="dialogVisible1" width="25%">
      <el-form ref="form" :model="form1">
        <el-form-item :label="$t('areaManage.name')">
          <el-input v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('areaManage.code')">
          <el-input v-model="form1.code"></el-input>
        </el-form-item>
        <el-form-item :label="$t('areaManage.dimension')">
          <el-input v-model="form1.dimension"></el-input>
        </el-form-item>
        <el-form-item :label="$t('areaManage.longitude')">
          <el-input v-model="form1.longitude"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click.native="checkEdit()">{{ $t('common.save')}}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
    components: {},
    data () {
        return {
            tableData: [],
            multipleSelection: [],
            conTitle: this.$t('common.add'),
            conTitle1: this.$t('common.edit'),
            dialogVisible: false,
            dialogVisible1: false,
            form: {
                name: '',
                dimension: '',
                longitude: '',
                code: ''
            },
            form1: {
                name: '',
                dimension: '',
                longitude: '',
                code: ''
            },
            expandName: this.$t('areaManage.expandAll'),
            isName: true,
            addParams: {
                'areaId': 0,
                'areaName': 'string',
                'areaType': 0,
                'dimension': 'string',
                'longitude': 'string',
                'parentAreaId': 0,
                'parentAreaType': 0
            },
            editParams: {
                'areaId': 0,
                'areaName': 'string',
                'areaType': 0,
                'dimension': 'string',
                'longitude': 'string'
            },
            deleteParams: {
                'areaIdList': [],
                'areaType': 0
            },
            getRowkey (row) {
                return row.code;
            }

        };
    },
    computed: {},
    created () {},
    mounted () {
        this.getAreaData();
        // this.expandsRowKeys.push(this.tableData[1].code)
    },
    methods: {
    // 获取区域数据
        getAreaData () {
            this.$request('queryAreaList').then(res => {
                this.tableData = res.data.areaInfos;
                // console.log("区域列表",res)
            });
        },
        // 多选框选择
        handleSelectionChange (val) {
            this.multipleSelection = val;
            // console.log("多选",this.multipleSelection);
        },
        // 新增
        add (index, row) {
            // console.log(index, row);
            this.dialogVisible = true;
            this.addParams.parentAreaId = row.id;
            this.addParams.parentAreaType = row.type;
        },
        addArea () {
            this.addParams.areaName = this.form.name;
            this.addParams.dimension = this.form.dimension;
            this.addParams.longitude = this.form.longitude;
            this.$request('addArea', this.addParams).then(res => {
                if (res.data.returnCode == 0) {
                    this.dialogVisible = false;
                    this.getAreaData();
                    this.$message({
                        message: this.$t('common.addSuccess'),
                        center: true,
                        type: 'success'
                    });
                } else {
                    this.$message({
                        message: res.data.returnMsg,
                        center: true,
                        type: 'error'
                    });
                }
            });
        },
        // 编辑
        edit (index, row) {
            // console.log(index, row);
            this.dialogVisible1 = true;
            this.form1.name = row.disc;
            this.form1.code = row.code;
            this.form1.dimension = row.dimension;
            this.form1.longitude = row.longitude;
            this.editParams.areaId = row.id;
            this.editParams.areaType = row.type;
        },
        checkEdit () {
            this.editParams.areaName = this.form1.name;
            this.editParams.dimension = this.form1.dimension;
            this.editParams.longitude = this.form1.longitude;
            this.$request('updateArea', this.editParams).then(res => {
                if (res.data.returnCode == 0) {
                    this.dialogVisible1 = false;
                    this.getAreaData();
                    this.$message({
                        message: this.$t('common.editSuccess'),
                        center: true,
                        type: 'success'
                    });
                } else {
                    this.$message({
                        message: res.data.returnMsg,
                        center: true,
                        type: 'error'
                    });
                }
            });
        },
        // 删除
        dele (index, row) {
            this.deleteParams.areaIdList.push(row.id);
            this.deleteParams.areaType = row.type;
            this.$confirm(
                this.$t('areaManage.deleteTip'),
                this.$t('areaManage.reminder'),
                {
                    confirmButtonText: this.$t('common.yes'),
                    cancelButtonText: this.$t('common.cancel'),
                    type: 'warning'
                }
            ).then(() => {
                this.$request('deleteArea', this.deleteParams).then(res => {
                    if (res.data.returnCode == 0) {
                        this.getAreaData();
                        this.$message({
                            message: this.$t('common.deleteSuccess'),
                            center: true,
                            type: 'success'
                        });
                    } else {
                        this.$message({
                            message: res.data.returnMsg,
                            center: true,
                            type: 'error'
                        });
                    }
                });
            }).catch(() => {});
        },
        // 批量删除
        alldelete () {
            if (this.multipleSelection.length < 1) {
                this.$confirm(
                    this.$t('areaManage.tip'),
                    this.$t('areaManage.reminder'),
                    {
                        confirmButtonText: this.$t('common.yes'),
                        cancelButtonText: this.$t('common.cancel'),
                        type: 'warning'
                    }
                ).then(() => {}).catch(() => {});
            } else {
                let arr = [];
                for (let i = 0; i < this.multipleSelection.length - 1; i++) {
                    if (this.multipleSelection[i].type == this.multipleSelection[i + 1].type) {
                        arr.push(1);
                    }
                }
                if (arr.length != this.multipleSelection.length - 1) {
                    this.$confirm(
                        this.$t('areaManage.tips'),
                        this.$t('areaManage.reminder'),
                        {
                            confirmButtonText: this.$t('common.yes'),
                            cancelButtonText: this.$t('common.cancel'),
                            type: 'warning'
                        }
                    ).then(() => {}).catch(() => {});
                } else {
                    for (let i = 0; i < this.multipleSelection.length; i++) {
                        this.deleteParams.areaIdList.push(this.multipleSelection[i].id);
                        this.deleteParams.areaType = this.multipleSelection[i].type;
                    }
                    this.$confirm(
                        this.$t('areaManage.deleteTip'),
                        this.$t('areaManage.reminder'),
                        {
                            confirmButtonText: this.$t('common.yes'),
                            cancelButtonText: this.$t('common.cancel'),
                            type: 'warning'
                        }
                    ).then(() => {
                        this.$request('deleteArea', this.deleteParams).then(res => {
                            if (res.data.returnCode == 0) {
                                this.getAreaData();
                                this.$message({
                                    message: this.$t('common.deleteSuccess'),
                                    center: true,
                                    type: 'success'
                                });
                            } else {
                                this.$message({
                                    message: res.data.returnMsg,
                                    center: true,
                                    type: 'error'
                                });
                            }
                        });
                    }).catch(() => {});
                }
            }
        },
        // 全部展开   全部折叠
        expanAll () {
            const els = this.$el.getElementsByClassName('el-table__expand-icon');
            for (let i = 0; i < els.length; i++) {
                els[i].click();
            }
            this.isName = !this.isName;
            this.expandName = !this.isName
                ? this.$t('areaManage.collapseAll')
                : this.$t('areaManage.expandAll');
        },
        closeAll () {
            if (this.expandsRowKeys.length) {
                this.expandsRowKeys = [];
            }

            //  console.log("close.expandsRowKeys",this.expandsRowKeys)
        }

    }
};
</script>

<style lang="scss" scope>
.area {
  padding: 10px;
  .el-dialog:after {
    display: block;
    content: "";
    clear: both;
  }
  .el-dialog__header {
    border-bottom: 1px solid rgb(243, 243, 243);
    padding: 10px;
    padding-left: 20px;
  }
  .el-dialog__headerbtn {
    top: 12px;
    right: 10px;
  }
}
</style>
