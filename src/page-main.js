import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";
import "./less/main.less";

Vue.config.productionTip = false;

import UITextBanner from './components/ui-text-banner.vue'
Vue.component('ui-text-banner',UITextBanner)

import UITabs from './components/ui-tabs.vue'
Vue.component('ui-tabs',UITabs)

import UIPaging from './components/ui-paging.vue'
Vue.component('ui-paging',UIPaging)

import UISwitch from './components/ui-switch.vue'
Vue.component('ui-switch',UISwitch)

import UITags from './components/ui-tags.vue'
Vue.component('ui-tags',UITags)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount(".app");