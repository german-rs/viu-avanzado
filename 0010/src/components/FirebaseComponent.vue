<script>
import firebaseApp from '../../firebaseConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
export default{
    name: 'FirebaseComponent',
    data(){
        return{
            productos: []
        }
    },
    async mounted(){
        try {
            const db = getFirestore(firebaseApp);
            const querySnapshot = await getDocs(collection(db, 'productos'));
            querySnapshot.forEach((doc) => {
                this.productos.push({id: doc.id, ...doc.data()});
            });
            
        } catch (err) {
            console.error('El error fue: ', err);
        }
    }
}
</script>

<template>
    <div>
        <h1>Mis productos</h1>
        <ul>
            <li v-for="producto in productos" :key="producto.id">
                {{ producto.nombre }}
            </li>
        </ul>
    </div>
</template>
<style scoped>
</style>

<!-- 
    Como desarrollador de este demo deberás: 
    1. Crear la App con Vue JS. 
    2. Crear la base de datos desde 0 en Firebase. 
    3. Conectar Firebase con Vue. 
    4. En la colección de repuestos, mostrar el nombre, el precio y stock.
-->