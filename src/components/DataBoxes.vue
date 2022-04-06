<template>
  <div class="grid gap-4 md:grid-cols-2 max-w-xs sm:max-w-3xl lg:max-w-7xl mx-auto justify-center">
    <!-- css: _data-box style in main.css -->
    <div class="bg-blue-100 _data-box">
      <!-- >>> cases -->
      <h3 class="text-lg font-bold text-center pb-1">Cases</h3>
      <div>
        <p>
          <span class="font-semibold">New:</span>
          {{ statsWithComma.NewConfirmed }}
        </p>
        <p>
          <span class="font-semibold">Total:</span>
          {{ statsWithComma.TotalConfirmed }}
        </p>
      </div>
    </div>

    <div class="bg-purple-100 _data-box">
      <!-- >>> deaths -->
      <h3 class="text-lg font-bold text-center pb-1">Deaths</h3>
      <div>
        <p>
          <span class="font-semibold">New:</span>
          {{ statsWithComma.NewDeaths }}
        </p>
        <p>
          <span class="font-semibold">Total:</span>
          {{ statsWithComma.TotalDeaths }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Databoxes',
  props: ['stats'],

  data() {
    return {

    };
  },

  computed: {
    statsWithComma() {
      // add commas to stats numbers
      const keys = Object.keys(this.stats);
      const values = Object.values(this.stats).map((stat) => {
        return stat.toLocaleString();
      });

      let obj = {};
      for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
      };

      return obj;
    },
  },

};
</script>
