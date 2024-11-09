<script>
// Importa funciones específicas de Firestore desde la biblioteca 'firebase/firestore'.
import { getFirestore, collection, onSnapshot, addDoc, doc, deleteDoc } from 'firebase/firestore';
// Importa la configuración de Firebase desde un archivo de configuración.
import firebaseApp from '../firebaseconfig';

export default { 
data() {
    return { 
        // Variable para almacenar el nombre del nuevo colaborador.
        nuevoColaborador: '', 
        // Array para almacenar la lista de colaboradores.
        colaboradores: []
    }; 
},
mounted() {
    // Obtiene una instancia de Firestore utilizando la configuración de Firebase.
    const db = getFirestore(firebaseApp);
    // Hace referencia a la colección 'colaboradores' en Firestore.
    const colaboradoresRef = collection(db, 'colaboradores');
    // Escucha los cambios en la colección 'colaboradores' y actualiza la lista en tiempo real.
    onSnapshot(colaboradoresRef, (snapshot) => {
        // Mapea los documentos en la colección a un array de objetos con sus datos e ID.
        this.colaboradores = snapshot.docs.map((doc) => ({ 
            id: doc.id, ...doc.data() 
        })); 
    });
}, 
methods: {
    // Método asincrónico para agregar un nuevo colaborador a la colección.
    async addColaborador() {
        // Verifica que el campo de nuevo colaborador no esté vacío.
        if (this.nuevoColaborador.trim() === '') return; 
        // Obtiene una instancia de Firestore.
        const db = getFirestore(firebaseApp);
        // Hace referencia a la colección 'colaboradores'.
        const colaboradoresRef = collection(db, 'colaboradores');
        // Agrega un nuevo documento a la colección con el nombre del colaborador.
        await addDoc(colaboradoresRef, { 
            nombre: this.nuevoColaborador 
        });
        // Resetea el campo de entrada de nuevo colaborador.
        this.nuevoColaborador = ''; 
    },
    // Método asincrónico para eliminar un colaborador de la colección.
    async deleteColaborador(colaboradorId) {
        // Obtiene una instancia de Firestore.
        const db = getFirestore(firebaseApp);
        // Hace referencia a un documento específico en la colección 'colaboradores' utilizando el ID del colaborador.
        const colaboradorRef = doc(db, 'colaboradores', colaboradorId); 
        // Elimina el documento de la colección.
        await deleteDoc(colaboradorRef);
    },
}
};
</script>

<template> 
<div>
    <!-- Formulario para agregar un nuevo colaborador. -->
    <form @submit.prevent="addColaborador">
        <!-- Campo de entrada para el nombre del nuevo colaborador, enlazado con la variable 'nuevoColaborador'. -->
        <input v-model="nuevoColaborador" placeholder="Nuevo colaborador" /> 
        <!-- Botón para enviar el formulario y agregar el nuevo colaborador. -->
        <button type="submit">Agregar</button>
    </form> 
    <!-- Lista no ordenada para mostrar los colaboradores existentes. -->
    <ul>
        <!-- Recorre la lista de colaboradores y crea un elemento de lista para cada uno, utilizando su ID como clave. -->
        <li v-for="colaborador in colaboradores" :key="colaborador.id">
            {{ colaborador.id }} - {{ colaborador.nombre }}
            <!-- Botón para eliminar un colaborador, llama al método 'deleteColaborador' con el ID del colaborador. -->
            <button @click="deleteColaborador(colaborador.id)">Eliminar</button>
        </li> 
    </ul>
</div> 
</template>
<style scoped>
form{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0;
}
ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
