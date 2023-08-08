<template>
  <Carousel
    :wrapAround="true"
    :transition="500"
    :breakpoints="breakpoints"
    v-bind="settings"
  >
    <Slide v-for="specialist in specialists" :key="specialist.id">
      <SpecialistCard :specialist="specialist" />
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
  
<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import SpecialistCard from "../../ui/components/SpecialistCard.vue";

export default defineComponent({
  name: "Autoplay",
  props: {
    specialists: {
      type: Array,
      required: true,
    },
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    SpecialistCard,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      900: {
        itemsToShow: 3,
        snapAlign: "start",
      },
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
      1300: {
        itemsToShow: 5,
        snapAlign: "start",
      }
    },
  }),
});
</script>
  
