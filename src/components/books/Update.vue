<template>
  <main class="mt-5 pt-4">
    <section class="container">
      <form method="">
        <div class="row mt-5">
          <div class="col-12 col-md-6">
            <fieldset class="mt-md-5">
              <label for="title" class="form-label mt-4">Titulo</label>
              <input
                type="text"
                name="title"
                id="title"
                class="form-control"
                v-model="book.title"
              />
              <label for="author" class="form-label mt-4">Autor</label>
              <input
                type="text"
                name="author"
                id="author"
                class="form-control"
                v-model="book.author"
              />
            </fieldset>
            <fieldset>
              <label for="language" class="form-label mt-4">Idioma</label>
              <input
                type="text"
                name="language"
                id="language"
                class="form-control"
                v-model="book.language"
              />
              <label for="edition" class="form-label mt-4">Editorial</label>
              <input
                type="text"
                name="edition"
                id="edition"
                class="form-control"
                v-model="book.edition"
              />
            </fieldset>
            <fieldset>
              <label for="isbn" class="form-label mt-4">ISBN</label>
              <input
                type="text"
                name="isbn"
                id="isbn"
                class="form-control"
                v-model="book.isbn"
              />
            </fieldset>
            <fieldset class="my-5 text-center">
              <div id="respuesta" class="bg-okey text-center d-none">
                <p class="py-3">
                  <i class="bi bi-check-circle me-2"></i> Se actualizo
                  correctamente
                </p>
              </div>
              <button class="btn btn-danger me-5" @click="volver()">
                Volver
              </button>
              <input
                type="submit"
                value="Editar"
                class="btn btn-primary"
                @click.prevent="update()"
              />
            </fieldset>
          </div>
          <div class="col-12 col-md">
            <img src="../../assets/img/07.png" alt="" class="imagenes" />
          </div>
        </div>
      </form>
    </section>
  </main>
</template>
<script>
import axios from "axios";

export default {
  name: "Update",
  data: () => {
    return {
      id: "",
      book: {
        title: "",
        author: "",
        language: "",
        edition: "",
        isbn: "",
      },
    };
  },

  mounted() {
    this.id = this.$route.params.id;
    axios
      .get("https://baphy-store.herokuapp.com/books/" + this.id)
      .then((result) => {
        this.id = result.data.id;
        this.book.title = result.data.title;
        this.book.author = result.data.author;
        this.book.language = result.data.language;
        this.book.edition = result.data.edition;
        this.book.isbn = result.data.isbn;
      });
  },
  methods: {
    volver() {
      this.$router.push("/user");
    },
    update() {
      axios
        .patch("https://baphy-store.herokuapp.com/books/" + this.id, this.book)
        .then((result) => console.log(result.data));
      document.getElementById("respuesta").classList.remove("d-none");
    },
  },
};
</script>
