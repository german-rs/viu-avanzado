
<script>
import { getFirestore, collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import firebaseApp from '../firebaseconfig';

export default {
data() {
    return {
        // Variable para el nombre del nuevo colaborador
        nuevoColaborador: '',
        // Array para almacenar los colaboradores de la base de datos
        colaboradores: [],
        // ID del colaborador que está en modo de edición
        editingColaboradorId: null,
        // Nombre temporal del colaborador mientras se edita
        nuevoNombre: ''
    };
},
mounted() {
    // Cargar colaboradores existentes al montar el componente
    const db = getFirestore(firebaseApp); // Obtiene una instancia de Firestore
    const colaboradoresRef = collection(db, 'colaboradores'); // Referencia a la colección de colaboradores
    
    // Escucha cambios en la colección en tiempo real
    onSnapshot(colaboradoresRef, (snapshot) => {
        // Mapea los documentos de la colección a un array y actualiza "colaboradores"
        this.colaboradores = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
    });
},
methods: {
    // Método para agregar un nuevo colaborador
    async addColaborador() {
        // Si el campo está vacío, no hace nada
        if (this.nuevoColaborador.trim() === '') return;

        const db = getFirestore(firebaseApp); // Instancia de Firestore
        const colaboradoresRef = collection(db, 'colaboradores'); // Referencia a la colección

        // Agrega un nuevo documento con el nombre del colaborador
        await addDoc(colaboradoresRef, { nombre: this.nuevoColaborador });
        this.nuevoColaborador = ''; // Limpia el campo después de agregar
    },

    // Método para eliminar un colaborador
    async deleteColaborador(colaboradorId) {
        const db = getFirestore(firebaseApp); // Instancia de Firestore
        const colaboradorRef = doc(db, 'colaboradores', colaboradorId); // Referencia al documento específico

        // Elimina el documento de la colección
        await deleteDoc(colaboradorRef);
    },

    // Método para iniciar la edición de un colaborador
    startEdit(colaborador) {
        // Guarda el ID del colaborador en edición y su nombre actual
        this.editingColaboradorId = colaborador.id;
        this.nuevoNombre = colaborador.nombre;
    },

    // Método para cancelar la edición
    cancelEdit() {
        // Limpia las variables relacionadas con la edición
        this.editingColaboradorId = null;
        this.nuevoNombre = '';
    },

    // Método para confirmar la actualización de un colaborador
    async confirmUpdate(colaboradorId) {
        // Si el nuevo nombre está vacío, no hace nada
        if (this.nuevoNombre.trim() === '') return;

        const db = getFirestore(firebaseApp); // Instancia de Firestore
        const colaboradorRef = doc(db, 'colaboradores', colaboradorId); // Referencia al documento específico

        // Actualiza el nombre del colaborador en la base de datos
        await updateDoc(colaboradorRef, { nombre: this.nuevoNombre });
        this.cancelEdit(); // Cancela el modo de edición después de actualizar
    }
}
};
</script>
<template>
<div>
    <!-- Formulario para agregar un nuevo colaborador -->
    <form @submit.prevent="addColaborador">
        <!-- Campo de entrada para el nombre del nuevo colaborador -->
        <input v-model="nuevoColaborador" placeholder="Nuevo colaborador" />
        <!-- Botón para enviar el formulario y agregar el colaborador -->
        <button type="submit">Agregar</button>
    </form>

    <!-- Lista de colaboradores -->
    <ul>
        <!-- Recorre cada colaborador en la lista de colaboradores -->
        <li v-for="colaborador in colaboradores" :key="colaborador.id">
            <!-- Si el colaborador está en modo de edición -->
            <div v-if="editingColaboradorId === colaborador.id">
                <!-- Campo de entrada para editar el nombre del colaborador -->
                <input v-model="nuevoNombre" placeholder="Nuevo nombre" />
                <!-- Botón para guardar el cambio en el nombre del colaborador -->
                <button @click="confirmUpdate(colaborador.id)">Guardar</button>
                <!-- Botón para cancelar la edición -->
                <button @click="cancelEdit">Cancelar</button>
            </div>
            <!-- Si el colaborador no está en modo de edición -->
            <div v-else>
                <!-- Muestra el ID y el nombre del colaborador -->
                {{ colaborador.id }} - {{ colaborador.nombre }}
                <!-- Botón para activar el modo de edición para este colaborador -->
                <button @click="startEdit(colaborador)">Editar</button>
                <!-- Botón para eliminar al colaborador -->
                <button @click="deleteColaborador(colaborador.id)">Eliminar</button>
            </div>
        </li>
    </ul>
</div>
</template>
