import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import 'mavon-editor/dist/css/index.css'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import Axios from 'axios'
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(mavonEditor)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
