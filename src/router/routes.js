import Layout from '../views/layout/layout.vue';
import CommonRouter from './common.router';
import SubLayout from '../views/subLayout/index.vue';
import GisMapRouter from './gisMap.router.js';
import FileManageRouter from './fileManage.router';
import WisdomElectricityRouter from './wisdomElectricity.router';
import WisdomEnergyRouter from './wisdomEnergy.router';
import WisdomSafeRouter from './wisdomSafe.router';
import WisdomEnvironmentRouter from './wisdomEnvironment.router';
import SystemManageRouter from './systemManage.router';
import NewEnergyEecurity from './newEnergyEecurity.router';
import SafeEnergyRouter from './safeEnergy.router';
import OrderlyEnergyRouter from './orderlyEnergy.router';
import SafeAwarenessRouter from './safeAwareness.router';
import EnvironmentHealthRouter from './environmentHealth.router';
import HomeRouter from './home.router';
const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                redirect: '/home'
            },
            // {
            //     name: 'home',
            //     path: 'home',
            //     component: resolve => require(['views/homePage'], resolve)
            // },
            ...CommonRouter
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: resolve => require(['views/login'], resolve)
    },
    {
        path: '/home',
        component: SubLayout,
        redirect: '/home/welcome',
        children: [
            ...HomeRouter
        ]
    },
    {
        path: '/gisMap',
        component: SubLayout,
        redirect: '/gisMap/smartEletricity',
        children: [
            ...GisMapRouter
        ]
    },
    {
        path: '/fileManage',
        component: SubLayout,
        redirect: '/fileManage/area',
        children: [
            ...FileManageRouter
        ]
    },
    {
        path: '/wisdomElectricity',
        component: SubLayout,
        redirect: '/wisdomElectricity/realtimeMonitor',
        children: [
            ...WisdomElectricityRouter
        ]
    },
    {
        path: '/wisdomEnergy',
        component: SubLayout,
        redirect: '/wisdomEnergy/energyMonitor',
        children: [
            ...WisdomEnergyRouter
        ]
    },
    {
        path: '/wisdomSafe',
        component: SubLayout,
        redirect: '/wisdomSafe/deviceTopology',
        children: [
            ...WisdomSafeRouter
        ]
    },
    // {
    //     path: '/wisdomEnvironment',
    //     component: SubLayout,
    //     redirect: '/wisdomEnvironment/regionalMonitor',
    //     children: [
    //         ...WisdomEnvironmentRouter
    //     ]
    // },
    {
        path: '/systemManage',
        component: SubLayout,
        redirect: '/systemManage/permissionConfiguration',
        children: [
            ...SystemManageRouter
        ]
    },
    {
        path: '/newEnergyEecurity',
        component: SubLayout,
        redirect: '/newEnergyEecurity/deviceManage',
        children: [
            ...NewEnergyEecurity
        ]
    },
    {
        path: '/safeEnergy',
        component: SubLayout,
        redirect: '/safeEnergy/alarmStatistics',
        children: [
            ...SafeEnergyRouter
        ]
    },
    {
        path: '/orderlyEnergy',
        component: SubLayout,
        redirect: '/orderlyEnergy/energyAnalysis',
        children: [
            ...OrderlyEnergyRouter
        ]
    },
    {
        path: '/safeAwareness',
        component: SubLayout,
        redirect: '/safeAwareness/deviceTopology',
        children: [
            ...SafeAwarenessRouter
        ]
    },
    {
        path: '/environmentHealth',
        component: SubLayout,
        redirect: '/environmentHealth/areaRealTimeMonitor',
        children: [
            ...EnvironmentHealthRouter
        ]
    },

];

export default routes;
