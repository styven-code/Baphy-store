<template>
  <section class="container my-5">
    <div class="row">
      <div class="col">
        <h1 class="text-center fs-3 text-uppercase">
          bienvenido a baphy store
        </h1>
        <p class="text-center">Inicia sesion para empezar a vender</p>
        <div class="container">
          <form method="post">
            <fieldset class="mt-5">
              <label for="email" class="form-label">Correo</label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                v-model="user.email"
              />
            </fieldset>
            <fieldset class="my-3">
              <label for="password" class="form-label">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                v-model="user.password"
              />
            </fieldset>
            <fieldset>
              <div id="respuesta" class="bg-error text-center d-none">
                <p class="py-3 text-danger">
                  <i class="bi bi-x-circle mx-1"></i> Correo o contraseña no
                  coinciden no coinciden!
                </p>
              </div>
            </fieldset>
            <fieldset class="mt-4">
              <input
                type="button"
                value="Iniciar sesion"
                class="btn btn-primary w-100 shadow"
                @click="login(user)"
              />
            </fieldset>
          </form>
          <p class="text-center my-3 w-100">
            Ya tienes cuenta
            <a href="/register" class="text-decoration-none">Registrarme</a>
          </p>
        </div>
      </div>
      <div class="col-12 col-md">
        <img src="../../assets/img/02.png" alt="" class="imagenes" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Form",
  data: () => {
    return {
      users: [],
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login(user) {
      for (let i = 0; i < this.users.length; i++) {
        const a = this.users[i];
        if (user.email == a.email) {
          if (user.password == a.password) {
            this.$router.push("/user");
          }
        }
      }
      document.getElementById("respuesta").classList.remove("d-none");
    },
  },
  beforeCreate() {
    axios.get("https://baphy-store.herokuapp.com/users").then((result) => {
      this.users = result.data;
    });
  },
};
</script>
