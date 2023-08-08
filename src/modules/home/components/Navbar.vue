
<script setup>
import { ref } from "vue";

const Links = [
  { name: "Inicio", link: "#" },
  { name: "¿Quiénes Somos?", link: "#" },
  { name: "Buscar Especialista", link: "#" },
];

const open = ref(false);
</script>

<template>
  <nav class="w-full fixed top-0 left-0 z-40">
    <div
      class="md:flex items-center justify-between bg-white py-4 md:px-10 px-7"
    >
      <img
        src="https://v2.medizona.com.mx/_nuxt/logo_header.dc5a85eb.webp"
        class="h-20"
      />

      <button
        @click="open = !open"
        id="headlessui-disclosure-button-4"
        type="button"
        :aria-expanded="open"
        data-headlessui-state="open"
        class="rounded bg-gray-800 mr-5 w-10 h-10 flex justify-center items-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 absolute right-2 top-10 cursor-pointer md:hidden"
      >
        <svg
          v-if="!open"
          data-v-e3f83a03=""
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="block h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
        <svg
          v-else
          data-v-e3f83a03=""
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="block h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <ul
        :class="`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in [&>li]:cursor-pointer text-purple ${
          open ? 'top-28' : 'top-[-490px]'
        }`"
      >
        <li
          v-for="link in Links"
          :key="link.name"
          class="md:ml-8 text-lg md:my-0 my-7 md:text-sm lg:text-base"
        >
          <a :href="link.link" class="hover:text-gray-400 duration-500">{{
            link.name
          }}</a>
        </li>
        <div
          class="text-white flex flex-col justify-center md:flex-row w-full md:items-center [&>a]:py-1 [&>a]:rounded [&>a]:px-4 [&>a]:text-base [&>a]:flex [&>a]:items-center [&>a]:justify-evenly [&>a>span]:lg:px-12 gap-2 pr-20"
        >
          <a href="#" class="bg-orange md:mx-1">
            <img
              src="data:image/webp;base64,UklGRhQBAABXRUJQVlA4WAoAAAAQAAAAFwAAFwAAQUxQSMcAAAABgFBrWxbpjUAEItBgabA2GBoMDdYGSwONQANpMDbQBtrg2R/8nAgRMQFu4VvdsG1J/8dteyoDoTPD8S8DDA3wnQJESY0QaSd1UNeNK6OkyvOLmZeMsROAM4AldeTBq+ENhfRPIBWyYccbPIe7yFQZVHi5TgJvcivbwytMkGVSOOlX3VCGte2c7pYqkz+Iuud2Nka9QRFWvUWVaGtXI9kSqVeBxTKTr9RIV4HTGQKkXjzIsiZYHh/hc4JZ9rDTPQfdHkprJakPAFZQOCAmAAAAsAIAnQEqGAAYAD4tEIZCoaEN+gAMAWJaQAArgMQAAP7+iRgAAAA="
              class="w-4 h-4 md:hidden lg:block"
              alt="icon"
            />
            <span>Soy doctor</span>
            <img
              src="data:image/webp;base64,UklGRmYAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCYAAAABUBBJavNpFpCDHiRhBzlYSG8iImICdH212GMF5Gs5AeBaGa8IAFZQOCAaAAAAMAEAnQEqCAAFAADAEiWkAANwAP7+3XgAAAA="
              alt=""
              class="md:hidden lg:block"
            />
          </a>
          <a href="#" class="bg-purple">
            <img
              src="data:image/webp;base64,UklGRoIBAABXRUJQVlA4WAoAAAAQAAAAHAAAHAAAQUxQSDkBAAABkFXbdtBAR8KTgIQ4aBwMDuY5KA4aB8XBREIdEAfFAThIHNwPEjoSImICGIfXViVt7z/87l9JpZRySsfzh2lTWyPdkJqOcCdUZeOmJVUfhdpmrtPjEbiGU96bagsAYZOkIwJMTaFTNAOEquy+Sg4Q2mGAawWw2iJAODUBJCVgb3ZZtNCNyhfOCkEr1yKG59FxOUmxt4+KOpMypdHTaD877Aet9BbNvaDcK0IDa3W62FehlxRHzKrvx+NZ5dw4R2R1NxtkUWpvPqSSUmmq3iuNVeHiam5c/dS/i+lDVAJcuzG0rBVwLXBWY6q7cfejCEUGroWsyG1rX2ZlgF1RH35cFWuzS5Dkv0RJTtel+ReTEkNXfd6LVSs3Y9Px1wbzpubcttSk7/v1em1Vysav5p+ma1km/q/FOHEfAFZQOCAiAAAAkAEAnQEqHQAdAADAEiWkAAPI1btgAP7+3Xh7//+39gAAAA=="
              class="w-4 h-4 md:hidden lg:block"
              alt="icon"
            />
            <span> Soy paciente </span>
            <img
              src="data:image/webp;base64,UklGRmYAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCYAAAABUBBJavNpFpCDHiRhBzlYSG8iImICdH212GMF5Gs5AeBaGa8IAFZQOCAaAAAAMAEAnQEqCAAFAADAEiWkAANwAP7+3XgAAAA="
              alt="icon"
              class="md:hidden lg:block"
            />
          </a>
        </div>
      </ul>
    </div>
  </nav>
</template>


