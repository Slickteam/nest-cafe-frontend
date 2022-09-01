<template>
  <main>
    <h1 class="text-4xl mb-4">Home</h1>
    <p>{{ email }}</p>
  </main>
</template>

<script>
import { keycloak } from '@/utils/keycloak.js';

export default {
  name: 'HomePage',
  computed: {
    email() {
      console.log(keycloak);

      return 'toto';
    },
  },
};
</script>
