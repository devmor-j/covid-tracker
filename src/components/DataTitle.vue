<template>
  <div class="flex flex-col items-center justify-center">
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <div>
      <time class="text-lg font-semibold" :datetime="date">{{ timestamp }}</time>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DataTitle',
  props: ['title', 'date'],
  data() {
    return {

    };
  },

  computed: {
    timestamp() {
      return moment(this.date).format('MMMM Do YYYY, h:mm:ss a');
    },
  },
};
</script>
