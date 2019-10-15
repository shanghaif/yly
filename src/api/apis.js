import loginApi from './login.api';
import systemApi from './system.api';
import homeApi from './home.api';
import fileManageApi from './fileManage.api';
import historicalDataApi from './historicalData.api';
import orderlyEnergyApi from './orderlyEnergy.api';
const apis = [
    ...loginApi,
    ...systemApi,
    ...homeApi,
    ...fileManageApi,
    ...historicalDataApi,
    ...orderlyEnergyApi
];

export default apis;
