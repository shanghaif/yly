import SubLayout from '../views/subLayout/index.vue';

export default [
    //设备管理
    {
        name: 'newEnergyDeviceManage',
        path: 'newEnergyDeviceManage',
        component: resolve => require(['views/newEnergyEecurity/newEnergyDeviceManage'], resolve),
        meta: {
            activeMenu: '/newEnergyEecurity/newEnergyDeviceManage',
            title: 'newEnergyDeviceManage',
            noCache: true,
            affix: false
        }
    },
    {
        name: 'newEnergyAataStatistics',
        path: 'newEnergyAataStatistics',
        component: resolve => require(['views/newEnergyEecurity/newEnergyAataStatistics'], resolve),
        meta: {
            activeMenu: '/newEnergyEecurity/newEnergyAataStatistics',
            title: 'newEnergyAataStatistics',
            noCache: true,
            affix: false
        }
    },
    {
        name: 'newEnergyAlarmDetails',
        path: 'newEnergyAlarmDetails',
        component: resolve => require(['views/newEnergyEecurity/newEnergyAlarmDetails'], resolve),
        meta: {
            activeMenu: '/newEnergyEecurity/newEnergyAlarmDetails',
            title: 'newEnergyAlarmDetails',
            noCache: true,
            affix: false
        }
    }

];
