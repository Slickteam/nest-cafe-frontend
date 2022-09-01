import { createApp } from 'vue';
import '@/assets/style/index.scss';
import App from '@/App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { keycloak, keycloakInitOptions } from '@/utils/keycloak.js';

console.log('Launch app vue');

keycloak
  .init({
    onLoad: keycloakInitOptions.onLoad,
    redirectUri: keycloakInitOptions.redirectUri,
    checkLoginIframe: false,
  })
  .then(() => {
    createApp(App)
      .use(router)
      .use(createPinia().use(piniaPluginPersistedstate))
      .mount('#app');
    // Token Refresh
    setInterval(() => {
      keycloak
        .updateToken(70)
        .then((refreshed) => {
          if (refreshed) {
            console.log('Token refreshed' + refreshed);
          } else {
            console.warn('Token not refreshed');
          }
        })
        .catch(() => {
          console.error('Failed to refresh token');
        });
    }, 6000);
  })
  .catch((error) => {
    console.log(error);
  });
