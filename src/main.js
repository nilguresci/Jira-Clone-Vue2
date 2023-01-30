import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/ant-design-vue.js";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

import Vuex from "vuex";
Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.prototype.$store = store;
new Vue({
  router,
  store,
  Vuetify,
  BootstrapVue,
  render: (h) => h(App),
}).$mount("#app");
