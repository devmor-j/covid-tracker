<template >
  <!-- FEAT: add a checkbox to show multiple countries per line -->
  <!-- :multiple="multipleSelect" -->
  <!-- :size="multipleSelect === true ? 8 : 0" -->
  <select
    v-model="selectedId"
    @change="onChange"
    class="block max-w-fit w-full mx-auto p-2 text-lg border border-gray-500"
  >
    <option value="Global" selected class="font-semibold italic">Global</option>
    <option v-for="country in countries" :key="country.ID" :value="country.ID">{{ country.Country }}</option>
  </select>
  
  <!-- FEAT: multiple counteries per line -->
  <!-- <label class="text-gray-500 text-sm block max-w-fit m-auto">
    <input type="checkbox" v-model="multipleSelect" class="m-auto align-middle" />
    Show multiple
  </label>-->
</template>

<script>
export default {
  name: 'CountrySelect',
  props: ['countries'],

  data() {
    return {
      selectedId: 'Global',
      // FEAT: multiple countries per line
      // multipleSelect: false,
    };
  },

  methods: {
    onChange() {
      if (this.selectedId === 'Global') {
        this.$emit('country-changed', 'Global');
        return;
      };
      const country = this.countries.find((item) => item.ID === this.selectedId)
      this.$emit('country-changed', { ...country });
    },
  },
};
</script>
