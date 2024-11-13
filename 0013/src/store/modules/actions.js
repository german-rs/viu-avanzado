import { getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import firebaseApp from '../../firebaseConfig';

const db = getFirestore(firebaseApp);

export default {
  async fetchUsuarios({ commit }) {
    const usuarioRef = collection(db, 'usuarios');
    onSnapshot(usuarioRef, (snapshot) => {
      const usuarios = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      commit('SET_USUARIOS', usuarios);
    });
  },
  async agregarUsuario({ commit }, nuevoUsuario) {
    const usuarioRef = collection(db, 'usuarios');
    try {
      await addDoc(usuarioRef, nuevoUsuario);
    } catch (error) {
      console.error("Error al agregar el usuario: ", error);
    }
  },
  async deleteUsuario({ commit }, usuarioId) {
    const usuarioRef = doc(db, 'usuarios', usuarioId);
    try {
      await deleteDoc(usuarioRef);
      commit('DELETE_USUARIO', usuarioId);
    } catch (error) {
      console.error("Error al eliminar el usuario: ", error);
    }
  }
};