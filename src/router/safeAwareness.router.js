import SubLayout from '../views/subLayout/index.vue';

export default [
    //拓扑图
    {
        name: 'deviceTopology',
        path: 'deviceTopology',
        component: resolve => require(['views/safeAwareness/deviceTopology'], resolve),
        meta: {
            activeMenu: '/safeAwareness/deviceTopology',
            title: 'deviceTopology',
            noCache: true,
            affix: false
        }
    },
    //感知数据
    {
        name: 'perceptionData',
        path: 'perceptionData',
        component: resolve => require(['views/safeAwareness/perceptionData'], resolve),
        meta: {
            activeMenu: '/safeAwareness/perceptionData',
            title: 'perceptionData',
            noCache: true,
            affix: false
        }
    },
    //告警分析
    {
        name: 'alarmAnalysis',
        path: 'alarmAnalysis',
        component: resolve => require(['views/safeAwareness/alarmAnalysis'], resolve),
        meta: {
            activeMenu: '/safeAwareness/alarmAnalysis',
            title: 'alarmAnalysis',
            noCache: true,
            affix: false
        }
    },
    //安全报表
    {
        name: 'safeReport',
        path: 'safeReport',
        component: resolve => require(['views/safeAwareness/safeReport'], resolve),
        meta: {
            activeMenu: '/safeAwareness/safeReport',
            title: 'safeReport',
            noCache: true,
            affix: false
        }
    },
   
   
   
   

];
