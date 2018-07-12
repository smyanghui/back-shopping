
import Validata from './utils/validate';
import Controller from './utils/controller';

class Page extends Controller {

  constructor() {
    super();
    this.init();
    this.bindEvent();
  }

  init() {
  }

  bindEvent() {
    $("#submitLogin").click( () => this.submitLogin() );
  }

  // 登录
  submitLogin() {
    const telNum = $.trim($("#loginTelNum").val());
    if (Validata.isBlank(telNum)) {
      return Controller.showMessage("请输入账号！");
    }
    const smsYzm = $.trim($("#loginSmsYzm").val());
    if (Validata.isBlank(smsYzm)) {
      return Controller.showMessage("请输入密码！");
    }
    let params = {
      account: telNum,
      login_type: 1,
      pwd: smsYzm,
    };
    Controller.ajax({
      url: '/admin/login/index',
      type: 'POST',
      data: params
    }, (res) => {
      Controller.setCookie('token', res.data.token || '');
      Controller.setCookie('nickname', res.data.nickname || '');
      if (document.referrer.indexOf(window.location.host) > -1) {
        window.history.go(-1);
      } else {
        window.location.href = '/';
      }
    });
  }

}

new Page();
