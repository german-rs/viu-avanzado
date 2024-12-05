<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <ul>
          <li><RouterLink to="/">Flora & Fauna</RouterLink></li>
          <li><RouterLink to="/contact">Contacto</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
