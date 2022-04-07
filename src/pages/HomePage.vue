<script>
import DataTitle from '@/components/DataTitle.vue';
import DataBoxes from '@/components/DataBoxes.vue';
import CountrySelect from '@/components/CountrySelect.vue';

// DEV: use offline data only for development purposes
// import offlineData from '@/data/SummaryData.js';

export default {
  name: "HomePage",
  components: { DataTitle, DataBoxes, CountrySelect },
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
  <section class="max-w-xl mx-auto py-4 space-y-6">
    <div class="flex flex-col gap-2 items-center justify-center" v-if="loading">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="w-20 mx-auto mt-4"
      >
        <defs>
          <clipPath id="a">
            <path d="M50 50 35 0h30z" />
          </clipPath>
          <circle
            id="b"
            clip-path="url(#a)"
            cx="50"
            cy="50"
            style="fill:none;stroke:#aaa"
            stroke-width="10"
            r="40"
          />
        </defs>
        <use xlink:href="#b" />
        <use xlink:href="#b" transform="rotate(40 50 50)" />
        <use xlink:href="#b" transform="rotate(80 50 50)" />
        <use xlink:href="#b" transform="rotate(120 50 50)" />
        <use xlink:href="#b" transform="rotate(160 50 50)" />
        <use xlink:href="#b" transform="rotate(200 50 50)" />
        <use xlink:href="#b" transform="rotate(240 50 50)" />
        <use xlink:href="#b" transform="rotate(280 50 50)" />
        <use xlink:href="#b" transform="rotate(320 50 50)" />
        <circle
          clip-path="url(#a)"
          cx="50"
          cy="50"
          style="fill:none;stroke:orange"
          stroke-width="12"
          r="40"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            values="0 50 50; 40 50 50; 80 50 50; 120 50 50; 160 50 50; 200 50 50; 240 50 50; 280 50 50; 320 50 50; 360 50 50"
            dur="2s"
            repeatCount="indefinite"
            additive="replace"
            calcMode="discrete"
            fill="freeze"
          />
        </circle>
      </svg>
      <small class="font-semibold text-xs text-gray-500">Loading...</small>
    </div>

    <!-- 5 sec timeout message -->
    <div
      v-if="fetchTimeout"
      class="flex justify-between items-center bg-orange-100 rounded-md px-2 py-1"
    >
      <div class="italic font">
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
    <DataTitle :title="dataCountry" :date="covidData.Date" v-if="!loading" />

    <!-- Show stats in boxes -->
    <DataBoxes :stats="covidStat" v-if="!loading" />

    <!-- select country from list -->
    <CountrySelect
      :countries="covidData.Countries"
      @country-changed="updateDataCountry"
      v-if="!loading"
    />
  </section>
</template>
