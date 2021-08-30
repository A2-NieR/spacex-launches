import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Missions from '../views/Missions.vue';
import MissionDetails from '../views/MissionDetails.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/missions',
    name: 'Missions',
    component: Missions,
    props: true
  },
  {
    path: '/missions/:id',
    name: 'MissionDetails',
    component: MissionDetails,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
