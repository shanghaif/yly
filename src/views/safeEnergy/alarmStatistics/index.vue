<template>
  <div>
    <el-card>

      <el-select v-model="select1" :placeholder="$t('common.pleaseSelect')" @change="change1" style="background-color: #fff;">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <el-select v-model="select2" :placeholder="$t('common.pleaseSelect')" @change="change2" style="background-color: #fff;">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

    </el-card>

    <el-row :gutter="10" style="margin:10px;">
      <el-col :span="8">
        <el-card>
          <h1>告警发生率占比</h1>
          <ve-ring :data="chartData1" :extend="chartExtend"></ve-ring>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <h1>告警分布占比</h1>
          <ve-ring :data="chartData2" legend-position="bottom" :extend="chartExtend1"></ve-ring>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <h1>告警处理占比</h1>
          <ve-ring :data="chartData3" :extend="chartExtend"></ve-ring>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" style="margin:10px;">
      <el-col :span="24">
        <el-card>
          <h1>告警类型占比</h1>
          <ve-ring :data="chartData4" :extend="chartExtend2"></ve-ring>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" style="margin:10px;">
      <el-col :span="12">
        <el-card>
          <h1>故障频发设备表（超过10次）</h1>
          <el-table
            :data="tableData1"
            style="width: 100%"
            border
            :header-cell-style="{backgroundColor: '#F2F2F2', color: 'rgb(51,51,51)'}">
              <el-table-column
                prop="deviceName"
                label="设备名称">
              </el-table-column>
              <el-table-column
                prop="deviceNum"
                label="设备编号">
              </el-table-column>
              <el-table-column
                prop="ipAddress"
                label="IP地址">
              </el-table-column>
              <el-table-column
                prop="installSite"
                label="安装位置">
              </el-table-column>
        </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <h1>故障未解决或超时未修复表（超过24h）</h1>
          <el-table
            :data="tableData2"
            style="width: 100%"
            border
            :header-cell-style="{backgroundColor: '#F2F2F2', color: 'rgb(51,51,51)'}">
              <el-table-column
                prop="deviceName"
                label="设备名称">
              </el-table-column>
              <el-table-column
                prop="deviceNum"
                label="设备编号">
              </el-table-column>
              <el-table-column
                prop="ipAddress"
                label="IP地址">
              </el-table-column>
              <el-table-column
                prop="installSite"
                label="安装位置">
              </el-table-column>
        </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'alarmStatistics',

  data () {
    return {
    // 第一个下拉框的值和数据
      select1: 1,
      options1: [{label: '按月份', value: 1}],

    // 第二个下拉框的值和数据
      select2: 1,
      options2: [{label: '一月', value: 1}],

      // 表格1数据
      tableData1: [
        {
          deviceName:'设备名称1',
          deviceNum:'9527',
          ipAddress:'111.111.11.111',
          installSite:'华瑞中心',
        },
        {
          deviceName:'设备名称1',
          deviceNum:'9527',
          ipAddress:'111.111.11.111',
          installSite:'华瑞中心',
        },
        {
          deviceName:'设备名称1',
          deviceNum:'9527',
          ipAddress:'111.111.11.111',
          installSite:'华瑞中心',
        },
        {
          deviceName:'设备名称1',
          deviceNum:'9527',
          ipAddress:'111.111.11.111',
          installSite:'华瑞中心',
        }
      ],

      // 表格2数据
      tableData2: [
        {
          deviceName:'设备名称1',
          deviceNum:'9527',
          ipAddress:'111.111.11.111',
          installSite:'华瑞中心',
        },
        {
          deviceName:'设备名称1',
          deviceNum:'9527',
          ipAddress:'111.111.11.111',
          installSite:'华瑞中心',
        },
        {
          deviceName:'设备名称1',
          deviceNum:'9527',
          ipAddress:'111.111.11.111',
          installSite:'华瑞中心',
        },
        {
          deviceName:'设备名称1',
          deviceNum:'9527',
          ipAddress:'111.111.11.111',
          installSite:'华瑞中心',
        }
      ],



      chartData1: {
        columns: ['告警', '数量'],
        rows: [
          { '告警': '告警数量', '数量': 10 },
          { '告警': '未告警数量', '数量': 90 }
        ]
      },
      chartData2: {
        columns: ['区域', '数量'],
        rows: [
          { '区域': '萧山区', '数量': 10 },
          { '区域': '江北区', '数量': 10 },
          { '区域': '江干区', '数量': 10 },
          { '区域': '余杭区', '数量': 10 },
          { '区域': '西湖区', '数量': 10 },
          { '区域': '江滨区', '数量': 10 },
          { '区域': '拱墅区', '数量': 10 },
          { '区域': '临安区', '数量': 10 },
        ]
      },
      chartData3: {
        columns: ['结果', '数量'],
        rows: [
          { '结果': '已处理告警', '数量': 10 },
          { '结果': '未处理告警', '数量': 90 }
        ]
      },
      chartData4: {
        columns: ['类型', '数量'],
        rows: [
          { '类型': '类型1', '数量': 10 },
          { '类型': '类型2', '数量': 10 },
          { '类型': '类型3', '数量': 10 },
          { '类型': '类型4', '数量': 10 },
          { '类型': '类型5', '数量': 10 },
          { '类型': '类型6', '数量': 10 },
          { '类型': '类型7', '数量': 10 },
          { '类型': '类型8', '数量': 10 },
          { '类型': '类型9', '数量': 10 }
        ]
      },

      chartExtend: {
        legend: {
          left: 0,
          top: 10,
          itemGap: 15,
          orient: 'vertical'
        }
      },

      chartExtend2: {
        legend: {
          left: 0,
          top: 10,
          itemGap: 15,
          orient: 'vertical',
        },
        label: {
          normal: {
            formatter: '{b}：{c}次  {d}%',
          }
        }
      },

      chartExtend1: {
        legend: {
          width: 400,
          type: 'scroll',
        }
      }





    }
  },

  methods: {
    // 第一个下拉框改变时触发
    change1 (e) {
      console.log(e)
    },

    // 第二个下拉框改变时触发
    change2 (e) {
      console.log(e)
    }
  }
}
</script>

<style lang='scss' scope>
.el-card {
  h1 {
    font-size: 0.24rem;
    margin-bottom: 15px;
  }
}
</style>
