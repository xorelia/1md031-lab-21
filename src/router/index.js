import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue';
import Dispatcher from '../views/Dispatcher.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dispatcher',
    name: 'Dispatcher',
    component: Dispatcher
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;