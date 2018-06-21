import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Pets from "./views/Pets";
import Favorites from "./views/Favorites";
import store from "./store/store";

Vue.use(Vuetify);
const routes = [
  { path: "/", component: Home },
  { path: "/pets", component: Pets },
  { path: "/favorites", component: Favorites }
];
const router = new VueRouter({ routes });

Vue.config.productionTip = false;

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router,
  store
});
