import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Register from "../components/Register";
import Add from "../components/Add";
import Home from "../components/Home";
import Update from "../components/Update";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
      {
      path: '/login',
      name: 'Login',
      component: Login
    },
       {
      path: '/register',
      name: 'Register',
      component: Register
    },
       {
      path: '/add_emp',
      name: 'Add',
      component: Add
    },
       {
      path: '/emp_list',
      name: 'Home',
      component: Home
    },
       {
      path: '/update_emp/:pk',
      name: 'Update',
      component: Update
    },
  ]
})
