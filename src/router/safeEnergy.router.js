import SubLayout from '../views/subLayout/index.vue';

export default [
    //告警统计
    {
        name: 'alarmStatistics',
        path: 'alarmStatistics',
        component: resolve => require(['views/safeEnergy/alarmStatistics'], resolve),
        meta: {
            activeMenu: '/safeEnergy/alarmStatistics',
            title: 'alarmStatistics',
            noCache: true,
            affix: false
        }
    },
    //告警历史数据
    {
        name: 'historicalData/alarmHistoricalData',
        path: 'historicalData/alarmHistoricalData',
        component: resolve => require(['views/safeEnergy/historicalData/alarmHistoricalData'], resolve),
        meta: {
            activeMenu: '/safeEnergy/historicalData/alarmHistoricalData',
            title: 'alarmHistoricalData',
            noCache: true,
            affix: false
        }
    },
    //用电历史数据
    {
        name: 'historicalData/electricityHistoricalData',
        path: 'historicalData/electricityHistoricalData',
        component: resolve => require(['views/safeEnergy/historicalData/electricityHistoricalData'], resolve),
        meta: {
            activeMenu: '/safeEnergy/historicalData/electricityHistoricalData',
            title: 'electricityHistoricalData',
            noCache: true,
            affix: false
        }
    },
     //用电实时监测
     {
        name: 'realtimeMonitor/electricityRealtimeMonitor',
        path: 'realtimeMonitor/electricityRealtimeMonitor',
        component: resolve => require(['views/safeEnergy/realtimeMonitor/electricityRealtimeMonitor'], resolve),
        meta: {
            activeMenu: '/safeEnergy/realtimeMonitor/electricityRealtimeMonitor',
            title: 'electricityRealtimeMonitor',
            noCache: true,
            affix: false
        }
    },
     //告警实时监测
     {
        name: 'realtimeMonitor/alarmRealtimeMonitor',
        path: 'realtimeMonitor/alarmRealtimeMonitor',
        component: resolve => require(['views/safeEnergy/realtimeMonitor/alarmRealtimeMonitor'], resolve),
        meta: {
            activeMenu: '/safeEnergy/realtimeMonitor/alarmRealtimeMonitor',
            title: 'alarmRealtimeMonitor',
            noCache: true,
            affix: false
        }
    },
    //用电统计
    {
        name: 'electricityStatistics',
        path: 'electricityStatistics',
        component: resolve => require(['views/safeEnergy/electricityStatistics'], resolve),
        meta: {
            activeMenu: '/safeEnergy/electricityStatistics',
            title: 'electricityStatistics',
            noCache: true,
            affix: false
        }
    }

];
