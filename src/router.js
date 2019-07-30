import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/aww",
      name: "aww",
      component: () => import(/* webpackChunkName: "aww" */ "./views/aww.vue")
    },
    {
      path: "/faith-restored",
      name: "faith-restored",
      component: () =>
        import(/* webpackChunkName: "faith-restored" */ "./views/faith-restored.vue")
    },
    {
      path: "/me-irl",
      name: "me-irl",
      component: () =>
        import(/* webpackChunkName: "me-irl" */ "./views/me-irl.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/login.vue")
    }
  ]
});
