<template>
  <main class="mt-5 pt-4">
    <section class="container">
      <form method="post">
        <div class="row mt-5">
          <div class="col-12 col-md-5">
            <fieldset class="mt-5">
              <label for="title" class="form-label mt-4">Titulo</label>
              <input
                type="text"
                name="title"
                id="title"
                class="form-control"
                placeholder="Ingrese el titulo del libro"
                v-model="newBook.title"
              />
              <label for="author" class="form-label mt-4">Autor</label>
              <input
                type="text"
                name="author"
                id="author"
                class="form-control"
                placeholder="Ingrese el autor del libro"
                v-model="newBook.author"
              />
              <label for="language" class="form-label mt-4">Idioma</label>
              <input
                type="text"
                name="language"
                id="language"
                class="form-control"
                placeholder="Ingrese el Idioma"
                v-model="newBook.language"
              />
              <label for="edition" class="form-label mt-4">Editorial</label>
              <input
                type="text"
                name="edition"
                id="edition"
                class="form-control"
                placeholder="Ingrese la editorial"
                v-model="newBook.edition"
              />
            </fieldset>
            <div id="respuesta" class="bg-okey text-center d-none mt-4">
              <p class="py-3">
                <i class="bi bi-check-circle me-2"></i> Creado correctamente
              </p>
            </div>
          </div>
          <div class="col-12 col-md-5 offset-md-1">
            <fieldset class="mt-md-5">
              <label for="isbn" class="form-label mt-4">ISBN</label>
              <input
                type="text"
                name="isbn"
                id="isbn"
                class="form-control"
                placeholder="Ingrese el ISBN o codigo de barras"
                v-model="newBook.isbn"
              />
              <label for="categoryId" class="form-label mt-4">Categoria</label>
              <select name="categoryId" id="categoryId" class="form-select">
                <option
                  v-for="(category, index) in categories"
                  :key="index"
                  value=""
                >
                  {{ category.name }}
                </option>
              </select>
              <label for="stock" class="form-label mt-4">Cantidad</label>
              <input
                type="text"
                name="stock"
                id="stock"
                class="form-control"
                v-model="newBook.relation.stock"
              />
              <label for="price" class="form-label mt-4">Precio</label>
              <input
                type="text"
                name="price"
                id="price"
                class="form-control"
                v-model="newBook.relation.price"
              />
            </fieldset>
            <fieldset class="my-5">
              <button class="btn btn-danger me-5" @click="volver()">
                Volver
              </button>
              <input
                type="submit"
                value="Agergar"
                class="btn btn-primary"
                @click.prevent="createBook(newBook)"
              />
            </fieldset>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => {
    return {
      newBook: {
        title: "",
        author: "",
        language: "",
        edition: "",
        isbn: "",
        categoryId: 1,
        relation: {
          customerId: 1,
          stock: "",
          price: "",
        },
      },
    };
  },
  computed: {
    ...mapState("categoriesModule", ["categories"]),
  },
  mounted() {
    this.getcategories();
  },
  methods: {
    ...mapActions("categoriesModule", ["getcategories"]),
    ...mapActions("booksModule", ["createBook"]),
    volver() {
      this.$router.push("/user");
    },
  },
};
</script>
