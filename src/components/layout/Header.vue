<template>
  <header class="header w-full shadow-md min-h-12 h-12 flex">
    <div
      class="w-full px-2 sm:px-4 mx-auto lg:px-6 flex justify-between items-center"
    >
      <div class="header__spacer"></div>
      <div class="header__spacer"></div>
      <div class="header__title">
        <span class="hidden md:inline pr-5">Démo</span>
        <span class="font-bold md:pl-5 text-blue-800">Nest Café</span>
      </div>
      <div class="header__account flex items-center">
        <span class="hidden md:inline-block text-md">
          <template v-if="!getUserFamilyName && !getUserGivenName">
            Bienvenue
          </template>
          <template v-else>
            Bienvenue,
            <template v-if="authenticated">
              {{ getUserFamilyName }} {{ getUserGivenName }}
            </template>
          </template>
        </span>

        <!-- Profile dropdown -->
        <CustomMenu as="div" class="ml-3 relative">
          <div>
            <MenuButton
              class="bg-blue-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span class="sr-only">Ouvrir le menu utilisateur</span>
              <div
                class="h-8 w-8 rounded-full flex justify-center items-center"
              >
                <span v-if="authenticated" class="text-white font-bold">
                  {{ getUserInitials() }}
                </span>
              </div>
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="account-menu origin-top-right absolute right-0 py-1 px-4 mt-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="pb-2 mt-2 flex">
                <span v-if="authenticated">
                  {{ getUserFamilyName }} {{ getUserGivenName }}
                </span>
              </div>
              <MenuItem>
                <div class="border-t pt-1 border-t-gray-300">
                  <button
                    class="account-menu__item mt-1 text-blue-800 uppercase"
                    @click="logoutUser"
                  >
                    Se déconnecter
                  </button>
                </div>
              </MenuItem>
            </MenuItems>
          </transition>
        </CustomMenu>
      </div>
    </div>
  </header>
</template>

<script>
import {
  Menu as CustomMenu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { keycloak } from '@/utils/keycloak';

export default {
  name: 'LayoutHeader',
  components: {
    CustomMenu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  setup() {
    const userStore = useUserStore();
    const { userInfo } = storeToRefs(userStore);
    const authenticated = userStore.isAuthenticated;

    return {
      userStore,
      userInfo,
      authenticated,
    };
  },
  computed: {
    getUserFamilyName() {
      return this.userInfo?.family_name ? this.userInfo.family_name : '';
    },
    getUserGivenName() {
      return this.userInfo?.given_name ? this.userInfo.given_name : '';
    },
  },
  methods: {
    getUserInitials() {
      const familyName = this.getUserFamilyName
        ? this.getUserFamilyName.charAt(0)
        : '';
      const givenName = this.getUserGivenName
        ? this.getUserGivenName.charAt(0)
        : '';

      return `${familyName} ${givenName}`;
    },
    logoutUser() {
      keycloak.logout();
      this.userStore.$reset();
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  &__spacer {
    @apply hidden md:block;
  }

  &__title {
    @apply text-xl md:text-2xl uppercase;

    span:first-child {
      @apply border-r;
    }
  }

  .account-menu {
    .account-menu__item {
      @apply block w-full p-2 text-left font-bold hover:bg-gray-50 text-sm;
    }
  }
}
</style>
