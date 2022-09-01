import Keycloak from 'keycloak-js';

const keycloakInitOptions = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENTID,
  redirectUri: import.meta.env.VITE_KEYCLOAK_REDIRECT_URL,
  checkLoginIframe: false,
  flow: 'standard',
  onLoad: 'check-sso',
};

const keycloak = Keycloak(keycloakInitOptions);

export { keycloak, keycloakInitOptions };
