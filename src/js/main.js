import validata from './utils/validate';
import controller from './utils/controller';


const pathName = window.location.pathname;
const menuTop = [
  {num: '10', text: '一级菜单1'},
  {num: '14', text: '一级菜单2'},
  {num: '11', text: '一级菜单2'},
  {num: '12', text: '一级菜单3'},
];

const menuLeft = {
  '10': [
    {text: '二级菜单1', url: null},
    {text: '页面1', url: '/asdf/asd1'},
    {text: '页面2', url: '/asdf/asd2'},
    {text: '二级菜单2', url: null},
    {text: '页面1', url: '/asdf/asd3'},
    {text: '页面2', url: '/asdf/asd4'},
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


class Page {

  constructor() {
  	console('abc');
  }

  loadList() {
    for (let i in menuLeft) {
      let isFind = false;
      for (let j in menuLeft[i]) {
        let li = menuLeft[i][j];
        if (li.url == pathName) {
          isFind = li.isCheck = true;
          this.renderMenu(i, menuLeft[i]);
          break;
        }
      }
      if (isFind) break;
    }
  }

  renderMenu(num = '10', arr = []) {
    let menuTopHTML = '';
    for (let i in menuTop) {
      menuTopHTML += `<a href="javascript:;"${menuTop[i].num == num ? ' class="cur"' : ''}>${menuTop[i].text}</a>`;
    }
    console.log(menuTopHTML);

    let menuLeftHTML = '';
    for (let i in arr) {
      let li = arr[i];
      if (li.url) {
        menuLeftHTML += `<dd><a href="${li.url}"${li.isCheck ? ' class="cur"' : ''}>${li.text}</a></dd>`;
      } else {
        menuLeftHTML += `<dt>${li.text}</dt>`;
      }
    }
    console.log(menuLeftHTML);
  }


}

new Page();
