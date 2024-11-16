<script>
import { onAuthStateChanged, signOut, auth } from '@/auth';

export default {
  name: 'Navbar',
  data() {
    return {
      isAuthenticated: false
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.isAuthenticated = !!user;
    });
  },
  methods: {
    async logout() {
      try {
        await signOut(auth);
        this.isAuthenticated = false;
        this.$router.push({ name: 'login' });
      } catch (error) {
        console.error('Error al cerrar sesión: ', error);
      }
    }
  }
};
</script>

<template>
  <div>
    <nav>
      <ul>
        <li v-if="!isAuthenticated">
          <router-link to="/">Login</router-link>
        </li>
        <li v-if="!isAuthenticated">
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li v-if="isAuthenticated">
          <router-link to="/home">Home</router-link>
        </li>
        <li v-if="isAuthenticated">
          <button @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </div>
</template>


<style scoped>
nav{
  padding: 2em;
}
ul{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 2em;
}

li{
  list-style: none
}

a{
  text-decoration: none;
  color: #33332d;
  transition: all .3s ease;
}
a:hover{
  padding: 3px;
  background-color: #33332d;
  color: #fff;
}
</style>