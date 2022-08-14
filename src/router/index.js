import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../view/login/Login";
import Register from "../view/login/Register";
import Miss from "../view/error/404"
import Repwd from "../view/login/Repwd";
import Test from "../view/test/Test";
import Index from "../view";
import Client from "../view/model/client/Client";
import serving from "../view/model/serving/Serving";
import stats from "../view/model/stats/Stats";
import system from "../view/model/system/System";

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history", /*配置路由*/
  routes: [{
    path: "/test",
    component: Test,
  },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/re_pwd",
      component: Repwd,
    },
    {
      path: "/re_pwd/:loginName",
      component: Repwd,
    },
    {
      path: "/register",
      component: Register
    },

    /* 左导航栏路由 */
    {
      path: "/",
      component: Index,
      children: [
        {
          path: "/client",
          component: Client
        },
        {
          path: '/serving',
          component: serving
        },
        {
          path: '/stats',
          component: stats,
        },
        {
          path: '/system',
          component: system
        }
      ]

    },
    {
      path: "/index",
      component: Index,
      children: [
        {
          path: "/client",
          component: Client
        },
        {
          path: '/serving',
          component: serving
        },
        {
          path: '/stats',
          component: stats,
        },
        {
          path: '/system',
          component: system
        }
      ]
    },
    {
      path: "/*",
      component: Miss
    }

  ]
})

const VueRouterPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
