<template>
  <div class="permissionConfiguration">
    <el-row>
      <el-col :span="4" style="border-right:1px solid #eeeeee;">
        <div class="top">
          <h1>角色架构</h1>
          <el-tree
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick"
            :default-expand-all="true"
            :expand-on-click-node="false"
          ></el-tree>
        </div>
      </el-col>

      <el-col :span="20">
        <div class="left">
          <div class="btns">
            <el-button type="primary" icon="el-icon-plus" size="small" @click="add">新增</el-button>
            <el-button type="primary" icon="el-icon-edit" size="small">修改</el-button>
            <el-button type="primary" icon="el-icon-delete" size="small">删除</el-button>
          </div>

          <el-breadcrumb separator="/" style="margin-top:10px;">
            <el-breadcrumb-item :to="{ path: '/' }">全局</el-breadcrumb-item>
            <el-breadcrumb-item>浙江省</el-breadcrumb-item>
            <el-breadcrumb-item>公众号管理</el-breadcrumb-item>
          </el-breadcrumb>

          <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
            >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="名称">
              <template slot-scope="scope">
                <i class="el-icon-user-solid"></i>
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="创建账号"></el-table-column>
            <el-table-column prop="time" label="创建时间"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

    <el-dialog :title="$t('accountmanage.addAccount')" :visible.sync="addDialog" width="25%">
      <el-form ref="form" :model="form" label-width="80px" style="padding:20px;">
        <el-form-item :label="$t('accountmanage.lgAccout')">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('accountmanage.password')">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item :label="$t('accountmanage.passT')">
          <el-input v-model="form.passwordSure"></el-input>
        </el-form-item>
        <el-form-item :label="$t('perceptionData.status')">
          <el-select v-model="form.status" placeholder="选择状态" style="width:100%">
            <el-option label="正常" value="shanghai"></el-option>
            <el-option label="异常" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('accountmanage.phone')">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('accountmanage.ellevel')">
          <el-select v-model="form.ellevel" placeholder="选择电表等级" style="width:100%">
            <el-option label="编程" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="addDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name: '',

    data () {
        return {
            data: [
                {
                    label: '全局',
                    children: [
                        {
                            label: '浙江省',
                            children: [
                                {
                                    label: '管理中心'
                                }
                            ]
                        },
                        {
                            label: '宁波市',
                            children: [
                                {
                                    label: '公众号测试'
                                }
                            ]
                        },
                        {
                            label: '海宁市',
                            children: [
                                {
                                    label: '测试'
                                }
                            ]
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            tableData: [
                {
                    name: 'test',
                    name: 'admin',
                    time: '2019-06-27'
                }
            ],
            addDialog: false,
            form: {
                name: '',
                password: '',
                passwordSure: '',
                status: '',
                phone: '',
                ellevel: ''
            },
            menuList: []
        };
    },
    mounted () {
        this.menuList = JSON.parse(localStorage.getItem('menu'));
    },
    methods: {

        handleNodeClick (data) {
            console.log(data);
        },
        add () {
            this.addDialog = true;
        },
        handleSelectionChange () {}
    }
};
</script>

<style lang='scss' scope>
.permissionConfiguration {
  // padding: 10px;
  background: #fff;
  .top {
    h1 {
      padding: 0.2rem;
      border-bottom: 1px solid #eeeeee;
    }
  }
  .left {
    min-height: 100%;
    padding: 10px;
  }
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
  .el-dialog__body {
    padding: 0;
  }
}
</style>
