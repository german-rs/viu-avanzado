<script >
import {createUserWithEmailAndPassword, auth} from '@/auth';
export default{
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    async register(){
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth, this.email, this.password
        );
        const user = userCredentials.user;
        console.log('usuario creado ', user);
      } catch (error) {
        console.error('la vendiste: ', error);
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>Registro</h1>
    <input type="text" v-model="email">
    <input type="password" v-model="password">
    <button @click="register">Registrar</button>
  </div>
</template>

<style scoped>
</style>