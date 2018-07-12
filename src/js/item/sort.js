
import Controller from '../utils/controller';
import Ipage from '../utils/ipage';

// new Ipage({
//   'dom': "#tablePageBox",
//   'pageTotal': 5,
//   'perPage': 10,
//   'currentPage': 1,
//   'callback': num => {
//     console.log(num);
//   }
// });

// let newPage = new Page();
new Vue({

  el: '#page',

  data: {
    lists: [],
    modalData: {},
  },

  mounted: function() {
    Controller.isLogin(() => {
      this.rList();
    });
  },

  methods: {

    // 新增
    add: function() {
      this.modalData = {};
      $("#addModal").modal('show');
    },

    // 编辑
    edit: function(id) {
      for (let i in this.lists) {
        let list = this.lists[i];
        if (list.id == id) {
          this.modalData = list;
          break;
        }
      }
      $("#addModal").modal('show');
    },

    // 删除
    del: function(id) {
      console.log(id);
    },

    // 保存
    save: function() {
      let modalData = this.modalData;
      modalData.token = window.Token;
      let url = modalData.id ? '/admin/category/edit' : '/admin/category/add';
      Controller.ajax({
        url: url,
        type: 'POST',
        data: modalData,
      }, (res) => {
        $("#addModal").modal('hide');
      });
    },

    // 查询列表
    rList: function() {
      Controller.ajax({
        url: '/admin/category/list',
        type: 'POST',
        data: {
          token: window.Token,
          pid: '', // 上级分类Id
          // perpage: 10,
          page: 1,
        },
      }, (res) => {
        this.lists = res.data && res.data.items || [];
      });
    }

  }

});
