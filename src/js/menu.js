import Controller from './utils/controller.js';

let menuTop = [
  {num: '10', text: '商品管理', url: '/item/index.html'},
  {num: '11', text: '订单管理', url: '/order/index.html'},
  {num: '12', text: '用户中心', url: '/example/button.html'},
  {num: '13', text: '文章中心', url: '/example/button.html'},
  {num: '14', text: '控制面板', url: '/example/button.html'},
];

let menuLeft = {
  '10': [
    {text: '商品列表', url: '/item/index.html'},
    {text: '商品分类', url: '/item/sort.html'},
    {text: '规格设置', url: '/item/spec.html'},
  ],
  '11': [
    {text: '订单列表', url: '/cc/asd1'},
  ],
  '12': [
    {text: '会员列表', url: '/cc/asd1'},
  ],
  '13': [
    {text: '文章分类', url: '/cc/asd1'},
    {text: '文章列表', url: '/cc/asd1'},
    {text: '活动单页', url: '/cc/asd1'},
  ],
  '14': [
    {text: '网站设置', url: '/cc/asd1'},
    {text: '支付设置', url: '/cc/asd1'},
    {text: '密码修改', url: '/cc/asd1'},
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
