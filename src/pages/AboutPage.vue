<template>
  <div
    class="bg-slate-100 hover:bg-slate-200 max-w-xs mx-auto rounded-md py-4 px-8 mt-8 text-center transition-all space-y-4"
  >
    <h2 class="text-xl font-bold">
      Created by
      <a
        href="https://github.com/devmor-j"
        target="_blank"
        title="Github link"
        class="underline"
      >
        <span class="transition-[font-weight] hover:font-black hover:text-red-500">D</span>
        <span class="transition-[font-weight] hover:font-black hover:text-orange-500">e</span>
        <span class="transition-[font-weight] hover:font-black hover:text-yellow-500">v</span>
        <span class="transition-[font-weight] hover:font-black hover:text-lime-500">m</span>
        <span class="transition-[font-weight] hover:font-black hover:text-green-500">o</span>
        <span class="transition-[font-weight] hover:font-black hover:text-teal-500">r</span>
      </a>
    </h2>
    <h3>
      <span class="text-gray-400">API by&nbsp;</span>
      <a
        class="text-blue-400 hover:text-blue-700"
        href="https://covid19api.com/"
        target="_blank"
      >covid19api.com</a>
    </h3>
    <p
      class="text-lg font-semibold pt-4"
    >Use this app to get the latest covid-19 stats about new cases and deaths.</p>
    <div class="underline text text-gray-400 hover:text-gray-700">
      <router-link to="/">Homepage</router-link>
    </div>
  </div>
</template>
