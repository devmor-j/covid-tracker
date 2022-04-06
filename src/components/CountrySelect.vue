<template >
  <select
    v-model="selectedId"
    @change="onChange"
    class="block max-w-fit w-full mx-auto p-2 border border-gray-500"
  >
    <option value="Global" selected class="font-semibold italic">Global</option>
    <option v-for="country in countries" :key="country.ID" :value="country.ID">{{ country.Country }}</option>
  </select>
</template>

<script>
export default {
  name: 'CountrySelect',
  props: ['countries'],

  data() {
    return {
      selectedId: 'Global',
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
