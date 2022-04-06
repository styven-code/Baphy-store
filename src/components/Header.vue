<template>
  <header class="fixed-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <img src="../assets/img/logo.png" alt="" class="logo my-1" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav w-100">
            <li class="nav-item">
              <router-link to="/" class="nav-link mx-4">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/categorias" class="nav-link mx-4"
                >Categorias</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/books" class="nav-link mx-4"
                >Libros</router-link
              >
            </li>
          </ul>
          <router-link to="/login" class="mx-4 my-2 text-secondary"
            ><i class="bi bi-people fs-3"></i
          ></router-link>
        </div>
      </div>
    </nav>
  </header>
  <router-view />
</template>

<script>
export default {
  name: "Head",
};
</script>
