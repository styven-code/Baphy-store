<template>
  <section class="container">
    <div class="my-5">
      <h1 class="fs-2 text-center">Libros destacados</h1>
      <div
        class="card d-inline-block mx-4 my-3"
        v-for="(book, index) in books"
        :key="index"
        @click="details(book.id)"
      >
        <img
          src="https://via.placeholder.com/300"
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="fs-6">{{ book.title }}</h5>
          <p>{{ book.author }}</p>
        </div>
      </div>
    </div>
    <div class="text-center my-5">
      <button class="btn btn-primary" @click="more()">
        Ver libros disponibles
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Books",
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
    more() {
      this.$router.push("/books");
    },
    ...mapActions("booksModule", ["getbooks"]),
  },
};
</script>
