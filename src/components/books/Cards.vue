<template>
  <section class="container">
    <p class="text-secondary my-5">Libros /</p>
    <div
      class="card d-inline-block mx-4 my-3"
      v-for="(book, index) in books"
      :key="index"
      @click="details(book.id)"
    >
      <img src="https://via.placeholder.com/300" class="card-img-top" alt="" />
      <div class="card-body size">
        <h5 class="fs-6">{{ book.title }}</h5>
        <p>{{ book.author }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Book",
  computed: {
    ...mapState("booksModule", ["books"]),
  },
  mounted() {
    this.getbooks();
  },
  methods: {
    details(id) {
      this.$router.push("/book/" + id);
    },
    ...mapActions("booksModule", ["getbooks"]),
  },
};
</script>
