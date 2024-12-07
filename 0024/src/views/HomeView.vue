<script>
/**
 * Se importa el componente FooterComponent desde la ruta especificada.
 */
import FooterComponent from '@/components/FooterComponent.vue'
/**
 * Se importa el componente CarouselComponent desde la ruta especificada.
 */
import CarouselComponent from '@/components/CarouselComponent.vue'

export default {
  /**
   * Se define el nombre del componente para facilitar su identificación en
   * herramientas de depuración y desarrollo.
   */
  name: 'WelcomePage',
  /**
   * Se registran los componentes FooterComponent y CarouselComponent para su uso
   * dentro de este componente.
   */
  components: {
    FooterComponent,
    CarouselComponent,
  },
}
</script>

<template>
  <div class="welcome-page container">
    <header class="welcome-page__header">
      <h1 class="welcome-page__title">Bienvenidos a la Flora y Fauna de Chile</h1>
      <!-- Se inserta el componente CarouselComponent dentro del encabezado. -->
      <CarouselComponent />
      <p class="welcome-page__intro">
        Chile, un país de contrastes y maravillas naturales, alberga una diversidad única de flora y
        fauna. Desde el Desierto de Atacama en el norte hasta la Patagonia en el sur, descubre las
        maravillas que hacen de nuestro país un paraíso para los amantes de la naturaleza.
      </p>
    </header>

    <section class="welcome-page__content">
      <h2 class="welcome-page__subtitle">¿Qué encontrarás aquí?</h2>
      <p class="welcome-page__text">Nuestra plataforma está diseñada para guiarte a través de:</p>
      <ul class="welcome-page__list">
        <li class="welcome-page__item">
          Las especies vegetales que dan vida a los bosques, desiertos y costas chilenas, destacando
          la importancia de su conservación.
        </li>
        <li class="welcome-page__item">
          La fauna que habita en nuestras tierras, desde los pequeños insectos hasta los majestuosos
          cóndores.
        </li>
        <li class="welcome-page__item">
          Los ecosistemas únicos que convierten a Chile en un lugar tan especial.
        </li>
      </ul>
      <!-- Se proporciona un enlace para explorar la Flora y Fauna. -->
      <RouterLink class="btn" to="/home">Explorar Flora & Fauna</RouterLink>
    </section>

    <section class="welcome-page__feature">
      <h2 class="welcome-page__subtitle">Chile: Un refugio para la biodiversidad</h2>
      <p class="welcome-page__text">
        Gracias a su geografía única, Chile es hogar de una impresionante variedad de ecosistemas.
        Aquí puedes encontrar:
      </p>
      <ul class="welcome-page__list">
        <li class="welcome-page__item">
          <strong>El Desierto de Atacama:</strong> El lugar más árido del planeta, con especies
          adaptadas a condiciones extremas.
        </li>
        <li class="welcome-page__item">
          <strong>La Cordillera de los Andes:</strong> Refugio de animales como el guanaco y el
          puma.
        </li>
        <li class="welcome-page__item">
          <strong>Los Bosques Valdivianos:</strong> Hogar del alerce, uno de los árboles más
          longevos del mundo.
        </li>
      </ul>
    </section>

    <section class="welcome-page__cta">
      <h2 class="welcome-page__subtitle">¡Sé parte de la conservación!</h2>
      <p class="welcome-page__text">
        Cada pequeño paso cuenta para proteger nuestra biodiversidad. Explorar y aprender es el
        primer paso hacia la acción. Únete a nosotros en este viaje y descubre cómo puedes ayudar a
        preservar el patrimonio natural de Chile.
      </p>
      <!-- Se proporciona un enlace para conocer más sobre la conservación. -->
      <RouterLink class="btn" to="/home">Conoce Más</RouterLink>
    </section>
    <!-- Se inserta el componente FooterComponent al final de la vista. -->
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
.welcome-page {
  /* Se utiliza Flexbox para organizar los elementos del contenedor principal. */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  line-height: 1.6;
  padding: 20px;
  text-align: center;

  &__header {
    /* Se aplican estilos de fondo, relleno y márgenes al encabezado. */
    background: #f4f4f4;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
  }

  &__title {
    /* Se define el tamaño de fuente del título principal. */
    font-size: 2.5em;
  }

  &__intro {
    /* Se define el tamaño de fuente del texto introductorio. */
    font-size: 1.2em;
  }

  &__content,
  &__feature,
  &__cta {
    /* Se aplica un margen inferior a las secciones de contenido, características y llamada a la acción. */
    margin-bottom: 30px;
  }

  &__subtitle {
    /* Se define el tamaño de fuente y margen inferior de los subtítulos. */
    font-size: 1.8em;
    margin-bottom: 10px;
  }

  &__text {
    /* Se define el tamaño de fuente del texto. */
    font-size: 18px;
  }

  &__list {
    /* Se elimina el estilo de lista y se elimina el relleno. */
    list-style: none;
    padding: 0;
  }

  &__item {
    /* Se define el margen y tamaño de fuente de los elementos de la lista. */
    margin: 10px 0;
    font-size: 1rem;
  }
}
</style>
