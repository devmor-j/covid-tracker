<script>
import Icon from '@/components/Icon.vue';

// DEV: use offline data only for development purposes
// import offlineData from '@/data/SummaryData.js';

import DataTitle from '@/components/DataTitle.vue';
import DataBoxes from '@/components/DataBoxes.vue';
import CountrySelect from '@/components/CountrySelect.vue';


export default {
  name: "HomePage",
  components: { Icon, DataTitle, DataBoxes, CountrySelect },
  data() {
    return {
      covidData: {},
      covidStat: {},
      dataCountry: 'Global',
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

      // DEV: Remove offline data and call api directly
      // const data = offlineData;

      const data = await (await fetch("https://api.covid19api.com/summary")).json();

      this.covidData = data;
      this.covidStat = data.Global;
    },

    refreshPage() {
      window.location.reload();
    },

    updateDataCountry(country) {
      if (country === 'Global') {
        this.dataCountry = 'Global';
        this.covidStat = this.covidData.Global;
        return;
      };
      this.dataCountry = country.Country;
      this.covidStat = country;
    },
  },

  watch: {
    covidData(value) {
      if (Object.keys(value)?.[0] ? true : false) {
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
    <!-- loading icon svg -->
    <Icon
      v-if="loading"
      loading-text="true"
      path="./src/assets/svg/loading-circle.svg"
      class="w-20 mx-auto mt-16"
    />

    <!-- 5 sec timeout message -->
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

    <!-- Show data title -->
    <DataTitle :title="dataCountry" :date="covidData.Date" />

    <!-- Show stats in boxes -->
    <DataBoxes :stats="covidStat" />

    <!-- select country from list -->
    <CountrySelect :countries="covidData.Countries" @country-changed="updateDataCountry" />
  </section>
  <footer class="fixed bottom-0 left-0 w-full text-center p-1 font-semibold text-sm bg-slate-100 text-gray-400">
    <router-link to="/about" class="underline hover:text-gray-700">About this project</router-link>
  </footer>
</template>
