<template>
  <header class="w-full text-center text-gray-100 bg-blue-800 p-6 space-y-3">
    <div class="flex items-center justify-center gap-1">
      <Icon class="w-8" path="./src/assets/svg/virus.svg" />
      <h1 class="text-3xl md:text-4xl font-bold">Covid-19 Tracker</h1>
    </div>
    <div class="block">
      <span class="text-gray-200/75">API by&nbsp;</span>
      <a
        class="text-blue-200/75 hover:text-blue-200"
        href="https://covid19api.com/"
        target="_blank"
      >covid19api.com</a>
    </div>
  </header>
</template>

<script> 
import Icon from '@/components/Icon.vue';
export default {
  name: 'Header',
  components: { Icon },
};
</script>
