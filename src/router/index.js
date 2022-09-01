import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';

const BASE_URL = import.meta.env.VITE_BASE_PATH || '/';
const routes = [
  {
    path: '/',
    name: 'HomePage',
    components: {
      default: Home,
      Header: () => import('@/components/layout/Header.vue'),
      Footer: () => import('@/components/layout/Footer.vue'),
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    components: {
      default: NotFound,
      Header: () => import('@/components/layout/Header.vue'),
      Footer: () => import('@/components/layout/Footer.vue'),
    },
    meta: {
      title: 'Page non trouvée',
    },
  },
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const appTitle = 'Nest Café';
  document.title = to.meta.title ? `${to.meta.title} - ${appTitle}` : appTitle;
  next();
});

export default router;
