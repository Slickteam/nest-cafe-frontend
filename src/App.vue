<template>
  <div class="flex flex-col h-screen justify-between">
    <RouterView name="Header" class="w-full"></RouterView>
    <RouterView></RouterView>
    <RouterView name="Footer" class="w-full"></RouterView>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
