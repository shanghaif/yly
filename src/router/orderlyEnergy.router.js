import SubLayout from '../views/subLayout/index.vue';

export default [
    //能效分析
    {
        name: 'energyAnalysis',
        path: 'energyAnalysis',
        component: resolve => require(['views/orderlyEnergy/energyAnalysis'], resolve),
        meta: {
            activeMenu: '/orderlyEnergy/energyAnalysis',
            title: 'energyAnalysis',
            noCache: true,
            affix: false
        }
    },
     //能效监测
     {
        name: 'energyMonitor',
        path: 'energyMonitor',
        component: resolve => require(['views/orderlyEnergy/energyMonitor'], resolve),
        meta: {
            activeMenu: '/orderlyEnergy/energyMonitor',
            title: 'energyMonitor',
            noCache: true,
            affix: false
        }
    },
    //能效报表
    {
        name: 'energyReport',
        path: 'energyReport',
        component: resolve => require(['views/orderlyEnergy/energyReport'], resolve),
        meta: {
            activeMenu: '/orderlyEnergy/energyReport',
            title: 'energyReport',
            noCache: true,
            affix: false
        }
    },
     //同比分析
     {
        name: 'compareAnalysis',
        path: 'compareAnalysis',
        component: resolve => require(['views/orderlyEnergy/compareAnalysis'], resolve),
        meta: {
            activeMenu: '/orderlyEnergy/compareAnalysis',
            title: 'compareAnalysis',
            noCache: true,
            affix: false
        }
    },
   
   

];
