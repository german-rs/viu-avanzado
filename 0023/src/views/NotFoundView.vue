<script>
export default {
  name: 'NotFoundView',
};
</script>

<template>
  <div class="not-found">
    <img class="not-found__image" src="../../public/not-found.webp" alt="página no encontrada">
    <h1 class="not-found__title">Página no encontrada</h1>
    <p class="not-found__message">Lo sentimos, la página que buscas no existe.</p>
    <router-link class="btn not-found__button" to="/">Volver al inicio</router-link>
  </div>
</template>


<style lang="scss" scoped>
$color-gray800: #1f2937;
$color-gray700: #374151;

.not-found {  
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  &__title {
    text-align: center;
    font-size: 2em;
    color: $color-gray700;
  }

  &__message {
    font-size: 1.2rem;
    color: $color-gray800;
  }

  &__button{
    text-decoration: none;
  }

}
</style>


  