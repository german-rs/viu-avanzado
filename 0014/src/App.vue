<script>
import {onAuthStateChanged, auth} from '@/auth'
export default{
  name: 'App',
  data(){
    return{
      isAuthenticated: false
    }
  },
  created(){
    onAuthStateChanged(auth, (user) => {
      this.isAuthenticated = !!user
    })
  }
}
</script>
<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/about" v-if="isAuthenticated">About</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
