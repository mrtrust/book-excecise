import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";
import DateHelper from "@/helpers/DateHelper";

Vue.config.productionTip = false;

Vue.filter("dateTime", function (value: Date | string): string {
  return DateHelper.localDateTime(value);
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
