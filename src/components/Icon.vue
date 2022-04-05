<template>
  <div class="flex flex-col gap-2 items-center justify-center">
    <img :src="path" alt />
    <small v-if="loadingText" class="font-semibold text-xs text-gray-500">Loading...</small>
  </div>
</template>

<script>

export default {
  name: 'Icon',
  props: ['path', 'loadingText'],
};
</script>
