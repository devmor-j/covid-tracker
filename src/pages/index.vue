<script>
import Icon from '@/components/Icon.vue';

export default {
  name: "index",
  components: { Icon },
  data() {
    return {
      covidStats: "",
      dataLoaded: false,
      loading: true,
      fetchTimeout: false,
      elapsedTime: 5,
      elapsedTimeInterval: null,
    };
  },

  methods: {
    async fetchCovidData() {
      setTimeout(() => {
        if (this.dataLoaded) return;

        this.fetchTimeout = true;

        this.elapsedTimeInterval = setInterval(() => {
          this.elapsedTime += 1;
        }, 1000);

      }, 5000);

      const data = await (await fetch("https://api.covid19api.com/summary")).json();

      console.log(data);
      this.covidStats = data.Global;
    },

    refreshPage() {
      window.location.reload();
    }
  },

  watch: {
    covidStats(value) {
      if (value !== '') {
        this.fetchTimeout = false;
        this.dataLoaded = true;
        clearInterval(this.elapsedTimeInterval);
      }
    },
  },

  /* ------------------- lifecycle hooks ------------------ */

  async created() {
    await this.fetchCovidData();
    this.loading = false;
  },
};

</script>

<template>
  <section class="max-w-xl mx-auto py-4 space-y-4">
    <h1 class="text-2xl text-blue-900 underline">Covid Stats:</h1>
    <Icon
      v-if="loading"
      loading-text="true"
      path="./src/assets/svg/loading-circle.svg"
      class="w-20 mx-auto mt-16"
    />

    <div v-if="fetchTimeout" class="flex justify-between items-center">
      <div class="italic font-semibold">
        <p>This shouldn't take this long! Your connection is slow or unstable.</p>
        <span>Elapsed time:&nbsp;</span>
        <span>{{ elapsedTime }} sec</span>
      </div>

      <button
        @click="refreshPage"
        class="border-2 border-blue-800 font-semibold p-1 text-sm rounded-lg hover:bg-slate-200 transition"
      >Refresh page</button>
    </div>

    <ul>
      <li v-for="(value, key, index) in covidStats" :key="index">{{ key }}: {{ value }}</li>
    </ul>
  </section>
</template>
