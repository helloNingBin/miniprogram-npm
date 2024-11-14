// pages/test/component/custom-checkbox/custom-checkbox.js
Component({
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    labelText: {
      type: String,
      value: 'default value',
    },
    "ifelse":{
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    "isChecked":false,
    "obs":""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateChecked(){
      let obs_ =  this.data.obs + "=";
      this.setData({
        updateChecked : !this.data.updateChecked,
        obs : obs_
      })
    },
    onLoad: function() {
      console.log("=======onload custom-checkbox====")
    }
  },
  observers:{
    obs:function(n,o){
        console.log("obs",n,o)
    },
    labelText:function(n,o){
      console.log("labelText",n,o)
    }
  }
})