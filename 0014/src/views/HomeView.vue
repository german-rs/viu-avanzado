<script>
import {signInWithEmailAndPassword, auth} from '@/auth';
export default{
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    async signIn(){
      try {
        const {email, password} = this;
        const {user} = await signInWithEmailAndPassword(auth, email, password);
        alert('Acceso concebido');
        console.log('usuario logeado ', user);
      } catch (error) {
        console.error('La vendiste: ', error);
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>Inicio de sesión</h1>
    <input type="text" v-model="email">
    <input type="password" v-model="password">
    <button @click="signIn">Iniciar sesión</button>
  </div>
</template>
