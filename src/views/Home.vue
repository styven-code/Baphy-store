<template>
  <main class="mt-5 pt-4">
    <Carousel></Carousel>
    <Books></Books>
  </main>
</template>

<script>
import Carousel from "../components/home/Carousel.vue";
import Books from "../components/home/Books.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Books,
  },
};
</script>
