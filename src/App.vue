<script setup>
import Navbar from "./modules/home/components/Navbar.vue";
import Header from "./modules/home/components/Header.vue";

import SliderSpecialist from "./modules/home/components/SliderSpecialist.vue";
import FormAppointment from "./modules/home/components/FormAppointment.vue";
import ArticuleCard from "./modules/ui/components/ArticuleCard.vue";
import Footer from "./modules/ui/components/Footer.vue";

import useFetch from "./modules/home/composables/useFetch";

const { response: specialists } = useFetch("/v3/web/doctors/top");
const { response: articles } = useFetch("/v2/articles?top=4");
</script>


<template>
  <Navbar />
  <Header />
  <div class="h-60 w-full bg-purple"></div>
  <section class="flex flex-col items-center py-4">
    <h2 class="text-2xl text-purple font-bold">Encuentra a tu especialista</h2>
    <img
      src="data:image/webp;base64,UklGRtICAABXRUJQVlA4WAoAAAAQAAAAOgAAGQAAQUxQSFYBAAABkCvbtmlb89q2fZ9t27ad2rbN2LZt27btd80R7LG13g9ExAQEHPi7r5yoX/Vw2nbvfQAy2ijXGwDWp0E7UbH50H44SrDNXSHvg6Bbkz4R3IhUJuY+6PsoCb1F8LWcItV/gF4MEhH3bQRZnZTokQe6wVno5EINMM0+x8WgBcNFv00GwR5Pm3yPg6Y1FKMlPxLcj7Ql/jno66JiPPQawddKNtT5BXoxQMy6biPI6WRZv3zQVc5i4fhCDTDLwRKnFaD5g8Ta5hkEBz0t8D0D+reOWF3yHcH9GFPJz0GfJ4v1QdcIflQyUecv6BlfsdN1A0FOD0MD80BXOonNYwo0wFwHHadVoPn9xP7maQQHvUnAGdBfdUTFou8IHseISPJr0OfxombwJYLv3QMG/AU97iuqOm8gRpc6isIjCgzl9RO1G6YZ+FVdVC9yQ+d8nPyHHY4B2NlUbARWUDggVgEAAFAJAJ0BKjsAGgAAwBIlsALElQVbdknkgOPe582AfoBuOWSAc9j7CH7fftj7Sz7MURugAHanlVWP0zSVMvg+aLxkT/7n069vt0ly5of+OaP2Y0KAAP7+5YohxIJ4D1CbSR/XA9/KnnwxCt5vYiXbI859Q8BpEMKaBF1XGTTCSlwyo3/2VOiO+zmpF4OQzJGkSDyQZPS75uvU9J+FPn+q8Y/2ZeI6THFR6S5+iyN2j1q9uy2tYpnnt2VDutsJZ2MuEDnp/vF6jFCP+k9StIWxHkVdcvPOK9xzueBxib1l/hrPHzHC37PX//Hj//jKP//GuVmENSq10pDLLBK8VUMxyy0ekeJFJdF8+dqbBw193O4/1Vow2/UZNzzbZJBlVWCLdErQm1uTPQyB95MzJ6ujiXOdNzl/wPLy5p3cpYWtaA1dXnq5MX5Rz+puklKrmzl/0LQAAAAAAA=="
      alt="chevron-icon"
      class="mt-9 h-3 md:h-5"
    />
  </section>
  <FormAppointment />
  <section
    class="bg-second-banner bg-cover bg-no-repeat bg-center md:max-h-[450px] -mt-14 text-white"
  >
    <div class="flex flex-col justify-center items-center pt-28">
      <h3 class="text-4xl font-bold">Lo hacemos más fácil para ti</h3>
      <p
        class="text-xl xl:text-md md:text-xl text-white mt-6 m-0 font-montserratRegular"
      >
        medizona es una plataforma que cuenta con las mejores <br />
        herramientas para mejorar la relación entre doctor y paciente
      </p>
      <img
        class="mx-auto mt-10"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV8AAAADCAYAAAA0jgy5AAAABHNCSVQICAgIfAhkiAAAASpJREFUWEftV9sNwjAMdDoBwyDWYgQ2YAamYAw2aoLt2KnjtsAHUaQq/KQm5/NDcBzhfLklGK9DbeD+uB5qnjEMwOn56rOGlCCEBCnNMAGdkWPAOGiMJ8eMw3sTQ/Tv033EWTKOeDM+8ybBc6w8hBO81t3DMx/35/Jd33/J1/5NvdU8fm92viG+fT7TLasO8W253T7c3cRXhZFOFU0UMlS3LKD8nOPyXIRO7lQICSf4IrjCyXyMyxi+17tv+cQZTJ7yMJf0WWrXsfZRZrN97OXzfLbebPbh6y0/NDq7zheG+Pb5MrWsOsS35Xb7cHcTX+N8rUPdc74qLFsOsMpfOWJxwCtHLM451o67OFfrnMWJTt6Bbzj2T873l3xy+PmfQO20/dzLnpzDx7w3cFeskaxhxpUAAAAASUVORK5CYII="
        alt=""
      />
    </div>
    <div class="md:flex w-7/12 pb-10 justify-center mx-auto mt-20">
      <div class="w-full flex-col">
        <div class="mx-auto w-40 h-40">
          <img
            class="w-full"
            src="https://v2.medizona.com.mx/_nuxt/icono_especialista.4f1777a9.webp"
            alt=""
          />
        </div>
        <div class="">
          <p class="text-center text-xs md:text-gray-500 text-white sm:text-lg">
            1.- Buscar un <br />
            <span class="text-xl sm:text-md md:text-purple font-bold"
              >Especialista</span
            >
          </p>
        </div>
      </div>
      <div class="w-full flex-col">
        <div class="mx-auto w-40 h-40">
          <img
            src="https://v2.medizona.com.mx/_nuxt/icono_consulta.fd1fa2b9.webp"
            alt=""
          />
        </div>
        <div class="">
          <div class="">
            <p
              class="text-center text-xs md:text-gray-500 text-white sm:text-lg"
            >
              1.- Agenda tu <br /><span
                class="text-xl sm:text-md md:text-purple font-bold"
                >Consulta</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="w-full flex-col">
        <div class="mx-auto w-40 h-40">
          <img
            src="https://v2.medizona.com.mx/_nuxt/icono_atencion.e9beb5f4.webp"
            alt=""
          />
        </div>
        <div class="">
          <div class="">
            <p
              class="text-center text-xs md:text-gray-500 text-white sm:text-lg"
            >
              3.- Obtén <br />
              <span class="text-xl sm:text-md md:text-purple font-bold"
                >Atención</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="w-full flex-col">
        <div class="mx-auto w-40 h-40">
          <img
            src="https://v2.medizona.com.mx/_nuxt/icono_medicamentos.ec8396f0.webp"
            alt=""
          />
        </div>
        <div class="">
          <div class="">
            <p
              class="text-center text-xs md:text-gray-500 text-white sm:text-lg"
            >
              4.- Pide y recibe <br /><span
                class="text-xl sm:text-md md:text-purple font-bold"
              >
                Medicamentos</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-60 text-center container mx-auto">
    <h4 class="text-purple text-3xl font-bold">
      Encuentra a los mejores especialistas
    </h4>
    <h5 class="text-gray-400 text-xl mb-10">
      Estos son algunos de los especialistas que tenemos para ti
    </h5>

    <SliderSpecialist :specialists="specialists" />
  </section>
  <section
    class="grid grid-cols-1 md:grid-cols-2 mt-20 mx-10 text-center lg:mx-60 mb-20"
  >
    <div
      class="[&>p]:text-purple flex flex-col justify-center items-center mt-5"
    >
      <img
        src="https://v2.medizona.com.mx/_nuxt/logo_header.dc5a85eb.webp"
        class="md:h-16"
        alt=""
      />
      <p class="text-xl">Descarga el app ya y conoce los beneficios</p>
      <p class="text-2xl font-bold my-5">Medizona App</p>
      <div class="flex">
        <img
          src="data:image/webp;base64,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"
          class="h-[3rem] mr-3"
          alt=""
        />
        <img
          src="https://v2.medizona.com.mx/_nuxt/qr_pink.bf7365e7.webp"
          class="h-[5rem]"
          alt=""
        />
      </div>
      <div class="flex mt-2 items-end">
        <img
          src="https://v2.medizona.com.mx/_nuxt/qr_orange.701a4b2e.webp"
          class="h-[5rem]"
          alt=""
        />
        <img
          src="data:image/webp;base64,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"
          class="h-[3rem] ml-3"
          alt=""
        />
      </div>
    </div>
    <div class="flex items-center justify-center mt-5">
      <img
        src="https://v2.medizona.com.mx/_nuxt/cellphone_app.6bbcc939.webp"
        class="md:h-[32rem] h-[20rem]"
        alt=""
      />
    </div>
  </section>
  <section class="-20 text-center container mx-auto mb-20">
    <h4 class="text-gray-400 text-2xl">Lea artículos profesionales</h4>
    <h5 class="text-5xl font-bold text-purple mb-20">Últimos artículos</h5>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 justify-items-center"
    >
      <ArticuleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </section>
  <Footer />
</template>