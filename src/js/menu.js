import Controller from './utils/controller.js';

let menuTop = [
  {num: '10', text: '商品管理', url: '/example/button.html'},
  {num: '11', text: '订单管理', url: '/example/button.html'},
];

let menuLeft = {
  '10': [
    {text: '二级菜单12', url: null},
    {text: '页面12', url: '/cc/asd1'},
    {text: '页面22', url: '/cc/asd2'},
    {text: '二级菜单22', url: null},
    {text: '页面12', url: '/cc/asd3'},
    {text: '页面22', url: '/cc/asd4'},
  ],
};

let isDebug = Controller.getQuery('debug');
if (isDebug == 1 || sessionStorage.isDebug) {
  sessionStorage.isDebug = 1;
  menuTop.push({num: '99', text: 'Bootstrap演示', url: '/example/button.html'});
  menuLeft['99'] = [
    {text: 'Bootstrap演示', icon: 'glyphicon-eye-open'},
    {text: '按钮', url: '/example/button.html'},
    {text: '表单', url: '/example/form.html'},
    {text: '表格', url: '/example/table.html'},
    {text: '弹窗', url: '/example/modal.html'},
  ];
}

export {menuTop, menuLeft}
