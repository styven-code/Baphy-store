<template>
  <section class="container my-5 table-responsive">
    <button class="btn btn-success" @click="create()">Agregar</button>
    <div id="respuesta" class="bg-error text-center d-none mt-3">
      <p class="py-3">
        <i class="bi bi-check-circle me-2"></i> Se Elimino correctamente
      </p>
    </div>
    <div id="error" class="bg-error text-center d-none mt-3">
      <p class="py-3">
        <i class="bi bi-x-circle mx-1"></i> El libro esta relacionado con otro
        vendedores, no puedes eliminarlo
      </p>
    </div>
    <table class="mt-4 table table-hover table align-middle">
      <thead class="border-0">
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Autor</th>
          <th scope="col">editorial</th>
          <th scope="col">Precio</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books" :key="index">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.edition }}</td>
          <td class="fs-4">
            <i
              class="bi bi-pencil-square text-info mx-4"
              @click="update(book.id)"
            ></i
            ><i
              class="bi bi-x-circle text-danger"
              @click.prevent="deleted(book.id)"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";

export default {
  name: "Principal",

  computed: {
    ...mapState("booksModule", ["books"]),
  },
  mounted() {
    this.getbooks();
  },
  methods: {
    ...mapActions("booksModule", ["getbooks"]),
    create() {
      this.$router.push("/create-book");
    },
    update(id) {
      this.$router.push("/update-book/" + id);
    },
    deleted(id) {
      axios
        .delete("https://baphy-store.herokuapp.com/books/" + id)
        .then((result) => {
          console.error(result.data);
          document.getElementById("respuesta").classList.remove("d-none");
        });
      document.getElementById("error").classList.remove("d-none");
    },
  },
};
</script>
