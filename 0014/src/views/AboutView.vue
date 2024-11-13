<script>
import {signOut, auth} from '@/auth'
import {useRouter} from 'vue-router'
export default{
  setup(){
    const router = useRouter()
    const logout = async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error('La vendiste de nuevo: ', error);
      }
    }
    return{
      logout
    }
  }
}
</script>
<template>
  <div>
    <h1>Esta es una vista protegida</h1>
    <button @click="logout" >Logout</button>
  </div>
</template>

<style>

</style>
