import Keycloak from 'keycloak-js';

const keycloakInitOptions = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
  redirectUri: import.meta.env.VITE_KEYCLOAK_REDIRECT_URL,
  checkLoginIframe: false,
  flow: 'standard',
  onLoad: 'check-sso',
};

const keycloak = new Keycloak(keycloakInitOptions);

const KEYCLOAK_USER_ATTRIBUE = {
  email: 'email',
  preferred_username: 'preferred_username',
  name: 'name',
  given_name: 'given_name',
  family_name: 'family_name',
};

function initKeycloak() {
  return keycloak
    .init({
      onLoad: keycloakInitOptions.onLoad,
      redirectUri: keycloakInitOptions.redirectUri,
      checkLoginIframe: false,
    })
    .then(() => {
      if (keycloak.authenticated) {
        // Token Refresh
        setInterval(() => {
          keycloak
            .updateToken(70)
            .then((refreshed) => {
              if (refreshed) {
                console.debug('Token refreshed' + refreshed);
              } else {
                console.warn('Token not refreshed');
              }
            })
            .catch(() => {
              console.error('Failed to refresh token');
            });
        }, 6000);
        location.hash = '';
        history.replaceState(history.state, '', location.pathname);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export { initKeycloak, keycloak, KEYCLOAK_USER_ATTRIBUE };
