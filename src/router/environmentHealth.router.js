import SubLayout from '../views/subLayout/index.vue';

export default [
    //区域实时监测
    {
        name: 'areaRealTimeMonitor',
        path: 'areaRealTimeMonitor',
        component: resolve => require(['views/environmentHealth/areaRealTimeMonitor'], resolve),
        meta: {
            activeMenu: '/environmentHealth/areaRealTimeMonitor',
            title: 'areaRealTimeMonitor',
            noCache: true,
            affix: false
        }
    },
     //历史数据
     {
        name: 'historicalData',
        path: 'historicalData',
        component: resolve => require(['views/environmentHealth/historicalData'], resolve),
        meta: {
            activeMenu: '/environmentHealth/historicalData',
            title: 'historicalData',
            noCache: true,
            affix: false
        }
    },
     //环境报表
     {
        name: 'environmentalReport',
        path: 'environmentalReport',
        component: resolve => require(['views/environmentHealth/environmentalReport'], resolve),
        meta: {
            activeMenu: '/environmentHealth/environmentalReport',
            title: 'environmentalReport',
            noCache: true,
            affix: false
        }
    },
    //多媒体数据
    {
        name: 'multimediaData',
        path: 'multimediaData',
        component: resolve => require(['views/environmentHealth/multimediaData'], resolve),
        meta: {
            activeMenu: '/environmentHealth/multimediaData',
            title: 'multimediaData',
            noCache: true,
            affix: false
        }
    },
  

];
