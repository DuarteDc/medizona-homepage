<script setup>
const props = defineProps({
  specialist: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <article
    class="w-64 rounded-md overflow-hidden shadow-lg pb-4 text-start h-[23rem]"
  >
    <div class="h-1/2">
      <img
        :src="specialist?.avatar"
        class="object-cover h-full w-full"
        :alt="specialist?.name"
      />
    </div>

    <div class="px-2 mt-2">
      <a href="" class="hover:underline text-xs">{{ specialist?.specialities[0]?.speciality_name }}</a>
      <div class="flex text-purple justify-between truncate">
        <p>{{ specialist.name }}</p>
        <span class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="block-inline h-5 w-5 text-[#F2C821] ml-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="block-inline h-5 w-5 text-[#29C0A2]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </span>
      </div>
      <div class="text-gray-400 [&>span]:flex [&>span]:items-center mb-4 mt-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="block h-3 w-3 text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            ></path>
          </svg>
          <p class="truncate">{{ specialist?.offices[0]?.name || 'Sin ubicación'}}</p>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="block h-3 w-3 text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            ></path>
          </svg>
          <p>{{ specialist.available_days }}</p>
        </span>
      </div>
      <button
        type="button"
        class="hover:text-white hover:bg-purple transition-all ease-in duration-500 text-purple cursor-pointer border border-purple w-full rounded-md py-2"
      >
        Ver más
      </button>
    </div>
  </article>
</template>
