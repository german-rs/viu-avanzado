<script setup>
/**
 * Se importa el componente RouterLink desde vue-router.
 */
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <!-- Se utiliza RouterLink para navegar a la página principal con el logo. -->
      <RouterLink class="nav-link" to="/">
        <img src="../../public/FF.png" alt="Logo" />
        F & F
      </RouterLink>
      <!-- Se define un botón para el toggle de la barra de navegación en dispositivos móviles. -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Se define la sección colapsable de la barra de navegación. -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Se alinea la navegación a la derecha y se definen los elementos de navegación. -->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- Se utiliza RouterLink para navegar a la página de inicio. -->
            <RouterLink class="nav-link" to="/">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <!-- Se utiliza RouterLink para navegar a la página de Flora & Fauna. -->
            <RouterLink class="nav-link" to="/home">Flora & Fauna</RouterLink>
          </li>
          <li class="nav-item">
            <!-- Se utiliza RouterLink para navegar a la página de contacto. -->
            <RouterLink class="nav-link" to="/contact">Contacto</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
