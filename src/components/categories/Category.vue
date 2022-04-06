<template>
  <section class="container my-5">
    <p class="text-secondary pt-5">Categorias /</p>
    <div
      class="category mx-5 my-4 d-inline-block"
      v-for="(category, index) in categories"
      :key="index"
    >
      <img
        src="../../assets/img/01.png"
        alt=""
        class="shadow rounded-circle photo"
      />
      <h6 class="text-center mt-4 fs-5">{{ category.name }}</h6>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Category",
  computed: {
    ...mapState("categoriesModule", ["categories"]),
  },
  mounted() {
    this.getcategories();
  },
  methods: {
    ...mapActions("categoriesModule", ["getcategories"]),
  },
};
</script>
