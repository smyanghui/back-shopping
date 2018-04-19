import {menuTop, menuLeft} from './menu.js';
import Controller from './utils/controller.js';

class Main extends Controller {

  constructor() {
    super();
    this.init();
    this.bindEvent();
  }

  init() {
    this.renderMenu();
  }

  bindEvent() {
    //aa
  }

  // 渲染菜单
  renderMenu() {
    const pathName = window.location.pathname;

    let num = '10';
    let arr = menuLeft['10'];

    for (let i in menuLeft) {
      let isFind = false;
      for (let j in menuLeft[i]) {
        let li = menuLeft[i][j];
        if (li.url == pathName) {
          isFind = li.isCheck = true;
          num = i;
          arr = menuLeft[i];
          break;
        }
      }
      if (isFind) break;
    }

    let menuTopHTML = '';
    for (let i in menuTop) {
      menuTopHTML += `<a href="${menuTop[i].url}"${menuTop[i].num == num ? ' class="cur"' : ''}>${menuTop[i].text}</a>`;
    }
    $("#topMenu").html(menuTopHTML);

    let menuLeftHTML = '';
    for (let i in arr) {
      let li = arr[i];
      if (li.icon) {
        menuLeftHTML += `<dt><span class="glyphicon ${li.icon}"></span> ${li.text}</dt>`;
      } else {
        menuLeftHTML += `<dd><a href="${li.url}"${li.isCheck ? ' class="cur"' : ''}>${li.text}</a></dd>`;
      }
    }
    $("#leftBox").html(menuLeftHTML);
  }

}

new Main();
