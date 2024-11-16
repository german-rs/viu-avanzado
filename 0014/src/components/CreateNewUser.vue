// src/components/CreateNewUser.vue
<script>
import { createUserWithEmailAndPassword, auth } from '@/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'CreateNewUser',
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const errorMessage = ref('');

    const register = async () => {
      try {
        if (password.value !== confirmPassword.value) {
          errorMessage.value = "Passwords do not match!";
          return;
        }
        const userCredentials = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredentials.user;
        console.log('User successfully created', user);
        errorMessage.value = '';
        await auth.signOut();
        router.push({ name: 'login' });
      } catch (error) {
        console.error('Error: ', error);
        errorMessage.value = 'Error registering user: ' + error.message;
      }
    };

    return {
      email,
      password,
      confirmPassword,
      errorMessage,
      register
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
      <input type="password" v-model="password" id="password">
      <label for="confirmPassword">Repeat Password</label>
      <input type="password" v-model="confirmPassword" id="confirmPassword">
    </div>
    <button @click="register">Sign up</button>
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