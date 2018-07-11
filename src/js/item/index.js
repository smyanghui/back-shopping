
import Controller from '../utils/controller';
import Ipage from '../utils/ipage';

let vueData = {
  message: '1231aabbcc',
}

let vueMethods = {}

class Page extends Controller {

  constructor() {
    super();
    this.init();
    this.bindEvent();
  }

  init() {
    this.tablePage = null;
    Controller.isLogin(() => {
      // this.rCart();
    });
  }

  bindEvent() {
    const _this = this;
    $("#addBtn").on("click", () => {
      // vueData.message = 'ccc';
      $("#addModal").modal('show');
    })
  }

  // 获取用户信息
  rUser() {
    Controller.ajax({
      url: '/user/info',
      type: 'POST',
      data: {
        token: window.Token
      },
    }, (res) => {
      console.log(res.data);
      // $("#userName").val(data.nickname);
    });
  }

  asdf () {
    this.tablePage = new Ipage({
      'dom': "#tablePageBox",
      'pageTotal': 5,
      'perPage': 10,
      'currentPage': 1,
      'callback': num => {
        console.log(num);
      }
    });
  }

}

new Vue({ el: '#page', data: vueData, methods: vueMethods});

new Page();

