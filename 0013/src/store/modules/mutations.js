export default {
    SET_USUARIOS(state, usuarios) {
      state.usuarios = usuarios;
    },
    ADD_USUARIO(state, usuario) {
      state.usuarios.push(usuario);
    },
    DELETE_USUARIO(state, usuarioId) {
      state.usuarios = state.usuarios.filter(usuario => usuario.id !== usuarioId);
    }
  };
  