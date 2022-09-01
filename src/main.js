import { createApp } from 'vue';
import '@/assets/style/index.scss';
import App from '@/App.vue';
import router from '@/router';
// import VueKeycloak from '@dsb-norge/vue-keycloak-js';
// import keycloakInitOptions from '@utils/keycloak-vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

createApp(App)
  .use(router)
  // .use(VueKeycloak, keycloakInitOptions)
  .use(createPinia().use(piniaPluginPersistedstate))
  .mount('#app');
