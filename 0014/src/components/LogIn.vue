// src/views/LoginView.vue
<script>
import { signInWithEmailAndPassword, auth } from '@/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'LoginView',
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const signIn = async () => {
      try {
        const { value: emailValue } = email;
        const { value: passwordValue } = password;
        const user = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
        console.log('logged user ', user);
        errorMessage.value = ''; // Limpiar el mensaje de error
        router.push({ name: 'home' });
      } catch (error) {
        console.error('Invalid email or password: ', error);
        errorMessage.value = 'Invalid email or password'; // Establecer el mensaje de error
      }
    };

    return {
      email,
      password,
      errorMessage,
      signIn
    };
  }
};
</script>

<template>
  <div class="form container">
    <div class="input_container">
      <label for="email">Email</label>
      <input type="email" v-model="email" id="email">
      <label for="password">Password</label>
      <input type="password" v-model="password" id="password" @keyup.enter="signIn">
    </div>
    <button @click="signIn">Login</button>
    <p class="error-text" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.input_container {
  padding: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.error-text {
  color: #ef4444;
  margin-top: 1em;
  font-weight: 500;
  font-size: 18px;
}
</style>


<!-- <script> 
import { signInWithEmailAndPassword, auth } from '@/auth'; 
import { useRouter } from 'vue-router'; 
export default { 
data() { 
  return { email: '', password: '' }; 
}, 
setup() { 
  const router = useRouter(); 
  return { router }; 
}, 
methods: { 
  async signIn() { 
    try { 
      const { email, password } = this; 
      const { user } = await signInWithEmailAndPassword(auth, email, password); 
      console.log('logged user ', user); this.router.push({ name: 'home' }); 
    } catch (error) { 
      console.error('Invalid email or password: ', error); 
    } 
  } 
} 
}; 
</script> 

<template> 
  <div class="form container"> 
    <div class="input_container"> 
      <label for="email">Email</label> 
      <input type="text" v-model="email" id="email"> 
      <label for="password">Password</label> 
      <input type="password" v-model="password" id="password" @keyup.enter="signIn"> 
    </div> 
    <button @click="signIn">Login</button>
    <p class="error-text" >Invalid email or password</p>
    </div> 
</template> -->
