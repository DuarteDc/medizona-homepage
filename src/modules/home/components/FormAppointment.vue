
<script>
import { Calendar, DatePicker } from "v-calendar";
import "v-calendar/style.css";

export default {
  components: {
    Calendar,
    DatePicker,
  },
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<template>
  <section class="relative mt-10">
    <div
      class="mx-auto w-11/12 md:w-9/12 h-auto p-6 rounded-3xl border border-gray-300 shadow-md md:mt-9 text-gray-400 bg-white"
    >
      <form>
        <h3 class="text-2xl flex justify-center items-center mb-5">
          <img
            class="w-10 h-10"
            src="https://v2.medizona.com.mx/_nuxt/calendario.d8608d8c.svg"
            alt="calendar-icon"
          />
          Agenda tu cita
        </h3>
        <div class="grid grid-cols-1 lg:grid-cols-7">
          <div
            class="[&>div>button]:border [&>div>button]:border-gray-300 [&>div>button]:rounded-2xl [&>div>button]:font-semibold [&>div]:text-xs [&>div>button]:pl-3 [&>div>button]:w-full [&>div>button]:lg:w-auto [&>div>button]:pr-3 [&>div>button]:h-10 border-r col-span-3 [&>div]:mx-4"
          >
            <div class="flex flex-col lg:flex-row items-center justify-between [&>button]:sm:mb-2">
              <p class="text-sm text-gray-400">Tipo de consulta</p>
              <button type="button">Videollamada</button>
              <button type="button">Consultorio</button>
              <button type="button">Domicilio</button>
            </div>
            <div>
              <div class="w-full relative">
                <div
                  class="flex justify-between items-center h-10 rounded mt-2 border border-gray-300"
                >
                  <input
                    type="text"
                    placeholder="Especialidad o Subespecialidad"
                    class="h-full pl-2 rounded w-full outline-0 text-gray-400 capitalize truncate"
                  />
                  <span
                    class="hover:cursor-pointer bg-indigo-100 h-full px-2 flex items-center"
                  >
                    X
                  </span>
                </div>
              </div>
              <input
                placeholder="Nombre del médico, clínica u hospital"
                type="text"
                class="w-full h-10 text-gray-400 rounded-md border border-gray-300 bg-white py-2 px-3 truncate shadow-sm focus:border-blue-900 focus:border-none focus:ring-indigo-500 mt-2"
              />
            </div>
          </div>
          <div
            class="col-span-2 px-4 [&>*]:w-full [&>*]:h-10 text-sm [&>*]:text-gray-400 [&>*]:rounded-md [&>*]:border [&>*]:border-gray-300 [&>*]:py-2 [&>*]:px-3 [&>*]:shadow-sm [&>*]:focus:border-blue-900 [&>*]:focus:outline-none [&>*]:focus:ring-indigo-500 [&>*]:bg-white [&>*]:mb-2 mt-4 md:mt-0"
          >
            <select>
              <option value="dsa">Estado</option>
            </select>
            <select>
              <option value="dsa">Ciudad</option>
            </select>
            <input type="number" placeholder="Código postal" />
          </div>
          <div class="col-span-2 flex justify-center">
            <Calendar transparent borderless expanded/>
          </div>
        </div>
        <div class="md:w-8/12 w-full mt-5 mx-auto">
          <button
            type="button"
            class="flex w-full justify-center items-center py-2 hover:text-white hover:bg-indigo-900 transition-all ease-in duration-500 text-purple cursor-pointer font-semibold border border-indigo-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="h-4 w-4 md:h-6 md:w-6 mx-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
            Buscar Especialista
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
