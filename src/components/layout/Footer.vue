<template>
  <footer class="footer">
    <div class="footer__content">
      <div>
        <img
          class="h-8 w-auto"
          src="@/assets/images/logo.png"
          alt="Logo Nestcafe"
        />
      </div>
      <span class="font-bold">&copy; Slickteam 2022</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
};
</script>

<style scoped lang="scss">
.footer {
  @apply w-full shadow-t-md min-h-10 h-10;

  &__content {
    @apply ml-5 h-full flex justify-start items-center;

    > div {
      @apply flex-shrink-0 flex items-center mr-2 md:mr-3;
    }
  }
}
</style>
