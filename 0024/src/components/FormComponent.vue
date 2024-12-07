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
      email: '', // Se almacena el correo electrónico ingresado por el usuario.
      comment: '', // Se almacena el comentario ingresado por el usuario.
      showMessageError: false, // Se controla la visibilidad del mensaje de error.
      showMessageSuccess: false, // Se controla la visibilidad del mensaje de éxito.
    }
  },
  /**
   * Se definen los métodos del componente.
   */
  methods: {
    /**
     * Se verifica si los campos del formulario están llenos.
     * Si no están llenos, se muestra un mensaje de error.
     * Si están llenos, se muestra un mensaje de éxito y se limpian los campos.
     */
    checkFields() {
      if (!this.name || !this.email || !this.comment) {
        this.showMessageError = true
        this.showMessageSuccess = false
      } else {
        this.showMessageError = false
        this.showMessageSuccess = true

        // Se limpian los campos del formulario.
        this.name = ''
        this.email = ''
        this.comment = ''

        // Se oculta el mensaje de éxito después de 3 segundos.
        setTimeout(() => {
          this.showMessageSuccess = false
        }, 3000)
      }
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
      <label for="email" class="form__label">Email:</label>
      <!-- Se vincula el campo de entrada con la propiedad reactiva 'email'. -->
      <input type="email" id="email" v-model="email" class="form__input" />
    </div>
    <div class="form__field">
      <label for="comment" class="form__label">Comentario:</label>
      <!-- Se vincula el área de texto con la propiedad reactiva 'comment'. -->
      <textarea id="comment" v-model="comment" class="form__textarea"></textarea>
    </div>
    <div class="form__field">
      <!-- Se activa el método 'checkFields' al hacer clic en el botón. -->
      <button @click="checkFields" class="btn form__button">Enviar</button>
    </div>
    <!-- Se muestra el mensaje de error si 'showMessageError' es verdadero. -->
    <p class="form__message form__message--error" v-if="showMessageError">
      Debes llenar todos los campos
    </p>
    <!-- Se muestra el mensaje de éxito si 'showMessageSuccess' es verdadero. -->
    <p class="form__message form__message--success" v-if="showMessageSuccess">
      Formulario enviado correctamente
    </p>
  </div>
</template>

<style lang="scss" scoped>
$color-gray800: #1f2937;
$color-red500: #ef4444;
$color-green500: #22c55e;

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
    /* Se aplica estilo al botón, incluyendo el cursor. */
    cursor: pointer;
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
</style>
