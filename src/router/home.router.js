import SubLayout from '../views/subLayout/index.vue';

export default [
    {
        name: 'welcome',
        path: 'welcome',
        component: resolve => require(['views/home/welcome'], resolve),
        meta: {
          activeMenu: '/home/welcome',
          title: 'home',
          noCache: true,
          affix: false
      }
    },
  

];
