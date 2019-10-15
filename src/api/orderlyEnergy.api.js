import {http} from './http';
export default [
    //智慧能效的历史数据
    {
        name: 'queryHistoricalData',
        method: 'post',
        url: http + '/dgk/energy/energyHistDataService/queryHistoricalData'
    },
];
