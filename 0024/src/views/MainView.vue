<script>
/**
 * Se importan los getters de Vuex.
 */
import { mapGetters } from 'vuex'
/**
 * Se importan los componentes CardComponent y FooterComponent.
 */
import CardComponent from '@/components/CardComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  /**
   * Se define el nombre del componente para facilitar su identificación.
   */
  name: 'MainView',
  /**
   * Se registran los componentes CardComponent y FooterComponent para su uso dentro
   * de este componente.
   */
  components: {
    CardComponent,
    FooterComponent,
  },
  /**
   * Se definen las propiedades reactivas del componente.
   */
  data() {
    return {
      filterFlora: false,
      filterFauna: false,
      filterVulnerable: false,
      filterEnPeligro: false,
      filterPreocupacionMenor: false,
    }
  },
  /**
   * Se definen las propiedades computadas del componente.
   */
  computed: {
    /**
     * Se mapean los getters de Vuex como propiedades computadas.
     */
    ...mapGetters({
      especies: 'getEspecies',
    }),
    /**
     * Se filtran las especies según los filtros aplicados.
     * Esta función revisa los filtros de flora, fauna, vulnerable, en peligro y preocupación menor,
     * y devuelve la lista de especies que coinciden con los filtros activos. Si no hay filtros aplicados,
     * se devuelven todas las especies. La función utiliza una combinación de condiciones lógicas para determinar
     * si una especie debe ser incluida en el resultado filtrado.
     */
    filteredEspecies() {
      const noFiltersApplied =
        !this.filterFlora &&
        !this.filterFauna &&
        !this.filterVulnerable &&
        !this.filterEnPeligro &&
        !this.filterPreocupacionMenor
      if (noFiltersApplied) {
        return this.especies
      }

      return this.especies.filter((especie) => {
        const matchFlora = this.filterFlora && especie.tipo === 'Flora'
        const matchFauna = this.filterFauna && especie.tipo === 'Fauna'
        const matchVulnerable = this.filterVulnerable && especie.estadoConservacion === 'Vulnerable'
        const matchEnPeligro = this.filterEnPeligro && especie.estadoConservacion === 'En Peligro'
        const matchPreocupacionMenor =
          this.filterPreocupacionMenor && especie.estadoConservacion === 'Preocupación Menor'

        const matchTipo = (!this.filterFlora && !this.filterFauna) || matchFlora || matchFauna
        const matchConservacion =
          (!this.filterVulnerable && !this.filterEnPeligro && !this.filterPreocupacionMenor) ||
          matchVulnerable ||
          matchEnPeligro ||
          matchPreocupacionMenor

        return matchTipo && matchConservacion
      })
    },
    /**
     * Se realiza el ordenamiento de las especies filtradas por nombre.
     */
    sortedFilteredEspecies() {
      return this.filteredEspecies.slice().sort((a, b) => a.nombre.localeCompare(b.nombre))
    },
  },
  /**
   * Se ejecuta el método fetchEspecies cuando el componente es creado para obtener
   * las especies desde el store de Vuex.
   */
  created() {
    this.$store.dispatch('fetchEspecies').then(() => {
      console.log('Especies en el estado (desde Vuex):', this.$store.state.especies)
      console.log('Especies en el estado (desde componente):', this.especies)
    })
  },
}
</script>

<template>
  <div class="flora-fauna container">
    <h1 class="flora-fauna__title mb-4">Flora & Fauna</h1>
    <div class="flora-fauna__filters row">
      <h3 class="flora-fauna__filters-title">Filtros</h3>
      <div class="col-md-6">
        <fieldset class="flora-fauna__fieldset">
          <legend class="flora-fauna__legend">Tipo</legend>
          <label for="flora" class="flora-fauna__label">
            <!-- Se define un checkbox para filtrar por Flora. -->
            <input
              type="checkbox"
              name="flora"
              id="flora"
              v-model="filterFlora"
              class="flora-fauna__checkbox"
            />
            Flora
          </label>
          <label for="fauna" class="flora-fauna__label">
            <!-- Se define un checkbox para filtrar por Fauna. -->
            <input
              type="checkbox"
              name="fauna"
              id="fauna"
              v-model="filterFauna"
              class="flora-fauna__checkbox"
            />
            Fauna
          </label>
        </fieldset>
      </div>

      <div class="col-md-6">
        <fieldset class="flora-fauna__fieldset">
          <legend class="flora-fauna__legend">Estado de conservación</legend>
          <label for="vulnerable" class="flora-fauna__label">
            <!-- Se define un checkbox para filtrar por estado de conservación "Vulnerable". -->
            <input
              type="checkbox"
              name="vulnerable"
              id="vulnerable"
              v-model="filterVulnerable"
              class="flora-fauna__checkbox"
            />
            Vulnerable
          </label>
          <label for="enPeligro" class="flora-fauna__label">
            <!-- Se define un checkbox para filtrar por estado de conservación "En peligro". -->
            <input
              type="checkbox"
              name="enPeligro"
              id="enPeligro"
              v-model="filterEnPeligro"
              class="flora-fauna__checkbox"
            />
            En peligro
          </label>
          <label for="preocupacionMenor" class="flora-fauna__label">
            <!-- Se define un checkbox para filtrar por estado de conservación "Preocupación Menor". -->
            <input
              type="checkbox"
              name="preocupacionMenor"
              id="preocupacionMenor"
              v-model="filterPreocupacionMenor"
              class="flora-fauna__checkbox"
            />
            Preocupación Menor
          </label>
        </fieldset>
      </div>
    </div>
    <div class="flora-fauna__content row justify-content-center">
      <!-- Se renderizan los componentes CardComponent para cada especie filtrada y ordenada. -->
      <div
        class="col-lg-4 col-md-6 col-sm-12 mb-4"
        v-for="especie in sortedFilteredEspecies"
        :key="especie.id"
      >
        <CardComponent :especie="especie" />
      </div>
    </div>
    <!-- Se incluye el componente FooterComponent al final de la vista. -->
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
$color-gray700: #374151;

.flora-fauna {
  &__title {
    /* Se aplica un margen superior y estilos de texto al título principal. */
    margin-top: 2em;
    text-align: center;
    font-size: 2.5em;
  }

  &__filters {
    /* Se aplica un margen inferior y estilos de texto a la sección de filtros. */
    margin-bottom: 2em;

    &-title {
      font-size: 1.5em;
    }
  }

  &__fieldset {
    /* Se aplican estilos de borde, relleno y radio de borde a los fieldsets. */
    margin-bottom: 1.5em;
    border: 1px solid $color-gray700;
    padding: 1em;
    border-radius: 0.3em;

    &__legend {
      /* Se aplican estilos de texto a los elementos legend. */
      font-size: 1.1em;
      font-weight: bold;
    }
  }

  &__label {
    /* Se aplican estilos de visualización y márgenes a las etiquetas. */
    display: block;
    margin: 0.5em 0;
    font-size: 1em;
  }

  &__checkbox {
    /* Se aplica un margen derecho a los checkboxes. */
    margin-right: 0.5em;
  }

  &__content {
    /* Se utiliza Flexbox para el contenido y se aplica un espacio entre elementos. */
    display: flex;
    flex-wrap: wrap;
    gap: 1.5em;
  }
}
</style>
