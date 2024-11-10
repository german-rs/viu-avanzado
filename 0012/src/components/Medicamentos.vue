<script>
import { getFirestore, addDoc, collection } from 'firebase/firestore'; // Importa funciones específicas de Firestore para interactuar con la base de datos de Firebase
import firebaseApp from '../firebaseconfig'; // Importa la configuración de Firebase desde un archivo externo

export default {
    // Definición de datos reactivos y métodos del componente
    data() {
        return {
            nuevoMedicamento: '', // Variable reactiva que almacena el nombre del nuevo medicamento a agregar, enlazada con el campo de entrada
            medicamentoAgregado: false // Variable booleana que indica si el medicamento fue agregado exitosamente; controla la visibilidad del mensaje de confirmación
        };
    },
    methods: {
        // Método asíncrono para agregar un nuevo medicamento a la base de datos
        async agregarMedicamento() {
            // Si el campo de entrada está vacío (o solo contiene espacios), no realiza ninguna acción y termina la ejecución
            if (this.nuevoMedicamento.trim() === '') return;

            // Obtiene la instancia de Firestore desde Firebase usando la configuración importada
            const db = getFirestore(firebaseApp);

            // Define una referencia a la colección 'medicamentos' dentro de la base de datos
            const medicamentosRef = collection(db, 'medicamentos');

            try {
                // Intenta agregar un nuevo documento a la colección de medicamentos
                await addDoc(medicamentosRef, {
                    nombre: this.nuevoMedicamento // El documento contiene el nombre del medicamento ingresado por el usuario
                });

                // Si la operación es exitosa, limpia el campo de entrada
                this.nuevoMedicamento = '';

                // Cambia la variable medicamentoAgregado a true para mostrar el mensaje "Medicamento agregado"
                this.medicamentoAgregado = true;

                // Usa un temporizador para ocultar el mensaje después de 3 segundos
                setTimeout(() => {
                    this.medicamentoAgregado = false; // Después de 3 segundos, el mensaje desaparece al cambiar medicamentoAgregado a false
                }, 3000);
            } catch (error) {
                // Si ocurre un error durante la operación de agregar, se registra en la consola
                console.error("Error al agregar el medicamento: ", error);
            }
        }
    }
}
</script>

<template>
    <div class="principal">
        <!-- Formulario para agregar un medicamento. Se previene el envío por defecto y se llama a la función agregarMedicamento -->
        <form @submit.prevent="agregarMedicamento">
            <!-- Campo de entrada de texto enlazado a la variable nuevoMedicamento -->
            <input type="text" v-model="nuevoMedicamento">
            <!-- Mensaje condicional. Solo se muestra si medicamentoAgregado es true -->
            <p v-if="medicamentoAgregado">Medicamento agregado</p>
            <!-- Botón para enviar el formulario y agregar el medicamento -->
            <button type="submit">Agregar medicamento</button>
        </form>
    </div>
</template>

<style scoped>


.principal {
    font-family: 'Courier New', Courier, monospace; 
}

form {
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    gap: .5em; 
}

button {
    font-family: 'Courier New', Courier, monospace; 
}
</style>
