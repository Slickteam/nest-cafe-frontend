import { createApp } from 'vue';
import '@/assets/style/index.scss';
import App from '@/App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import {
  initKeycloak,
  keycloak,
  KEYCLOAK_USER_ATTRIBUE,
} from '@/utils/keycloak.js';
import { useUserStore } from '@/stores/user';

initKeycloak()
  .then(() => {
    createApp(App)
      .use(router)
      .use(createPinia().use(piniaPluginPersistedstate))
      .mount('#app');
  })
  .then(() => {
    const userStore = useUserStore();
    if (keycloak.authenticated && userStore.getToken === '') {
      userStore.setToken(keycloak.token);
    }
    userStore.setUserInfo({
      email: keycloak.idTokenParsed[KEYCLOAK_USER_ATTRIBUE.email],
      preferred_username:
        keycloak.idTokenParsed[KEYCLOAK_USER_ATTRIBUE.preferred_username],
      name: keycloak.idTokenParsed[KEYCLOAK_USER_ATTRIBUE.name],
      given_name: keycloak.idTokenParsed[KEYCLOAK_USER_ATTRIBUE.given_name],
      family_name: keycloak.idTokenParsed[KEYCLOAK_USER_ATTRIBUE.family_name],
    });
  });
