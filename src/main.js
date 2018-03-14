// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import router from './router'
import axios from 'axios'
import promise from 'es6-promise'
import 'babel-polyfill'

import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.config.devtool = true
//屏蔽所有控制台错误
Vue.config.errorHandler = (err, vm, info) => {
}

Vue.prototype.$http = axios

axios.defaults.withCredentials = true

Vue.use(iView);
promise.polyfill()

//loading进度条加载
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  window.scrollTo(0, 0);
  iView.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
