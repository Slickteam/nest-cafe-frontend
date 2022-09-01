<template>
  <main>
    <h1 class="text-4xl mb-4">Home</h1>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="publicApi"
    >
      Public API
    </button>
    <button
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      @click="adminApi"
    >
      Admin API
    </button>
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      @click="userApi"
    >
      User API
    </button>
    <button
      class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      @click="commonApi"
    >
      Common API
    </button>
  </main>
</template>

<script>
import { api } from '@/utils/axios.js';

export default {
  name: 'HomePage',
  methods: {
    publicApi() {
      api.get('/public').then((response) => {
        // en cas de réussite de la requête
        console.log(response.data);
      });
    },
    adminApi() {
      api.get('/admin').then((response) => {
        // en cas de réussite de la requête
        console.log(response.data);
      });
    },
    userApi() {
      api.get('/user').then((response) => {
        // en cas de réussite de la requête
        console.log(response.data);
      });
    },
    commonApi() {
      api.get('/all').then((response) => {
        // en cas de réussite de la requête
        console.log(response.data);
      });
    },
  },
};
</script>
