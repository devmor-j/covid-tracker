<template>
  <header class="w-full text-center text-gray-100 bg-blue-800 p-6 space-y-3">
    <div class="flex items-center justify-center gap-1">
      <Icon class="w-8" path="./src/assets/svg/covid.svg" />
      <h1 class="text-3xl md:text-4xl font-bold">
        <router-link to="/">Covid-19 Tracker</router-link>
      </h1>
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
