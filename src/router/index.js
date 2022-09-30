import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import profileView from '../views/profile.vue';
import projectView from '../views/project.vue';
import anitabiView from '../views/anitabi.vue';
import syasinnView from '../views/syasinn.vue';
import notFoundView from '../views/not-found.vue';

const routes = [
	{
		path: "/",
		name: "profile",
		component: profileView
	},
	{
		path: "/project",
		name: "project",
		component: projectView
	},
	{
		path: "/anitabi",
		name: "anitabi",
		component: anitabiView
	},
	{
		path: "/syasinn",
		name: "syasinn",
		component: syasinnView
	},
	{
		path:'*',
		component: notFoundView
	}
];

const router = new VueRouter({
	mode: "history",
	// base: process.env.BASE_URL,
	base: import.meta.env.BASE_URL,
	routes
});

router.afterEach((to, from) => {
	document.documentElement.setAttribute('data-route-view',to.name);
});
export default router;
