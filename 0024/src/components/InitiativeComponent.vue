<script>
/**
 * Se define el componente con sus datos reactivos y métodos.
 */
export default {
  /**
   * Se definen las propiedades reactivas del componente.
   */
  data() {
    return {
      name: '', // Se almacena el nombre ingresado por el usuario.
      comment: '', // Se almacena el comentario ingresado por el usuario.
      showMessageError: false, // Se controla la visibilidad del mensaje de error.
      showMessageSuccess: false, // Se controla la visibilidad del mensaje de éxito.
      initiatives: this.getInitiativesFromLocalStorage(), // Se obtienen las iniciativas desde localStorage.
    }
  },
  /**
   * Se definen los métodos del componente.
   */
  methods: {
    /**
     * Se verifica si los campos del formulario están llenos.
     * Si no están llenos, se muestra un mensaje de error.
     * Si están llenos, se guarda la iniciativa y se muestra un mensaje de éxito.
     */
    checkFields() {
      if (!this.name || !this.comment) {
        this.showMessageError = true
        this.showMessageSuccess = false
      } else {
        this.showMessageError = false
        this.showMessageSuccess = true

        const newInitiative = {
          name: this.name,
          comment: this.comment,
        }

        // Se agrega la nueva iniciativa a la lista y se guarda en localStorage.
        this.initiatives.push(newInitiative)
        this.saveInitiativesToLocalStorage()

        // Se limpian los campos del formulario.
        this.name = ''
        this.comment = ''

        // Se oculta el mensaje de éxito después de 3 segundos.
        setTimeout(() => {
          this.showMessageSuccess = false
        }, 3000)
      }
    },
    /**
     * Se guarda la lista de iniciativas en localStorage.
     */
    saveInitiativesToLocalStorage() {
      localStorage.setItem('initiatives', JSON.stringify(this.initiatives))
    },
    /**
     * Se obtienen las iniciativas desde localStorage.
     * @returns {Array} Lista de iniciativas.
     */
    getInitiativesFromLocalStorage() {
      const initiatives = localStorage.getItem('initiatives')
      return initiatives ? JSON.parse(initiatives) : []
    },
  },
}
</script>

<template>
  <div class="form container">
    <div class="form__field">
      <label for="name" class="form__label">Nombre:</label>
      <!-- Se vincula el campo de entrada con la propiedad reactiva 'name'. -->
      <input type="text" id="name" v-model="name" class="form__input" />
    </div>
    <div class="form__field">
      <label for="comment" class="form__label">Iniciativa:</label>
      <!-- Se vincula el área de texto con la propiedad reactiva 'comment'. -->
      <textarea id="comment" v-model="comment" class="form__textarea"></textarea>
    </div>
    <div class="form__field">
      <!-- Se activa el método 'checkFields' al hacer clic en el botón. -->
      <button @click="checkFields" class="btn form__button">Enviar</button>
    </div>
    <!-- Se muestra el mensaje de error si 'showMessageError' es verdadero. -->
    <p class="form__message form__message--error" v-if="showMessageError">
      Debes llenar los campos
    </p>
    <!-- Se muestra el mensaje de éxito si 'showMessageSuccess' es verdadero. -->
    <p class="form__message form__message--success" v-if="showMessageSuccess">
      ¡Iniciativa registrada, muchas gracias!
    </p>
  </div>

  <div class="register container">
    <h3 class="register__title">Registro de iniciativas</h3>
    <!-- Se recorre la lista de iniciativas y se crean tarjetas para cada una. -->
    <div v-for="(initiative, index) in initiatives" :key="index" class="register__card">
      <h4 class="register__name">{{ initiative.name }}</h4>
      <p class="register__comment">{{ initiative.comment }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$color-gray800: #1f2937;
$color-red500: #ef4444;
$color-green500: #22c55e;
$color-green100: #dcfce7;

.form {
  padding: 2em 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;

  &__field {
    /* Se establece la disposición de los campos del formulario en columnas. */
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    gap: 0.2em;
  }

  &__label {
    /* Se aplica un peso de fuente para las etiquetas del formulario. */
    font-weight: 500;
  }

  &__input,
  &__textarea {
    /* Se aplican estilos de padding, borde, sombra y radio de borde a las entradas y áreas de texto. */
    padding: 0.5em;
    border: 2px solid $color-gray800;
    box-shadow: -3px 5px $color-gray800;
    border-radius: 4px;
    font-size: 18px;
  }

  &__button {
    /* Se aplica estilo al botón, incluyendo el cursor, el ancho y el margen. */
    cursor: pointer;
    width: 200px;
    margin: auto;
  }

  &__message {
    /* Se establecen los márgenes superiores, el peso de la fuente y el tamaño de la fuente para los mensajes. */
    margin-top: 1em;
    font-weight: 500;
    font-size: 18px;

    &--error {
      /* Se aplica color rojo al mensaje de error. */
      color: $color-red500;
    }

    &--success {
      /* Se aplica color verde al mensaje de éxito. */
      color: $color-green500;
    }
  }
}

.register {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  &__title {
    /* Se centra el texto del título del registro. */
    text-align: center;
  }

  &__card {
    /* Se aplican estilos de borde, padding, radio de borde, sombra y color de fondo a las tarjetas de registro. */
    border: 2px solid $color-gray800;
    padding: 1em;
    border-radius: 4px;
    box-shadow: -3px 5px $color-gray800;
    background-color: $color-green100;
  }

  &__name {
    /* Se define el tamaño de fuente y el peso de fuente del nombre en las tarjetas de registro. */
    font-size: 1.2rem;
    font-weight: 600;
  }

  &__comment {
    /* Se define el tamaño de fuente del comentario en las tarjetas de registro. */
    font-size: 1rem;
  }
}
</style>
