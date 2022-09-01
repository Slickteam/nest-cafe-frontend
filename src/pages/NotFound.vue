<template>
  <div class="flex items-center justify-center w-screen h-screen bg-gray-100">
    <div class="px-40 py-20 bg-white shadow-lg rounded-lg">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-primary text-9xl">404</h1>

        <h6
          class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
        >
          <span class="text-red-500">Oups !</span> <span>Page non trouvée</span>
        </h6>

        <p class="mb-8 text-center text-gray-500 md:text-lg">
          La page que vous cherchez n'existe pas ou plus.
        </p>

        <RouterLink :to="{ name: 'HomePage' }" class="btn px-10 py-3 text-sm">
          Retour à l'accueil
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped lang="scss">
.btn {
  @apply bg-primary rounded-md text-white font-bold hover:shadow-lg;
}
</style>
