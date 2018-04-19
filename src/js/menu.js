
const MENUTOP = [
  {num: '10', text: 'Bootstrap演示'},
  {num: '11', text: '一级菜单2'},
];

const MENULEFT = {
  '10': [
    {text: 'Bootstrap演示', icon: 'glyphicon-eye-open'},
    {text: '按钮', url: '/example/button.html'},
    {text: '表单', url: '/example/form.html'},
    {text: '表格', url: '/example/table.html'},
    {text: '弹窗', url: '/example/modal.html'},
  ],
  '11': [
    {text: '二级菜单12', url: null},
    {text: '页面12', url: '/cc/asd1'},
    {text: '页面22', url: '/cc/asd2'},
    {text: '二级菜单22', url: null},
    {text: '页面12', url: '/cc/asd3'},
    {text: '页面22', url: '/cc/asd4'},
  ],
};

export {MENUTOP, MENULEFT}
