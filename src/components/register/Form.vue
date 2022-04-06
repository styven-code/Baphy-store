<template>
  <section class="container my-5">
    <div class="row">
      <div class="col-12 col-md">
        <h1 class="text-center fs-3 text-uppercase">
          bienvenido a baphy store
        </h1>
        <p class="text-center">Crea tu cuenta para poder vender</p>
        <div class="container">
          <form method="post">
            <fieldset class="mt-5">
              <label for="name" class="form-label">Nombres</label>
              <input
                type="text"
                name="name"
                id="name"
                class="form-control"
                v-model="newUser.name"
              />
            </fieldset>
            <fieldset class="my-3">
              <label for="lastname" class="form-label">Apellidos</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                class="form-control"
                v-model="newUser.lastname"
              />
            </fieldset>
            <fieldset class="row my-4">
              <label for="documentId" class="col">
                <select name="documentId" id="documentId" class="form-select">
                  <option
                    value=""
                    v-for="(documents, index) in document"
                    :key="index"
                  >
                    {{ documents.documentName }}
                  </option>
                </select>
              </label>
              <input
                type="number"
                name="numberDocument"
                id="numberDocument"
                class="form-control col"
                placeholder="Numero de documento"
                v-model="newUser.numberDocument"
              />
            </fieldset>
            <fieldset class="my-3">
              <label for="email" class="form-label">Correo</label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                v-model="newUser.user.email"
              />
            </fieldset>
            <fieldset class="my-3">
              <label for="password" class="form-label">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                v-model="newUser.user.password"
              />
            </fieldset>
            <fieldset class="mb-4">
              <div id="respuesta" class="bg-okey text-center d-none">
                <p class="py-3">Registrado con exito!</p>
              </div>
            </fieldset>
            <fieldset class="mt-3">
              <input
                type="submit"
                value="Registrarme"
                class="btn btn-primary w-100 shadow"
                @click.prevent="createUser(newUser)"
              />
            </fieldset>
          </form>
          <p class="text-center my-3 w-100">
            Ya tienes cuenta
            <a href="/login" class="text-decoration-none">Iniciar sesion</a>
          </p>
        </div>
      </div>
      <div class="col-12 col-md">
        <img src="../../assets/img/03.png" alt="" class="imagenes" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Form",
  data: () => {
    return {
      document: [],
      newUser: {
        name: "",
        lastname: "",
        numberDocument: "",
        documentId: 1,
        user: {
          email: "",
          password: "",
        },
      },
    };
  },
  methods: {
    ...mapActions("customerModule", ["createUser"]),
  },
  mounted() {
    axios
      .get("https://baphy-store.herokuapp.com/document-type")
      .then((result) => {
        this.document = result.data;
      });
  },
};
</script>
