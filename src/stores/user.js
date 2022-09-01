import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: ref({}),
    accessToken: ref(''),
  }),
  getters: {
    getToken: (state) => {
      return state.accessToken;
    },
    getUserInfo: (state) => {
      return state.userInfo;
    },
  },
  actions: {
    setToken(accessToken) {
      this.$patch({
        accessToken: accessToken,
      });
    },
    setUserInfo(user) {
      this.$patch({
        userInfo: user,
      });
    },
  },
  persist: true,
});
