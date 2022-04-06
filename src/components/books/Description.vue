<template>
  <section class="container mt-md-5">
    <p class="text-secondary mb-5">
      Libros / <span>{{ book.title }}</span>
    </p>
    <div class="row">
      <div class="col-12 col-md-5">
        <img src="https://via.placeholder.com/300x350" alt="" />
      </div>
      <div class="col-12 col-md-6">
        <h1 class="mt-4">{{ book.title }}</h1>
        <p class="text-secondary text-uppercase">
          isbn <span>{{ book.isbn }}</span>
        </p>
        <hr />
        <p class="text-secondary">
          Autor <span class="text-dark">{{ book.author }}</span>
        </p>
        <p class="text-secondary">
          Idioma <span class="text-dark">{{ book.language }}</span>
        </p>
        <p class="text-secondary">
          Edicion <span class="text-dark">{{ book.edition }}</span>
        </p>
        <p class="text-secondary">
          Categoria <span class="text-dark">{{ book.category }}</span>
        </p>
        <p class="text-primary fs-5">${{ book.price }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Description",
  data: () => {
    return {
      id: null,
      book: {
        title: "",
        author: "",
        language: "",
        edition: "",
        isbn: "",
        category: "",
        price: "",
      },
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    axios
      .get("https://baphy-store.herokuapp.com/books/" + this.id)
      .then((result) => {
        console.log(result.data);
        this.book.title = result.data.title;
        this.book.author = result.data.author;
        this.book.language = result.data.language;
        this.book.edition = result.data.edition;
        this.book.isbn = result.data.isbn;
        this.book.category = result.data.category.name;
        this.book.price = result.data.relation[0].price;
      });
  },
};
</script>
