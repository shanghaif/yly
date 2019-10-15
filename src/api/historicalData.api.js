import {http, http1} from './http';
export default [
    {
        name: 'queryElectricityDeivceList',
        method: 'post',
        url: http + '/dgk/electricity/historicalDataService/queryElectricityDeivceList'
    },
    {
        name: 'queryPointList',
        method: 'get',
        url: http + '/dgk/electricity/historicalDataService/queryPointList'
    },
    {
        name: 'queryPointData',
        method: 'post',
        url: http + '/dgk/electricity/historicalDataService/queryPointList'
    },
    {
        name: 'queryEventList',
        method: 'get',
        url: http + '/dgk/electricity/historicalDataService/queryEventList'
    },
    {
        name: 'queryElectricityRtuAlarm',
        method: 'post',
        url: http + '/dgk/electricity/historicalDataService/queryElectricityRtuAlarm'
    },
    {
        name: 'dealAlarm',
        method: 'put',
        url: http + '/dgk/electricity/historicalDataService/dealAlarm'
    },
    {
        name: 'queryPoint',
        method: 'get',
        url: http + '/dgk/archives/deviceManageService/queryPoint'
    },
    {
        name: 'queryEnvironmentHistData',
        method: 'post',
        url: http + '/dgk/energy/realTimeDataService/queryEnvironmentHistData'
    },
];