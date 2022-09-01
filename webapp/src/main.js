import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueLogger from 'vuejs-logger';

Vue.config.productionTip = false;

Vue.use(VueLogger, {
  logLevel: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
});

if (window) {
  window.setLogLevel = function(level) {
    VueLogger.install(Vue, { logLevel: level });
  };
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
