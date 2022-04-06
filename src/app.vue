<template>
  <main class="_screen-height">
    <Header />
    <div class="container mt-4">
      <router-view />
    </div>
  </main>
  <footer
    class="sticky bottom-0 left-0 w-full text-center p-1 font-semibold text-sm bg-slate-100 text-gray-400"
  >
    <router-link to="/about" class="underline hover:text-gray-700">About this project</router-link>
  </footer>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
