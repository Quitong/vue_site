var test_app = new Vue({
  el: 'test',
  data() {
    return {
      data: [1,2,3,4,5]
    }
  },
  computed:{
    data_arr() {
      return this.data
    }
  }
  
})
module.exports= test_app;