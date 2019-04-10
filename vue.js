// 假的
var app = new Vue({ 
    el: '#app',
    data: {
        name: 'JinX',
        motto: 'ALL THE BEST PEOPLE ARE CRAZY',
        label: '@魔法魔王少女零酱', 
        input: '',   
    },
    methods: { // 这个 methods属性中定义了当前Vue实例所有可用的方法
      show: function () {
        alert('你还真是不乖，到处乱点呢~')
      },
    }
  }).$mount('#app')

var page = new Vue({ 
    el: '#page',
    data: {
        title: '天气天气~你怎么样呀？',
        value: '',   
    },
    methods: { 
      chage: function () {
        var Dvalue = this.getTime()-value;  //计算两个时间戳的差值（毫秒数）
        var Ddays = Math.floor(Dvalue/86400000);   //将这个差值（毫秒数）转换成天数
        var days = Math.floor(Ddays)  //小于等于num的整数:把Ddays后面的小数部分去掉备用
        this.url1 = 'https://bing.ioliu.cn/v1?d=' + this.days;
        document.getElementById('page').style.backgroundImage="url("+ this.url1 +")";    },
}
  }).$mount('#page')
  



